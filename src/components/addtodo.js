// import React, { useState, useRef } from "react";
import React,{useContext, useRef} from "react";
import { TodoProvider } from "../store/tdoprovider";



function Addtodo({ handadd }) {

  const {addnewitem}=useContext(TodoProvider);
//   const [itemname, setname] = useState("");
//   const [date, setdate] = useState("");
  const itemnamee = useRef("");
  const datee = useRef("");
//   const changename = (event) => {
//     setname(event.target.value);
//   };
//   const changedate = (event) => {
//     setdate(event.target.value);
//   };
  const newitem = (event) => {
    event.preventDefault();
    
    addnewitem(itemnamee.current.value, datee.current.value);
    itemnamee.current.value="";
    datee.current.value="";
    // setdate("");
    // setname("");
  };
  return (

    <div className="container text-center">
      <form className="row" onSubmit={newitem}>
        <div className="col-6">
          <input
            style={{ width:"100%" }}
            ref={itemnamee}
            // value={itemname}
            // onChange={changename}
            type="text"
            placeholder="Enter ToDo here"
          />
        </div>
        <div className="col-4">
          <input
            style={{ width: "100%" }}
            ref={datee}
            // value={date}
            // onChange={changedate}
            type="date"
          />
        </div>
        <div className="col-2">
          <button style={{ width: "4.7rem" }} className="btn btn-success">
            ADD
          </button>
        </div>
      </form>
    </div>
  );
}
export default Addtodo;
