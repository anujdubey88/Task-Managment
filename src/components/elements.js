import React from 'react'
import Element from './element'
import { TodoProvider } from '../store/tdoprovider';
import { useContext } from 'react';
export default function Elements() {
  const {todoitems}=useContext(TodoProvider);
  return (
    <div>
        {todoitems.map((item)=>{
            return <Element todoitem={item.name} key={item.name} tododate={item.dueDate}/>
        })}
    </div>
  )
}
