import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import {
  createBrowserRouter,
  Link,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Landing from "./pages/Landing";

const router = createBrowserRouter([
  { path: "*", Component: Landing },
  { path: "skills", Component: Skills },
]);

const App: React.FC = (): JSX.Element => {
  return <RouterProvider router={router} />;
};

export default App;
