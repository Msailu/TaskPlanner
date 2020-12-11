function validateForm(){
   
    let form = document.forms[0];
        let name = form.querySelector('input[name="taskName"]');
        
        let nameValue = name.value;   
        let taskDesc=(form.querySelector('textarea[name="taskDesc"]')).value;
        let assignTo=(form.querySelector('input[name="assignedTo"]')).value;
        let dueDate=(form.querySelector('input[name="dueDate"]')).value;
        let status=(form.querySelector('select[name="status"]')).value;
       
        /*     example to call by IDS
            const newTaskNameInput = document.querySelector('#newTask');
            const name1 = newTaskNameInput.value;
            alert('using ids...'+name1); */
           
        
          if(!validateFormInputs(nameValue,'Task Name')){
            form.taskName.focus();
          }
          else if(!validateFormInputs(taskDesc,'Task Description')){
            form.taskDesc.focus();
          }
         else if(!validateFormInputs(assignTo,'Assign To')){
            form.assignedTo.focus();
          }
         return true;
      
}

function validateFormInputs(inputData , label){
    
    if(inputData.length==0 || inputData == null ||inputData=='') 
        {
           document.getElementById('errorMsg').style.display='block';
           document.getElementById('errorMsg').innerHTML  =` Please enter   ${label} `;
           return false;
       }else {
        document.getElementById('errorMsg').style.display='none';
        document.getElementById('errorMsg').innerHTML='';

           return true;
       }

    } 