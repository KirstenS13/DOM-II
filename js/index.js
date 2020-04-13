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
//reduce buttons when mouse leaves
buttons.forEach((btnEl) => {
    btnEl.addEventListener('mouseleave', (event) => {
        event.target.style.transform = 'scale(1)';
    })
})

//Event 3..................
//change the text color of the parent element when button is clicked
buttons.forEach((btnEl) => {
    btnEl.addEventListener('click', (event) => {
       event.target.parentElement.style.color = '#17A2B8';
    })
})

//Event 4..................
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

//Event 6..................

//Event 7..................

//Event 8..................

//Event 9..................

//Event 10.................