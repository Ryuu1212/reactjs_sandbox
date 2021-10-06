import { useContext } from "react";

import classes from "./MeetupItem.module.css";
import Cards from "../wrapper/Cards";
import FavouritesContext from "../../store/favourites-context";

function MeetupItem(props) {
  const favContext = useContext(FavouritesContext);

  const isFavourite = favContext.isFavs(props.id);
  function toggleFavsHandler() {
    if (isFavourite) {
      favContext.deleteFavs(props.id);
      console.log("is fav");
    } else {
      favContext.addFavs({
        id: props.id,
        title: props.title,
        desc: props.desc,
        image: props.image,
        address: props.address,
      });
    }
  }
  return (
    <li className={classes.item}>
      <Cards>
        <div className={classes.image}>
          <img src={props.image} alt={classes.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.desc}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavsHandler}>
            {isFavourite ? "Remove from Favs" : "To Favs"}
          </button>
        </div>
      </Cards>
    </li>
  );
}

export default MeetupItem;
