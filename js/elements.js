class Elements {
  constructor() {
    this.puzzle = document.querySelector('.puzzle')
    this.cellsAmount = 20
    this.puzzleDivs = []
    this.draggableDivs = []
  }
  createElements() {
    for (let index = 0; index < this.cellsAmount; index++) {
      const puzzleDiv = document.createElement('div')
      puzzleDiv.setAttribute('data-index', index)
      this.puzzle.append(puzzleDiv)
      this.puzzleDivs.push(puzzleDiv)
    }
  }
}

export default Elements