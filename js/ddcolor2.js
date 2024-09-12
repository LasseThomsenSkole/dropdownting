let ddColor2 = document.getElementById("ddColor2");
const pbFillDropdown2 = document.getElementById("pbFillDropdown2");
const colArray2 = [["red","#ff5665"], ["green","#70b470"], ["yellow","#e6e675"], ["purple","#6678e6"]];
const body2 = document.querySelector('body');

function fillDropdown2(item){
    const optionElement = document.createElement("option");
    optionElement.textContent = item[0];
    console.log(optionElement.textContent);
    ddColor2.appendChild(optionElement);
}

function addColor2(){
    ddColor2.innerHTML = "";
    colArray2.forEach(fillDropdown2);
}
function setBackgroundColor2(){
    const selectedIndex = ddColor2.selectedIndex;
    body2.style.backgroundColor = colArray2[selectedIndex][1]
}
pbFillDropdown2.addEventListener('click', addColor2);
ddColor2.addEventListener('change', setBackgroundColor2)


