let poolSize = 50;

currentCard = 0;
currentFace = 0;

function peek() {
    currentFace = 1 - currentFace;
    update();
}

function next() {
    currentCard = Math.floor(Math.random() * poolSize);
    currentFace = 0;
    update();
}

function update() {
    document.getElementById('card').classList = 'card' + (currentFace == 0 ? '' : ' shown');
    let currentES = cards[currentCard][0];
    let currentEN = cards[currentCard][1];
    let cardContent = `<br>${currentES}<br><span>${currentEN}</span>`
    document.getElementById('word').innerHTML = cardContent;
}

function setPoolSize(size, index) {
    poolSize = size;
    document.getElementById('pool').children.item(0).classList = '';
    document.getElementById('pool').children.item(1).classList = '';
    document.getElementById('pool').children.item(2).classList = '';
    document.getElementById('pool').children.item(3).classList = '';
    document.getElementById('pool').children.item(index).classList = 'selected';
}

window.onload = next()