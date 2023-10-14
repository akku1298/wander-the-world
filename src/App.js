import React, { useState } from "react";
import Tours from "./components/Tours";
import data from './data';

const App = () => {

  const [tours, setTours]=useState(data);

  function removeTour(id){
    const newTour = tours.filter(tour => tour.id!==id);
    setTours(newTour);
  }

  if(tours.length === 0){
    return(
      <div className="refresh">
        <h2> Ohhh! You are left with no tours</h2>
        <button className="btn-white" onClick={() => setTours(data)}>Refresh</button>
      </div>
    )
  }

  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour}></Tours>

    </div>
  )
};

export default App;
