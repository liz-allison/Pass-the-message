function validateForm() {
    var entry = document.forms["myForm"]["entry"].value;
    if (entry.length<1) {
        document.getElementById("error").innerHTML = "please enter a value to pass"
    }

    }

function getMessage()
{
    var message = document.getElementById("entry").value;
    document.getElementById("message").innerHTML = message;

    document.getElementById("entry").value = "";
}