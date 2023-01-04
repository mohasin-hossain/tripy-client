import React from "react";
import { useForm } from "react-hook-form";
import "./AddPlace.css";

const AddPlace = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    fetch(`https://tripy-server.onrender.com/tours`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("New Tour Place Added successfully!");
          reset();
        }
      });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div>
        <h2>Add a Service</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Tour place"
            {...register("tourPlace", { required: true, maxLength: 20 })}
          />
          <input placeholder="Rating" type="text" {...register("rating", {required: true})} />
          <input placeholder="Country" type="text" {...register("country", {required: true})} />
          <input placeholder="Duration" type="text" {...register("duration", {required: true})} />
          <input placeholder="Price" type="text" {...register("price", {required: true})} />
          <input placeholder="Image url" {...register("image", {required: true})} />
          <input className="btn btn-success" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddPlace;    