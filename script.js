let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let canvasHeight = canvas.height;
let canvasWidth = canvas.width;

const japLetter = {
    hiragana: ["あ", "い", "う", "え", "お", "か", "き", "く", "け", "こ", "さ", "し", "す", "せ", "そ", "た", "ち", "つ", "て", "と", "な", "に", "ぬ", "ね", "の", "は", "ひ", "ふ", "へ", "ほ", "ま", "み", "む", "め", "も", "や", "ゆ", "よ", "ら", "り", "る", "れ", "ろ", "わ", "を", "ん"],
    katakana: ["ア", "イ", "ウ", "エ", "オ", "カ", "キ", "ク", "ケ", "コ", "サ", "シ", "ス", "セ", "ソ", "タ", "チ", "ツ", "テ", "ト", "ナ", "ニ", "ヌ", "ネ", "ノ", "ハ", "ヒ", "フ", "ヘ", "ホ", "マ", "ミ", "ム", "メ", "モ", "ヤ", "ユ", "ヨ", "ラ", "リ", "ル", "レ", "ロ", "ワ", "ヲ", "ン"]
}

function drawBackground(){
    ctx.fillStyle = "rgb(40,40,40)";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
}

function writeLetter(xLetter,xxLetter){
    drawBackground();
    ctx.fillStyle = "white";
    let japCLetter = document.getElementById("mySelection").value;
    if (japCLetter === "hiragana"){
        ctx.font = "100px 'Noto Sans JP', sans-serif";
        ctx.fillText(japLetter.hiragana[xLetter], 200, 200);
        ctx.font = "20px 'Noto Sans JP', sans-serif";
        ctx.fillText("Hiragana", 205, 250);
        ctx.font = "25px 'Noto Sans JP', sans-serif";
        ctx.fillText(xxLetter, 240, 280)
    }else{
        ctx.font = "100px 'Noto Sans JP', sans-serif";
        ctx.fillText(japLetter.katakana[xLetter], 200, 200);
        ctx.font = "20px 'Noto Sans JP', sans-serif";
        ctx.fillText("Katakana", 205, 250);
        ctx.font = "25px 'Noto Sans JP', sans-serif";
        ctx.fillText(xxLetter, 240, 280)
    }
}

function aLetter(){
    writeLetter(0,"a");
}

function iLetter(){
    writeLetter(1, "i");
}

function uLetter(){
    writeLetter(2, "u");
}

function eLetter(){
    writeLetter(3, "e");
}

function oLetter(){
    writeLetter(4, "o");
}

function kaLetter(){
    writeLetter(5, "ka");
}

function kiLetter(){
    writeLetter(6, "ki");
}

function kuLetter(){
    writeLetter(7, "ku");
}

function keLetter(){
    writeLetter(8, "ke");
}

function koLetter(){
    writeLetter(9, "ko");
}

function saLetter(){
    writeLetter(10, "sa");
}

function shiLetter(){
    writeLetter(11, "shi");
}

function suLetter(){
    writeLetter(12, "su");
}

function seLetter(){
    writeLetter(13, "se");
}

function soLetter(){
    writeLetter(14, "so");
}

function taLetter(){
    writeLetter(15, "ta");
}

function chiLetter(){
    writeLetter(16, "chi");
}

function tsuLetter(){
    writeLetter(17, "tsu");
}

function teLetter(){
    writeLetter(18, "te");
}

function toLetter(){
    writeLetter(19, "to");
}

function naLetter(){
    writeLetter(20, "na");
}

function niLetter(){
    writeLetter(21, "ni");
}

function nuLetter(){
    writeLetter(22, "nu");
}

function neLetter(){
    writeLetter(23, "ne");
}

function noLetter(){
    writeLetter(24, "no");
}

function haLetter(){
    writeLetter(25, "ha");
}

function hiLetter(){
    writeLetter(26, "hi");
}

function huLetter(){
    writeLetter(27, "fu");
}

function heLetter(){
    writeLetter(28, "he");
}

function hoLetter(){
    writeLetter(29, "ho");
}

function maLetter(){
    writeLetter(30, "ma");
}

function miLetter(){
    writeLetter(31, "mi");
}

function muLetter(){
    writeLetter(32, "mu");
}

function meLetter(){
    writeLetter(33, "me");
}

function moLetter(){
    writeLetter(34, "mo");
}

function yaLetter(){
    writeLetter(35, "ya");
}

function yuLetter(){
    writeLetter(36, "yu");
}

function yoLetter(){
    writeLetter(37, "yo");
}

function raLetter(){
    writeLetter(38, "ra");
}

function riLetter(){
    writeLetter(39, "ri");
}

function ruLetter(){
    writeLetter(40, "ru");
}

