import React from 'react';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import store from './store';
import { Provider } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';
import { setCurrentUser, logoutUser } from './actions/auth.action';
import PrivateRoute from './HOC/PrivateRoute';
import Login from './components/auth/Login/Login';
import Register from './components/auth/Register/Register';
import Profile from './components/Profile/Profile';
import Footer from './components/layouts/Footer/Footer';
import BorrowerPick from './components/Borrower/BorrowerPick/BorrowerPick';
import Home from './components/Home/Home';
import Post1 from './components/Borrower/Posts/Post1';
import Post2 from './components/Borrower/Posts/Post2';
import Post3 from './components/Borrower/Posts/Post3';
import Post4 from './components/Borrower/Posts/Post4';
import Post5 from './components/Borrower/Posts/Post5';
import PostCreate from './components/Borrower/Posts/PostCreate';
import Recharge from './components/Borrower/Recharge/Recharge';
import Exchange from './components/LoanUser/Exchange';
import LookupUser from './components/LoanUser/LookupUser';
import BorrowHistory from './components/Borrower/TotalStatistic/History';
import ExchargeSubscribe from './components/LoanUser/ExchargeSubscribe';
import PostSuccess from './components/Borrower/Posts/PostSuccess';
import PuchasedHistory from './components/LoanUser/PuchasedHistory';
import Header from './components/layouts/Header/Header';
if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user is authenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expried token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    // clear current profile
    // store.dispatch(clearCurrentProfile());
    //redirect to login
    window.location.href = '/login';
  }
}
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <div className="page-wrapper page-home">
          <div className="main-page">
            <div className="container py-5">
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/exchanges" component={Exchange} />
              <PrivateRoute exact path="/profile" component={Profile} />
              {/* Khu vực dành cho bọn đoé có tiền */}
              <PrivateRoute exact path="/borrower" component={BorrowerPick} />
              <PrivateRoute exact path="/recharge" component={Recharge} />
              <PrivateRoute exact path="/loanlookup" component={LookupUser} />
              <PrivateRoute
                exact
                path="/loanhistory"
                component={BorrowHistory}
              />
              <PrivateRoute
                exact
                path="/loanmanagement"
                component={ExchargeSubscribe}
              />
              <PrivateRoute
                exact
                path="/purchasedhistory"
                component={PuchasedHistory}
              />
              <PrivateRoute
                exact
                path="/borrower/create/:type"
                component={PostCreate}
              />
              <PrivateRoute
                exact
                path="/borrower/create/:id/1"
                component={Post1}
              />
              <PrivateRoute
                exact
                path="/borrower/create/:id/2"
                component={Post2}
              />
              <PrivateRoute
                exact
                path="/borrower/create/:id/3"
                component={Post3}
              />
              <PrivateRoute
                exact
                path="/borrower/create/:id/4"
                component={Post4}
              />
              <PrivateRoute
                exact
                path="/borrower/create/:id/5"
                component={Post5}
              />
              <PrivateRoute
                exact
                path="/borrower/success"
                component={PostSuccess}
              />

              {/* Khu vực dành cho bọn thừa tiền */}
            </div>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
