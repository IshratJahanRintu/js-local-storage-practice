// clearing local storage
localStorage.clear();

// setting items in local storage
localStorage.setItem("name", "sakib khan");
localStorage.setItem("age", 40);

// getting item from local storage
document.write(localStorage.getItem("age"));

// removing item from local storage
localStorage.removeItem("age");
localStorage.removeItem("name");

// setting an object in localStorage
let obj = {
  firstName: "abraham",
  lastName: "linkon",
};
localStorage.setItem("object", JSON.stringify(obj));
