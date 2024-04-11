import logo from './logo.svg';
import './App.css';
import Stu from './Stu';
import Todo from './Todo';
import Sturesult from './Sturesult';
import { Tictoc } from './components/Tictoc';
import AgeCalculator from './components/Agecal';
import Useeffect from './components/Useeffect';
import Fetchapi from './components/Fetchapi';
import Flipdemoapi from './components/Flipdemoapi';
import { Routes, Route } from "react-router-dom"
import Productdetail from './components/Productdetail';
import Test from './components/Test';
import Converter from './components/Converter';
import Formiktag from './components/Formiktag';
import Formikhook from './components/Formikhook';
import Forvalidation from './components/Forvalidation';
import Exam from './components/Exam';
import Snackladder from './components/Snackladder';
import Cart from './components/Cart';
import Usememooo from './components/Usememooo';
import Mui from './components/Mui';
// import { createContext, useState } from 'react';
// import About from './components/About';
// import Home from './components/Home';


// export const DataContext = createContext()

function App(){
  
  // const [data,setdata]=useState([{name:'jenil',roll:'001'},{name:'jenil',roll:'001'},])
  // const [name,setname]=useState('vijay')
  return (
    <>
{/*     
    <DataContext.Provider value={data}>
      <Home></Home>
      <About></About>
    </DataContext.Provider> */}


     {/* <Home data={data}></Home> 
     <About name={name}  setname={setname}></About>
    {name} */}

      <Routes>
        <Route path="/" element={<Flipdemoapi />} />
        <Route path="/:title" element={<Flipdemoapi/>} />
        <Route path="/productdetail/:id" element={<Productdetail/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/" element={<Usememooo/>} />
        
      </Routes>

        {/* <Mui></Mui> */}
      {/* <Stu></Stu> */}
      {/* <Todo/> */}
      {/* <Sturesult></Sturesult> */}
      {/* <Tictoc></Tictoc> */}
      {/* <AgeCalculator></AgeCalculator> */}
      {/* <Useeffect></Useeffect> */}
      {/* <Fetchapi></Fetchapi> */}
      {/* <Flipdemoapi></Flipdemoapi> */}
      {/* <Productdetail></Productdetail> */}
      {/* <Test></Test> */}
      {/* <Converter></Converter> */}
      {/* <Formiktag></Formiktag> */}
      {/* <Formikhook></Formikhook> */}
      {/* <Forvalidation></Forvalidation> */}

  {/* <Exam></Exam> */}
  {/* <Snackladder></Snackladder> */}

    </>
  );
}

export default App;
