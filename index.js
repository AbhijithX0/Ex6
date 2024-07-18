const max = 10;

const min = 1;

let random;

let userGuess;


document.getElementById("show-guess").onclick = function () {



    // Consoles the random  number 
    console.log(random);

    // Take the user inputted value and stores it to the  userGuess variable

    // Take the user inputted value and stores it to the  userGuess variable
    userGuess = document.getElementById("user-value").value;


    // Checks if the user inputted value is a number or not 

    if (isNaN(userGuess)) {
        document.getElementById("error-message").textContent = "Please enter a valid number"
        document.getElementById("result-message").textContent = ""
        document.getElementById("ai-guess").textContent = ""

      

    }

    //  else if its a number then

    else {


        // Generates a random Number 
        random = Math.floor(Math.random() * (max - min) + min);

        // Take the user inputted value and stores it to the  userGuess variable
        userGuess = document.getElementById("user-value").value;

        document.getElementById("ai-guess").textContent = random;
        document.getElementById("error-message").textContent ="";

        if (userGuess == random) {
            document.getElementById("result-message").textContent = "CONGRATULATIONS :)"
            document.getElementById("error-message").textContent = ""



        }

        // else 

        else {
            document.getElementById("result-message").textContent = "Try Again :("
        }

    }
    // // Clear the input field after processing
    // document.getElementById("user-value").value = "";

    // // Clear the random number and result after displaying them
    // setTimeout(() => {
    //     document.getElementById("ai-guess").textContent = "";
    //     document.getElementById("result-message").textContent = "";
    // }, 4000); // Adjust the timeout duration as needed
}

