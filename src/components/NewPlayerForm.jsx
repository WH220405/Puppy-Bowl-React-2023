import { useState } from 'react';
import { postPlayer } from '../API/FunctionHandler.js';
import classes from './NewPlayerForm.module.css';
import Button from 'react-bootstrap/Button';


const  NewPlayerForm = () => {
    const [puppyName, setPuppyName] = useState("");
    const [puppyBreed, setPuppyBreed] = useState("");
    const [playerStatus, setPlayerStatus] = useState("bench");
    const [imageUrl, setImageUel] = useState("");
    
   
    function onPuppyNameChanged(e){
        setPuppyName(e.target.value)
    }
    function onPuppyBreedChanged(e){
        setPuppyBreed(e.target.value)
    }
    function onPuppyStatusChanged(e){
        setPlayerStatus(e.target.value)
    }
    function onPuppyImageUrlChanged(e){
        setImageUel(e.target.value)
    }

    function submitHandler (event) {
        event.preventDefault();
       if(
        puppyName != "" && 
        puppyBreed != "" && 
        playerStatus !="" && 
        imageUrl!= "" && 
        teamId != "") 
        { 
       }
       const newPuppy = {
        name: puppyName,
        breed: puppyBreed,
        //status: playerStatus,
        imageUrl: imageUrl,
        teamId: teamId
       }
        postPlayer(newPuppy);
      }

    const resetHandler =()=>{
        setPuppyName('');
        setPuppyBreed('');

// we can dynamically update this state object whenever the inputChangeHandler is executed
    }
    return (
        
       <form onSubmit={submitHandler} className={classes.form} >
        <div className={classes['input-group']}>
            
                <label className={classes.label} htmlFor="name">NAME:</label>
                <input className={classes.input} onChange={onPuppyNameChanged}
              type="text" 
              id="name" /><br />
                   <label className={classes.label} htmlFor="breed">BREED:</label>
                <input className={classes.input} onChange={onPuppyBreedChanged}
              type="text" 
              id="breed" /><br />
                     <label className={classes.label} htmlFor="url">ImageUrl:</label>
                <input className={classes.input} onChange={onPuppyImageUrlChanged}
              type="text" 
              id="url" /><br />

            <label className={classes.label}>
          Status:
          <select className={classes.label}
            value={playerStatus}
            onChange={onPuppyStatusChanged}
          >
            <option value="bench">Bench</option>
            <option value="field">Field</option>
          </select>
        </label> 
        </div>
        <p className={classes.buttons}>

            <Button className={classes.button} variant="outline-warning" onClick={resetHandler} type="reset">Reset</Button>{' '}
            <Button className={classes.button} variant="outline-success">Add Player</Button>{' '}

        </p>
       </form>
    );
};

export default NewPlayerForm;