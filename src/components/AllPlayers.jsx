import { getAllPlayers, deletePlayer} from '../API/FunctionHandler.js'
import {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import classes from './Allplayers.module.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';




 const AllPlayers = (props) => {
    const [players, setPlayers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState(null);
    const [toggle, setToggle] = useState(false)

    const navigate = useNavigate();

    // a function use effect should not return a promise
    useEffect(()=>{
    async function getPlayer(){
      try{
      const response = await getAllPlayers();
      setPlayers(response)
      setIsLoading(false);
    } catch(error){
        console.log(error);
       }
    }
    getPlayer();
    },[]);
  
    if(isLoading) {
      return(
        <section className="puppy-isLoading">
          <p>Loading...</p>
        </section>
      )
    }
    function clickHandler(playerId){
      navigate(`/players/${playerId}`);
    };



       const deleteHandler = async () => {
       const response = await deletePlayer(players);
       const data = await response.json();
       return data.target.value
     }

      

       function searchBar (e){
        e.preventDefault();
        const result = players.filter(item => item.name.toLowerCase().includes(searchValue));
        setSearchResult(result[0])
        setToggle(true)
       }

    return ( 
    <div className={classes.allplayers} >
     
        <h1 className={classes.playerName}>All Players</h1>
        
       <form className={classes['search-container']}  onSubmit={searchBar}>
        <label className={classes['label-search']}>Search</label>
        <input className={classes.input} type="text" id="search" onChange={e=>setSearchValue(e.target.value)}/>
        <Button className={classes['btn-search']} onClick={setSearchResult} as="input" type="submit" value="Submit" />{' '}
       </form>  

       <div>
        {toggle ?
        <div>
          <p>{searchResult.name} is your result</p>
        <img src={searchResult.imageUrl} />
        </div>
         :''} 
       {toggle ? <button onClick={()=>setToggle(!toggle)}>View all dogs</button> : 
       <button onClick={()=>setToggle(!toggle)}>View Search Results</button>}
       </div>
       
      {!toggle ?  

         players.map((player)=>(
          <Card className={classes.container}>
            <Card.Body className={classes.body}>
                 <Card.Text className={classes.text}>
                  <h1 className={classes.h1}>Name:{player.name}</h1>
                  <h1 className={classes.h1}>Breed:{player.breed}</h1>
                  <h1 className={classes.h1}>Teamid:{player.teamId}</h1>
                  <img className={classes.images}src  ={player.imageUrl} />
                  
                </Card.Text>
                 <Button onClick={()=>clickHandler(player.id)} variant="outline-success">View Puppy</Button>{' '}              
               <Button onClick={deleteHandler} variant="outline-danger">Delete Puppy</Button>{' '}
         </Card.Body>
        </Card>          
         )) : '' }
    </div>
    );
};

export default AllPlayers;