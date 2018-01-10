const Node = require('./Node')
const Queue = require('./Queue')

class BinarySearchTree {
	constructor() {
		this.root = null
	}

	insert(data) {
		if(!this.root) {
			this.root = new Node(data)
		} else {
			let currentNode = this.root

			while(true) {
				if(data <= currentNode.data) {
					if(currentNode.left) {
						currentNode = currentNode.left
					} else {
						currentNode.left = new Node(data)
						break
					}
				} else {
					if(currentNode.right) {
						currentNode = currentNode.right
					} else {
						currentNode.right = new Node(data)
						break
					}
				}
			}
		}
	}

	dfs(cb, node=this.root) {
		// Write an algorithm using depth first search that will take in a callback function and call it while passing each nodes data starting down the left path
		// Expected order: '25, 15, 17, 197, 97, 9997'
		cb(node.data)
		if(node.left){
			this.dfs(cb, node.left)
		}if(node.right){
			this.dfs(cb, node.right)
		}
	}

	bfs(cb, node=this.root) {
		// Write an algorithm using breadth first search that takes in a callback function and calls it for every node
		// Expected order: 25, 15, 197, 17, 97, 9997
		var q = [];
		q.push(node)
		while(q.length > 0){
			var c = q.shift();
			cb(c.data)
			if(c.left){
				q.push(c.left)
			}
			if(c.right){
				q.push(c.right)
			}
		}
	}
}

module.exports = BinarySearchTree
