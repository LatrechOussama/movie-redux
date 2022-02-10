import React from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { useState } from "react/cjs/react.development";
import { add } from "../redux/action";
import StarRating from "./StarRating";

const AddMovie = () => {
const dispatch=useDispatch()

    const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState("0");
  const [date, setDate] = useState("");



  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      id: Math.random(),
      name,
      image,
      rating,
      date,
    };
   dispatch (add (newMovie ))
    closeModal();
  };


  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const [modalIsOpen, setIsOpen] = React.useState(false);
  Modal.setAppElement("#root");
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="abc">
      <button className="button-12" onClick={openModal}>
        <h3>Add Movie</h3>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form className="formadd" onSubmit={handleSubmit}>
          <div className="formcontents" >
            <h1 className="mov">Add a Movie </h1>
            <input
              type="text"
              placeholder="Movie Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Movie Pster"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <StarRating rating={rating} handleRating={(rating)=>setRating(rating)} />
            <br />
            <br />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="btn">
            <button  className="button-12" type="submit" >
              <h3>Confirm</h3>
            </button>
            <button className="button-12" onClick={closeModal}>
              <h3>Cancel</h3>
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddMovie;