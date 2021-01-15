
//import {TaskManager} from './taskManager.js';

const form = document.forms[0];
const  addTaskButton = document.getElementById('submit');
const taskManager = new TaskManager(0);
taskManager.load();
taskManager.render();

addTaskButton.addEventListener('click', function() {
  let errorList='';
 
      //form.addEventListener
      let name = form.querySelector('input[name="taskName"]');
      
      let nameValue = name.value;   
      let taskDesc=(form.querySelector('textarea[name="taskDesc"]')).value;
      let assignTo=(form.querySelector('input[name="assignedTo"]')).value;
      let dueDate=(form.querySelector('input[name="dueDate"]')).value;
      let status=(form.querySelector('select[name="status"]')).value;
      
      if(nameValue.length==0 || nameValue == null || nameValue=='' ){
        errorList = errorMsg('Task Name',errorList);
      }
      if(taskDesc.length==0){
        errorList=errorMsg('Task Description',errorList);
     }
     if(assignTo.length==0){
      errorList=errorMsg('Assign To',errorList);
     }
   
     /* The below if-else displays the list of null  input fields and throws the focus to first input field in the errorList */
   if(errorList.length>0)
   {
      document.getElementById('errorMsg').style.display='block';
      document.getElementById('errorMsg').innerHTML  =` Please enter   ${errorList} `;
      if(nameValue.length==0){
            form.taskName.focus();
      }
      else if(taskDesc.length==0){
            form.taskDesc.focus();
          }
      else{
            form.assignedTo.focus();
          }
      return false;
   }
   else{
      document.getElementById('errorMsg').style.display='none';
      document.getElementById('errorMsg').innerHTML='';

   }
   taskManager.addTask(nameValue,taskDesc,assignTo,dueDate,status);
   taskManager.save();
   taskManager.render();
  // console.log(taskManager.tasks); 
   clearFormInputs();
  
  
});


function clearFormInputs(){
  (form.querySelector('input[name="taskName"]')).value='';
  (form.querySelector('textarea[name="taskDesc"]')).value ='';
  (form.querySelector('input[name="assignedTo"]')).value='';
  (form.querySelector('input[name="dueDate"]')).value='';
  
}


/* returns the all null inputs in the form of coma separated string .. */
function errorMsg( label, errorList){
  
    
    if( errorList == null ||errorList=='') 
        {
          errorList=label;
        }else {
          errorList=errorList+ " , "+label;
        }
       return errorList;

    } 

    /* Code to change the taskStatus to done when clicked on Mark As Done button  */
    const taskList = document.querySelector('#tasksList');
    console.log('taskList ...'+JSON.stringify(taskList));

    taskList.addEventListener('click', (event)=>{   // "event" here is the event parameter
        console.log(event.target);

        if (event.target.classList.contains('done-button')){ //Clicked Mard as Done
           // Get the parent Task
           console.log('first parent..')
           console.log(event.target.parentElement);
           const parentTask = event.target.parentElement.parentElement.parentElement;
           console.log('parent...Parent Task ....');
           console.log(parentTask);

           // Get the taskId of the parent Task.
           const taskId = Number(parentTask.dataset.taskId);
           console.log('taskid we are passing to getTaskById Function')
           console.log(taskId);

           const foundTask=taskManager.getTaskById(taskId);
           foundTask.status='DONE';
          console.log(foundTask);
           taskManager.render();

        } // end of if


        //When clicked on Delete button
        if(event.target.classList.contains('delete-button'))
        {
         
            const parentTask = event.target.parentElement.parentElement.parentElement;
            console.log('first parent..')
           console.log(event.target.parentElement);

           const deleteTask = event.target.parentElement.parentElement.parentElement;

           console.log('parent...Parent Task ....');

           console.log(deleteTask);
            const taskId = Number(deleteTask.dataset.taskId);

            console.log('in delete method...')
            console.log(taskId);
            taskManager.deleteTask(taskId);
            taskManager.save();
            taskManager.render();
        }

    }) //end of taskList.addEventListener

   

    /* Code to change the taskStatus to done when clicked on Mark As Done button  Ends here*/