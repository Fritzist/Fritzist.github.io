
const backgrounds = [
    "bg0.jpg",
    "bg1.jpg",
    "bg2.jpg",
    "bg3.jpg",
    "bg4.jpg",
    "bg5.jpg",
    "bg6.jpg",
    "bg7.jpg",
    "bg8.jpg",
    "bg9.jpg",
    "bg10.jpeg",
    "bg11.jpg",
    "bg12.jpg",
    "bg13.jpg",
    "bg14.jpg",
];
let bgnum = (parseInt(localStorage.bgnum?localStorage.bgnum:0) + 1)%backgrounds.length;
localStorage.bgnum = bgnum;
let background = backgrounds[bgnum];
document.body.style = `background-image: url('bg/${background}')`;
