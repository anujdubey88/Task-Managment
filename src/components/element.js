import React, { useContext } from 'react'
import { TodoProvider } from '../store/tdoprovider'

function Element({todoitem,tododate}) {
  const {deleteitem}=useContext(TodoProvider)
  return (
    <div className='container text-center my-3'>
      <div className="row" >
            <div style={{fontWeight:"bold"}} className="col-6">{todoitem}</div>
            <div style={{fontWeight:"bold"}} className="col-4">{tododate}</div>
            <div className="col-2">
            <button  type="button" onClick={()=>deleteitem(todoitem)} className="btn btn-danger">DELETE</button>
            </div>
        </div>
    </div>
  )
}
export default Element
