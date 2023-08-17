var btn = document.querySelector(".btn");
var containerTag = document.querySelector(".container");
var successful = document.querySelector(".successful");
var emailBox = document.querySelector(".email");
var invalid = document.querySelector(".invalid");
var dismiss = document.querySelector(".dismiss");
var userEmail = document.querySelector(".userEmail");
btn.addEventListener("click", function () {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var typedEmail = emailBox.value.toString();
    if (typedEmail.match(mailformat)) {
        containerTag.style.display = "none";
        successful.style.display = "inline";
        userEmail.innerHTML = typedEmail;
    }
    else {
        invalid.append("Invaild Email");
        emailBox.classList.add("is-invalid");
    }
});
dismiss.addEventListener("click", function () {
    containerTag.style.display = "flex";
    successful.style.display = "none";
});
