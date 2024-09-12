let ddColor2 = document.getElementById("ddColor2");
const pbFillDropdown2 = document.getElementById("pbFillDropdown2");
const colArray2 = [["red","#ff5665"], ["green","#70b470"], ["yellow","#e6e675"], ["purple","#6678e6"]];
const colObject = [{"name": "red", "id": "#ff5665"},{"name": "yellow", "id": "#e6e675"}
    ,{"name": "green","id": "#70b470"}, {"name": "purple","id": "#6678e6"}];
const body2 = document.querySelector('body');

function fillDropdown2(item){
    const optionElement = document.createElement("option");
    optionElement.textContent = item.name;
    console.log(optionElement.textContent);
    ddColor2.appendChild(optionElement);
}

function addColor2(){
    ddColor2.innerHTML = "";
    colObject.forEach(fillDropdown2);
}
function setBackgroundColor2(){
    const selectedIndex = ddColor2.selectedIndex;
    body2.style.backgroundColor = colObject[selectedIndex].id
}
pbFillDropdown2.addEventListener('click', addColor2);
ddColor2.addEventListener('change', setBackgroundColor2)


