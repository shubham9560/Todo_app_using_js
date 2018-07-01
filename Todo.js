  let list= null;
  let listElements = [];

window.onload = function () {
  list = document.getElementById('list');
  let addNewTodo = document.getElementById('add-new-todo');
  let addBtn = document.getElementById('add-btn');
  let delBtn = document.getElementById('del-btn');


  addBtn.onclick = function () {
    let todoValue = addNewTodo.value;
    addTodo(todoValue);
    showTodos();
    
  }
  delBtn.onclick=function(){
	  listElements=listElements.filter(function(t,i,arr){return t.done===false;});
		  showTodos();
	 }
  
  function showTodos() {
    list.innerHTML="";
    for(i in listElements){
      addListItem(listElements[i].task,listElements[i].done,i);
    }
  }

  function addListItem(todoValue,done,id){
    let newListItem = document.createElement('li');
    newListItem.setAttribute('data-id',id);
    newListItem.className = 'list-group-item';

    let checkBox = document.createElement('input');
    checkBox.className = 'col-1'
    checkBox.setAttribute('type','checkbox');
    checkBox.onchange = strikeSpan;

    let span = document.createElement('span');
    span.className = 'col-8'
    span.innerText = todoValue;
	
    if(done){
      checkBox.setAttribute('checked',true);
      span.style.textDecoration = 'line-through';
    }


    let deleteBtn = document.createElement('i');
    deleteBtn.className = 'col-1 fa fa-times'
    deleteBtn.onclick = deleteTodo;

    let moveUpBtn = document.createElement('i');
    moveUpBtn.className = 'col-1 fa fa-chevron-up'
	moveUpBtn.onclick=swapUp;

    let moveDownBtn = document.createElement('i');
    moveDownBtn.className = 'col-1 fa fa-chevron-down'
	moveDownBtn.onclick=swapDown;

    newListItem.appendChild(checkBox);
    newListItem.appendChild(span);
    newListItem.appendChild(deleteBtn);
    newListItem.appendChild(moveUpBtn)
    newListItem.appendChild(moveDownBtn);

    list.appendChild(newListItem);

  }

  function addTodo(todoTask) {
    let newTask = {
      task: todoTask,
      done: false
    }

    listElements.push(newTask);
  }

  function deleteTodo(event) {
    let index = event.target.parentElement.getAttribute('data-id');
    listElements.splice(index,1);
    showTodos();
  }
  
  function strikeSpan(event) {
    let index = event.target.parentElement.getAttribute('data-id');
    listElements[index].done = event.target.checked;
    showTodos();
  }
  
  function swapDown(event) {
      let lE=+event.target.parentElement.getAttribute('data-id');
	  let uE=lE+1;
	  let temp;
console.log(lE);
console.log(listElements.length);
	  if(lE<listElements.length-1) {
          temp = listElements[uE];
          listElements[uE] = listElements[lE];
          listElements[lE] = temp;
          showTodos();
      }
      else{
	      window.alert("you can not swap this todo")
      }

  }
	function swapUp(event){
	  let uE=+event.target.parentElement.getAttribute('data-id');
	  let lE=uE-1;
	  let temp;
	  if(uE>0) {
          temp = listElements[uE];
          listElements[uE] = listElements[lE];
          listElements[lE] = temp;
          showTodos();
      }
      else{
          window.alert("you can not swap this todo")
      }

  }
}
