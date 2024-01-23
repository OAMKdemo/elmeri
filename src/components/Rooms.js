import './Rooms.css';
import React from 'react'

export default function Rooms({rooms,selectedRoomIndex,setSelectedRoomIndex}) {
  const switchRoom = (index) => {
    setSelectedRoomIndex(index)
  }

  return (
    <div>
      <ul>
        {
          rooms.map((room,index) => (
            <li key={room.name}>
              <button style={{backgroundColor: selectedRoomIndex === index ? 'red':'#ccc'}}
              type="button" onClick={(name) => switchRoom(index)}>{room.name}</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
