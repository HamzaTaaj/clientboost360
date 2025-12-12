import React from 'react'
import { IoArrowDown } from 'react-icons/io5'
const DownArrow = () => {
  return (
    <div className="absolute z-10 bg-[var(--background)] p-4 rounded-[100px] left-1/2 -translate-x-1/2 -translate-y-12">
    <button className="bg-[var(--turq)] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg ">
      <IoArrowDown className="w-8 h-8" />
    </button>
  </div>
  )
}

export default DownArrow