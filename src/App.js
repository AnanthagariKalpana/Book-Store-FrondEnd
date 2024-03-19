import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import './App.css';
import Dashboard from './components/Dashboard';


const AppRoutes = createBrowserRouter([
  {
    path :"/",
    element : <Dashboard/>,
  }
])
function App() {
  return (
    <RouterProvider router ={AppRoutes}></RouterProvider>
  );
}

export default App;
