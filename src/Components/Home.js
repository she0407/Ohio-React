import Heatmap from "./heatmap";
import {ParticipantsContext, BuildingContext, DateContext} from "../context";
import { useState } from "react";
import Circular from "./circular";
import Chord from "./chord"
import BarGraph from "./barGraph";

function Home() {
  const [selectedParticipants, setSelectedParticipants] = useState([]);
  const [selectedBuildings, setSelectedBuildings] = useState([]);
  const [date, setDate] = useState('2022-03-01');

  return (
    <ParticipantsContext.Provider value={{selectedParticipants,setSelectedParticipants}}>
      <BuildingContext.Provider value={{selectedBuildings,setSelectedBuildings}}>
        <DateContext.Provider value={{date, setDate}}>
        <div className="bg-gray-100 rounded-lg flex justify-center items-center flex-col py-1 my-2 mx-10">
          <h1 className="text-xl bold">CSE 578 - 2022 VAST Mini Challenge 1 - Group Project</h1>
          <h3 className="h3">Heatmap -&gt; Chord Graph , Circular Packing Graph, Animated Scatter Plot -&gt; Bar, Pie CHart</h3>
        </div>
        {
          selectedParticipants.length == 0 ?
          <Heatmap /> :
          <BarGraph/>
        }
        </DateContext.Provider>
      </BuildingContext.Provider >
    </ParticipantsContext.Provider>
  );
}

export default Home;
