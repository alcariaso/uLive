import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import HomeHub from './components/HomeHub/HomeHub';
import Journal from '../src/components/Journal/Journal';
import Nutrition from '../src/components/Nutrition/Nutrition';
import NutritionFood from '../src/components/NutritionFood/NutritionFood';
import Community from '../src/components/Community/Community';
import Timer from '../src/components/Timer/Timer';
import SubTimer from '../src/components/Timer/SubTimer/SubTimer'



function App() {
  return (
    <div className="App">

      <BrowserRouter>

          <Routes>
              <Route path='/' element={<SubTimer/>}></Route>
              <Route path='/Subtimer' element={<Timer/>}></Route>
              <Route path='/Journal' element={<Journal/>}></Route>
              <Route path='/Nutrition' element={<Nutrition/>}></Route>
              <Route path='/NutritionFood' element={<NutritionFood/>}></Route>
              <Route path='/Community' element={<Community/>}></Route>
          </Routes>
      </BrowserRouter>
    
      {/* <HomeHub></HomeHub> */}
      
    </div>
  );
}

export default App;
