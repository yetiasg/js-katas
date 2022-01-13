class Queue {
  elements = []

  enqueue(element) {
    this.elements.push(element)
  }

  dequeue() {
    return this.elements.shift()
  }

  isEmpty() {
    return this.length === 0
  }

  peek() {
    return !this.isEmpty() ? this.elements[0] : undefined
  }

  length() {
    return this.elements.length
  }
}

const que = new Queue()

for(let i=0; i<7; i++) {
  que.enqueue(i)
}
que.dequeue()

console.log(que.peek())