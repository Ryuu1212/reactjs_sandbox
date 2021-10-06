import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import FavouritesContext from "../../store/favourites-context";
import { useContext } from 'react';

function MainNavigation() {

  const favContext = useContext(FavouritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetups">Add New Meetups</Link>
          </li>
          <li>
            <Link to="/favourites">
              My Favourites
              <span className={classes.badge}>{favContext.totalFavs}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
