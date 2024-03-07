import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import AllPosts from './components/Posts/AllPosts';
import Error from './components/Error/Error';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import OpenRoute from './components/Auth/OpenRoute';

function App() {
  return (
    <div className="w-screen min-h-screen bg-blueWhite text-slate-600 overflow-x-hidden">
      <Routes>
        
        {/* Home path */}        
        <Route path="/login" element={<OpenRoute />}>
          <Route path="/login" element={<Login/>}/>
        </Route>
        {/* Home path */}
        <Route path="/signup" element={<OpenRoute />}>
          <Route path='/signup' element={<Signup/>}/>
        </Route>
        {/* Home path */}
        <Route path="/" element={<ProtectedRoute/>}>
          <Route path='/' element={<AllPosts/>}/>
        </Route>
        {/* All Paths */}
        <Route path='*' element={<Error/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
