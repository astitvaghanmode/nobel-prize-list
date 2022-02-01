const PrizeList = ({ prizes }) => {
  return (
    <>
      {prizes.map((award, index) => {
        return (
          <div className="award" key={index}>
            <h3 className="prize-winner">Prize Winner in Year {award.year} </h3>
            <h3 className="cat">in Category {award.category}</h3>

            <h3 className="person-name">Name : </h3>
            {award.laureates &&
              award.laureates.map((person) => {
                return (
                  <div key={person.id}>
                    <h1 className="names">
                      {person.firstname} {person.surname}
                    </h1>
                  </div>
                );
              })}
          </div>
        );
      })}
    </>
  );
};

export default PrizeList;
