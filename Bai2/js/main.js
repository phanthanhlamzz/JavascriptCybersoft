var taskList=[];

/**
 * Hàm Lấy Thông Tin
 */
function layThongTin(){
    var taskName=document.getElementById("newTask").value;
    var taskStatus=0; // mặc định là 0
    var task= new Task(taskName,taskStatus);

    return task;
}

/**
 * Hàm Hiển thị TableTaskList
 */

 // hiển thị Table task ToDo
function hienThiTableTaskList_Todo(){
    var content = ``;
    taskList.forEach(function(item,index){
        if(item.taskStatus==0){
            content+=`<li>${item.taskName}
                        <span>
                        <button onclick="deleteTask(event);"><i class="fa fa-trash-alt" data-task="${index}"></i></button>
                        <button onclick="completeTask(event);"> <i class="fa fa-check-circle" data-task="${index}"></i></button>
                        </span>
                      </li>`;
        }
    })
    document.getElementById("todo").innerHTML=content;
}

// hiển thị Table các task Complete
function hienThiTableTaskList_Complete(){
    var content = ``;
    taskList.forEach(function(item,index){
        if(item.taskStatus==1){
            content+=`<li>${item.taskName}
                        <span>
                        <button onclick="deleteTask(event);"><i class="fa fa-trash-alt" data-task="${index}"></i></button>
                        <button onclick="completeTask(event);" disabled> <i class="fa fa-check-circle" data-task="${index}"></i></button>     
                        </span>
                      </li>`;
        }
    })
    document.getElementById("completed").innerHTML=content;
}
   


/**
 * Hàm xử lý xự kiện
 */

 // Xử kiện khi nhấn nút add task
document.getElementById("addItem").addEventListener("click",function(){
    var task = layThongTin();
    taskList.push(task);
    hienThiTableTaskList_Todo();
    document.getElementById("newTask").value="";
})

// hàm xử lý -> Xử kiện khi nhấn nút delete task
function deleteTask(event){
    // taskIndex : là số index của task trong taskList khi nhấn nút delete task
    var taskIndex =  parseInt(event.target.getAttribute("data-task"));
    
}

// hàm xử lý -> Xử kiện khi nhấn nút complete task
function completeTask(event){
     // taskIndex : là số index của task trong taskList khi nhấn nút complete task
    var taskIndex =  parseInt(event.target.getAttribute("data-task"));
    
}

