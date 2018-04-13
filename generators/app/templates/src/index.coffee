text = new TextLayer
    width: Screen.width - 40
    x: Align.center
    textAlign: 'center'
    padding: 10
    text: 'Welcome to Framer Sanstudio'

rect = new Layer
    y: text.maxY + 40
    x: Align.center
    borderRadius: 16
    backgroundColor: Utils.randomColor 1

rect.animate
    rotation: 90
    options:
        repeat: Infinity