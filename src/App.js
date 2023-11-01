import React from 'react';
import Layout from './components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Error404 from './pages/Error404/Error404';
import Connexion from './pages/Connexion/Connexion';
import Profil from './pages/Profil/Profil';
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/profil/:id" element={<Profil />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}

export default App;