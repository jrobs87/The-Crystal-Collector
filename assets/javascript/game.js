console.log('Run the Jewels!'); // just for fun - looks js file and jquery loaded
let input = '';
let randomNumber = '';
let userNumber = 0;

$(document).ready(function () {
    // Populating our random number
    randomNumber = Math.floor(Math.random()*50);
    console.log('The random number is ' + randomNumber);

    // BEGIN USER INPUT - getting out user input here - clicking gem buttons stores the associated html attribute value
    $('.gem').click(function () {
        input = parseInt(($(this).val())); // stores value and converts to an integer
        console.log('This gem is worth ' + input + ' points.');
        // updateUserNumber();
        userNumber = userNumber + input;
    });
   

});

