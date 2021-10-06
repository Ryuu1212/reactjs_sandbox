import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetups";
import FavouritesPage from "./pages/FavouritesPage";
import Layout from './components/layout/Layout';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <AllMeetupsPage />
          </Route>
          <Route path="/new-meetups">
            <NewMeetupsPage />
          </Route>
          <Route path="/favourites">
            <FavouritesPage />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}
export default App;
