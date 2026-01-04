import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { Home } from './pages/Home';
import { Movies } from './pages/Movies/Movies';
import { Series } from './pages/Series/Series';
import { CreateMovie } from './pages/Movies/CreateMovie';
import { Posts } from './pages/Posts';
import { ShowMovie } from './pages/Movies/ShowMovie';
import { MovieEdit } from './pages/Movies/MovieEdit';
import { CreateSerie } from './pages/Series/CreateSerie';
import { ShowSerie } from './pages/Series/ShowSerie';
import { SerieEdit } from './pages/Series/SerieEdit';
import { NotFound } from './pages/NotFound';
import { Anime } from './pages/Anime/Anime';
import { AddAnime } from './pages/Anime/AddAnime';
import { Animehow } from './pages/Anime/AnimeShow';
import { AnimeEdit } from './pages/Anime/AnimeEdit';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { useContext } from 'react';
import { AppContext } from './Components/AppContext';
import { ShowSearch } from './pages/ShowSearch';
import { Profile } from './pages/Profile';
import { ProfileEdit } from './pages/ProfileEdit';

function App() {

 const {user} = useContext(AppContext);
  
  return (
    <>
    
   <BrowserRouter>
   <Routes>
    <Route index element={<Home/>} />
    <Route path='*' element={<NotFound/>} />
    <Route path='/register' element={user&&user.id?<Home/>:<Register/>} />
    <Route path='/login' element={user&&user.id?<Home/>:<Login/>} />

    <Route path='/movies' element={user&&user.id?<Movies/>:<Home/>} />
    <Route path='/series' element={user&&user.id?<Series/>:<Home/>} />
    <Route path='/anime' element={user&&user.id?<Anime/>:<Home/>} />
    <Route path='/createmovie' element={user&&user.id?<CreateMovie/>:<Home/>} />
    <Route path='/posts' element={user&&user.id?<Posts/>:<Home/>}></Route>

    <Route path="/movies/:id" element={user&&user.id?<ShowMovie/>:<Home/>}/>
    <Route path='movies/:id/edit' element={user&&user.id?<MovieEdit/>:<Home/>} />

    <Route path='/createserie' element={user&&user.id?<CreateSerie/>:<Home/>}/>
    <Route path="/series/:id" element={user&&user.id?<ShowSerie/>:<Home/>}/>
    <Route path='/series/:id/edit' element={user&&user.id?<SerieEdit/>:<Home/>}/>

    <Route path='/addanime' element={user&&user.id?<AddAnime/>:<Home/>} />
    <Route path='/anime/:id' element={user&&user.id?<Animehow/>:<Home/>} />
    <Route path='/anime/:id/edit' element={user&&user.id?<AnimeEdit/>:<Home/>} />

        <Route path="/Search/:id" element={<ShowSearch/>}/>
        <Route path='/profile' element={user&&user.id?<Profile/>:<Home/>}/>
        <Route path='/profile/:id/edit' element={user&&user.id?<ProfileEdit/>:<Home/>} />

   </Routes>
   </BrowserRouter>
    
    </>
  );
}

export default App
