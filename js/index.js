// Your code goes here

//selecting nav links
const navLinks = document.querySelectorAll('.nav-link');
//preventing default behaviour of nav links
navLinks.forEach((navLinkEl) => {
    navLinkEl.addEventListener('click', (event) => {
        event.preventDefault();
    })
})

//Event 1..................
//mouseenter
//Select buttons
const buttons = document.querySelectorAll('.btn');
//enlarge buttons when mouse enters
buttons.forEach((btnEl) => {
    btnEl.addEventListener('mouseenter', (event) => {
        event.target.style.transform = 'scale(1.1)';
        event.target.style.transition = 'transform 1s';
    })
})

//Event 2..................
//mouseleave
//reduce buttons when mouse leaves
buttons.forEach((btnEl) => {
    btnEl.addEventListener('mouseleave', (event) => {
        event.target.style.transform = 'scale(1)';
    })
})

//Event 3..................
//click
//change the text color of the parent element when button is clicked
buttons.forEach((btnEl) => {
    btnEl.addEventListener('click', (event) => {
       event.target.parentElement.style.color = '#17A2B8';
    })
})

//Event 4..................
//dblclick
//selecting top image
const topImg = document.querySelector('.intro img');
//checking that correct element was selected
console.log(topImg);
//change border radius on img when dblclicked
topImg.addEventListener('dblclick', (event) => {
    if (event.target.style.borderRadius === '100px') {
        event.target.style.borderRadius = '0px'
    } else {
        event.target.style.borderRadius = '100px';
        event.target.style.transition = 'border-radius 1s';
    }
})

//Event 5..................
//keydown
//selecting body
const body = document.querySelector('body');
//changing background color on body when key is pressed
body.addEventListener('keydown', (event) => {
    if (event.target.style.backgroundColor === 'paleturquoise') {
        event.target.style.backgroundColor = 'azure'
    } else if (event.target.style.backgroundColor === 'azure') {
        event.target.style.backgroundColor = 'white';
    } else {
        event.target.style.backgroundColor = 'paleturquoise';
    }
})

//Event 6..................
//mouseover
//selecting navbar
const navbar = document.querySelector('.nav-container');
//checking that I selected the correct element
console.log(navbar);
//changing the background color when a mouse moves over the nav
navbar.addEventListener('mouseover', (event) => {
    event.target.style.color = 'seagreen';
    event.target.style.textDecoration = 'underline';
})

//Event 7..................
//mouseout
//change color back when mouse leaves nav
navbar.addEventListener('mouseout', (event) => {
    event.target.style.color = 'black';
    event.target.style.textDecoration = 'none';
})

//Event 8..................
//mouseup
//selecting content sections
const contentTexts = document.querySelectorAll('.text-content');
//makeing sure correct elements were selected
console.log(contentTexts);
//rotate text when mouse up
contentTexts.forEach((textEl) => {
    textEl.addEventListener('mouseup', (event) => {
        event.target.style.transform = 'rotate(360deg)';
        event.target.style.transition = 'transform 1s';
    })
})


//Event 9..................
//mousedown
const contentTitles = document.querySelectorAll('.text-content h2');
//change text color when mouse down
contentTitles.forEach((titleEl) => {
    titleEl.addEventListener('mousedown', (event) => {
        if (event.target.style.color === 'darkturquoise') {
            event.target.style.color = 'mediumseagreen';
        } else if (event.target.style.color === 'mediumseagreen') {
            event.target.style.color = 'black';
        } else {
            event.target.style.color = 'darkturquoise';
        }
    })
})
//underline on mouseup and stop propagation
contentTitles.forEach((titleEl) => {
    titleEl.addEventListener('mouseup', (event) => {
        event.stopPropagation();
        if (event.target.style.textDecoration === 'underline') {
            event.target.style.textDecoration = 'none';
        } else {
            event.target.style.textDecoration = 'underline';
        }
    })
})

//Event 10.................
//