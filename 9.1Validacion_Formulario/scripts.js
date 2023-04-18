const name = document.getElementById("name");
const invalidName = document.getElementById("invalidName");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const invalidPass = document.getElementById("");


function nameExtension(nameValue) {
    if (nameValue.length >= 3 && nameValue < 13) {
        return true;
    } else {
        invalidName
    };
}

function email(){

}

