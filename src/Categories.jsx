import React from 'react'
import Dropdown from './Dropdown'

function Categories({ list }) {
  return (
    <div className='categories'>
      {list.map((obj) => (
        <div className='categories-item'>
          <div className='categories-text'>{obj.name}</div>
          <Dropdown
            list={list}
            categoryName={obj.name}
          />
        </div>
      ))}
    </div>
  )
}

export default Categories
