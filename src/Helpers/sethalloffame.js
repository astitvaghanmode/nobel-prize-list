const setHallofFame = (prizes) => {
  const countmap = [];
  for (let i = 0; i <= 1200; i++) {
    countmap.push({ count: 0, name: null, motivation: null, id: null });
  }
  prizes.forEach((prize) => {
    if (prize.laureates) {
      prize.laureates.forEach((person) => {
        const id = parseInt(person.id, 10);
        countmap[id].count += 1;
        countmap[id].name = person.firstname + " " + person.surname;
        countmap[id].id = id;
        countmap[id].motivation = person.motivation;
      });
    }
  });
  const hall = [];
  countmap.forEach((ele) => {
    if (ele.count > 1) {
      hall.push(ele);
    }
  });

  return hall.slice(0, 4);
};

export default setHallofFame;
