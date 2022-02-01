const CategorySelect = ({ categoryHandler }) => {
  const generateOptions = () => {
    const categories = [
      "chemistry",
      "physics",
      "economics",
      "literature",
      "peace",
      "medicine"
    ];
    const options = [];
    categories.forEach((category, index) => {
      options.push(
        <option key={index} value={category}>
          {category}
        </option>
      );
    });
    return options;
  };
  return (
    <>
      {" "}
      <div className="category">
        <select onChange={categoryHandler} name="category-select" id="selector">
          <option value="" defaultValue>
            Select category
          </option>
          {generateOptions()}
        </select>
      </div>
    </>
  );
};

export default CategorySelect;
