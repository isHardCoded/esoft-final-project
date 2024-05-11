import Router from "./routes/Router";
import { RouterProvider } from "react-router-dom";

const App = () => { 
  return (
    <div>
      <RouterProvider router={Router()} />
    </div>
  );
}

export default App;