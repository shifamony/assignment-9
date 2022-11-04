
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './components/Home';
import Statistics from './components/Statistics';
import Questions from './components/Questions';
import Blog from './components/Blog'
import ErrorPage from './components/ErrorPage';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
     element: <Main></Main>,
     errorElement: <ErrorPage></ErrorPage>,
     children:[
      {
        path:'/',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Home></Home>,
      },
      {
        path:'home', element: <Home></Home>
        
      },
      {
        path:'/quize/:id',
        loader: async({params}) => {
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
        },
        element:<Questions></Questions>
      },
      {
        path:'/statistics', element: <Statistics></Statistics>
      },
      
      {
        path:'/blog', element: <Blog></Blog>
      },
     ]

    }
  ]);


  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
