import React,{useState} from 'react';
import Menu from './Menu';
import Catagories from './Catagories'
import items from './data'
import logo from './logo2.webp'

const allCategories=["all",...new Set(items.map((item)=> item.category))]





const App = ()=>{
  const [menuItems,setMenuItems] =useState(items)
  const [activeCategory,setActiveCatagory]=useState("");
  const [catagories]=useState(allCategories)
  const filterItems =(category)=>{
    setActiveCatagory(category);
    if(category === "all"){
      setMenuItems(items)
      return
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <img src={logo} alt="logo" className='logo'/>
          <h2>Menu List</h2>
          <div className='underline'></div>
        </div>
        <Catagories  catagories={catagories} activeCategory={activeCategory} filterItems={filterItems} />
        <Menu items={menuItems}/>
      </section>
    </main>
  )
}

export default App;