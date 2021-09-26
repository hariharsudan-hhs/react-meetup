import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from 'react-router-dom';

function NewMeetupPage() {
  
  const history = useHistory();

  function AddNewMeetupHandler(meetupData) {
    console.log(meetupData);

    fetch(
      "https://react-meetup-a863d-default-rtdb.firebaseio.com/meetup.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "content-type": "application/json",
        },
      }
    ).then(() => {
        history.replace("/");
    });
  }

  return (
    <section>
      <h1>Add new meetup</h1>
      <NewMeetupForm onAddNewMeetup={AddNewMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
