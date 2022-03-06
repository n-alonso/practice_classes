class Media {
  constructor(title) {
    this._title = title
    this._isCheckedOut = false
    this._ratings = []
  }

  get title() {
    return this._title
  }
  get isCheckedOut() {
    return this._isCheckedOut
  }
  get ratings() {
    return this._ratings
  }

  set isCheckedOut(input) {
    this._isCheckedOut = input
  }

  getAverageRating() {
    return this._ratings.reduce((a, b) => a + b) / this._ratings.length
  }
  toggleCheckOutStatus() {
    this.isCheckedOut === false ? this.isCheckedOut = true : this.isCheckedOut = false
  }
  addRating(rating) {
    this._ratings.push(rating)
  }
}

class Book extends Media {
  constructor(title, author, pages) {
    super(title)
    this._author = author
    this._pages = pages
  }

  get author() {
    return this._author
  }
  get pages() {
    return this._pages
  }
}

class Movie extends Media {
  constructor(title, director, runTime) {
    super(title)
    this._director = director
    this._runTime = runTime
  }

  get director() {
    return this._director
  }
  get runTime() {
    return this._runTime
  }
}

class Cd extends Media {
  constructor(title, artist, songs) {
    super(title)
    this._artist = artist
    this._songs = songs
  }

  get artist() {
    return this._artist
  }
  get songs() {
    return this._songs
  }
}

// Test the classes
const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544)
historyOfEverything.toggleCheckOutStatus()
historyOfEverything.addRating(1)
historyOfEverything.addRating(1)
historyOfEverything.addRating(5)
console.log(historyOfEverything, historyOfEverything.getAverageRating())

const speed = new Movie('Speed', 'Jan de Bont', 116)
console.log(speed)

const lzIv = new Cd('Led Zeppeling IV', 'Led Zeppelin', [
  'Black Dog',
  'Rock and Roll',
  'The Battle of Evermore',
  'Stairway to Heaven',
  'Misty Mountain Hop',
  'Four Sticks',
  'Going to California',
  'When the Levee Breaks'
])
console.log(lzIv)
