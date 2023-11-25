var firebaseConfig = {
  apiKey: "AIzaSyDVNO2zIHZHOAH-yqcB7bftThoCbW06NTI",
  authDomain: "todo-app-4e9cd.firebaseapp.com",
  databaseURL: "https://todo-app-4e9cd-default-rtdb.firebaseio.com",
  projectId: "todo-app-4e9cd",
  storageBucket: "todo-app-4e9cd.appspot.com",
  messagingSenderId: "747304126061",
  appId: "1:747304126061:web:8f1e502474a9a33b052164"
};

var app = firebase.initializeApp(firebaseConfig);

// console.log(firebase.database);




var getul = document.getElementById("ul")

firebase.database().ref("todos").on('child_added', function(data){
    // console.log(data.val().value);
    // console.log(data.val());
    var add = document.getElementById("input");
    
                var li = document.createElement("li")
                var liText = document.createTextNode(data.val().value)
                li.appendChild(liText)
                li.setAttribute("class","list ")
                getul.appendChild(li)
                add.value = ""
                //delete btn work
                var deletebtn = document.createElement("button")
                var deletebtntext = document.createTextNode("Delete")
                deletebtn.appendChild(deletebtntext)
                li.appendChild(deletebtn)
                deletebtn.setAttribute('id',data.val().key)
                deletebtn.setAttribute("onclick","del(this)")
                //edit btn work
                var editbtn = document.createElement("button")
                var editbtnText = document.createTextNode("Edit")
                editbtn.appendChild(editbtnText)
                editbtn.setAttribute("onclick","edit(this)")
                editbtn.setAttribute("id",data.val().key)
                // editbtn.setAttribute("onclick","edit()")
                li.appendChild(editbtn)
                //delete button css
                deletebtn.setAttribute("class","btn btn-danger delgap ")
                editbtn.setAttribute("class","btn btn-info editgap ")
    
}

)




function add(){
    var add = document.getElementById("input");
    // console.log(add.value);
    if(add.value.trim() == ""){
        alert("Please Enter Something to Add")
    }
    else{
    var database = firebase.database().ref("todos")
    var key = database.push().key;
    // console.log(key);
    var todo = {
        value : add.value,
        key : key
    }
    database.child(key).set(todo)
    add.value = ""
}
//     var add = document.getElementById("input");
//     if(add.value.trim() == ""){
//         alert("Please Enter Something to Add")
//     }
//     else{
//         var li = document.createElement("li")
//         var liText = document.createTextNode(add.value)
//         li.appendChild(liText)
//         li.setAttribute("class","list ")
//         getul.appendChild(li)
//         add.value = ""
//         //delete btn work
//         var deletebtn = document.createElement("button")
//         var deletebtntext = document.createTextNode("Delete")
//         deletebtn.appendChild(deletebtntext)
//         li.appendChild(deletebtn)
//         deletebtn.setAttribute("onclick","del(this)")
//         //edit btn work
//         var editbtn = document.createElement("button")
//         var editbtnText = document.createTextNode("Edit")
//         editbtn.appendChild(editbtnText)
//         editbtn.setAttribute("onclick","edit(this)")
//         // editbtn.setAttribute("onclick","edit()")
//         li.appendChild(editbtn)
//         //delete button css
//         deletebtn.setAttribute("class","btn btn-danger delgap ")
//         editbtn.setAttribute("class","btn btn-info editgap ")
// }
    
}



// function ifBlank(){
    
// if (liText.trim() === "") {
//     console.log("Enter value first")
//     var add = document.querySelector("#input")
//     var li = document.createElement("li")
//     var liText = document.createTextNode(add.value)
//     li.appendChild(liText)
//     li.setAttribute("class","list")
//     getul.appendChild(li)
//     add.value = ""
//     //delete btn work
//     var deletebtn = document.createElement("button")
//     var deletebtntext = document.createTextNode("delete")
//     deletebtn.appendChild(deletebtntext)
//     li.appendChild(deletebtn)
//     deletebtn.setAttribute("onclick","del(this)")
//     //edit btn work
//     var editbtn = document.createElement("button")
//     var editbtnText = document.createTextNode("Edit")
//     editbtn.appendChild(editbtnText)
//     editbtn.setAttribute("onclick","edit(this)")
//     li.appendChild(editbtn)
//     //delete button css
//     deletebtn.setAttribute("class","btn btn-danger delgap")
//     editbtn.setAttribute("class","btn btn-info editgap")
// } 
// }
function deleteall(){
    firebase.database().ref('todos').remove()
    getul.innerHTML = ""
}
// delete button javascript
function del(d) {
    firebase.database().ref('todos').child(d.id).remove()
    // console.log(d.id);
    d.parentNode.remove()
}
//edit button work
function edit(e){
    console.log(e.id);

    var edit = prompt("Enter your updated value?")
    if(edit.trim() === ""){
        alert("Please Enter Something to Edit this")
       }
    else{
        
        var editTodo = {
            value : edit,
            key : e.id
        }
        // console.log(editTodo);
        
        firebase.database().ref('todos').child(e.id).set(editTodo)
        e.parentNode.firstChild.nodeValue = edit
    }
}


