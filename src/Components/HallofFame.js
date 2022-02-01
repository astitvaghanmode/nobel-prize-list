const HallofFame = ({ famers }) => {
  return (
    <>
      {famers &&
        famers.map((famer, index) => {
          return (
            <div className="winner" key={famer.id}>
              <h1>{famer.name}</h1>
            </div>
          );
        })}
    </>
  );
};

export default HallofFame;
