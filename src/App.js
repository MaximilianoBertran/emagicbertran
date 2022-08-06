import './App.css';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <ItemListContainer />
    </div>
  );
}

export default App;
