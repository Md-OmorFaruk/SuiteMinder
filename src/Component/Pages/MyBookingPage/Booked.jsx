import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
const Booked = ({ booked, handleDelete }) => {
  const { _id,image, title, pricePerNight, date } = booked;

  return (
    <tr>
      <th>
        <AiFillDelete
          className="text-3xl text-red-500 "
          onClick={() => handleDelete(_id)}
        />
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-20 h-20">
              <img src={image} alt="Avatar Tailwind CSS Component " />
            </div>
          </div>
          <div>
            <div className="font-bold font-font2 text-lg">{title}</div>
          </div>
        </div>
      </td>
      <td className="font-bold font-font2 text-lg">{date}</td>
      <td className="font-bold font-font2 text-lg">${pricePerNight}</td>
      <th>
        <Link to={`/updateBooked/${_id}`}><button className="btn btn-ghost btn-lg">Click to Update</button></Link>
      </th>
    </tr>
  );
};

export default Booked;
