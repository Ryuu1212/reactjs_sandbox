import { useContext } from "react";
import FavouritesContext from "../store/favourites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavouritesPage() {
  const favContext = useContext(FavouritesContext);

  let content;
  if (favContext.totalFavs === 0) {
    content = (
      <p>You have no favourites at the moment. Consider adding some?</p>
    );
  } else {
    content = <MeetupList meetups={favContext.favs} />;
  }

  return (
    <section>
      <h1>My Favourites</h1>
      {content}
    </section>
  );
}
export default FavouritesPage;
