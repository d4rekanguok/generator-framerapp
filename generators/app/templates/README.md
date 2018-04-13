# framer-sanstudio
Use Framer Library with the latest version of Coffeescript &amp; Javascript, livereload, preview on mobile &amp; maybe more

--------

≠ This project is meant to help designers to transit from Framer to a more, for the lack of a better word, 'realistic' web development environment.

≠ Not much different from [Andrew Liebchen's ecma-framer](https://github.com/andrewliebchen/ecma-framer) right now, but I might try to add some more stuffs later.

--------

## Installation

Make sure you've downloaded & installed [Node.js](https://nodejs.org/).

```
// Download this project
git clone https://github.com/d4rekanguok/framer-sanstudio.git

// Navigate into the studio folder
cd framer-sanstudio

// Install all dependencies
npm install

```

## Usage

### Writing code

You can use either Coffeescript or Javascript.

Command | Coffescript | Javascript |
--------|-------------|------------|
Open live preview  | `npm run start` | `npm run start:js`
Build project for hosting | `npm run build` | `npm run build:js`


Then open your browser & navigate to `localhost:9000` to view live project.

*Important*
If you want to use Coffeescript, modify the file `index.coffee` in `/src` folder.
If you want to use Javascript, modify the file `index.js` in `/src` folder.

### Assets & Media
Place them in the asset folder in src.

### Copy and paste from Sketch
Seems like [Perrymotors's copy-framer-code](https://github.com/perrysmotors/copy-framer-code) is the best bet right now. There's probably a way to improve the way it handles images...

### Mobile Preview

1. Find your ip address by running the command below:
```
ifconfig | grep "inet " | grep -v 127.0.0.1 | cut -d\  -f2
```
[Terminal command to get just IP address and nothing else - Stackoverflow](https://stackoverflow.com/a/8529217/2331715)

2. Make sure your phone is connected to the same wifi. Then, let's say the ip from the previous command is `192.120.1.20`, go to mobile & navigate to `192.120.1.20:9000` to view live project.
