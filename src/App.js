import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Explore from './pages/Explore';
import ForgotPassword from './pages/ForgotPassword';
import Offesr from './pages/Offers';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './components/PrivateRoute';
import Category from './pages/Category';
import CreateListing from './pages/CreateListing';
import Listing from './pages/Listing';
import Contact from './pages/Contact';



function App() {
  return (
    < >
    <Router>
      <Routes>
        <Route path='/' element={<Explore/>} />
        <Route path='/offers' element={<Offesr/>} />
        <Route path='/category/:categoryName' element={<Category/>} />
        <Route path='/profile' element={<PrivateRoute/>} >
             <Route path='/profile' element={<Profile/>} />
        </Route>
        <Route path='/sign-in' element={<Signin/>} />
        <Route path='/sign-up' element={<Signup/>} />
        <Route path='/forgot-password' element={<ForgotPassword/>} />
        <Route path='/create-listing' element={<CreateListing/>} />
        <Route path='/category/:categoryName/:listingId' element={<Listing/>} />
        <Route path='/contact/:landlordId' element={<Contact/>} />
      </Routes>
      <Navbar/>
    </Router>
    <ToastContainer/>
    </>
  );
}

export default App;
