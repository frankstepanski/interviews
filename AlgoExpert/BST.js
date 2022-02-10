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

    addLeaf(value){
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
    contains(value){

        let currentNode = this.head
        while (currentNode !== null){
            if (value === currentNode.value){
                return true;
            } else
            if (value < currentNode.value){
                currentNode = currentNode.left;
            }else
            if (value > currentNode.value){
                currentNode = currentNode.right;
            }
        }
        return false;

       
    }
}

const bst = new BST();
bst.addLeaf(10);
bst.addLeaf(15);
bst.addLeaf(20);
// console.log("bst =", bst);
console.log(bst.contains(30));