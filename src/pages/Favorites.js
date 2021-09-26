import { useContext } from "react";
import FavoritesContext from "../store/favorites-context.js";
import MeetupList from "../components/meetups/MeetupList.js";

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);

  const favoriteMeetupCount = favoritesCtx.totalUserFavorites;

  if (favoriteMeetupCount > 0) {
    return (
      <section>
        <h1>My Favorite Meetups</h1>
        <MeetupList meetupData={favoritesCtx.userFavorites} />
      </section>
    );
  } else {
    return (
      <section>
        <h1>My Favorite Meetups</h1>
        <p>No favorites added</p>
      </section>
    );
  }
}

export default FavoritesPage;
