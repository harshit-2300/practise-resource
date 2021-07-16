
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CloudDownladIcon from '@material-ui/icons/CloudDownload'
import React ,{useState} from 'react';
import {  withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {  yellow } from '@material-ui/core/colors';



const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(yellow[500]),
    backgroundColor: yellow[200],
    '&:hover': {
      backgroundColor: yellow[700],
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

// const theme = createTheme({
//   palette: {
//     primary: green,
//   },
// });

const getItem=(q)=>{
    var ch=JSON.parse(localStorage.getItem(q));
    if(ch)
    {
      const body={
          ques_id:q,
          Check:ch.Check,
          date:ch.date,
      }
      return body;
    }
    
}

export default function CustomizedButtons({loggedInAs}) {
  const classes = useStyles();
  const [process,setProcess]=useState("");


   
  const Upload=async ()=>{
    var payLoad=[];
      var keys = Object.keys(localStorage);
       var i = keys.length;
    setProcess("Uploading ... ");
    while ( i-- ) {
        if(keys[i]==="Testing")
        continue;
        payLoad.push( getItem(keys[i]));
    }
    // console.log(payLoad);
    // use flag for check
     await fetch('https://harshit-resource.herokuapp.com/upload',{
                method:'post',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({
                user_id:loggedInAs,
                payLoad,
                })
                })
                .then(response=>response.json())
                .then(success=>{
                    setProcess("Uploaded");
                    return success;
                })
                .catch((err)=>{
                    console.log(err);
                    setProcess("failed");
                    return false;        
                }); 
                
                // console.log("flag=",flag);
    }

    const Download=async ()=>{
          
          setProcess("Downloading ... ");
          const flag=await fetch('https://harshit-resource.herokuapp.com/download',{
          method:'post',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({
          user_id:loggedInAs,
          })
          })
          .then(response=>response.json())
          .then(success=>{
              return success;
          })
          .catch((err)=>{
              console.log(err);
              return [];        
          }); 
          
          // console.log("flag=",flag);
          localStorage.clear();
          for(var i=0;i<flag.length;i++)
          {
            var val={
              Check:flag[i].Check,
              date:flag[i].date,
            }
            localStorage.setItem(flag[i].ques_id,JSON.stringify(val));
          }
          setProcess("Downloaded you can see the changes");

      }

  return (
    <div>
      <ColorButton variant="contained" color="primary" className={classes.margin} onClick={(e)=>Download(e)} >
        Download &emsp; <CloudDownladIcon />
      </ColorButton>
      <ColorButton variant="contained" color="primary" className={classes.margin} onClick={(e)=>Upload(e)} >
        Upload &emsp; <CloudUploadIcon />
      </ColorButton>
      <br />
      <p>{process}</p>   
    </div>
  );
}
