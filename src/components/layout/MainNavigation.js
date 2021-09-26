import { Link } from "react-router-dom";
import cssClasses from "./MainNavigation.module.css";
import { useContext } from 'react';
import FavoritesContext from "../../store/favorites-context.js";

function MainNavigation() {

  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={cssClasses.header}>
      <div className={cssClasses.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/addnewmeetup">Add new meetup</Link>
          </li>
          <li>
            <Link to="/favorites">My Favorites
            <span className={cssClasses.badge}>{favoritesCtx.totalUserFavorites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
