var getul = document.getElementById("ul")


function add(){
    var add = document.getElementById("input")
    if(input.value.trim() == ""){
        alert("Please Enter Something to Add")
    }
    else{
        var li = document.createElement("li")
        var liText = document.createTextNode(add.value)
        li.appendChild(liText)
        li.setAttribute("class","list ")
        getul.appendChild(li)
        add.value = ""
        //delete btn work
        var deletebtn = document.createElement("button")
        var deletebtntext = document.createTextNode("Delete")
        deletebtn.appendChild(deletebtntext)
        li.appendChild(deletebtn)
        deletebtn.setAttribute("onclick","del(this)")
        //edit btn work
        var editbtn = document.createElement("button")
        var editbtnText = document.createTextNode("Edit")
        editbtn.appendChild(editbtnText)
        editbtn.setAttribute("onclick","edit(this)")
        // editbtn.setAttribute("onclick","edit()")
        li.appendChild(editbtn)
        //delete button css
        deletebtn.setAttribute("class","btn btn-danger delgap ")
        editbtn.setAttribute("class","btn btn-info editgap ")
}
    
}
function ifBlank(){
    
if (liText.trim() === "") {
    console.log("Enter value first")
    var add = document.querySelector("#input")
    var li = document.createElement("li")
    var liText = document.createTextNode(add.value)
    li.appendChild(liText)
    li.setAttribute("class","list")
    getul.appendChild(li)
    add.value = ""
    //delete btn work
    var deletebtn = document.createElement("button")
    var deletebtntext = document.createTextNode("delete")
    deletebtn.appendChild(deletebtntext)
    li.appendChild(deletebtn)
    deletebtn.setAttribute("onclick","del(this)")
    //edit btn work
    var editbtn = document.createElement("button")
    var editbtnText = document.createTextNode("Edit")
    editbtn.appendChild(editbtnText)
    editbtn.setAttribute("onclick","edit(this)")
    li.appendChild(editbtn)
    //delete button css
    deletebtn.setAttribute("class","btn btn-danger delgap")
    editbtn.setAttribute("class","btn btn-info editgap")
} 
}
function deleteall(){
    getul.innerHTML = ""
}
// delete button javascript
function del(e) {
    e.parentNode.remove()
}
//edit button work
function edit(a){
    var edit = prompt("Enter edit value?")
    if(edit.trim() === ""){
        alert("Please Enter Something to Edit this")
        var edit = prompt("Enter edit value?")
        a.parentNode.firstChild.nodeValue = edit
    }
    else{
        a.parentNode.firstChild.nodeValue = edit
        }
}


