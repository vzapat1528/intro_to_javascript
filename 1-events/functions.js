function greetUser() {
    // get user input
    var name = prompt("What is your name?");
    var age = prompt("What is your age?");

    // write content on a specific element on the page (better than document.write)
    document.getElementById('greeting').innerHTML = "Welcome, " + name + ". I see you are " + age;
}

function changeBackground() {
    // javascript can change CSS
    document.body.style.backgroundColor = "#44aaff";
}

function highlight() {
    // javascript can change specific CSS elements
    document.getElementById('greeting').style.backgroundColor = "#ffff88";
}

function showSecretMessage() {
    // another example of writing data to a specific element on the page
    var secret = "Zaxby's Zax Sauce is actually just mayonaise, ketchup, garlic powder and pepper.";

    document.getElementById('secret_message').innerHTML = secret;
}

function chinchillaFact() {
  var fact = "Chinchillas can see with their whiskers."

  document.getElementById('chilla_fact').innerHTML = fact;
}

function font() {
  document.getElementById('main-heading').style.fontFamily = "'Special Elite', cursive";

}
