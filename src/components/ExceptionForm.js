import './ExceptionForm.css';
import React, { useEffect, useState } from 'react'

export default function ExceptionForm({saveException,exception,ob_index,ex_index}) {
  const  [activity, setActivity] = useState(exception.description)

  // Jos tämän komponentin näyttämä poikkeama muuttuu, päivitetään komponentti. Muuten komponentti voi 
  // näyttää "väärän" havainnon poikkeuksia.
  useEffect(() => {
   setActivity(exception.description)
  }, [exception])
  

  const save = (e) => {
    e.preventDefault()
    saveException(activity,ob_index,ex_index)
  }

  return (
    <form className='exception-form'>
      <div>
        <label>Toimenpide</label>
        <input value={activity} onChange={e => setActivity(e.target.value)}/>
      </div>
      <button onClick={save}>Tallenna</button>
    </form>
  )
}
