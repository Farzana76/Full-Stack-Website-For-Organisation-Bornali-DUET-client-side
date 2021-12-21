import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutBornali from './Components/About/AboutBornali/AboutBornali';
import AboutDDAC from './Components/About/AboutDDAC/AboutDDAC';
import AboutDUET from './Components/About/AboutDUET/AboutDUET';
// import Footer from './Components/Footer/Footer';
// import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
// import Menu from './Components/Menu/Menu';
import Login from './Components/Register/Login/Login';
// import Menu from './Components/Menu/Menu';
import Registration from './Components/Register/Registration/Registration';
import AuthProvider from './context/AuthProvider';
// import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
// import Pay from './Components/Dashboard/Pay/Pay';
// import MyOrder from './Components/Dashboard/MyOrder/MyOrder';
// import Review from './Components/Dashboard/Review/Review';
import AddMessages from './Components/Admin/AddMessages/AddMessages';
// import MakeAdmin from './Components/Admin/MakeAdmin/MakeAdmin';
// import ManageAllOrders from './Components/Admin/ManageAllOrders/ManageAllOrders';
// import ManageProducts from './Components/Admin/ManageProducts/ManageProducts';
// import Explore from './Components/Explore/Explore';
// import Purchase from './Components/Purchase/Purchase';
import AdminRoute from './Components/Admin/AdminRoute/AdminRoute';
import MakeAdmin from './Components/Admin/MakeAdmin/MakeAdmin';
import PresidentSecretaryForm from './Components/Admin/CurrentPanel/PresidentSecretaryForm/PresidentSecretaryForm';
import CurrentMembersForm from './Components/Admin/CurrentPanel/CurrentMembersForm/CurrentMembersForm';
import AdvisoryCommitteeForm from './Components/Admin/AdvisoryCommitteeForm/AdvisoryCommitteeForm';
import StandingCommitteeForm from './Components/Admin/StandingCommitteeForm/StandingCommitteeForm';
import UpdateBornali from './Components/Admin/Update Bornali/UpdateBornali';
import GalleryForm from './Components/Admin/GalleryForm/GalleryForm';
import GalleryShow from './Components/Gallery/GalleryShow/GalleryShow';
import GalleryFormFinal from './Components/Admin/GalleryForm/GalleryFormFinal';
import Phone from './Components/Register/Phone/Phone';
import PhoneLogin from './Components/Register/PhoneLogin/PhoneLogin';
import DetailForm from './Components/Register/DetailForm/DetailForm';

function App() {
  return (
    <div className="App">
        <div className="App2">
          <AuthProvider>
            <BrowserRouter>
              {/* <Menu></Menu> */}
              <Switch>
                <Route exact path="/">
                  <Home></Home>
                </Route>
                <Route path="/home">
                  <Home></Home>
                </Route>
                <Route path="/registration">
                  <Registration></Registration>
                </Route>
                <Route path="/login">
                  <Login></Login>
                </Route>
                <Route path="/phoneLogin">
                  <PhoneLogin></PhoneLogin>
                </Route>
                <Route path="/detailForm">
                  <DetailForm></DetailForm>
                </Route>
                <Route path="/aboutBornali">
                  <AboutBornali></AboutBornali>
                </Route>
                <Route path="/aboutDDAC">
                  <AboutDDAC></AboutDDAC>
                </Route>
                <Route path="/aboutDUET">
                  <AboutDUET></AboutDUET>
                </Route>
                <PrivateRoute path="/dashboard">
                  <Dashboard></Dashboard>
                </PrivateRoute>
                <Route path="/addMessage">
                  <AddMessages></AddMessages>
                </Route>
                <Route path="/makeAdmin">
                  <MakeAdmin></MakeAdmin>
                </Route>
                {/* <Route path="/addEvent">
                  <GalleryForm></GalleryForm>
                </Route> */}
                <Route path="/addEvent">
                  <GalleryFormFinal></GalleryFormFinal>
                </Route>
                <Route path="/gallery">
                  <GalleryShow></GalleryShow>
                </Route>
                <Route path="/updateBornali">
                  <UpdateBornali></UpdateBornali>
                </Route>
                <Route path="/addAdvisor">
                  <AdvisoryCommitteeForm></AdvisoryCommitteeForm>
                </Route>
                <Route path="/addps">
                  <PresidentSecretaryForm></PresidentSecretaryForm>
                </Route>
                <Route path="/addCurrentMembers">
                  <CurrentMembersForm></CurrentMembersForm>
                </Route>
                <Route path="/addStandingCommittee">
                  <StandingCommitteeForm></StandingCommitteeForm>
                </Route>
                {/* 
                
                <PrivateRoute path="/pay">
                  <Pay></Pay>
                </PrivateRoute>
                <PrivateRoute path="/myOrders/:email&&:name">
                  <MyOrder></MyOrder>
                </PrivateRoute>
                <PrivateRoute path="/review">
                  <Review></Review>
                </PrivateRoute>
                <AdminRoute path="/manageAllOrders">
                  <ManageAllOrders></ManageAllOrders>
                </AdminRoute>
                <AdminRoute path="/manageProducts">
                  <ManageProducts></ManageProducts>
                </AdminRoute>
                <PrivateRoute path="/product/:pid&&:title">
                  <Purchase></Purchase>
                </PrivateRoute> */}
                {/*
                <Route path="*">
                  <NotFound></NotFound>
                </Route> */}
              </Switch>
            </BrowserRouter>
          </AuthProvider>
        </div>
    </div>
  );
}

export default App;


