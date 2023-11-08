import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Component/Pages/ErrorPage/ErrorPage";
import HomePage from "../Component/Pages/HomePage/HomePage";
import MainLayout from "../Component/Pages/MainLayOut/MainLayout";
import RoomPage from "../Component/Pages/RoomPage/RoomPage";
import MyBookingPage from "../Component/Pages/MyBookingPage/MyBookingPage";
import LoginPage from "../Component/Pages/LoginPage/LoginPage"
import RegisterPage from "../Component/Pages/RegisterPage/RegisterPage"
import PrivateRoute from "../Component/Pages/PrivateRoute/PrivateRoute";
import SingleDetails from "../Component/Pages/SingleDetails/SingleDetails";
import MyBookConfirm from "../Component/ShareComponent/MyBookConfirm";
import UpdateBooked from "../Component/Pages/MyBookingPage/UpdateBooked";


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
        loader: () => fetch("http://localhost:5000/rooms"),
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
      {
        path: "/details/:id",
        element: <SingleDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/details/${params.id}`),
      },
      {
        path: "/myBookConfirm/:id",
        element: <MyBookConfirm />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/details/${params.id}`),
      },
      {
        path: "/updateBooked/:id",
        element: <UpdateBooked />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/booking/${params.id}`),
      },
    ],
  },
]);

export default router
