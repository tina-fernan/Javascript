module.exports = { shortenDirections: shortenedDirections };

function shortenedDirections(directions) {
  const values = calcHorizontalVertical(directions);
  const horizontal = values[0];
  const vertical = values[1];

  return setDirections(horizontal, vertical);
}

function calcHorizontalVertical(directions) {
  let horizontal = 0;
  let vertical = 0;

  for (let i = 0; i < directions.length; i++) {
    const direction = directions[i];
    switch (direction) {
      case "SOUTH":
        vertical--;
        break;
      case "NORTH":
        vertical++;
        break;
      case "WEST":
        horizontal--;
        break;
      case "EAST":
        horizontal++;
        break;
    }
  }

  return [horizontal, vertical];
}

function setDirections(horizontal, vertical) {
  const shortenedDirections = [];
  if (horizontal > 0) {
    addToDirections("EAST", horizontal, shortenedDirections);
  }
  if (horizontal < 0) {
    addToDirections("WEST", horizontal * -1, shortenedDirections);
  }
  if (vertical > 0) {
    addToDirections("NORTH", vertical, shortenedDirections);
  }
  if (vertical < 0) {
    addToDirections("SOUTH", vertical * -1, shortenedDirections);
  }

  return shortenedDirections;
}

function addToDirections(word, times, directions) {
  for (let i = 0; i < times; i++) {
    directions.push(word);
  }
}
