import React, { useState } from 'react'

function Dropdown({ list, categoryName }) {
  const [display, setDisplay] = useState('none')

  const showDropdown = () => {
    if (display === 'none') {
      setDisplay('block')
    } else {
      setDisplay('none')
    }
  }

  return list.map((obj) => {
    if (categoryName === obj.name) {
      return (
        <div
          className='dropdown'
          // style={{ display: display }}
        >
          <div className='dropdown-content'>
            {obj.menu.map((menuItem) => (
              <div
                className='dropdown-content-text'
                onClick={showDropdown}
              >
                {menuItem}
              </div>
            ))}
          </div>
        </div>
      )
    }
  })
}

export default Dropdown
