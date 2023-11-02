class Node {
    constructor(title, description, id, color) {
        this.title = title;
        this.description = description;
        this.id = id;
        this.color = color;
    }
}

class Queue { //This is a queue data structure which follows the rules of FIRST IN, FIRST OUT.
    constructor() {
        this.data = {};
        this.rear = 0;
        this.front = 0;
        this.size = 0;
    }

    enqueue(title, description, id, color) { //Add tasks to the queue.
        
        const node = new Node(title, description, id, color);
        
        this.data[this.rear] = node;
        
        this.rear++;
        
        this.size++;
    }

    dequeue(id) { //remove tasks from the queue.
        let resetFront = this.front;

        if (this.size == 0) return null;

        if (this.front !== id) {

            this.front = id;
            
            delete this.data[this.front];
            
            this.front = resetFront;
            
            this.size--;
            
            return;
        }

        delete this.data[this.front];
        
        this.front++;
        
        this.size--;
    }

    get getData() {
        return this.data;
    }

    get getSize() {
        return this.size
    }

    

}

const queue = new Queue();

queue.enqueue("Victor", "Victor is a frontend developer", 1, "red");
queue.enqueue("Nkire", "Nkire is a backend developer", 1, "blue");
queue.enqueue("obinna", "obinna is a software developer", 1, "yellow");



queue.dequeue(2)

console.log(queue.front);
console.log(queue.getData);


