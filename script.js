const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const x = document.getElementById('x');
const o = document.getElementById('o');
const reset = document.getElementById('10');

let counter = 1;

const array = [
    one, two, three, four, five, six, seven, eight, nine
];

array.forEach((el) => {
    el.addEventListener('click', () => {
        checkingForClasses(el);
    })
})

reset.addEventListener('click', () => {
    resetGame();
})



// function 123

function pressButton(el) {
    if (counter === 1) {
        if (!el.classList.contains('o') && !el.classList.contains('x')) {
            el.classList.add('o')
            counter = counter += 1
        }
    } else {
        if (!el.classList.contains('o') && !el.classList.contains('x')) {
            el.classList.add('x')
            counter = counter - 1
        } 
    }
    win();
};

function resetGame () {
    array.forEach((el) => {
        el.classList.remove('x')
        el.classList.remove('o')
    })

    x.classList.add('none');
    o.classList.add('none');
}

function checkingForClasses (el){
    if (!el.classList.contains('x') || !el.classList.contains('o')){
        if (x.classList.contains('none') &&  o.classList.contains('none')){
            pressButton(el);   
         }    
    }
}

function checkingForWin (el, el2) {
    if (nine.classList.contains(el) && eight.classList.contains(el) && seven.classList.contains(el) ||
    six.classList.contains(el) && five.classList.contains(el) && four.classList.contains(el) ||
    three.classList.contains(el) && two.classList.contains(el) && one.classList.contains(el) ||
    one.classList.contains(el) && five.classList.contains(el) && nine.classList.contains(el) ||
    three.classList.contains(el) && five.classList.contains(el) && seven.classList.contains(el) ||
    one.classList.contains(el) && four.classList.contains(el) && seven.classList.contains(el) ||
    two.classList.contains(el) && five.classList.contains(el) && eight.classList.contains(el) ||
    three.classList.contains(el) && six.classList.contains(el) && nine.classList.contains(el) ) {
        
        if (o.classList.contains('none') && x.classList.contains('none')){
            return el2.classList.remove('none');
        } 
    }
}

function win () {
    checkingForWin('x', x);
    checkingForWin('o', o);
}