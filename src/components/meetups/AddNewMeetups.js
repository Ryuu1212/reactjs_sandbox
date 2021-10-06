import { useRef } from "react";
import Cards from "../wrapper/Cards";
import classes from "./AddNewMeetups.module.css";

function AddNewMeetups(props) {
  const titleRef = useRef();
  const imageRef = useRef();
  const addressRef = useRef();
  const descRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    let enteredTitle = titleRef.current.value;
    let enteredImage = imageRef.current.value;
    let enteredAddress = addressRef.current.value;
    let enteredDesc = descRef.current.value;

    let meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      desc: enteredDesc,
    };
    // console.log(meetupData);
    // props.any_name(meetupData)
    props.addMeetup(meetupData);
  }
  return (
    <Cards>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea rows="5" required id="description" ref={descRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Cards>
  );
}

export default AddNewMeetups;
