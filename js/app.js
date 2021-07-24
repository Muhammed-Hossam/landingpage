const sections = document.querySelectorAll('[data-nav]');
const sectionsArr = Array.from(sections);
const navbarUl = document.querySelector('#navbar__list');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navContainer = document.querySelector('.nav-container');

// build the nav
for (let i = 0; i < sectionsArr.length; i++) {
    
    let htmlCode = `
    <li class="sectionLi">
    <a  data-id="${sectionsArr[i].id}">${sectionsArr[i].dataset.nav}</a>
    </li>
    `;
    
    navbarUl.insertAdjacentHTML('beforeend', htmlCode);
} 

// hamburger icon
hamburgerMenu.onclick = function() {
    this.classList.toggle('change');
    navContainer.classList.toggle('visible');
} 




// Add class 'active' to section when near top of viewport
const navAnchor = document.querySelectorAll('.sectionLi a');
const anchorsArr = Array.from(navAnchor);

// Add active class to the first link
anchorsArr[0].parentElement.classList.add('link-active-class');

window.addEventListener('scroll', function() {
    for (let i = 0; i < sectionsArr.length; i++) {
        if (sectionsArr[i].getBoundingClientRect().top < window.innerHeight && sectionsArr[i].getBoundingClientRect().top > 0) {
            sectionsArr[i].classList.add('your-active-class');
            anchorsArr[i].parentElement.classList.add('link-active-class');
            
        }else {
            sectionsArr[i].classList.remove('your-active-class');
            anchorsArr[i].parentElement.classList.remove('link-active-class');
            
        }
    }
}); 
 

// Scroll to anchor ID using scrollIntoView method
navAnchor.forEach(function(item) {

    item.addEventListener('click', function() {
        item.parentElement.classList.add('link-active-class');
        const el = document.getElementById(item.dataset.id);
        el.scrollIntoView({
            behavior: "smooth",
            block: 'end',
            inline: "nearest"
        });
    });

}); 
