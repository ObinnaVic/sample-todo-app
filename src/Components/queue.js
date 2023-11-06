class Node {
  constructor(title, description, id, color) {
    this.title = title;
    this.description = description;
    this.id = id;
    this.color = color;
  }
}

class Queue {
  //This is a queue data structure which follows the rules of FIRST IN, FIRST OUT.
  constructor() {
    let data = JSON.parse(localStorage.getItem("Data"));
    this.data = data ? data : {};
    // this.data = {};
    this.rear = 0;
    this.front = 0;
    this.size = 0;
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
    let resetFront = this.front;

    if (this.size === 0) return null;

    if (this.front !== id) {
      //Break the rule of the FIRST IN, FIRST OUT, if the user intends to delete a task that is not at the front.
      this.front = id;

      delete this.data[this.front];

      this.front = resetFront;

      this.size--;

      localStorage.setItem("Data", JSON.stringify(this.data));

      return;
    }

    delete this.data[this.front];

    this.front++;

    this.size--;

    localStorage.setItem("Data", JSON.stringify(this.data));
  }

  get getData() {
    let newData = JSON.parse(localStorage.getItem("Data"));
    return newData? Object.values(newData) : [];
    // return Object.values(this.data);
  }

  get getSize() {
    return this.size;
  }
}

const queue = new Queue();



module.exports = queue;
