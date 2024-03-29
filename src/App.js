import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import './App.css';
import Dashboard from './components/Dashboard';
import  BookContainer  from './components/BookContainer';
import BookInfo from './components/BookInfo';
import Cart from './components/Cart';
import Login from './components/Login';
import BookStore from './utils/store-redux/BookStore.js'
import { Provider } from 'react-redux';
import Wishlist from './components/Wishlist.js';


const AppRoutes = createBrowserRouter([
  {
    path:"/login",
      element:<Login/>
    },
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
      },
      {
        path:"cart",
        element:<Cart/>
      },
      { 
        path: "wishlist", 
        element: <Wishlist /> 
      },
      
    ],
  },
  
])
function App() {
  return (
    <Provider store={BookStore}>

      <RouterProvider router ={AppRoutes}></RouterProvider>
    </Provider>
  );
}

export default App;
