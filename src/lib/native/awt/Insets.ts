export class Insets {
  private top: number
  private left: number
  private bottom: number
  private right: number

  constructor(top: number, left: number, bottom: number, right: number) {
    this.top = top
    this.left = left
    this.bottom = bottom
    this.right = right
  }

  getTop() {
    return this.top
  }

  getLeft() {
    return this.left
  }

  getBottom() {
    return this.bottom
  }

  getRight() {
    return this.right
  }
}
