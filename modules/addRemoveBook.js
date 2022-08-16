class Book {
  constructor() {
    this.bobject = {};
    this.list = [];
  }

   add =(title, author) => {
     this.bobject = { title, author };
     this.list.push(this.bobject);
     localStorage.setItem('data', JSON.stringify(this.list));
   }

  remove =(getId) => {
    let new1 = 0;
    while (new1 < this.list.length) {
      if (new1.toString() === getId) {
        this.list.splice(new1, 1);
        localStorage.setItem('data', JSON.stringify(this.list));
      }

      new1 += 1;
    }
  }
}

export default Book;