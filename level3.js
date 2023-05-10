if (localStorage.getItem("information")) {
  let information = JSON.parse(localStorage.getItem("information"));

  document.getElementById("name").value = information.name;
  document.getElementById("email").value = information.email;

  document.getElementById("message").value = information.message;
}
function sendName() {
  const nameInput = document.getElementById("name");
  if (nameInput.value) {
    localStorage.setItem("name", nameInput.value);
    nameInput.value = "";
  } else {
    alert("input empty");
  }
}

function deleteName() {
  if (localStorage.getItem("name")) {
    localStorage.removeItem("name");
  } else {
    alert("no name");
  }
}
function sendEmail() {
  const emailInput = document.getElementById("email");
  if (emailInput.value) {
    localStorage.setItem("email", emailInput.value);
    emailInput.value = "";
  } else {
    alert("input empty");
  }
}

function deleteEmail() {
  if (localStorage.getItem("email")) {
    localStorage.removeItem("email");
  } else {
    alert("no email");
  }
}
function sendMessage() {
  const messageInput = document.getElementById("message");
  if (messageInput.value) {
    localStorage.setItem("message", messageInput.value);
    messageInput.value = "";
  } else {
    alert("input empty");
  }
}

function deleteMessage() {
  if (localStorage.getItem("message")) {
    localStorage.removeItem("message");
  } else {
    alert("no message");
  }
}

function reset() {
  localStorage.clear();

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";

  document.getElementById("message").value = "";
}

function sendAll() {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const msgInput = document.getElementById("message");
  let info = {
    name: nameInput.value,
    email: emailInput.value,
    message: msgInput.value,
  };
  localStorage.setItem("information", JSON.stringify(info));

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";

  document.getElementById("message").value = "";
}
