function validateForm(){
    let errorList='';
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
           
       
        if(nameValue.length==0){
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

      
} // End Of validateForm function

/* returns the all null inputs in the form of coma separated string .. */
function errorMsg( label, errorList){
  alert('in errorMsg...'+errorList);
    
    if( errorList == null ||errorList=='') 
        {
          errorList=label;
        }else {
          errorList=errorList+ " , "+label;
        }
       return errorList;

    } 