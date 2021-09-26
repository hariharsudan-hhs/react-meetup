import MeetupList from "../components/meetups/MeetupList";
import { useEffect, useState } from 'react';

const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

function AllMeetupsPage() {

  const [isLoading, setIsLoading] = useState(true);
  const [allMeetupList, setAllMeetupList] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://react-meetup-a863d-default-rtdb.firebaseio.com/meetup.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);

        const meetupList = [];

        for (const key in data) {
          const meetupObj = {
            id: key,
            ...data[key],
          }
          meetupList.push(meetupObj);
        }
        console.log(meetupList);

        setIsLoading(false);
        setAllMeetupList(meetupList);
      });
  }, []);

  if(isLoading) {
    return (
      <section>
        <h1>All Meetups</h1>
        <p>Loading...</p>
      </section>
    );
  } else {
    return (
      <section>
        <h1>All Meetups</h1>
        <MeetupList meetupData={allMeetupList}/>
      </section>
    );
  }
  
}

export default AllMeetupsPage;
