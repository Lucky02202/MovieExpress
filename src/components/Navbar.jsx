import { useState } from 'react'
import img from '../assets/logo.svg'

const Navbar = () => {

  let [current, setCurrent] = useState([true, false, false, false, false])

  const handeClick = async (id) => {
    let newCurrent = [...current]
    for (let i = 0; i < 5; i++) {
      if (i === id) {
        newCurrent[i] = true;
      }
      else {
        newCurrent[i] = false
      }
    }
    setCurrent(newCurrent)
  }
  let [one, two, three, four, five] = current

  return (
    <nav className="w-full box-border flex sm:flex-col ">
      <div className="h-full w-full box-border text-white flex-1">
        <img src={img} alt="" className="w-full sm:w-3/5 md:w-2/5 m-auto" />
      </div>
      <div className='flex-1'>
        <ul className='flex justify-between md:justify-around mt-4 md:mt-6 text-xs sm:text-sm md:text-base'>
          <li className={`hover:li-hover px-4 py-3 rounded-xl ${one ? 'bg-gray-800 ' : null}`} onClick={() => { handeClick(0) }}>ALL MOVIES</li>
          <li className={`hover:li-hover px-4 py-3 rounded-xl ${two ? 'bg-gray-800 ' : null}`} onClick={() => { handeClick(1) }}>TOP RATED</li>
          <li className={`hover:li-hover px-4 py-3 rounded-xl ${three ? 'bg-gray-800 ' : null}`} onClick={() => { handeClick(2) }}>ACTION</li>
          <li className={`hover:li-hover px-4 py-3 rounded-xl ${four ? 'bg-gray-800 ' : null}`} onClick={() => { handeClick(3) }}>DRAMA</li>
          <li className={`hover:li-hover px-4 py-3 rounded-xl ${five ? 'bg-gray-800 ' : null}`} onClick={() => { handeClick(4) }}>ROMANCE</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar