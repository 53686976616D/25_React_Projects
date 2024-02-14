import React from 'react'
import MenuList from './Menu-list'

const TreesView = ({Menu}) => {

  return (
    <div className='w-auto h-screen'>
      <MenuList list={Menu}/>
    </div>
  )
}

export default TreesView
