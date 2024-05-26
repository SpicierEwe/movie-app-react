import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function FavouritesComponent() {
  const favouritesIdList = useSelector(
    (state) => state.movies.favouritesIdList
  );
  const movies = useSelector((state) => state.movies.moviesList);

  return (
    <div>
      <h1>Favourites</h1>
      <div>{JSON.stringify(favouritesIdList)}</div>
    </div>
  );
}
