import React, { useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Sidebar = () => {
  const [dishClicked, setDishClicked] = useState(false)
  const [ingClicked, setIngClicked] = useState(false)
  const [regionclicked, setRegionClicked] = useState(false)
  const dishList = [
    { label: "Soups", name: "soups" },
    { label: "Mains", name: "mains" },
    { label: "Noodles", name: "noodles" },
    { labe: "Desserts", name: "desserts" },
    { label: "Drinks", name: "drinks" },
    { label: "Sauces", name: "sauces" }
  ]
  const ingredientsList = [
    { label: "Beef", name: 'beef' },
    { label: "Pork", name: "pork" },
    { label: "Chicken", name: "chicken" },
    { label: "Seafood", name: "seafood" },
    { label: "Vegetable", name: 'vegetable' }
  ]
  const regionsList = [
    { label: "Anhui" },
    { label: "Fujoan" },
    { label: "Guangdong" },
    { label: "Hunan" }
  ]
  const titles = [
    "Dish Type", "Ingredients", "Regions"
  ]
  function titleClick(type) {
    if (type === 'dish') {
      setDishClicked(prev => !prev);
    } else if (type === 'ing') {
      setIngClicked(prev => !prev)
    } else {
      setRegionClicked(prev => !prev)
    }
  }

  return (
    <div className='flex  flex-col gap-1 h-[100vh]  fixed w-1/4'>
      <div className='text-blue-800 opacity-[50%] text-sm'>Find your dish</div>
      <div onClick={() => titleClick('dish')} className='font-bold text-blue-900 flex items-center '>
        {titles.slice(0, 1)}
        <div className='flex-grow' />
        {dishClicked ? <MdKeyboardArrowUp style={{ fontSize: '20px' }} /> : <MdKeyboardArrowDown style={{ fontSize: '20px' }} />}
      </div>
      {dishList.map((item, index) => (
        <div style={{ display: dishClicked ? 'block' : 'none' }} key={index} className='text-blue-800'>
          {item.label}
        </div>
      ))}

      <div className='bg-blue-500 h-[0.01rem] ' />

      <div onClick={() => titleClick('ing')} className='font-bold text-blue-900 flex items-center '>
        {titles.slice(1, 2)}
        <div className='flex-grow' />
        {ingClicked ? <MdKeyboardArrowUp style={{ fontSize: '20px' }} /> : <MdKeyboardArrowDown style={{ fontSize: '20px' }} />}
      </div>
      {ingredientsList.map((item, index) => (
        <div style={{ display: ingClicked ? 'block' : 'none' }} key={index} className='text-blue-800'>
          {item.label}
        </div>
      ))}

      <div className='bg-blue-500 h-[0.01rem]' />

      <div onClick={() => titleClick('region')} className='font-bold text-blue-900 flex items-center '>
        {titles.slice(2, 3)}
        <div className='flex-grow' />
        {regionclicked ? <MdKeyboardArrowUp style={{ fontSize: '20px' }} /> : <MdKeyboardArrowDown style={{ fontSize: '20px' }} />}
      </div>
      {regionsList.map((item, index) => (
        <div style={{ display: regionclicked ? 'block' : 'none' }} key={index} className='text-blue-800'>
          {item.label}
        </div>
      ))}
    </div>
  )
}

export default Sidebar