// Write a function that takes in a BST and a target integer
// value and returns the closest value to that target value contained
// in the BST.

// You can assume that there will only be one closest value.

// Each BST node has an integer value, a left child node, 
// and a right child node. A node is said to be a valid BST node
// if and only if it satisfies the BST property: its value is 
// strictly greater than the values of every node to the left; its
// value is less than or equal to the values of every node to its right
// and its children nodes are either valid BST nodes themselves or None / null.

// BST and a target integer value 
function findClosestValue(bst, targetNumber) {

    let closestValue = bst.value;
    while (true){
        closestValue = (Math.abs(bst.value - targetNumber) < Math.abs(targetNumber - closestValue)) ? bst.value : closestValue;
        if (targetNumber < bst.value){
           if (bst.left === null){
               break;
            }else{
                bst = bst.left
            }
        }else{
            if (bst.right === null){
                break;
            }else{
                bst = bst.right
            }
        }
    } 

   // returns the closest value to that target value contained
   // in the BST.
   return closestValue;
}

class Node {
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    } 
}

class BST {
    constructor(){
        this.head = null
    }

    addNode(value){
        let newNode = new Node(value);
        if (this.head === null){
            this.head = newNode;
            return this.head;
        }
        let currentNode = this.head;
        while (true){
            if (value < currentNode.value){
                if (currentNode.left === null){
                    currentNode.left = newNode;
                    return this.head
                }else {
                    currentNode = currentNode.left
                }
            }else {
                if (currentNode.right === null){
                    currentNode.right = newNode;
                    return this.head
                }else{
                    currentNode = currentNode.right;
                }
            }
        }

    }
}

const bst = new BST();
bst.addNode(10);
bst.addNode(12);
bst.addNode(28);
bst.addNode(26);
console.log(findClosestValue(bst.head, 13))