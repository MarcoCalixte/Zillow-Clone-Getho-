//******************************************************************************************************************************************************************************************************** *
window.addEventListener('DOMContentLoaded', (event) => {
    /** Sign In */
    let form = document.getElementById('myForm');
    let openForm = document.getElementById('openForm');
    let closeX = document.getElementById('close-X');
    const overlay2 = document.getElementById('overlay-2');
    /* grabbing the overlay from css*/


    openForm.addEventListener('click', function (event) {
        form.style.display = "block";
        overlay2.classList.add('active2'); // having the overlay open with the active //
        document.querySelector("body").style.overflow = 'hidden'; // setting the overlay scrollbar to be hidden - stop overlay from showing up while scrolling
    });

    closeX.addEventListener('click', function (event) {
        form.style.display = "none";
        overlay2.classList.remove('active2'); // having the overlay close with the x button for the form //
        document.querySelector("body").style.overflow = 'visible'; // setting the overlay scrollbar to be visible in order to scroll
    });

    overlay2.addEventListener('click', () => {
        form.style.display = "none";
        overlay2.classList.remove('active2'); // having the overlay close with the form //
        document.querySelector("body").style.overflow = 'visible'; // setting the overlay scrollbar to be visible in order to scroll
    });

    // prevent form submit
    form.addEventListener('submit', function (e) {
        e.preventDefault();
    });

    // //Javascript show all password textboxes script by me
    // var k = document.getElementsById('input')
    // for (i = 0; i < k.length; i++) {
    //   if (k[i].type = "password") {
    //     k[i].type = "text"
    //   }
    // };

    //* *************************************************************************************************************************************************** */
    /* SWITCH FROM SIGN IN FORM TO NEW ACCOUNT FORM */

    let logForm = document.getElementById('login');
    let regisForm = document.getElementById('register');
    let btn = document.getElementById('btn');


    document.getElementById('loginBtn').onclick = function (event) {
        logForm.style.left = '50px';
        regisForm.style.left = '450px';
        // btn.style.left = '0';
    }

    document.getElementById('registerBtn').onclick = function (event) {
        logForm.style.left = '-400px';
        regisForm.style.left = '50px';
        // btn.style.left = '110px';
    }


    //* *************************************************************************************************************************************************** */
    /* PASSWORD STRENGTH INDICATOR */

    var strength = {
        0: "Worst ☹",
        1: "Bad ☹",
        2: "Weak ☹",
        3: "Good ☺",
        4: "Strong ☻"
    }

    var password = document.getElementById('password');
    var meter = document.getElementById('password-strength-meter');
    var text = document.getElementById('password-strength-text');

    password.addEventListener('input', function () {
        var val = password.value;
        var result = zxcvbn(val);

        // Update the password strength meter
        meter.value = result.score;

        // Update the text indicator
        if (val !== "") {
            text.innerHTML = "Strength: " + "<strong>" + strength[result.score] + "</strong>" + "<span class='feedback'>" + result.feedback.warning + " " + result.feedback.suggestions + "</span";
        } else {
            text.innerHTML = "";
        }
    });

    //******************************************************************************************************************************************************************************************************** */
    /** Login Hide And Show icons */

    var x = document.querySelector(".myInput");
    var y = document.getElementById("hide-one");
    var z = document.getElementById("hide-two");
    let eyeContainer = document.getElementById("eye-container");

    eyeContainer.addEventListener("click", (e) => {
        if (x.type === "password") {
            x.type = "text";
            y.style.display = "block";
            z.style.display = "none";
        } else {
            x.type = "password";
            y.style.display = "none";
            z.style.display = "block";
        }
    });
})
//******************************************************************************************************************************************************************************************************** */
/** Login Hide And Show icons */


// Get the scrollBar
let scrollBar = document.getElementById("scrolling-search");
let content = document.getElementById("content");
let input = document.getElementById("search-box");
const overlay1 = document.getElementById('overlay-1');

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
    myFunction()
};

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.scrollY > 150) {
        scrollBar.classList.add("sticky");

    } else {
        scrollBar.classList.remove("sticky");

    }
}

// window.onscroll = function () { // function myFunction()
//     if (window.scrollY >= content.offsetTop) { // Get the offset position of the scrollbar
//         scrollBar.classList.add("sticky"); // let sticky = scrollBar.offsetTop;// When the user scrolls the page, execute myFunction
//         overlay1.classList.add('active-3'); // having the overlay open with the active //
//     } else {
//         scrollBar.classList.remove("sticky"); // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
//         overlay1.classList.remove('active-3'); // having the overlay closing with the active //
//     }
// };


// let prevScrollPos = window.pageYOffset;

// window.onscroll = function () {
//     let currentScrollPos = window.pageYOffset;
//     if (prevScrollPos > currentScrollPos) {
//         document.getElementById("overlay1").style.top = "0";
//     } else {
//         document.getElementById("overlay1").style.bottom = "-50px";
//     }
//     prevScrollPos = currentScrollPos;
// }


// onscroll()
//******************************************************************************************************************************************************************************************************** */
/** Scrolling Search Bar */




const statesDropdown = () => {
    // When the user clicks on realEstate Button //
    $(document).ready(function ($) {
        $('#real-estate-btn').click(function () {
            $('#search-states-dropdown-content').toggle(); //  Your code
        });
    });

    //Close it When the user clicks outside of the real estate content/button //
    $('body').click(function () {
        $('#real-estate-btn').click(function () {
            return false
        });
        $('#search-states-dropdown-content').hide();
    });
    /**********************************************************************************************************************************
    Real Estate Button
    */


    $(document).ready(function ($) {
        $('#rentals-btn').click(function () {
            $('#rentals-dropdown-content').toggle(); //  Your code
        });
    });

    //Close it When the user clicks outside of the real estate content/button //
    $('body').click(function () {
        $('#rentals-btn').click(function () {
            return false
        });
        $('#rentals-dropdown-content').hide();
    });
    /**********************************************************************************************************************************
    Rentals Button
    */


    $(document).ready(function ($) {
        $('#mortgage-rates-btn').click(function () {
            $('#mortgage-rates-dropdown-content').toggle(); //  Your code
        });
    });

    //Close it When the user clicks outside of the real estate content/button //
    $('body').click(function () {
        $('#mortgage-rates-btn').click(function () {
            return false
        });
        $('#mortgage-rates-dropdown-content').hide();
    });
    /**********************************************************************************************************************************
    mortgage rates Button
    */


    $(document).ready(function ($) {
        $('#browse-homes-btn').click(function () {
            $('#browse-homes-dropdown-content').toggle(); //  Your code
        });
    });

    //Close it When the user clicks outside of the real estate content/button //
    $('body').click(function () {
        $('#browse-homes-btn').click(function () {
            return false
        });
        $('#browse-homes-dropdown-content').hide();
    });
    /**********************************************************************************************************************************
    mortgage rates Button
    */
};
statesDropdown();