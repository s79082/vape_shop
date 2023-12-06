import './App.css';
import ProductCard from './components/ProductCard';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './routes/Root';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "products",
          element: <ProductCard></ProductCard>
        }
      ]
    },
  ]);

  return (
      <div className="App">
        <RouterProvider router={router} />      
      </div>

  );
}

export default App;
