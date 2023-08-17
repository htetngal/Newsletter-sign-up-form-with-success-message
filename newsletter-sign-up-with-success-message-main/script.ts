const btn = document.querySelector(".btn") as HTMLLIElement;
const containerTag = document.querySelector(".container") as HTMLLIElement;
const successful = document.querySelector(".successful") as HTMLLIElement;
const emailBox = document.querySelector(".email") as HTMLLIElement;
const invalid = document.querySelector(".invalid") as HTMLLIElement;
const dismiss = document.querySelector(".dismiss") as HTMLLIElement;
const userEmail = document.querySelector(".userEmail") as HTMLLIElement;

btn.addEventListener("click", () => {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const typedEmail = emailBox.value.toString();
  if (typedEmail.match(mailformat)) {
    containerTag.style.display = "none";
    successful.style.display = "inline";
    userEmail.innerHTML = typedEmail;
  } else {
    invalid.append("Invaild Email");
    emailBox.classList.add("is-invalid");
  }
});

dismiss.addEventListener("click", () => {
  containerTag.style.display = "flex";
  successful.style.display = "none";
});
