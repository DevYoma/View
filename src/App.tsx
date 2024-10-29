import './App.scss'
import Dashboard from './components/Dashboard/Dashboard';
import { LoadingProvider } from './context/LoadingContext';

function App() {
  return (
      <div className="app">
        <LoadingProvider>
          <Dashboard />
        </LoadingProvider>
      </div>
  );
}

export default App
