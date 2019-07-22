class PropertyRemover {
  constructor() {
    this.propertiesToBeRemoved = [];
  }

  addPropertyToBeRemoved(propertiesToBeRemoved) {
    if (Array.isArray(propertiesToBeRemoved)) {
      this.propertiesToBeRemoved.push(...propertiesToBeRemoved);
    } else {
      this.propertiesToBeRemoved.push(propertiesToBeRemoved);
    }
  }

  process(object) {
    return this.propertiesToBeRemoved.reduce(
      (reducedObject, propertyToBeRemoved) =>
        this.processSingle(reducedObject, propertyToBeRemoved),
      object
    );
  }

  processSingle(object, propertyToBeRemoved) {
    const currentObject = {};
    const [propertyOnCurrentLevel] = propertyToBeRemoved.split(".");
    const keys = Object.keys(object);

    if (!keys.includes(propertyOnCurrentLevel)) {
      throw new Error("property does not exist");
    }

    keys
      .filter(key => key !== propertyOnCurrentLevel)
      .forEach(key => (currentObject[key] = object[key]));

    const isLastLevel = propertyOnCurrentLevel === propertyToBeRemoved;
    if (!isLastLevel) {
      currentObject[propertyOnCurrentLevel] = this.processSingle(
        object[propertyOnCurrentLevel],
        propertyToBeRemoved
          .split(".")
          .slice(1)
          .join(".")
      );
    }

    return currentObject;
}
}

module.exports={PropertyRemover};