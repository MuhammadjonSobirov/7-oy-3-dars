import { Route, Routes, BrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/main-layout'
import HomePage from './pages/home'
import Login from './pages/login'
import Sms from './pages/sms'
import Servis from './pages/servis'
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />} >
                    <Route index element={<HomePage />} />
                    <Route path='/login' element={<Login />} />
                    <Route path= "/sms" element={<Sms />} />
                    <Route path="/servis" element={<Servis/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router