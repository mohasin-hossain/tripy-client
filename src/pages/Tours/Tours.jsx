import React, { useEffect, useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import Tour from "../../components/Tour/Tour";

const Tours = () => {
  const [tours, setTours] = useState([]);
  const [loading, setIsLoading] = useState(false);
  // const [bookings, setBookings] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:4000/bookings")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setBookings(data);
  //       console.log(data)
  //     });
  // }, []);

  useEffect(() => {
    fetch("https://tripy-server.onrender.com/tours")
      .then((res) => res.json())
      .then((data) => {
        // console.log(bookings.length);
        // let displayAvailableTours;
        // if (bookings.length > 0) {
        //   displayAvailableTours = data.filter((tour, index) => {
        //     tour?.tourPlace !== bookings[index]?.tourPlace;
        //     // console.log(displayAvailableTours);
        //     setTours(displayAvailableTours);
        //   });
        // } else {
        //   setTours(data);
        // }
        setTours(data);
      });
  }, []);

  return (
    <section className="container" id="tours">
      <h3 className="text-center pb-5">The best places for vacation</h3>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {tours?.map((tour) => (
          <Tour key={tour._id} tour={tour} />
        ))}
      </Row>
    </section>
  );
};

export default Tours;
