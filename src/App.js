import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Appointments from './pages/Appointments/Appointments';
import RequireAuth from './RequireAuth';


function App() {
  const location = useLocation();

  // const token = localStorage.getItem('token');
  // console.log(token);

  // useEffect(() => {
  //   const config = {
  //     headers: {
  //       token
  //     }
  //   }
  //   axios.get(url + 'verify-token', config)
  //     .then(res => {
  //       console.log(res.data.valid);
  //       // if (!res.data.valid) {
  //       //   localStorage.removeItem('token')
  //       // }
  //     })
  // }, [])


  return <div className='text-dark'>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/appointments' element={<RequireAuth>
        <Appointments />
      </RequireAuth>} />
    </Routes>
    {location.pathname === '/login' || location.pathname === '/register' ? <></> : <Footer />}
  </div>;
}

export default App;
