import Elements from "./elements.js"

class PositionElements {
  constructor() {
    this.elements = new Elements()
    this.leftPositions = [0, 8, 16, 24, 32]
    this.topPositions = [0, 6, 12, 18]
  }
  shuffle(array) {
    return array.sort(() => Math.random() - 0.5)
  }
}

export default PositionElements