import React,{useEffect, useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const date=(check)=>{
    if(check===false)
    return '';
    const d=new Date();
    const temp=('0'+d.getDate().toString()).slice(-2)+"/"+('0'+d.getMonth().toString()).slice(-2)+'/'+d.getFullYear().toString().slice(-2)+ ' '+ d.toLocaleTimeString('it-IT', {
      hour: '2-digit',
      minute:'2-digit'
    });
    return temp;
}



const getdate=(check,q)=>{
  if(check===false)
  return '';
  const d=JSON.parse(localStorage.getItem(q))
  if(d)
  return d.date;
  else 
  return '';
}

const GreenCheckbox = withStyles({
  root: {
    margin:0,  
    padding:0,
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);


const getItem=(q)=>{
      var ch=JSON.parse(localStorage.getItem(q));
      if(ch)
      {
        return ch.Check;
      }
      
      else 
      return false;
}


export default function CheckboxLabels({checked,ques}) {
  const [Check, setCheck] = useState(getItem(ques));
  // console.log("checked===",checked);
  // console.log("check=",Check); 
  // console.log("local storage value",getItem(ques));

      useEffect(()=>{
       setCheck(getItem(ques));
        
       },[checked,ques]);

    



  






  const handleChange = (event,ques) => {
    // console.log("ques name ==== ",ques);
    // console.log("checked status",event.target.checked);
    setCheck(event.target.checked);
    var ch=event.target.checked;
    var da=date(ch);
    var val={
      Check:ch,
      date:da,
    }
    localStorage.setItem(ques,JSON.stringify(val));
  };
  
  

  return (
    <FormGroup row>
      <FormControlLabel
        control={<GreenCheckbox checked={Check} onChange={(e)=>handleChange(e,ques)} name="checkedG" />}
        label={getdate(Check,ques)}
      />
      
        
    </FormGroup>
  );
}
