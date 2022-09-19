/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
// navigation variable
const navbar = document.getElementById('navbar__list');
// section variable
const sections = Array.from(document.querySelectorAll('section'));
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function createListitems()
{
    let listItems = '';
// looping over all sections 
    sections.forEach(section =>
        {
            const sectionName = section.dataset.nav;
            const sectionId = section.id ;
            listItems = listItems + `<li><a href = "#${sectionId}" class="menu__link" >${sectionName}</a></li>`;
        });
        // append items to the listItems(navigation) 
        navbar.innerHTML = listItems ;
};
// call createListitems() function
createListitems();

// Add class 'active' to section when near top of viewport


function stateOfClass()
{
    window.addEventListener('scroll' , function() 
    {
        // looping over all classList
        sections.forEach(function (classState)
        {
            if (classState.getBoundingClientRect().top >= -390 && classState.getBoundingClientRect().top <= 150)
            {
                // add the active class
                classState.classList.add('your-active-class');
            }
            else
            {
                // remove the active class
                classState.classList.remove('your-active-class');
            }
        });
    });
}
// call stateOfClass() function
stateOfClass();


// Scroll to anchor ID using scrollTO event

// anchor global variable
const links = document.querySelectorAll('a');

// changing the scrolling to smooth
function scrollTO()
{
    links.forEach(function(link)
    {
        link.addEventListener('click', function(toSec)
        {
            toSec.preventDefault();
            // select the id and store it in sectionId var
            const sectionId = document.getElementById(link.getAttribute('href').slice(1));
            // change the scroll to smooth
            sectionId.scrollIntoView({behavior: 'smooth'});
            // declare setTimeout() function
            setTimeout(() => {
                location.hash =`${toSec.target.dataset.nav}`;
            },200);
            
        });
    })
}
// call scrollTo() function
scrollTO();

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


