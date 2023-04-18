import './styles.css';

const form = document.getElementById("form");
const userName = document.getElementById("name");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const passConf = document.getElementById("pass2");


form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const userNameValue = userName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passValue = pass.value.trim();
    const passConfValue = passConf.value.trim();

    if (userNameValue === '') {
        setErrorFor(userName, "El campo no puede estar vacío");
    } else {
        setSuccessFor(userName);
    }

    if (lastNameValue === " ") {
        setErrorFor(lastName, "El campo no puede estar vacío");
    } else {
        setSuccessFor(lastName);
    }

    if (emailValue === " ") {
        setErrorFor(email, "El campo no puede estar vacío");
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, "El email no es válido");
    } else {
        setSuccessFor(email);
    }

    if (passValue === " ") {
        setErrorFor(pass, "El campo no puede estar vacío");
    } else {
        setSuccessFor(pass);
    }

    if (passConfValue === " ") {
        setErrorFor(passConf, "El campo no puede estar vacío");
    } else if (passConf !== passConfValue) {
        setErrorFor(passConf, "Las contraseñas no coinciden");
    } else {
        setSuccessFor(passConf);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "form-control error";
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}