import { useLoaderData } from "react-router-dom";
import Header from "./Header";
import MyBookCofirmDone from "./MyBookCofirmDone";

const MyBookConfirm = () => {
      const allBooking = useLoaderData()
      return (
        <div>
                  <Header></Header>
                  {
                        allBooking.map(allBook => <MyBookCofirmDone
                              key={allBook._id}z
                              allBook={allBook}
                        ></MyBookCofirmDone>)
                  }
                 
        </div>
      );
};

export default MyBookConfirm;