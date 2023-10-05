function formValidation() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (firstName == "") {
        alert("Name must be filled out");
        return false;
    }
    if (lastName == "") {
        alert("Name must be filled out");
        return false;
    }

    if (email == "") {
        alert("Email must be filled out");
        return false;
    }

    if (message == "") {
        alert("Message must be filled out");
        return false;
    }

    return true;
}



