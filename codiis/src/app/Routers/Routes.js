import React from 'react';
import { Routes, Route, Redirect } from 'react-router-dom';
import Login from '../Pages/Login';
import StreamVideo from '../Pages/StreamVideo';
import UploadVideo from '../Pages/UploadVideo';
import RegisterCustomer from '../Pages/RegisterCustomer';
import Plan from '../Pages/Plan';
import CustomerGroupMembers from '../Pages/CustomerGroupMembers';
import Favorites from '../Pages/Favorites';


const Routers = () => {
  return (
    <Routes>
        <Route path='/' exact Component={RegisterCustomer}/>
        <Route path='/login' exact Component={Login}/>
        <Route path='/stream-video' exact Component={StreamVideo}/>
        <Route path='/upload-video' exact Component={UploadVideo}/>
        <Route path='/plan' exact Component={Plan}/>
        <Route path='/group' exact Component={CustomerGroupMembers}/>
        <Route path='/favorite' exact Component={Favorites}/>
    </Routes>
  )
}

export default Routers