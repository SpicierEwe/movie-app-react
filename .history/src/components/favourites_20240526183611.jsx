import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function FavouritesComponent() {
  const favouritesIdList = useSelector((state) => state.movies.favouritesIds);
  const movies = useSelector((state) => state.movies.moviesList);

  return (
    <div>
      <h1>Favourites</h1>
      <div className="ml-auto  mr-auto mt-12 mb-12 pt-16 grid grid-cols-4 gap-12 max-w-screen-xl">
        {movies.map((movie, index) => (
          <div
            key={index}
            class="group border-2 border-gray-900 bg-[#202124] rounded-xl overflow-hidden hover:-translate-y-1
            transform transition duration-500 ease-in-out  "
          >
            <div className="relative  w-full rounded-xl ">
              <img src={link} alt="movie" class="object-cover" />

              <div class="absolute top-5 right-5 flex items-center flex-col gap-y-5">
                <div class="flex justify-center align-center">
                  <FaStar
                    size={70}
                    class="relative text-yellow-400 rounded-full p-1"
                  />
                  <h1 className="absolute text-xl font-bold  self-center z-20 text-black">
                    {movie.rating.toFixed(1)}
                  </h1>
                </div>

                <div
                  class=" bg-white  rounded-full p-2 cursor-pointer"
                  onClick={() => {
                    console.log("fav clicked id =" + movie.id);
                    dispatch(updateFovourites(movie.id));
                  }}
                >
                  {/* Favourite icon */}
                  {checkFavourite(movie.id) ? (
                    <FaHeart size={23} class="text-red-500"></FaHeart>
                  ) : (
                    <FaRegHeart size={23} class="text-red-500"></FaRegHeart>
                  )}
                </div>
              </div>

              <p className=" text-md text-[#e8eaed] p-5 ">{movie.movie}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
