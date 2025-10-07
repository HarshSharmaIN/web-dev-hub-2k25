import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Section = ({ title, fetchURL, sectionID }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);
  console.log(movies);

  const slideLeft = () => {
    let slider = document.querySelector("#slider" + sectionID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    let slider = document.querySelector("#slider" + sectionID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div>
      <h2 className="p-4 text-xl font-bold text-gray-800 md:text-2xl dark:text-white">
        {title}
      </h2>

      <div className="flex relative items-center w-full group">
        <BsChevronLeft
          onClick={slideLeft}
          className="hidden absolute left-0 z-10 opacity-70 cursor-pointer group-hover:block hover:opacity-100"
          size={40}
        />
        <div
          id={"slider" + sectionID}
          className="overflow-x-scroll relative w-full h-full whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <BsChevronRight
          onClick={slideRight}
          className="hidden absolute right-0 z-10 opacity-70 cursor-pointer group-hover:block hover:opacity-100"
          size={40}
        />
      </div>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-800" />
    </div>
  );
};

export default Section;
