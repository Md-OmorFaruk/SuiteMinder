
import Swal from "sweetalert2";

const MyBookCofirmDone = ({ allBook }) => {
      const {_id, image, title, pricePerNight } = allBook;
      const handleBooking = (e) => {
            e.preventDefault();
            const form = e.target;
            const name = form.name.value;
            const email = form.email.value;
            const date = form.date.value;
            
            const bookingInfo = {
              _id,
              name,
              email,
              image,
              date,
              title,
              pricePerNight,
            };
            console.log(bookingInfo);

            
             fetch("http://localhost:5000/booking", {
               method: "POST",
               headers: {
                 "Content-Type": "application/json",
               },
               body: JSON.stringify(bookingInfo),
             })
               .then((res) => {
                 if (!res.ok) {
                   throw new Error("Network response was not ok");
                 }
                 return res.json();
               })
               .then((data) => {
                 // Handle successful booking (e.g., show confirmation message)
                 Swal.fire("Booking Success");
               })
               .catch((error) => {
                 // Handle error response (room already booked)
                 Swal.fire({
                   title: "Booking Failed",
                   text: "This room is already booked Try another room",
                 });
               });

      }
      return (
        <div className="max-w-4xl mx-auto">
          <div className="max-w-3xl mx-auto mt-10 mb-10">
            <h1 className="text-4xl font-font1 font-bold text-center mb-5">
              Your Information For Booking
            </h1>
            <form onSubmit={handleBooking}>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  className="input input-bordered input-warning w-full max-w-full"
                />
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered input-warning w-full max-w-full"
                />
                <input
                  type="date"
                  name="date"
                  placeholder="Type here"
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
      );
};

export default MyBookCofirmDone;