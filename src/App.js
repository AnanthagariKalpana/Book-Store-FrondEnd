import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import './App.css';
import Dashboard from './components/Dashboard';
import  BookContainer  from './components/BookContainer';
import BookInfo from './components/BookInfo';

const AppRoutes = createBrowserRouter([
  {
    path :"/",
    element : <Dashboard/>,
    children: [
      { 
        path: "/", 
        element: <BookContainer />
      },
      {
        path:"book/:_id",
        element:<BookInfo/>
      }
    ]
  }
])
function App() {
  return (
    <RouterProvider router ={AppRoutes}></RouterProvider>
  );
}

export default App;
