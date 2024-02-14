import React from 'react'
import {IoClose} from 'react-icons/io5'

const ToDoLists = ({task, deleteTask}) => {

  return (
    <div className='flex justify-between items-center w-full max-w-2xl bg-white rounded-md mb-3'>
      <p className='m-2 text-xl'>{task.text}</p>
      <div onClick={() => deleteTask(task.id)} className='text-2xl p-1 flex items-center rounded-full mr-1 hover:bg-gray-300'>
        <IoClose />
      </div>
    </div>
  )
}

export default ToDoLists
