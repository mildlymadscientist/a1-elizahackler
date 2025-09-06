// Make two objects named Artist
// and Painter. Artist should have
// a function named speak() that
// when called logs "I am an artist"
// to the console. Painter should be
// able to use the Artist's speak function
// (painters are artists, after all) in some
// way, and should also have a function named
// paint() that sets the background color of the
// page to a random color whenever called.

// Sources
// https://www.geeksforgeeks.org/javascript/javascript-inheritance/
// https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/ch2.md
// https://www.slingacademy.com/article/how-to-generate-random-color-in-javascript/#generating-random-rgb-color-codes

const Artist = {
    speak() {
        console.log("I am an artist");
    },
}

const Painter = {
    paint() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);

        document.body.style.backgroundColor = randomRgbColor;
    },
}
speak();
paint();