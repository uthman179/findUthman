
var modal = document.getElementById('myModal');
var btn = document.getElementById('myButton');
var closeBtn = document.getElementsByClassName('close')[0];


btn.onclick = function() {
    modal.style.display = 'block';
}


closeBtn.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
var modal = document.getElementById('myModal');
var btn = document.getElementById('myButton2');
var closeBtn = document.getElementsByClassName('close')[0];


btn.onclick = function() {
    modal.style.display = 'block';
}


closeBtn.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
var modal = document.getElementById('myModal');
var btn = document.getElementById('myButton3');
var closeBtn = document.getElementsByClassName('close')[0];


btn.onclick = function() {
    modal.style.display = 'block';
}


closeBtn.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
var modal = document.getElementById('myModal');
var btn = document.getElementById('myButton4');
var closeBtn = document.getElementsByClassName('close')[0];


btn.onclick = function() {
    modal.style.display = 'block';
}


closeBtn.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
var modal = document.getElementById('myModal');
var btn = document.getElementById('myButton5');
var closeBtn = document.getElementsByClassName('close')[0];


btn.onclick = function() {
    modal.style.display = 'block';
}


closeBtn.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
var modal = document.getElementById('myModal');
var btn = document.getElementById('myButton6');
var closeBtn = document.getElementsByClassName('close')[0];


btn.onclick = function() {
    modal.style.display = 'block';
}


closeBtn.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
var modal = document.getElementById('myModal');
var btn = document.getElementById('myButton7');
var closeBtn = document.getElementsByClassName('close')[0];


btn.onclick = function() {
    modal.style.display = 'block';
}


closeBtn.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
var modal = document.getElementById('myModal');
var btn = document.getElementById('myButton8');
var closeBtn = document.getElementsByClassName('close')[0];


btn.onclick = function() {
    modal.style.display = 'block';
}


closeBtn.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
var modal = document.getElementById('myModal');
var btn = document.getElementById('myButton9');
var closeBtn = document.getElementsByClassName('close')[0];


btn.onclick = function() {
    modal.style.display = 'block';
}


closeBtn.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
const buttons = document.querySelectorAll('.buttons button');
const gridItems = document.querySelectorAll('.grid-item');

let activeButton = null;

buttons.forEach(button => {
    button.addEventListener('click', function() {
        if (activeButton) {
            activeButton.classList.remove('active');
        }
        this.classList.add('active');
        activeButton = this;

        const numToShow = parseInt(this.textContent.match(/\d+/)[0]);
        showSquares(numToShow);
    });
});

function showSquares(numToShow) {
    gridItems.forEach((item, index) => {
        if (index < numToShow) {
            item.style.display = 'block';
            item.style.width = '400px';
            item.style.height = '300px';
        } else {
            item.style.display = 'none';
        }
    });
}






  













