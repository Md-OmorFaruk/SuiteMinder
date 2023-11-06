import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Component/Pages/ErrorPage/ErrorPage";
import HomePage from "../Component/Pages/HomePage/HomePage";
import MainLayout from "../Component/Pages/MainLayOut/MainLayout";
import RoomPage from "../Component/Pages/RoomPage/RoomPage";
import MyBookingPage from "../Component/Pages/MyBookingPage/MyBookingPage";
import LoginPage from "../Component/Pages/LoginPage/LoginPage"
import RegisterPage from "../Component/Pages/RegisterPage/RegisterPage"
import PrivateRoute from "../Component/Pages/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/room",
        element: <RoomPage />,
      },
      {
        path: "/myBooking",
        element: (
          <PrivateRoute>
            <MyBookingPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
]);

export default router
