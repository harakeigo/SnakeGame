document.addEventListener('keydown', keyPush);

const canv = document.getElementById("canvas");
const ctx = canv.getContext("2d");
const SIZE = 20;
let FPS = 15;
const MIN = 5;
let x = 1000;

let px = py = SIZE/2;
let xd = yd = 0;
let snake = [];
let tail = MIN;
let appleX = Math.floor(Math.random()*canv.width/SIZE);
let appleY = Math.floor(Math.random()*canv.height/SIZE);

let appleX2 = Math.floor(Math.random()*canv.width/SIZE);
let appleY2 = Math.floor(Math.random()*canv.height/SIZE);
let px2 = py2 = SIZE/2;

let appleX3 = Math.floor(Math.random()*canv.width/SIZE);
let appleY3 = Math.floor(Math.random()*canv.height/SIZE);
let px3 = py3 = SIZE/2;
