import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

const Movie = ({ id, item }) => {
  const [like, setLike] = React.useState(false);
  const [saved, setSaved] = React.useState(false);
  const { user } = UserAuth();

  const movieID = doc(db, "users", `${user?.email}`);
  const saveMovie = async (event) => {
    event.stopPropagation();

    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedMovies: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert("Please log in to save a movie");
    }
  };

  const handleClick = () => {
    const youtubeURL = `https://www.youtube.com/results?search_query=${encodeURIComponent(
      item.title
    )}`;

    window.open(youtubeURL, "_blank");
  };

  return (
    <div
      className="lg:w-[345px] w-[200px] md:w-[240px] inline-block relative p-2 cursor-pointer"
      key={id}
      onClick={handleClick}
    >
      <img
        className="block w-full h-auto"
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt=""
      />
      <div className="absolute top-0 left-0 w-full h-full text-white opacity-0 hover:bg-black/70 hover:opacity-100">
        <p className="flex justify-center items-center mx-auto w-4/5 h-full text-xs font-bold text-center whitespace-normal md:text-sm">
          {item?.title}
        </p>
        <p onClick={saveMovie}>
          {like ? (
            <FaHeart className="absolute top-4 left-4 text-gray-300" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
