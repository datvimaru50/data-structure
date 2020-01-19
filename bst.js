// BINARY SEARCH TREES
var displayTree = tree => console.log(JSON.stringify(tree, null, 2));

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function BinarySearchTree() {
    this.root = null;
    // change code below this line
    // let make some nodes
    var node8 = new Node(8);
    var node1 = new Node(1);
    var node6 = new Node(6);
    var node9 = new Node(9);
    var node5 = new Node(5);

    node5.left = node1;
    node5.right = node6;

    node8.left = node5;
    node8.right = node9;

    this.root = node8;

    this.findMin = () => {
        if (this.root) {
            return this.root.left.left.value;
        } else {
            return null;
        }
    }
    this.findMax = () => {
        if (this.root) {
            return this.root.right.value;
        } else {
            return null;
        }
    }

    // change code above this line
}

// Add element to BST
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function BinarySearchTree() {
    this.root = null;
    // change code below this line

    // add elemt to tree
    this.add = (number) => {
        let current = this.root;
        if (!current) {
            // make node with provided number
            this.root = new Node(number);
            return;
        } else {
            function searchAndAdd(current) {
                if (number == current.value) {
                    return null;
                }
                if (number < current.value) {
                    if (current.left) {
                        return searchAndAdd(current.left);
                    } else {
                        current.left = new Node(number);
                        return;
                    }
                }
                if (number > current.value) {
                    if (current.right) {
                        return searchAndAdd(current.right);
                    } else {
                        current.right = new Node(number);
                        return;
                    }
                }

            }
            return searchAndAdd(current);
        }

    };

    // check for present of element
    this.isPresent = (number) => {
        let current = this.root;
        if (!current) {
            return false;
        } else {
            function checkNode(current) {
                if (number == current.value) {
                    return true;
                }
                if (number < current.value) {
                    if (current.left) {
                        return checkNode(current.left);
                    } else {
                        return false;
                    }
                }
                if (number > current.value) {
                    if (current.right) {
                        return checkNode(current.right);
                    } else {
                        return false;
                    }
                }
            }
            return checkNode(current);
        }
    }
    // change code above this line
}

// check if a tree is a BST
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function BinarySearchTree() {
    this.root = null;
}

function isBinarySearchTree(tree) {
    // change code below this line
    return true;
    // change code above this line
}