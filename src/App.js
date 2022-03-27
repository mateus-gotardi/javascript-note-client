import React from 'react';
import './App.scss';
import 'bulma/css/bulma.min.css';
import Home from './screens/home';
import LoginScreen from './screens/auth/login';
import RegisterScreen from './screens/auth/register';
import NotesScreen from './screens/notes/index';
import EditUserScreen from './screens/users/edit';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutes from './components/auth/private_router';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<LoginScreen />} />
        <Route exact path='/register' element={<RegisterScreen />} />
        <Route element={<ProtectedRoutes />}>
          <Route exact path='/notes' element={<NotesScreen />} />
          <Route exact path='/users/edit' element={<EditUserScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
