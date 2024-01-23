import React, { useState,useEffect } from 'react'
import ExceptionForm from './ExceptionForm';

export default function Observation({observation,ob_index,saveInOrder,saveException}) {
  const [number,setNumber] = useState(observation.inOrder)

  // Jos tämän komponentin näyttämä observation muuttuu, päivitetään kunnossa. Ilman tätä eri lomakkeet
  // voi näyttää samoja (saman havainnon) lukuja
  useEffect(() => {
    setNumber(observation.inOrder)
   }, [observation])

  const save = (e) => {
    const value = e.target.value
    setNumber(value)
    saveInOrder(value,ob_index)
  }

  return (
    <>
    <h3>{observation.name}</h3>
    <div>
      <label>Kunnossa</label>
      <input type="number" value={number} onChange={save}/>
    </div>
    <h4>Poikkeamat</h4>
    {
      observation.exceptions === undefined && 
        <p>Ei poikkeamia</p>
    }
    {
      observation.exceptions !== undefined && 
        observation.exceptions.map((exception,ex_index) => (
          <ExceptionForm key={ex_index} exception={exception} saveException={saveException} ob_index={ob_index} ex_index={ex_index}/>    
        )) 
    }
    </>
  )
}
