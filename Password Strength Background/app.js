const password = document.getElementById("password");
const passwordBtn = document.getElementById("password-button");
const background = document.getElementById("background");

password.addEventListener("input", (e) => {
  const input = e.target.value;
  const length = input.length;
  const blurValue = 20 - length * 2;
  background.style.filter = `blur(${blurValue}px)`;
  if (blurValue <= 0) {
    passwordBtn.style.backgroundColor = "limegreen";
  } else {
    passwordBtn.style.backgroundColor = "black";
  }
});
