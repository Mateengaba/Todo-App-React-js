import { useState } from 'react'
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import uuid from "react-uuid"
import "./App.css";
import Todolist from './Compnents/Todolist';



function App() {

  const [item, setitem] = useState("");   //input handel
  
  const [todos, setTodos] = useState([]);   // set todo with uniq id ka sath
  const [editTodoValue, setEditTodoValue] = useState(false); // edit karna ka lia
const [ itemid , setItemid] = useState(); // new item set karwane ka lia




  function Handle (e){
    // console.log(e.target.value);
    setitem(e.target.value);

  }


// add todo buttun
  const addtodo = () => {
if (editTodoValue){
  const newlist = todos.map((todo) =>{   // update item ka lia
    if (todo.id === itemid)
    {return{...todo , itemname: item }
    }
    return todo;
  })
  setTodos(newlist);
  setEditTodoValue(false);
  setitem("");
  setItemid();

}else {const todoObj = {
  id: uuid(),
  itemname: item,
  // isEdit: false,
};


setTodos((prevItem) => [...prevItem, todoObj ]);
setitem("");
}

    // console.log(addtodo)
   
    
    // console.log("item", item);
    
   
  }


// delete all

const deliteall = () =>{
  setTodos([])

} 





// delete todo lis filter use

const deleteitem = (id) =>{

const filteritem = todos.filter((value) => {
  return value.id !== id

  
})

setTodos(filteritem)

}

//edit item  fin func use

const edititem = (id) =>{
const edittodo = todos.find((todo) =>{
  return todo.id === id;
}
)
console.log("id", id)
setitem(edittodo.itemname);
setEditTodoValue(true)
setItemid(id)
}


  return (
    <>



      <div className='heading'>
        <h1 className='Todo-head'>TO-DO List </h1>

        <div className="input flex justify-center border-b-8   items-center mt-5 ">

          <div className="w-[60%]">
            <input
              type="text"
              placeholder="ENTER Todo.."
              className="border w-full rounded-lg p-3 text-zinc-950 outline-none border-gray-600 " value={item} onChange={Handle}
            />
          </div>
          <div className='Btn  '>
            <button onClick={addtodo} disabled={item.length <= 1 ? true : false} className='add_btn border text-zinc-950 hover:bg-yellow-200 hover:rounded-lg transition  bg-yellow-300 m-5 p-3 border-gray-950'>{editTodoValue ? "Update item" : "Add todo"}</button>
            <button onClick={deliteall} className='Delete_all border  text-zinc-950 hover:bg-red-300 hover:rounded-lg transition bg-red-400 m-5 p-3 border-gray-950'>Delete All</button>

          </div>
        </div>

<div className='Todo_l'>
<Todolist todos={todos} deleteitem={deleteitem} edititem={edititem}/>

</div>


      </div>



    </>
  )
}

export default App
