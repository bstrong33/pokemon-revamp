import './reset.css';
import './App.css';
import PokemonTeam from './components/PokemonTeam';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <img className='pokeball' src='https://img.rankedboost.com/wp-content/uploads/2016/07/PokeBall.png' alt='Pokéball' />
        <h1 className='title'>Pokémon</h1>
        <h3>M</h3>
      </div>
      <PokemonTeam />
    </div>
  );
}

export default App;
