function addTask(){
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task == "") return;

    let li = document.createElement("li");
     li.innerText = task;
      

    //delete button
    let dlb = document.createElement("button");
    dlb.innerText = "delete";
    dlb.dblclick = function(){
        li.remove();
    };

    //complete button
    let cmb = document.createElement("button");
    cmb.innerText = "completed";
    cmb.dblclick = function(){
        console.log("completed.clicked");
        li.toggle("completed");
    };

    function clearAll(){
        document.getElementById("todo-list").innerHTML = "";
    }

    li.append(dlb,cmb);
 

document.getElementById("taskList").appendChild(li);
input.value = "";
}

