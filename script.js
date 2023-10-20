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

one.addEventListener('click', () => {
    if (one.classList.contains('x') || one.classList.contains('circle')){

    } else {
        pressButton(one);   
    }
});

two.addEventListener('click', () => {
    if (two.classList.contains('x') || two.classList.contains('circle')){

    } else {
        pressButton(two);   
    }
});

three.addEventListener('click', () => {
    if (three.classList.contains('x') || three.classList.contains('circle')){

    } else {
        pressButton(three);   
    }
});

four.addEventListener('click', () => {
    if (four.classList.contains('x') || four.classList.contains('circle')){

    } else {
        pressButton(four);   
    }
});

five.addEventListener('click', () => {
    if (five.classList.contains('x') || five.classList.contains('circle')){

    } else {
        pressButton(five);   
    }
});

six.addEventListener('click', () => {
    if (six.classList.contains('x') || six.classList.contains('circle')){

    } else {
        pressButton(six);   
    }
});

seven.addEventListener('click', () => {
    if (seven.classList.contains('x') || seven.classList.contains('circle')){

    } else {
        pressButton(seven);   
    }
});
eight.addEventListener('click', () => {
    if (eight.classList.contains('x') || eight.classList.contains('circle')){

    } else {
        pressButton(eight);   
    }
});

nine.addEventListener('click', () => {
    if (nine.classList.contains('x') || nine.classList.contains('circle')){

    } else {
        pressButton(nine);   
    }
});

reset.addEventListener('click', () => {
    Reset();
})




// function


function pressButton(el) {
    
    if (counter === 1) {
        if (el.classList.contains('circle') || el.classList.contains('x')) {

        } else {
            el.classList.add('circle')
        }
        counter = counter += 1
    } else {
        if (el.classList.contains('circle') || el.classList.contains('x')) {

        } else {
            el.classList.add('x')
        }
        counter = counter - 1
    }
    Win();
};

function Reset () {
    array.forEach((el) => 
    el.classList.remove('x'))
    array.forEach((el) => 
    el.classList.remove('circle'))

    x.classList.add('none');
    o.classList.add('none');
}

function Win () {
    if (nine.classList.contains('x') && eight.classList.contains('x') && seven.classList.contains('x') ||
        six.classList.contains('x') && five.classList.contains('x') && four.classList.contains('x') ||
        three.classList.contains('x') && two.classList.contains('x') && one.classList.contains('x') ||
        one.classList.contains('x') && five.classList.contains('x') && nine.classList.contains('x') ||
        three.classList.contains('x') && five.classList.contains('x') && seven.classList.contains('x') ||
        one.classList.contains('x') && four.classList.contains('x') && seven.classList.contains('x') ||
        two.classList.contains('x') && five.classList.contains('x') && eight.classList.contains('x') ||
        three.classList.contains('x') && six.classList.contains('x') && nine.classList.contains('x') ) {

        if (o.classList.contains('none') && x.classList.contains('none')){
            return x.classList.remove('none');
        } 
    }

    if (nine.classList.contains('circle') && eight.classList.contains('circle') && seven.classList.contains('circle') ||
        six.classList.contains('circle') && five.classList.contains('circle') && four.classList.contains('circle') ||
        three.classList.contains('circle') && two.classList.contains('circle') && one.classList.contains('circle') ||
        one.classList.contains('circle') && five.classList.contains('circle') && nine.classList.contains('circle') ||
        three.classList.contains('circle') && five.classList.contains('circle') && seven.classList.contains('circle') ||
        one.classList.contains('circle') && four.classList.contains('circle') && seven.classList.contains('circle') ||
        two.classList.contains('circle') && five.classList.contains('circle') && eight.classList.contains('circle') ||
        three.classList.contains('circle') && six.classList.contains('circle') && nine.classList.contains('circle') ) {

        if (o.classList.contains('none') && x.classList.contains('none')){
            return o.classList.remove('none');
        } 

    }
}