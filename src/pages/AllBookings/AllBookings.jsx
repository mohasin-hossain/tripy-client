import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const AllBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("https://tripy-server.onrender.com/bookings")
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  }, [bookings]);

  const handleAcceptBooking = (id) => {
    const bookingAccept = {
      bookingStatus: "ACCEPTED",
    };

    fetch(`https://tripy-server.onrender.com/booking/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookingAccept),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Booking accepted!");
        }
      });
  };

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
      <h3 className="mb-3 text-center">All Bookings</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Tour Place</th>
            <th>Status</th>
            <th>User</th>
            <th>Accept Booking</th>
            <th>Cancel Booking</th>
          </tr>
        </thead>
        <tbody>
          {bookings &&
            bookings?.map((booking, index) => (
              <tr key={booking._id}>
                <td>{booking.tourPlace}</td>
                <td>{booking.bookingStatus}</td>
                <td>{booking.name}</td>
                <td>
                  {booking.bookingStatus !== "ACCEPTED" && (
                    <button
                      className="btn btn-success me-3"
                      onClick={() => handleAcceptBooking(booking._id)}
                    >
                      Accept
                    </button>
                  )}
                   {booking.bookingStatus === "ACCEPTED" && (
                    <button
                      className="btn btn-success me-3"
                      disabled
                    >
                      Accepted
                    </button>
                  )}
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleBookingDelete(booking._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>

              // <div>
              //   <li key={index}>
              //     Place: {booking.tourPlace}, Status: {booking.bookingStatus}{" "}
              //     user: {booking.email}
              //   </li>
              //   {booking.bookingStatus !== "ACCEPTED" && (
              //     <button
              //       className="btn btn-success me-3"
              //       onClick={() => handleAcceptBooking(booking._id)}
              //     >
              //       Accept
              //     </button>
              //   )}
              //   <button
              //     className="btn btn-danger"
              //     onClick={() => handleBookingDelete(booking._id)}
              //   >
              //     Delete
              //   </button>
              // </div>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AllBookings;
