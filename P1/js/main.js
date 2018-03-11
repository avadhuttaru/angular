function submituserdata()
{
    var inputdata=document.getElementById("textdata").value;
    
    tododata(inputdata);
    
}
function tododata(todo)
{
   

    var i=0;

    //main div
    var myDiv = document.getElementById("useroutput");

    //dynamic div
    var todolist=document.createElement("div");
    todolist.setAttribute("class","textboxhold");
    todolist.setAttribute("id",i);
    
    //checkbox
    var checkbox = document.createElement("input"); 
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", "todo");
    checkbox.setAttribute("value", todo);
    checkbox.setAttribute("id", "checktext");
    todolist.appendChild(checkbox);
    myDiv.appendChild(todolist);

    //checkbox label
    var label = document.createElement('label');
    label.id = todo;
    label.appendChild(document.createTextNode(todo));
    var close = document.createElement('label');
    close.setAttribute("class","close");
    close.setAttribute("id",todo);
   
    close.appendChild(document.createTextNode("X"));
    todolist.appendChild(label);
    todolist.appendChild(close);

    

    
}
