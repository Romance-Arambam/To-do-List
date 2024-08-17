let count = 1;
function Addtodo(){
    const inputT = document.querySelector("input")
    const text = inputT.value

    const liEl= document.createElement("li")
    liEl.setAttribute("id","Todo-"+count)
    liEl.innerHTML = "<div>"+ text+ "<button onclick='deleteTodo("+count+")'>x</button></div>"
    document.querySelector("ol").appendChild(liEl)
    count++;
}
function deleteTodo(index){
    const element = document.getElementById("Todo-"+index)
    element.parentNode.removeChild(element)
}