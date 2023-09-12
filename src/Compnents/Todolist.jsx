import React from 'react';
import "./Todolist.css";
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BiSolidMessageAltEdit } from 'react-icons/bi';



function Todolist(props) {
    const {todos , deleteitem , edititem} =props;
  return (
    <>
      {todos?.length !==0?
      todos.map((val) =>{

        return(

<div className='list' key={val.id}>
    <div className=' border w-[65%] h-full hover:bg-slate-400 bg-slate-300 rounded-lg font-bold   p-3 text-zinc-950 outline-none border-gray-600'>
                <div>
<span>{val.itemname}</span>

                </div>
                

{/* <button className='add_btn border text-zinc-950 hover:bg-yellow-200 hover:rounded-lg transition  bg-yellow-300 m-5 p-3 border-gray-950'>Edit </button> */}
            {/* <button className='Delete_all border  text-zinc-950 hover:bg-red-300 hover:rounded-lg transition bg-red-400 m-5 p-3 border-gray-950'>Delete </button> */}



</div>

<div className='btn'>  

                <div onClick={()=> deleteitem (val.id)}> <RiDeleteBin6Line style={{cursor: "pointer"}}  /> </div>
                <div onClick={() => edititem(val.id)}> <BiSolidMessageAltEdit style={{cursor: "pointer"}}  /> </div>


            </div>


            </div>

        )
      }
      )
     :<h1 className='newh1'> " No item to display "</h1> }



    </>
  );
}

export default Todolist;
