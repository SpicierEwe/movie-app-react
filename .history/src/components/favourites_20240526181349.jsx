import { useSelector } from "react-redux";

export default function FavouritesComponent() {
  const favouritesIdList = useSelector((state) => state.movies.favourites);
  const movies = useSelector((state) => state.movies.moviesList);
  return (
    <div>
      <h1>Favourites</h1>
    </div>
  );
}
