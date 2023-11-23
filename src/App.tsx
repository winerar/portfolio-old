import Skills from "./pages/Skills";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/Landing";

const router = createBrowserRouter([
  { path: "*", Component: Landing },
  { path: "skills", Component: Skills },
]);

const App: React.FC = (): JSX.Element => {
  return <RouterProvider router={router} />;
};

export default App;
