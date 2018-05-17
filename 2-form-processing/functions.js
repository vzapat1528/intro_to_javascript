function greeting() {
    // get form values
    var name = document.getElementById('name').value;
    var place = document.getElementById('place').value;
    var age = document.getElementById('age').value;
    var food = document.getElementById('food').value;

    // build message
    message = "Hello, " + name + ". I see that you are from " + place +
              " and that you are " + age + " years old. " + "I also see that your favorite food is " + food;

    // find a specific element and display the message inside
    document.getElementById('message').innerHTML = message;
}
