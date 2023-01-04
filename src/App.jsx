import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/shared/Header/Header";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Login/Login/Login";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import TourDetails from "./pages/TourDetails/TourDetails";
import Register from "./pages/Register/Register";
import AuthProvider from "./context/AuthProvider";
import MyBookings from "./pages/MyBookings/MyBookings";
import AllBookings from "./pages/AllBookings/AllBookings";
import AddPlace from "./pages/AddPlace/AddPlace";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/all-bookings" element={<AllBookings />} />
          <Route path="/add-place" element={<AddPlace />} />
          <Route
            path="/tours/:tourId"
            element={
              <PrivateRoute>
                <TourDetails />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
