// clase Tree + #buildTree + API pública
import { Node } from './node'

export class Tree {
  constructor (array) {
    const uniqueArray = [...new Set(array)]
    array = uniqueArray.sort((a, b) => a - b)
    this.root = this.#buildTree(array)
  }

  #buildTree (array) {
    if (array.length === 0) return null
    const middle = Math.floor(array.length / 2)
    const node = new Node(array[middle])
    node.left = this.#buildTree(array.slice(0, middle))
    node.right = this.#buildTree(array.slice(middle + 1))
    return node
  }
  #insertAux (node, value) {
    if (node === null) return new Node(value)
    if (value < node.data) {
      node.left = this.#insertAux(node.left, value)
    } else if (value > node.data) {
      node.right = this.#insertAux(node.right, value)
    } else {
      return node
    }
    return node
  }
  #findMin (node) {
    if (node.left === null) return node
    return this.#findMin(node.left)
  }
  #deleteAux (node, value) {
    if (node === null) return null
    if (value < node.data) {
      node.left = this.#deleteAux(node.left, value)
    } else if (value > node.data) {
      node.right = this.#deleteAux(node.right, value)
    } else {
      if (node.left === null && node.right === null) return null
      if (node.left === null) return node.right
      if (node.right === null) return node.left
      const minNode = this.#findMin(node.right)
      node.data = minNode.data
      node.right = this.#deleteAux(node.right, minNode.data)
    }
    return node
  }
  deleteItem (value) {
    this.root = this.#deleteAux(this.root, value)
  }
  insert (value) {
    this.root = this.#insertAux(this.root, value)
  }

  find(value, node = this.root) {
    if(node === null) {
      return null
    }else if (node.data === value) {
      return node
    }else if (value < node.data) {
      return this.find(value, node.left)
    }else if (value > node.data) {
      return this.find(value, node.right)
    } else {
      return node
    }
  }

  levelOrderForEach(callback, node = this.root) {
    if (typeof callback !== 'function') {
      throw new Error('callback is not a function')
    }
    let tail = []
    if (node !== null) {
      tail.push(node)
    }
    while (tail.length > 0) {
      const current = tail.shift()
      callback(current.data)
      if (current.left !== null) {
        tail.push(current.left)
      }
      if (current.right !== null) {
        tail.push(current.right)
      }
    }
  }
}
