import { RouterProvider } from 'react-router-dom';
import './App.css';
import SelectorProvider from './Contexts/SelectorProvider';
import { routes } from './routes/routes';

function App() {
  return (
    <div className="App">
      <SelectorProvider>
        <RouterProvider router={routes} />
      </SelectorProvider>
    </div>
  );
}

export default App;
