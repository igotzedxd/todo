const output = document.querySelector(".output");
let todoArray = [
  {
    title: "Gå tur med hunden",
    note: "bob",
  },
  {
    title: "Vaske vinduer",
    note: "bob",
  },
  {
    title: "vaske tøj",
    note: "bob",
  },
  {
    title: "Ringe til farmor",
    note: "bob",
  },
];

const renderItems = () => {
  output.innerHTML = "";
  todoArray.forEach((todo, index) => {
    output.innerHTML += `<p class="todo-item" data-index="${index}"><i class="fa-solid fa-check check hidden"></i><span>${todo.title}</span><i class="fa-solid fa-x delete-button"></i></p>
    <p class="accordion">${todo.note}</p>`;
  });

  const listItems = document.querySelectorAll(".todo-item");
  const listItem = document.querySelector(".todo-item");

  /* check items */
  listItems.forEach((item, index) => {
    item.addEventListener("click", (e) => {
      e.target.classList.toggle("checked");
      e.target.classList.toggle("borderbottom");
      const checkIcon = e.target.querySelector(".check");
      checkIcon.classList.toggle("hidden");

      const accordion = e.target.parentElement.querySelectorAll(".accordion");
      accordion[index].classList.toggle("show-accordion");
    });
  });

  const deletebtn = document.querySelectorAll(".delete-button");
  deletebtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = e.target.parentElement.getAttribute("data-index");
      e.target.parentElement.classList.add("delete");
      todoArray.splice(index, 1);
      e.target.parentElement.remove(); // directly remove the item from the DOM
    });
  });

  const trash = document.querySelector(".clear");
  trash.addEventListener("click", () => {
    const checkedItems = document.querySelectorAll(".todo-item.checked");

    const checkedArray = Array.from(checkedItems).map(
      (item) => item.textContent
    );

    todoArray = todoArray.filter((todo) => !checkedArray.includes(todo));
    renderItems();
  });

  if (todoArray.length === 0) {
  } else if (todoArray.length === 1) {
    listItem.style.borderRadius = "10px";
  }
};
renderItems();

/* Tilføj punkt til listen */

const addbtn = document.querySelector(".add-button");
const deletebtn = document.querySelectorAll(".delete");

addbtn.addEventListener("click", (e) => {
  e.preventDefault();
  const input = document.querySelector("input[name='input']").value;
  if (input.length >= 1) {
    todoArray.push(input);
    renderItems();
  }
});
