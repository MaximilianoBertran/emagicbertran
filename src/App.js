import './App.css';
import GlobalProvider from './context/GlobalProvider';
import Index from './routes/Index';

function App() {

  return (
    <div className="d-flex flex-column min-vh-100">
      <GlobalProvider>
        <Index />
      </GlobalProvider>
    </div>
  )
}

export default App;
