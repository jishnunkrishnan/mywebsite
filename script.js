function buttonClick() {
    var name = document.forms["myForm"]["name"].value
    var email = document.forms["myForm"]["emailid"].value
    var contact = document.forms["myForm"]["contactno"].value

    if(name == "" && email == "" && contact == "") {

        alert("Name, Email, & Contact no. must be filled")
        return false
    } else {

        var text = "You'll be contacted soon!"
        document.getElementById("display-info").innerHTML=text
        $('#name').val('')
        $('#emailid').val('')
        $('#contactno').val('')
        $('#message').val('')
        return false
    }

}

