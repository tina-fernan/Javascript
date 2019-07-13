class PersonParser {
    constructor() {}
  
    parse(csv) {
      return csv
        .split("\n")
        .filter(line => !!line.trim())
        .map(line => line.split(","))
        .map(([firstname, lastname, gender]) => ({
          firstname,
          lastname,
          gender
        }));
    }
  }
  
  module.exports = { PersonParser };