import { Tree } from './tree'
import { prettyPrint } from './utils'
import { randomArray } from './driver'
const arr = randomArray(100)
const tree = new Tree(arr)
console.log(tree.isBalanced())
console.log(tree.preOrderForEach(value => console.log(value)))
console.log(tree.postOrderForEach(value => console.log(value)))
console.log(tree.inOrderForEach(value => console.log(value)))
tree.insert(101)
tree.insert(102)
tree.insert(103)
console.log(tree.isBalanced())
tree.rebalance()
console.log(tree.isBalanced())
console.log(tree.preOrderForEach(value => console.log(value)))
console.log(tree.postOrderForEach(value => console.log(value)))
console.log(tree.inOrderForEach(value => console.log(value)))
console.log(prettyPrint(tree.root))
