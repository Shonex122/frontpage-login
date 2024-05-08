let showPasswordBtn = document.querySelector(".show-password");
let inputBox = document.querySelector(".password-input");
let passwordChecklist = document.querySelectorAll(".list-item");

showPasswordBtn.addEventListener("click", () => {
  showPasswordBtn.classList.toggle("fa-eye");
  showPasswordBtn.classList.toggle("fa-eye-slash");

  inputBox.type = inputBox.type == "password" ? "text" : "password";
});

let validationRegex = [
  { regex: /.{10,}/ }, // min 8 letters
  { regex: /[0-9]/ }, // numbers from 0-9
  { regex: /[a-z]/ }, // letters from a-z
  { regex: /[A-Z]/ }, // letters from A-z
  { regex: /[~A-Zz-z0-9]/ }, // special characters
];

inputBox.addEventListener("keyup", () => {
  validationRegex.forEach((item, i) => {
    let isValid = item.regex.test(inputBox.value);

    if (isValid) {
      passwordChecklist[i].classList.add("checked");
    } else {
      passwordChecklist[i].classList.remove("checked");
    }
  });
});
