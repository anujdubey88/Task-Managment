import {  createContext,useReducer } from "react";

export const TodoProvider = createContext({
    todoitems:[],
    addnewitem:()=>{},
    deleteitem:()=>{},
})
const todoreducer=(currtodo,action)=>{
    let newtodoitem=currtodo;
    if(action.type==="NEW_ITEM"){
      newtodoitem=[...currtodo,{name:action.payload.itemname,dueDate:action.payload.date},];
    }
    else if(action.type==="DEL_ITEM"){
      newtodoitem=currtodo.filter((item)=>item.name!==action.payload.itemname);
    }
  return newtodoitem;
  }

const TodoitemcontextProvider=({children})=>{
    const [todoitems,dispatchitem]= useReducer(todoreducer,[]);

    const addnewitem=(itemname,date)=>{
      // setTodoitem((currval)=>[...todoitems,{name:itemname,dueDate:date}]);
      const newItemAction={
        type:"NEW_ITEM",
        payload:{
          itemname,
          date,
        }
      };
      dispatchitem(newItemAction);
    }
    const deleteitem=(itemna)=>{
      // const newtodoitem=todoitems.filter((item)=>item.name!==itemna)
      // setTodoitem(newtodoitem);
      const delItemAction={
        type:"DEL_ITEM",
        payload:{
          itemname:itemna,
        }
      };
      dispatchitem(delItemAction);
    }
return (
    <TodoProvider.Provider value={{
        todoitems,
        addnewitem,
        deleteitem,
        }}>
            {children}
        </TodoProvider.Provider>)
}

export default TodoitemcontextProvider;