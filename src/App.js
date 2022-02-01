import { useEffect, useState } from "react";
import PrizeList from "./Components/PrizeList";
import YearSelect from "./Components/YearSelect";
import CategorySelect from "./Components/CategorySelect";
import HallOfFame from "./Components/HallofFame";
import setHallofFame from "./Helpers/sethalloffame";

import "./style.css";

export default function App() {
  const [data, setData] = useState(null);
  const [filterData, setFilterData] = useState(null);
  const [category, setCategory] = useState(null);
  const [year, setYear] = useState(null);
  const [halloffame, setHallFame] = useState(null);

  //Api call and storing data in data array and also setting hall of fame.
  useEffect(() => {
    async function getData() {
      const url = `https://api.nobelprize.org/v1/prize.json`;
      const jsondata = await fetch(url);
      const { prizes } = await jsondata.json();
      setHallFame(setHallofFame(prizes));

      setData(prizes);
    }
    getData();
  }, []);
  //filter applier function which filters data array on category or year or both.
  useEffect(() => {
    const filterApplier = () => {
      if (data) {
        const tempArray = data.filter((prize) => {
          if (category && year) {
            return prize.category === category && prize.year === year;
          }
          if (category) {
            return prize.category === category;
          }
          return prize.year === year;
        });
        setFilterData(tempArray);
      }
    };
    filterApplier();
  }, [category, year, data]);
  //category select handler function
  const categoryhandler = (e) => {
    const cat = e.target.value;
    setCategory(cat);
  };

  //year select handler function
  const yearhandler = (e) => {
    const year = e.target.value;
    setYear(year);
  };

  return (
    <div className="App">
      {!data && <p>Loading Prizes Data...</p>}
      {data && (
        <div className="nobel-prize">
          <div className="nobel">
            <h3>Hello</h3>
            <h1>I am Astitva</h1>
            <h2>FrontEnd Developer Reactjs</h2>
          </div>
          <div className="image-winner">
            <img
              src="/img/image2.jpg"
              alt="Hall of fame "
              className="image-logo"
            />
          </div>

          <HallOfFame famers={halloffame} />
          <YearSelect yearhandler={yearhandler} />
          <CategorySelect categoryHandler={categoryhandler} />

          {(category || year) && filterData && (
            <PrizeList prizes={filterData} />
          )}
          {(category || year) && filterData.length === 0 && (
            <h1 className="no"> No results found for your filter..</h1>
          )}
          {!category && !year && (
            <h1 className="select-cat-year">
              Select a category / year please.
            </h1>
          )}
        </div>
      )}
    </div>
  );
}
