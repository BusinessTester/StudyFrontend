import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App'
import Advertisement from './components/Advertisement'
import Confirmation from './components/Confirmation'
import Footer from './components/Footer'
import ForgotPassword from './pages/ForgotPassword'
import Navbar from './components/Navbar'
import Cart from './pages/Cart'
import Homepage from './pages/Homepage'
import MainPage from './pages/MainPage'
import NewPage from './pages/NewPage'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Tester from './Tester'
import ResetPassword from './pages/ResetPassword'
import MyNotes from './pages/MyNotes'
import Tester2 from './Tester2'
import PaymentConfirmation from './pages/PaymentConfirmation'
import AfterPayment from './pages/AfterPayment'
import SubjectsEditor from './pages/SubjectsEditor'
import MainPageLoader from './pages/MainPageLoader'
import SignupSuccess from './pages/SignupSuccess'
import AllUsers from './pages/AllUsers'
import ResendConfirm from './pages/ResendConfirm'
import UserInfo from './pages/UserInfo'
import UpdateSubject from './pages/UpdateSubject'


const Path = () => {
  return (
    <>
    <Router>
        {/* <Navbar/> */}
        {/* <Advertisement/> */}
        <Routes>
            <Route path='/test' element={<Tester/>}/>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/newpage' element={<NewPage/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/home' element={<Homepage/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/signin' element={<SignIn/>}/>

            <Route path='/confirmation/:token' element={<Confirmation/>}/>
            <Route path='/signin-forgotpassword'element={<ForgotPassword/>}/>
            <Route path='/resetpassword/:token'element={<ResetPassword/>}/>
            <Route path='/purchases/:id'element={<MyNotes/>}/>
            <Route path='/purchases/payment'element={<PaymentConfirmation/>}/>
            <Route path='/purchases/afterpayment'element={<AfterPayment/>}/>
            <Route path='/admin/subjectseditor' element={<SubjectsEditor/>}/>
            
            <Route path='/signup-success' element={<SignupSuccess/>}/>
            <Route path='/admin/allusers' element={<AllUsers/>}/>


{/* 3 new paths are added  */}

<Route path='/admin/userinfo/:id' element={<UserInfo/>}/>
            <Route path='/admin/updatesubject/:id' element={<UpdateSubject/>}/>

            <Route path='/resendconfirmation'element={<ResendConfirm/>}/>
{/* 3 new paths are added */}


<Route path='/mainpageloader' element={<MainPageLoader/>}/>


            <Route path='/tester2'element={<Tester2/>}/>









            <Route path="/app" element={<App/>}/>

        </Routes>
        {/* <Footer/> */}

    </Router>
    
    
    
    
    </>
  )
}

export default Path