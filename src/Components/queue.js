class Node {
  constructor(title, description, id, color) {
    this.title = title;
    this.description = description;
    this.id = id;
    this.color = color;
    this.time = 3600;
  }
}

class Queue {
  //This is a queue data structure which follows the rules of FIRST IN, FIRST OUT.
  constructor() {
    let fetchData = localStorage.getItem("Data");
    let data;
    if (fetchData === undefined) {
      localStorage.setItem("Data", JSON.stringify({}));
    } else {
      data = JSON.parse(fetchData);
    }
    this.data = data || {};
    this.rear = Object.values(this.data).length + 1;
    this.front = 1;
    this.size = Object.values(this.data).length;
  }

  enqueue(title, description, color) {
    //Add tasks to the queue.

    const node = new Node(title, description, this.rear, color);

    this.data[this.rear] = node;

    this.rear++;

    this.size++;


    localStorage.setItem("Data", JSON.stringify(this.data));
  }

  dequeue(id) {
    //remove tasks from the queue.

    if (this.size === 0) return null;
      
    //Break the rule of the FIRST IN, FIRST OUT, if the user intends to delete a task that is not at the front.
    this.front = id;

    delete this.data[this.front];

    this.size--;

    localStorage.setItem("Data", JSON.stringify(this.data));
    
  }

  get getData() {
    // let newData = JSON.parse(localStorage.getItem("Data"));
    return this.data? Object.values(this.data) : [];
  }

  get getSize() {
    return this.size;
  }

  reduceTime() {
    let currentData = JSON.parse(localStorage.getItem("Data"));
    if (currentData === undefined || this.size === 0) {
      return;
    }

    for (let i = 1; i <= this.size; i++) {
      if (currentData[i].time === undefined) {
        continue;
      }
      if (currentData[i].time === 0) {
        this.dequeue(i);
      } else {
        currentData[i].time = currentData[i].time - 1;
      }
    }
    localStorage.setItem("Data", JSON.stringify(currentData));
    return;
  }


}

const queue = new Queue();

// queue.enqueue("Victor", "Vic", 2, "red");
// queue.enqueue("Nkire", "Nkire", 3, "red");
// console.log(queue.reduceTime());
// console.log(queue.reduceTime());
// console.log(queue.reduceTime());
// console.log(queue.reduceTime());
// console.log(queue.reduceTime());
// console.log(queue.reduceTime());



module.exports = queue;
