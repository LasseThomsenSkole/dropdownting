let ddColor = document.getElementById("ddColor");
const pbFillDropdown = document.getElementById("pbFillDropdown");
const colArray = ["red", "yellow", "green", "blue", "orange"];
const body = document.querySelector('body')

function fillDropdown(item){
    const optionElement = document.createElement("option");

    optionElement.textContent = item;
    ddColor.appendChild(optionElement);
}

function addColor(btn){
    ddColor.innerHTML = ""
    colArray.forEach(fillDropdown)
}
function setBackgroundColor(){
    const selectedIndex = ddColor.selectedIndex;
    const selectedColor = ddColor.options[selectedIndex];
    console.log(selectedColor.innerText);
    body.style.backgroundColor = selectedColor.innerText;
}
pbFillDropdown.addEventListener('click', addColor);
ddColor.addEventListener('change', setBackgroundColor);