import React from 'react'

const Catagories = ({catagories,filterItems,activeCategory}) => {
  return (
    <div className='btn-container'>
    {catagories.map((category,index) =>{
      return (
        <button type='button' className= {`${activeCategory === category ? "filter-btn active" :"filter-btn"}`} key={index} onClick={() => filterItems(category)}>{category}</button>
      )
    })}      
    </div>
  )
}

export default Catagories
