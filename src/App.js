import './App.css';
import React,{useState,useEffect} from 'react';
import SheetSidebar from './components/SheetSidebar'
function App() {
    
    const [count,setCount]=useState(0);
    console.log("Hits=",count);
    useEffect(()=>{
      fetch('https://harshit-resource.herokuapp.com/hitCount').then(response=>response.json())
    .then(count=>{
      setCount(count);
          
    })
      .catch((err)=>console.log(err)); 
  },[]);

  return (
    <div className="App">
     
      <SheetSidebar  />
      
    </div>
  );
}

export default App;
