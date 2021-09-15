class Media {
  constructor(title){
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title(){
    return this._title;
  }
  get isCheckedOut(){
    return this._isCheckedOut;
  }
  get ratings(){
    return this._ratings;
  }

  set isCheckedOut(value){
    this._isCheckedOut=value;
  }

  toggleCheckOutStatus(){
    if (this.isCheckedOut === false){
    return this.isCheckedOut=true;
    } else if (this.isCheckedOut === true){
     return this.isCheckedOut=false;
    }
  }

  getAverageRating(){
    let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
    const lengthRatings = this.ratings.length;
    return ratingsSum/lengthRatings;
  }

  addRating(rate){
    this.ratings.push(rate);
  }
};

class Book extends Media{
  constructor (title,author,pages){
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author(){
    return this._author;
  }
  get pages(){
    return this._pages;
  }
};

class Movie extends Media{
  constructor (title,director,runTime){
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director(){
    return this._director = director;
  }
  get runTime(){
    return this._runTime;
  }
};

const historyOfEverything = new Book('A Short History of Nearly Everything','Bill Bryson',544);

console.log(historyOfEverything);

historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut)

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

console.log(historyOfEverything.getAverageRating());

const speed = new Movie ('Speed','Jan de Bont',116);
console.log(speed);

speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log(speed.getAverageRating());

//STEP 25

class CD extends Media {
  constructor(title,artist,year,songs){
    super(title);
    this._artist = artist;
    this._year = year; 
    this._songs=[];
    }
  get artiste(){
    return this._artist;
    }
  get year(){
    return this._year;
  }
  get songs(){
    return this._songs;
  }
  //Fisher–Yates Shuffle
  shuffle(songs) {
    let randomSongs = songs;
    let i = this.randomSongs.length, t, j;   
    while(--i > 0){      
      j = Math.floor(Math.random() * (i+1));
      t = randomSongs[j];
      randomSongs[j] = randomSongs[i];
      randomSongs[i] = t
    }
    return randomSongs;
  }
};

const theBeatles = new CD ('A Hard Day\'s Night','The Beatles', 1964, ['A Hard Day\'s Night','Tell Me Why','I\'ll Cry Instead','Can\'t Buy Me Love','And I Love Her','If I Fell', 'I Should Have Known Better'])

console.log(theBeatles)