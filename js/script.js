// let password = document.getElementById("password");
// let eyeicon = document.getElementById("eyeicon");
// let icon = document.querySelector("img");
// // let eyeIcon = document.getElementById("eyeIcon");

// function showPassword() {
//   if (password.type == "password") {
//     password.type = "text";
//     eyeicon.src = "eye-closed.png";
//   } else {
//     password.type = "password";
//     eyeicon.src = "eye-open.png";
//   }
// }

const showPasswordDiv = document.getElementById("showPassword");
const img_icon = showPassword.querySelector("img");
const input = document.querySelector("#password");

showPassword.addEventListener("click", () => {
  input.type = input.type === "password" ? "text" : "password";
  img_icon.src = img_icon.src.includes("open")
    ? "eye-closed.png"
    : "eye-closed.png";
});
