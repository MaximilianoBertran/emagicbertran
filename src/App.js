import './App.css';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <div className='body'>
        <ItemListContainer />
      </div>
    </div>
  );
}

export default App;
