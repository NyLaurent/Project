const loginBtn = document.querySelector("#login-btn");
const registerBtn = document.querySelector("#register-btn");
const loginIconBtn = document.querySelector("#login-icon-btn");
const registerIconBtn = document.querySelector("#register-icon-btn");

const loginFform = document.querySelector(".login-container");
const registerForm = document.querySelector(".register-container");

const fluid = document.querySelector("#fluid");

const viewLogin = () => {
  loginFform.style.left = 0;
  registerForm.style.left = "100%";

  loginFform.style.opacity = 1;
  registerForm.style.opacity = 0;

  fluid.classList.add("fluid-animate");
};

const viewRegister = () => {
  loginFform.style.left = "-100%";
  registerForm.style.left = "0";

  loginFform.style.opacity = 0;
  registerForm.style.opacity = 1;

  fluid.classList.add("fluid-animate");

  fluid.addEventListener("animationend", () => {
    fluid.classList.remove("fluid-animate");
  });
};

registerBtn.addEventListener("click", viewRegister);
loginBtn.addEventListener("click", viewLogin);
registerIconBtn.addEventListener("click", viewRegister);
loginIconBtn.addEventListener("click", viewLogin);
