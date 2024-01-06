import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home/Home";
import Jobs from "./pages/jobs/Jobs";
import Dashbord from "./pages/dashbord/Dashbord";
import About from "./pages/about/About";

// All Routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route path="/" element={<Home />} />
       <Route path="/about" element={<About/>}/>
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/dashbord" element= {<Dashbord/>}/>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
