import { useLoaderData } from "react-router-dom";
import Header from "../../ShareComponent/Header";
import Swal from "sweetalert2";

const UpdateBooked = () => {
  const loadInfo = useLoaderData();
  const { _id, image, title, pricePerNight, name, email, date } = loadInfo;
  const handleUpdateBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const date = form.date.value;

    const bookingInfo = {
      name,
      email,
      date,
    };
    console.log(bookingInfo);
    fetch(
      `https://hotel-management-server-9gq04ah9z-mdomor-faruks-projects.vercel.app/booking/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(bookingInfo),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire("Update Successful");
      });
  };
  return (
    <div>
      <Header></Header>
      <div className="max-w-4xl mx-auto">
        <div className="max-w-3xl mx-auto mt-10 mb-10">
          <h1 className="text-4xl font-font1 font-bold text-center mb-5">
            Update Information
          </h1>
          <form onSubmit={handleUpdateBooking}>
            <div className="space-y-4">
              <input
                type="text"
                defaultValue={name}
                name="name"
                className="input input-bordered input-warning w-full max-w-full"
              />
              <input
                type="email"
                defaultValue={email}
                name="email"
                className="input input-bordered input-warning w-full max-w-full"
              />
              <input
                type="date"
                name="date"
                defaultValue={date}
                className="input input-bordered input-warning w-full max-w-full"
                required
              />

              <div className="flex justify-center">
                <input
                  type="submit"
                  value="Confirm"
                  className="text-black font-font1 bg-[#facc15] py-4 px-10 rounded-md hover:bg-sky-600"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateBooked;