function reLetter(){
    writeLetter(41, "re");
}

function roLetter(){
    writeLetter(42, "ro");
}

function waLetter(){
    writeLetter(43, "wa");
}

function woLetter(){
    writeLetter(44, "wo");
}

function nLetter(){
    writeLetter(45, "n");
}

function init(){
    drawBackground();

    const aJap = document.getElementById("a");
    aJap.addEventListener("click", aLetter);

    const iJap = document.getElementById("i");
    iJap.addEventListener("click", iLetter);

    const uJap = document.getElementById("u");
    uJap.addEventListener("click", uLetter);

    const eJap = document.getElementById("e");
    eJap.addEventListener("click", eLetter);

    const oJap = document.getElementById("o");
    oJap.addEventListener("click", oLetter);
    
    const kaJap = document.getElementById("ka");
    kaJap.addEventListener("click", kaLetter);

    const kiJap = document.getElementById("ki");
    kiJap.addEventListener("click", kiLetter);

    const kuJap = document.getElementById("ku");
    kuJap.addEventListener("click", kuLetter);

    const keJap = document.getElementById("ke");
    keJap.addEventListener("click", keLetter);

    const koJap = document.getElementById("ko");
    koJap.addEventListener("click", koLetter);

    const saJap = document.getElementById("sa");
    saJap.addEventListener("click", saLetter);

    const shiJap = document.getElementById("shi");
    shiJap.addEventListener("click", shiLetter);

    const suJap = document.getElementById("su");
    suJap.addEventListener("click", suLetter);

    const seJap = document.getElementById("se");
    seJap.addEventListener("click", seLetter);

    const soJap = document.getElementById("so");
    soJap.addEventListener("click", soLetter);

    const taJap = document.getElementById("ta");
    taJap.addEventListener("click", taLetter);

    const chiJap = document.getElementById("chi");
    chiJap.addEventListener("click", chiLetter);

    const tsuJap = document.getElementById("tsu");
    tsuJap.addEventListener("click", tsuLetter);

    const teJap = document.getElementById("te");
    teJap.addEventListener("click", teLetter);

    const toJap = document.getElementById("to");
    toJap.addEventListener("click", toLetter);

    const naJap = document.getElementById("na");
    naJap.addEventListener("click", naLetter);

    const niJap = document.getElementById("ni");
    niJap.addEventListener("click", niLetter);

    const nuJap = document.getElementById("nu");
    nuJap.addEventListener("click", nuLetter);

    const neJap = document.getElementById("ne");
    neJap.addEventListener("click", neLetter);

    const noJap = document.getElementById("no");
    noJap.addEventListener("click", noLetter);

    const haJap = document.getElementById("ha");
    haJap.addEventListener("click", haLetter);

    const hiJap = document.getElementById("hi");
    hiJap.addEventListener("click", hiLetter);

    const huJap = document.getElementById("hu");
    huJap.addEventListener("click", huLetter);

    const heJap = document.getElementById("he");
    heJap.addEventListener("click", heLetter);

    const hoJap = document.getElementById("ho");
    hoJap.addEventListener("click", hoLetter);

    const maJap = document.getElementById("ma");
    maJap.addEventListener("click", maLetter);

    const miJap = document.getElementById("mi");
    miJap.addEventListener("click", miLetter);

    const muJap = document.getElementById("mu");
    muJap.addEventListener("click", muLetter);

    const meJap = document.getElementById("me");
    meJap.addEventListener("click", meLetter);

    const moJap = document.getElementById("mo");
    moJap.addEventListener("click", moLetter);

    const yaJap = document.getElementById("ya");
    yaJap.addEventListener("click", yaLetter);

    const yuJap = document.getElementById("yu");
    yuJap.addEventListener("click", yuLetter);

    const yoJap = document.getElementById("yo");
    yoJap.addEventListener("click", yoLetter);

    const raJap = document.getElementById("ra");
    raJap.addEventListener("click", raLetter);

    const riJap = document.getElementById("ri");
    riJap.addEventListener("click", riLetter);

    const ruJap = document.getElementById("ru");
    ruJap.addEventListener("click", ruLetter);

    const reJap = document.getElementById("re");
    reJap.addEventListener("click", reLetter);

    const roJap = document.getElementById("ro");
    roJap.addEventListener("click", roLetter);

    const waJap = document.getElementById("wa");
    waJap.addEventListener("click", waLetter);

    const woJap = document.getElementById("wo");
    woJap.addEventListener("click", woLetter);

    const nJap = document.getElementById("n");
    nJap.addEventListener("click", nLetter);

    const resetButton = document.getElementById("resetButton");
    resetButton.addEventListener("click", drawBackground);
}

document.addEventListener('DOMContentLoaded', init);