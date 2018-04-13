// 
// Important: 
// use `npm run start:js` instead of `npm run start` and
// use `npm run build:js` instead of `npm run build` to run javascript.
// 

let text = new TextLayer({
    width: Screen.width - 40,
    x: Align.center,
    textAlign: 'center',
    padding: 10,
    text: 'Welcome to Framer Sanstudio - JS version',
})

let rect = new Layer({
    y: text.maxY + 40,
    x: Align.center,
    borderRadius: 16,
    // backgroundColor: Utils.randomColor(1),
    backgroundColor: "red"
})

rect.animate({
    rotation: 90,
    options: { repeat: Infinity }
})