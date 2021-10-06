import { createContext, useState } from "react";

const FavouritesContext = createContext({
  favs: [],
  totalFavs: 0,
  addFavs: (favMeetup) => {},
  deleteFavs: (meetupId) => {},
  isFavs: (meetupId) => {},
});

export function FavouritesContextProvider(props) {
  const [userFavs, setUserFavs] = useState([]);

  function addFavsHandler(favMeetup) {
    setUserFavs((prevUserFavs) => {
      return prevUserFavs.concat(favMeetup);
    });
  }
  function deleteFavsHandler(meetupId) {
    setUserFavs((prevUserFavs) => {
      return prevUserFavs.filter(meetup => meetup.id !== meetupId);
    });
  }
  function isFavsHandler(meetupId) {
    return userFavs.some(meetup => meetup.id === meetupId);
  }
  const context = {
    favs: userFavs,
    totalFavs: userFavs.length,
    addFavs: addFavsHandler,
    deleteFavs: deleteFavsHandler,
    isFavs: isFavsHandler,
  };
  return (
    <FavouritesContext.Provider value={context}>
      {props.children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesContext;
