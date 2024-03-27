import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import './App.css';
import Dashboard from './components/Dashboard';
import  BookContainer  from './components/BookContainer';
import BookInfo from './components/BookInfo';
import Cart from './components/Cart';
import Login from './components/Login';

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
      },{
        path:"cart",
        element:<Cart/>
      }
    ],
  },
  {
  path:"/login",
    element:<Login/>
  }
])
function App() {
  return (
    <RouterProvider router ={AppRoutes}></RouterProvider>
  );
}

export default App;
