'use strict';
const path = require('path');
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const _ = require('lodash');
const mkdirp = require('mkdirp');

module.exports = class extends Generator {
  initializing() {
    this.props = {};
  }

  prompting() {
    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Name of project',
        default: this.appname,
        filter: (name) => _.kebabCase(name)
      }, {
        type: 'confirm',
        name: 'useCoffee',
        message: 'Use Coffeescript instead of Javascript?',
        default: true
      }
    ];
    return this.prompt(prompts).then(props => {
      this.props = props;
      this.log('app name: ', props.name);
      this.log('use coffeescript: ', props.useCoffee);
    });
  }

  default() {
    if (_.kebabCase(path.basename(this.destinationPath())) !== this.props.name) {
      mkdirp(this.props.name);
      this.destinationRoot(this.destinationPath(this.props.name));
    }
  }

  writing() {

    // Copy everything from template folder
    this.fs.copy(
      this.templatePath('**/*'),
      this.destinationRoot(),
    );

    // Create 'public' folder
    mkdirp('public');
    mkdirp('src/assets');

    // Modify package.json based on user's input
    const lang = this.props.useCoffee ? 'coffee' : 'js';
    const not_lang = this.props.useCoffee ? 'js' : 'coffee';

    this.fs.extendJSON(
      this.destinationPath('package.json'),
      {
        name: this.props.name,
        main: `index.${lang}`,
        scripts: {
          build: `webpack --env.lang=${lang}`,
          start: `webpack-dev-server --env.lang=${lang} --host 0.0.0.0 --port 9000`,
        }
      }
    )

    // remove unecessary index file
    this.fs.delete(this.destinationPath(`src/index.${not_lang}`));
  }

  install() {
    this.installDependencies({
      npm: true,
      bower: false,
      yarn: false
    });
  }
};
