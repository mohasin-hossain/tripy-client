import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch("https://tripy-server.onrender.com/bookings")
      .then((res) => res.json())
      .then((data) => {
        const userSpecificBookings = data.filter(
          (booking) => booking.email === user.email
        );
        setBookings(userSpecificBookings);
      });
  }, [bookings]);

  const handleBookingDelete = (id) => {
    // fetch post
    const confirm = window.confirm("Are you sure you want to delete?");
    if (confirm) {
      fetch(`https://tripy-server.onrender.com/booking/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Request cancelled!");
          }
        });
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-3">My Bookings</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Tour Place</th>
            <th>Status</th>
            <th>Cancel Booking</th>
          </tr>
        </thead>
        <tbody>
          {bookings &&
            bookings?.map((booking) => (
              <tr key={booking._id}>
                <td>{booking.tourPlace}</td>
                <td>{booking.bookingStatus}</td>
                <td>
                  <button
                    onClick={() => handleBookingDelete(booking._id)}
                    className="btn btn-danger"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MyBookings;
