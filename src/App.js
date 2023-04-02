import {  useCallback,useEffect,useState} from 'react';
import './App.css';
import Recipe from './Recipe';
import loupeImg from './search.png';
import video from './food.mp4'


function App() {

  const MY_ID = "7391fdd1";
  const MY_KEY ="bef58dfcb3ff0fe0c10feaee88a8d114";

  const [mySearch, setMySearch] = useState('');
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState('icecream')

  const getRecipe = useCallback( async () => {
    const response = await fetch (`https://api.edamam.com/search?q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = await response.json();
    setMyRecipes(data.hits)
  },[wordSubmitted])

  useEffect(()=> {
    getRecipe()
  },[getRecipe])

  const myRecipeSearch = (e) =>{
    setMySearch(e.target.value)
  }
  
const finalSearch = (e) => {
  e.preventDefault();
  setWordSubmitted(mySearch);
}
  return (
    <div className="App">
      <div className="container">
      <video autoPlay muted loop>
            <source src={video} type="video/mp4" />
          </video>
          <h1 className='title'>Find a Recipe</h1>
      </div>
      
      <div className='container'>
        <form onSubmit={finalSearch} className="form">
            <input className='search' placeholder='Search...' onChange={myRecipeSearch} value={mySearch}>
            </input>
            <button type='submit' className='loupe'>
            <img src={loupeImg} alt="loupe" width="30px"/>
          </button>
        </form>
  
        </div>
        
        <div className='containerTwo'>
        {
              myRecipes.map((element,index) => (
                <Recipe key={index} label={element.recipe.label} image={element.recipe.image} calories={element.recipe.calories}
                ingredients={element.recipe.ingredientLines}/>
              ))
            }
        
        </div>
            

      

      
    </div>
    
  );
}

export default App;
