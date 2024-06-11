class Elements {
  constructor() {
    this.puzzle = document.querySelector('.puzzle')
    this.cellsAmount = 20
    this.puzzleDivs = []
    this.draggableDivs = []
    this.createElements()
  }
  createElements() {
    for (let index = 0; index < this.cellsAmount; index++) {
      const puzzleDiv = document.createElement('div')
      puzzleDiv.setAttribute('data-index', index)
      this.puzzle.append(puzzleDiv)
      this.puzzleDivs.push(puzzleDiv)

      const draggableDiv = document.createElement('div')
      draggableDiv.setAttribute('data-index', index)
      draggableDiv.setAttribute('draggable', true)
      this.draggableDivs.push(draggableDiv)
    }
    console.log(this.puzzleDivs, this.draggableDivs);
  }
}

export default Elements