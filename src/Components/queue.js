class Node {
  constructor(title, description, id, color, time) {
    this.title = title;
    this.description = description;
    this.id = id;
    this.color = color;
    this.time = time;
  }
}

class Queue {
  //This is a queue data structure which follows the rules of FIRST IN, FIRST OUT.
  constructor() {
    let data = JSON.parse(localStorage.getItem("Data"));
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
    let newData = JSON.parse(localStorage.getItem("Data"));
    return newData? Object.values(newData) : [];
  }

  get getSize() {
    return this.size;
  }
}

const queue = new Queue();


module.exports = queue;
