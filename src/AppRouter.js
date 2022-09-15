import {BrowserRouter, Routes, Route} from 'react-router-dom'
import EditToppings from './components/EditToppings';
import Home from './components/Home'
import Owner from './components/Owner';
import Chef from './components/Chef'



function AppRouter() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/owner' element={<Owner/>}/>
      <Route path='/edit' element={<EditToppings/>}></Route>
      <Route path='/chef' element={<Chef/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default AppRouter;