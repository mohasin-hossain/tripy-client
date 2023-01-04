import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./TourDetails.css";
import useAuth from "../../hooks/useAuth";

const TourDetails = () => {
  const [tour, setTour] = useState({});
  const [booking, setBooking] = useState(false);
  const { tourId } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:4000/tours/${tourId}`)
      .then((res) => res.json())
      .then((data) => setTour(data));
  }, []);

  const onSubmit = (data) => {
    // data.tour = tour;
    const { tourPlace, duration, country, price } = tour;
    // data.bookingStatus =
    //   "Pending");

    const bookingItem = {
      ...data,
      tourPlace,
      duration,
      country,
      price,
      bookingStatus: "Pending",
    };

    fetch(`http://localhost:4000/booking`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookingItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Booked successfully");
          setBooking(true);
          reset();
        }
      });
  };

  return (
    <div>
      <img className="tour-img" src={tour?.image} alt="" />
      <div className="d-flex sm-flex-column flex-row align-items-center justify-content-evenly tour-desc">
        <p>{tour?.tourPlace}</p>
        <p>{tour?.country}</p>
        <p>{tour?.duration}</p>
        <p>{tour?.price}</p>
      </div>
      <div className="container flex-column d-flex align-items-center mt-5">
        <div>
          <h3 className="text-center mb-3">Add your details</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input value={user.displayName} {...register("name")} />
            <input value={user.email} {...register("email")} />
            <input
              placeholder="City"
              type="text"
              {...register("city", { required: true })}
            />
            <input
              placeholder="Number"
              type="text"
              {...register("number", { required: true })}
            />

            <input
              className="btn btn-outline-success"
              type="submit"
              disabled={booking ? "disabled" : ""}
              value={booking ? "Booked" : "Book Now"}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default TourDetails;
