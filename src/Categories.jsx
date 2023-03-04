import React from 'react'

function Categories({ list }) {
  return list.map((obj) => (
    <div className='categories-item'>
      <div className='categories-text'>{obj.name}</div>
    </div>
  ))
}

export default Categories
