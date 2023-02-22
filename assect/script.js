//DOM buttons access
const reset = document.getElementsByClassName("reset")[0];
const button = document.getElementsByClassName("work_add")[0];
const inputFild = document.getElementsByClassName("work_list")[0];
const itemsDiv = document.getElementsByClassName("display_items")[0];
let messageAfterList = document.getElementsByClassName("msg")[0];


//data stored in a variable.
let dataStored = [];


//variable for localStorage
let dataArray = [];


//Data store in localStorage.
const getData = JSON.parse(localStorage.getItem('key'));
for(let i of getData){
  document.getElementsByClassName("display_items")[0].innerHTML += 
  "<div class='list_wrapper'>" +
  "<div class='items_list'>" +
  i +
  "</div>" +
  "<button class='delet_items'>Delete</button>" +
  "</div>";
}

//get html tag and div delete button
let listRender = document.getElementsByClassName("display_items")[0];
const deleteButton = document.querySelectorAll(".delet_items");

//Delete stored data from localStorage.
deleteButton.forEach((everyButton) => {
  everyButton.addEventListener("click", (e) => {
    listRender.removeChild(e.target.parentElement);
    listRender.localStorage.removeItem("display_items")[0];
  });
});

//click to add button.
function addItemsHendel(e) {
    console.log(dataStored);

  const inputData = document.getElementsByClassName("work_list")[0].value;
  if (inputData != "") {
    let data;
    data =
      "<div class='list_wrapper'>" +
      "<div class='items_list'>" +
      inputData +
      "</div>" +
      "<button class='delet_items'>Delete</button>" +
      "</div>";
    dataStored.push(data);
    dataArray.push(inputData);
    
    listRender.innerHTML += dataStored[dataStored.length - 1];

    //targat every delete buttons
    if (itemsDiv.children.length <= 5) {
      const deleteButton = document.querySelectorAll(".delet_items");

      deleteButton.forEach((everyButton) => {
        everyButton.addEventListener("click", (e) => {
          listRender.removeChild(e.target.parentElement);
          listRender.localStorage.removeItem("display_items")[0];
        });
      });
    }

    //empty inputfild after add items.
    inputFild.value = "";
    if (itemsDiv.children.length == 6) {
      inputFild.disabled = true;
      button.disabled = true;
      inputFild.value = "click on reset";
      messageAfterList.textContent = "ONLY 6 ITEMS CAN BE RECORDED";
    }
    
    //store data in localStorage
    let storeData = JSON.stringify(dataArray);
    localStorage.setItem("key", storeData);
    
    }
}
//addItemsHendel function end.


//add items_list after press enter button
button.addEventListener("click", addItemsHendel);
inputFild.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    addItemsHendel();
    inputFild.value = "";
    if (itemsDiv.children.length == 6) {
      inputFild.value = "click on reset";
      messageAfterList.textContent = "ONLY 6 ITEMS CAN BE RECORDED";
    }
  }
});

//reset button function
function resetButton() {
  inputFild.value = "";
  inputFild.disabled = false;
  button.disabled = false;
  dataStored = [];
  document.getElementsByClassName("display_items")[0].innerHTML = dataStored;
  messageAfterList.textContent = "";
}
reset.addEventListener("click", resetButton);
