import React from 'react'

export default function Categories({categories,selectedCategoryIndex,setSelectedCategoryIndex}) {
  return (
     <select
      value={selectedCategoryIndex}
      onChange={e => setSelectedCategoryIndex(e.target.value)}>
      {
        categories.map((category,index) =>(
          <option key={index} value={index}>{category.name}</option>
        ))
      }
    </select> 
  )
}
