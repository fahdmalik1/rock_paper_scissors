let links = document.querySelectorAll('[data-selection]');
let computer;

links.forEach(links => {
    links.addEventListener('click', event => {
        let selectedName = links.dataset.selection
        userChoice(selectedName)
    })
})

function userChoice(choice) {
    console.log(choice) // Figure out how to add userchoice to the DOM not console.
}

function random(compChoice) {
    compChoice = Math.floor(Math.random() * 3);

    if (compChoice == '0') {
        return 'rock';
    }
    else if (compChoice == '1') {
        return 'paper';
    }
    else if (compChoice == '2') {
        return 'scissors';
    }

    return 'No choice selected';
}

let computerchoice = random(computer);
console.log(computerchoice) /* computer is now choosing at random now.
figure out how ot add computerchoice to the DOM. All choices are logging
to the console, whether it be user or computer.
*/

// Also need to figure out how to implement who beats who and who wins plus
// how ot implement and increase score after winner is determined.
// and maybe limit the number of tries maybe, will not if not necessary.

// Make sure to mention that I took some help from the following book:
// book name "Eloquent JavaScript" for writing the javascript section.




