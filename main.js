let form = document.querySelector("form");
let ul = document.querySelector("ul");
let select = document.querySelector("select");
let textarea = document.querySelector("textarea");

const add_feedback = (event) => {
  event.preventDefault();

  let li = document.createElement("li");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");
  let btn = document.createElement("btn");

  li.className = "list-group-item";
  select.value > 3
    ? (li.className = "list-group-item bg-success")
    : (li.className = "list-group-item bg-warning");

  h1.className = "display-4";
  btn.className = "btn btn-sm btn-danger rounded-0";

  h1.innerText = `Rating ${select.value}`;
  p.innerText = `Review ${textarea.value}`;
  btn.innerText = "Delete";

  li.appendChild(h1);
  li.appendChild(p);
  li.appendChild(btn);
  ul.appendChild(li);

  form.reset();
};

form.addEventListener("submit", add_feedback);

ul.addEventListener("click", (e) => {
  if (e.target.className.includes("btn-danger")) {
    let li = e.target.parentElement;
    if (window.confirm("Are you sure!")) {
      ul.removeChild(li);
    }
  }
});
