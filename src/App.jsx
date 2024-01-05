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
import ResetPassword from "./reset-password/ResetPassword";
import EmoloyeeAcount from "./employeeacound/EmoloyeeAcount";


// All Routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/dashbord" element= {<Dashbord/>}/>
      <Route path="/resetpassword" element= {<ResetPassword/>}/>
      <Route path="/employeeacount" element= {<EmoloyeeAcount/>}/>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
