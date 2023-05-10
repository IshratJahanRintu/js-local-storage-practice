const countP = document.getElementById("count");
if (!localStorage.getItem("count")) {
  localStorage.setItem("count", 0);
}
let count = parseInt(localStorage.getItem("count"));
countP.innerHTML = `${count}`;
function incrementCount() {
  console.log(count);
  count++;
  localStorage.setItem("count", count);
  countP.innerHTML = `${count}`;
}
