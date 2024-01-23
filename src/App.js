import { useState } from 'react';
import './App.css';
import Rooms from './components/Rooms';
import Categories from './components/Categories';
import Observations from './components/Observations';
import { initialRoomsState } from './components/InitialObject';

function App() {
  const [data,setData] = useState(initialRoomsState)
  const [selectedRoomIndex, setSelectedRoomIndex] = useState(0)
  const [selectedCategoryIndex,setSelectedCategoryIndex] = useState(0)

  const addException = (index) => {
    const tempData = {...data} 
    const tempObservations = [...tempData.rooms[selectedRoomIndex].categories[selectedCategoryIndex].observations]
    tempObservations[index].exceptions.push({description: ""}) 
    tempData.rooms[selectedRoomIndex].categories[selectedCategoryIndex].observations = tempObservations
    setData(tempData) 
  }

  const saveException = (activity,ob_index,ex_index) => {
    const tempData = {...data} 
    const tempObservations = [...tempData.rooms[selectedRoomIndex].categories[selectedCategoryIndex].observations]
    tempObservations[ob_index].exceptions[ex_index].description = activity
    tempData.rooms[selectedRoomIndex].categories[selectedCategoryIndex].observations = tempObservations
    setData(tempData)
  }

  const saveInOrder = (inOrder, ob_index) => {
    const tempData = {...data} 
    const tempObservations = [...tempData.rooms[selectedRoomIndex].categories[selectedCategoryIndex].observations]
    tempObservations[ob_index].inOrder = inOrder
    console.log(tempObservations[ob_index].inOrder)
    tempData.rooms[selectedRoomIndex].categories[selectedCategoryIndex].observations = tempObservations
    setData(tempData)
  }

  return (
    <div id="container">
      <Rooms 
        rooms={data.rooms} 
        selectedRoomIndex={selectedRoomIndex} 
        setSelectedRoomIndex={setSelectedRoomIndex} 
      />
      <Categories 
        categories={data.rooms[selectedRoomIndex].categories} 
        selectedCategoryIndex={selectedCategoryIndex} 
        setSelectedCategoryIndex={setSelectedCategoryIndex}
      />
      <Observations 
        observations={data.rooms[selectedRoomIndex].categories[selectedCategoryIndex].observations}
        saveInOrder={saveInOrder}
        addException={addException}
        saveException={saveException}
      />
    </div>
  );
}

export default App;
