import './App.css';
import GlobalProvider from './context/GlobalProvider';
import UserProvider from './context/UserProvider';
import Index from './routes/Index';

function App() {

  return (
    <div className="d-flex flex-column min-vh-100">
      <UserProvider>
        <GlobalProvider>
          <Index />
        </GlobalProvider>
      </UserProvider>
    </div>
  )
}

export default App;
