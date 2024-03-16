let button = document.querySelector('.add-button');
let form = document.querySelector("form");
let li = document.createElement("li");
let ul = document.querySelector("ul");

button.addEventListener("click",event =>
    {
    event.preventDefault();
    let text = document.getElementById('task1').value;
    let li = document.createElement("li");
    let createButton = document.createElement("button");
    createButton.setAttribute("class","delete-button");
    createButton.innerText="delete";
    li.innerText = text;
    ul.append(li);
    li.append(createButton);
    

})