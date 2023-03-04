import { useState } from 'react'
import './App.css'
import { brands } from './data'
import { types } from './data'
import Categories from './Categories'

function App() {
  // const [count, setCount] = useState(0)

  const list = [
    { name: 'Бренды', menu: brands },
    { name: 'Тип обуви', menu: types },
    { name: 'Пол', menu: ['Для мужчин', 'Для женщин'] },
  ]

  return (
    <div className='wrapper'>
      <div className='categories'>
        <Categories list={list} />
      </div>
    </div>
  )
}

export default App
