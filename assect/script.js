//DOM buttons access
const reset = document.getElementsByClassName("reset")[0];
const button = document.getElementsByClassName("work_add")[0];
const inputFild = document.getElementsByClassName("work_list")[0];
const itemsDiv = document.getElementsByClassName("display_items")[0];
let messageAfterList = document.getElementsByClassName("msg")[0];
//data stored in a variable.
let dataStored = [];
console.log(dataStored);

//click to add button.
function addItemsHendel(e){  
    const inputData = document.getElementsByClassName("work_list")[0].value;
    if(inputData != ""){
     let data;
     data  = "<div class='list_wrapper'>" + "<div class='items_list'>" + inputData + "</div>" +"<button class='delet_items'>Delete</button>" +  "</div>"
     dataStored.push(data);
     let listRender = document.getElementsByClassName("display_items")[0];
     listRender.innerHTML += dataStored[dataStored.length-1];
 
     //targat every delete buttons  
     if(itemsDiv.children.length <= 5){
          const deleteButton = document.querySelectorAll(".delet_items");

          deleteButton.forEach((everyButton)=>{
              everyButton.addEventListener("click",(e)=>{
                  listRender.removeChild(e.target.parentElement)
                  
                })
            })
    
        }
 
 
     //empty inputfild after add items.
     inputFild.value="";
     if(itemsDiv.children.length == 6){
         inputFild.disabled = true;
         button.disabled = true;
         inputFild.value = "click on reset"
         messageAfterList.textContent = "ONLY 6 ITEMS CAN BE RECORDED";
        }
    }

}
//addItemsHendel function end.

//add items_list after press enter button
button.addEventListener("click",addItemsHendel);
inputFild.addEventListener("keydown",(e)=>{if(e.key == "Enter"){
     addItemsHendel(); 
     inputFild.value="";
      if(itemsDiv.children.length == 6){
         inputFild.value = "click on reset"
         messageAfterList.textContent = "ONLY 6 ITEMS CAN BE RECORDED"
        }
    }
})



//reset button.         
function resetButton(){
    inputFild.value = "";
    inputFild.disabled = false;
    button.disabled = false;
    dataStored=[];
    document.getElementsByClassName("display_items")[0].innerHTML = dataStored;
    messageAfterList.textContent = "";
}
reset.addEventListener("click",resetButton);