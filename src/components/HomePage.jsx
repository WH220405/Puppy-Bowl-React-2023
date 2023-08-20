
import classes from './HomePage.module.css'
//import image from '../assets/image.jpg';
import PuppyBowlBackground from '../assets/PuppyBowlBackground.jpeg';
//import NavBar from './NavBar'


function HomePage(){
    return(
     <>
     
      <header className={classes.header}>
        <h1>Puppy Bowl React</h1>
      </header>
      <div className={classes['main-image']}>
        <img src={PuppyBowlBackground}  alt="A puppy bowl background image"/>
      </div>
    </> 
    )
}
export default HomePage;