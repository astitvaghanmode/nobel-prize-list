const YearSelect = ({ yearhandler }) => {
  //function to generate html options from year A to B.(Dynamic)
  const generateOptions = () => {
    const options = [];
    for (let i = 1900; i <= 2018; i++) {
      options.push(
        <option key={i} value={String(i)}>
          {" "}
          {i}
        </option>
      );
    }
    return options;
  };
  return (
    <>
      <div className="year">
        <select onChange={yearhandler} name="year-select" id="year-selector">
          <option value="" defaultValue>
            select a year
          </option>
          {generateOptions()}
        </select>
      </div>
    </>
  );
};

export default YearSelect;
