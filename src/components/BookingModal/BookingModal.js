import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider";

const BookingModal = ({furniture, setFurniture}) => {
    const {name, resalePrice} = furniture;
    const {user} = useContext(AuthContext);

    const [phone, setPhone] = useState('');
    const [meetLocation, setMeetLocation] = useState('');

    const bookings = {
      bookingTitle: name,
      price: resalePrice,
      userName: user.displayName,
      userEmail: user.email,
      phone: phone,
      location: meetLocation
    }

    const handleBooking = (e) => {
      e.preventDefault();
      console.log(bookings);

      const url = `http://localhost:5000/booking`;
      fetch(url, {
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(bookings)
      }).then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.acknowledged){ 
          setFurniture(null);
          toast.success('Booking Successfully');
        }
        e.target.reset();
      })

    }

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            {name}
          </h3>
           <form onSubmit={handleBooking} className="mx-auto w-3/4">
            <div className="my-4">
                 <input type="text" defaultValue={user?.displayName} placeholder="User Name" className="input w-full max-w-xs border-2 border-slate-200" readOnly />
            </div>
            <div className="my-4">
                 <input type="email" defaultValue={user?.email} placeholder="User Email" className="input w-full max-w-xs border-2 border-slate-200" readOnly />
            </div>
            <div className="my-4">
                 <input type="text" className="input w-full max-w-xs border-2 border-slate-200" defaultValue={resalePrice} readOnly />
            </div>
            <div className="my-4">
                 <input type="text" onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" className="input w-full max-w-xs border-2 border-slate-200" />
            </div>
            <div className="my-4">
                 <input type="text" onChange={(e) => setMeetLocation(e.target.value)}  placeholder="Meeting Location" className="input w-full max-w-xs border-2 border-slate-200" />
            </div>
            <div className="my-4">
                 <input type="submit" value="Order Confirm" className="btn btn-lg btn-primary border-0 input text-white w-full max-w-xs" />
            </div>
           </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
