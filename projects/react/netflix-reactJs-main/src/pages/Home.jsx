import React from "react";
import Main from "../components/Main";
import requests from "../Api";
import Section from "../components/Section";
const Home = () => {
  return (
    <>
      <Main />
      <Section sectionID="1" title="UpComing" fetchURL={requests.upcoming} />
      <Section sectionID="2" title="Trending" fetchURL={requests.trending} />
      <Section sectionID="3" title="Popular" fetchURL={requests.popular} />
      <Section sectionID="4" title="Top Rated" fetchURL={requests.topRated} />
      <Section sectionID="5" title="Action" fetchURL={requests.action} />
    </>
  );
};

export default Home;
