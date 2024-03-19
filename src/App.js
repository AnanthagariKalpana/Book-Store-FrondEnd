import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import './App.css';
import Dashboard from './components/Dashboard';
import  BookContainer  from './components/BookContainer';

const AppRoutes = createBrowserRouter([
  {
    path :"/",
    element : <Dashboard/>,
    children: [
      { 
        path: "/books", 
        element: <BookContainer />
      },
    ]
  }
])
function App() {
  return (
    <RouterProvider router ={AppRoutes}></RouterProvider>
  );
}

export default App;
