import Header from "../../ShareComponent/Header";
import HelmetPage from "../../ShareComponent/HelmetPage";
import Booked from "./Booked";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const MyBookingPage = () => {
  const { user } = useContext(AuthContext);
  const [booking, setBooking] = useState([]);
  const url = `https://hotel-management-server-9gq04ah9z-mdomor-faruks-projects.vercel.app/booking?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBooking(data);
      });
  }, [url]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://hotel-management-server-9gq04ah9z-mdomor-faruks-projects.vercel.app/booking/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              // <-- Corrected property name
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            } else {
              Swal.fire({
                title: "Error!",
                text: "Failed to delete the file.",
                icon: "error",
              });
            }
          })
          .catch((error) => {
            console.error("Error:", error);
            Swal.fire({
              title: "Error!",
              text: "An error occurred while deleting the file.",
              icon: "error",
            });
          });
        const remaining = booking.filter((data) => data._id !== _id);
        setBooking(remaining);
        console.log(remaining);
      }
    });
  };

  return (
    <div className="max-w-screen-xl mx-auto mb-20">
      <HelmetPage title={"SuiteMinder | MyBooking"} />
      <Header className="static start-1"></Header>
      <h1 className="text-5xl font-bold font-font1  mb-10 text-yellow-500 text-center pt-10">
        My Booking
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="text-yellow-500 font-font1 font-bold text-2xl">
                Name
              </th>
              <th className="text-yellow-500 font-font1 font-bold text-2xl">
                Date
              </th>
              <th className="text-yellow-500 font-font1 font-bold text-2xl">
                Price
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {booking.map((booked) => (
              <Booked
                key={booked._id}
                booked={booked}
                handleDelete={handleDelete}
              ></Booked>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default MyBookingPage;
