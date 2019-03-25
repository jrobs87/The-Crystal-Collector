$(document).ready(function () {

    console.log('You Enjoy Myself'); // just for fun - logs js file and jquery loaded

    let input = 0;
    let randomNumber = 0;
    let userNumber = 0;
    let winCount = 0;
    let lossCount = 0;

    // RANDOM NUMBER GENERATOR - Populating our random number
    function randomNumberGen() {
        randomNumber = Math.ceil(Math.random() * (120 - 19) + 19);
        $('#randomNumber').text(randomNumber);

        userNumber = 0; // Set the user number to zero for a new game
        $('#userNumber').text(userNumber); // insert 0 user number into html

        console.log('The random number is ' + randomNumber); // logs out the target number
    };

    // GENERATES RANDOM NUMBER VALUES FOR EACH GEM
    function gemNumberGen() {
        numbersUsed = []; // Stores generated numbers to check for validation

        // Setting up gem values 
        gemArray = ['.blue', '.green', '.purple', '.yellow']; //corresponding to gem classes in HTML

        for (i = 0; i < gemArray.length; i++) {
            number = Math.ceil(Math.random() * (12 - 1) + 1); // generating a number between 1-12
            // Begin Number Validation to insure unique gem values - this kinda works but not really.... 
            // Most of the time it's fine but does cause duplicates still occasionally - while loop may be a better option...
            for (n = 0; n < numbersUsed.length; n++) {
                if (numbersUsed[n] === number) {
                    console.log('Duplicate gem value caught');
                    number = Math.ceil(Math.random() * (12 - 1) + 1);
                };
            };
            // End Number Validation

            // Adds random gem values to an array to check for non-unique values
            numbersUsed.push(number);

            // Inserts values into each gem's HTML value attribute
            $(gemArray[i]).val(number);
        };
        console.log(numbersUsed);
    };

    // CHECK WIN CONDITIONS - checks to see if the user number equals the random number for the win 
    function winCheck() {
        if (userNumber === randomNumber) {
            console.log('You won!');
            winCount++;
            $('#wins').text(winCount);
            randomNumberGen();
            gemNumberGen();
        } else if (userNumber > randomNumber) {
            console.log('You went over.');
            lossCount++;
            $('#losses').text(lossCount);
            randomNumberGen();
            gemNumberGen();
        };

    };

    // CAPTURE USER INPUT - getting out user input here - clicking gem buttons stores the associated html attribute value
    $('.gem').click(function () {
        input = parseInt(($(this).val())); // stores value and converts to an integer
        
        userNumber = userNumber + input; // update UserNumber 
        $('#userNumber').text(userNumber); // update UserNumber text field

        $('#hints').text('This gem is worth ' + input + ' points.'); // Displays the hint
        console.log('This gem is worth ' + input + ' points. Your number so far is ' + userNumber); // logs the hint and the point total
        
        winCheck(); // check for win conditions
    });

    // OPENING THE DIRECTIONS MODAL
    $('#directionsButton').click(function () {
        $('#instructions').removeClass("hidden");
        console.log('Directions modal opened.');
    });

    // CLOSING THE DIRECTIONS MODAL
    $('#close').click(function () {
        $('#instructions').removeClass("visible");
        $('#instructions').addClass("hidden");
        console.log('Directions modal closed.');
    });

    // BEGIN GAME - calls random number generators and starts the game
    randomNumberGen(); // initialize the number we are trying to guess
    gemNumberGen(); // initilize the random gem values
    console.log('The game begins!'); // begins game

});


// CONFETTI

