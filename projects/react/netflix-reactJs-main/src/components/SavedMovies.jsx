import React, { useState, useEffect } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { AiOutlineClose } from "react-icons/ai";

const SavedMovies = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  const slideLeft = () => {
    let slider = document.querySelector("#slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    let slider = document.querySelector("#slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedMovies);
    });
  }, [user?.email]);

  const movieRef = doc(db, "users", `${user?.email}`);
  const deleteShow = async (passedID) => {
    try {
      const result = movies.filter((item) => item.id !== passedID);
      await updateDoc(movieRef, {
        savedMovies: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2 className="p-4 font-bold text-white md:text-xl">My Shows</h2>
      <div className="h-[40vh] flex relative items-center w-full group">
        <BsChevronLeft
          onClick={slideLeft}
          className="hidden absolute left-0 z-10 opacity-70 cursor-pointer group-hover:block hover:opacity-100"
          size={40}
        />
        <div
          id={"slider"}
          className="overflow-x-scroll relative w-full h-full whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies.map((item) => (
            <div
              key={item.id}
              className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
            >
              <img
                className="block w-full h-auto"
                src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                alt={item?.title}
              />
              <div className="absolute top-0 left-0 w-full h-full text-white opacity-0 hover:bg-black/80 hover:opacity-100">
                <p className="flex justify-center items-center h-full text-xs font-bold text-center white-space-normal md:text-sm">
                  {item?.title}
                </p>
                <p
                  onClick={() => deleteShow(item.id)}
                  className="absolute top-4 right-4 text-gray-300"
                >
                  <AiOutlineClose />
                </p>
              </div>
            </div>
          ))}
        </div>
        <BsChevronRight
          onClick={slideRight}
          className="hidden absolute right-0 z-10 opacity-70 cursor-pointer group-hover:block hover:opacity-100"
          size={40}
        />
      </div>
    </>
  );
};

export default SavedMovies;
