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
//reduce buttons when mouse leaves
buttons.forEach((btnEl) => {
    btnEl.addEventListener('mouseleave', (event) => {
        event.target.style.transform = 'scale(1)';
    })
})

//Event 2..................