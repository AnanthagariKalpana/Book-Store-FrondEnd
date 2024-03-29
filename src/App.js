import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import './App.css';
import Dashboard from './components/Dashboard';
import  BookContainer  from './components/BookContainer';
import BookInfo from './components/BookInfo';
import Cart from './components/Cart';
import Login from './components/Login';
import BookStore from './utils/store-redux/BookStore.js'
import { Provider } from 'react-redux';

const AppRoutes = createBrowserRouter([
  {
    path:"/",
      element:<Login/>
    },
    {
    path :"dash",
    element : <Dashboard/>,
    children: [
      { 
        path: "book", 
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
  
])
function App() {
  return (
    <Provider store={BookStore}>

      <RouterProvider router ={AppRoutes}></RouterProvider>
    </Provider>
  );
}

export default App;
