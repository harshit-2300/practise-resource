import '../css/Tile.css'
import React, { useEffect, useState } from 'react';
import Checkbox from './Checkbox'
import Loader from './Loader'


   

function Tile({currentSheet}) {
    const [Questions, setQuestions] = useState([]);
    const [load,setLoad]=useState("");
    useEffect(()=>{
       setLoad(<Loader />)
        fetch('https://harshit-resource.herokuapp.com/Questions',{
    		method:'post',
    		headers:{'Content-Type':'application/json'},
    		body:JSON.stringify({
    		currentSheet,
    		})
    	}).then(response=>response.json())
    	.then(ques=>{
    		setQuestions(ques);
        setLoad("");
            // console.log("ques=======",ques);
    	})
        .catch((err)=>console.log(err)); 
    },[currentSheet]);
    
    // console.log("Ques is",Questions); 
    // console.log("current sheet is",currentSheet); 
      
  return (
        
        
        <div >
              <p>{load}</p>
                {
                Questions.map((ques,i)=>{
                        return(
                            <div key={i} className="Tile">
                                <div className="ques_name" > <a rel="noopener noreferrer" target='_blank' href={ques.link}>{ques.ques_name}</a> </div>
                                <div className="tag"  > {ques.topic} </div> 
                                <Checkbox  ques={ques._id} checked={ques.status}/>
                            </div>  
                        )}
                        )
			    }
    </div>
  );
}

export default Tile;
