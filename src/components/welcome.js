import  { useContext } from 'react'
import { TodoProvider } from '../store/tdoprovider'

export default function Welcome() {
  const {todoitems} = useContext(TodoProvider);
  return(
   todoitems.length===0 && <div className='text-center  my-5'>
    <h1>Enter Your ToDo Elements Here</h1>
   </div> 
  )
}
