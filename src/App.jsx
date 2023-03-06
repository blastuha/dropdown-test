import { useState } from 'react'
import './App.css'
import { brands } from './data'
import { types } from './data'
import Categories from './Categories'

function App() {
  const list = [
    { name: 'Бренды', menu: brands },
    { name: 'Тип обуви', menu: types },
    { name: 'Пол', menu: ['Для мужчин', 'Для женщин'] },
  ]

  return (
    <div className='wrapper'>
      <Categories list={list} />
    </div>
  )
}

export default App
