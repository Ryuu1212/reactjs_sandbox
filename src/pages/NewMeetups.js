
import { useHistory } from "react-router-dom";

import AddNewMeetups from "../components/meetups/AddNewMeetups";

function NewMeetupsPage() {
  const history = useHistory();
  function submitHandler(meetupData) {
    fetch(
      "https://react-sandbox-369f2-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace('/');
    });
  }
  return (
    <section>
      <h1>Add New Meetups</h1>
      <AddNewMeetups addMeetup={submitHandler} />
    </section>
  );
}

export default NewMeetupsPage;
