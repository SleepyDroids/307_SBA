// I set the variable for the DOM element I am trying to make functional/manipulate
// set as a const because I don't want the variable to be redefined
// nav_select is the ID of my drop down menu navigation
const navSelect = document.getElementById("nav_select");

// The function I need to reference in the html file in order for the nav drop to go to the links
function goToLink() {
    // Thank you to MDN & W3Schools for helping me figure out this function <3
    // window property points to the window object itself
    // window.location provides information about the current URL and allows for navigation
    // window.location.href returns the current url of the window I am in
    // I set it equal to my variable
    // .value property refers to the option value in my drop down by going to the hrefs I already set up in the HTML
    // onChange Event in the HTML triggers goToLink() when the user changes the select option of a <select> element
    window.location.href = navSelect.value;
}