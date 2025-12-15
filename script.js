function toggleDark() {
  document.body.classList.toggle("dark");
}

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "admin" && pass === "12345") {
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("mainPage").classList.remove("hidden");
  } else {
    document.getElementById("loginMsg").innerText =
      "Username atau password salah";
  }
}

function logout() {
  document.getElementById("mainPage").classList.add("hidden");
  document.getElementById("loginPage").classList.remove("hidden");
}
