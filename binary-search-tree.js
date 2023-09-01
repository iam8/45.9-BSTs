
/** Individual node for a binary tree. */
class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}


class BinarySearchTree {
    constructor(root = null) {
        this.root = root;
    }

    /** insert(val): insert a new node into the BST with value val.
     * Returns the tree. Uses iteration. */
    insert(val) {

        // Insert value as root if root is null
        if (!this.root) {
            this.root = new Node(val);
            return this;
        }

        let current = this.root;
        let isInserted = false;
        while (!isInserted) {

            // Don't do anything if tree already contains the desired value
            if (val === current.val) {
                break;
            }

            if (val < current.val) {
                if (!current.left) {
                    current.left = new Node(val);
                    isInserted = true;
                } else {
                    current = current.left;
                }
            }

            if (val > current.val) {
                if (!current.right) {
                    current.right = new Node(val);
                    isInserted = true;
                } else {
                    current = current.right;
                }
            }
        }

        return this;
    }

    /** insertRecursively(val): insert a new node into the BST with value val.
     * Returns the tree. Uses recursion. */
    insertRecursively(val) {
        if (!this.root) {
            this.root = new Node(val);
            return this;
        }

        const findSpotAndInsert = (startNode) => {
            if (startNode.val === val) return;

            if (val < startNode.val) {
                if (!startNode.left) {
                    startNode.left = new Node(val);
                } else{
                    findSpotAndInsert(startNode.left);
                }
            }

            if (val > startNode.val) {
                if (!startNode.right) {
                    startNode.right = new Node(val);
                } else{
                    findSpotAndInsert(startNode.right);
                }
            }
        }

        findSpotAndInsert(this.root);
        return this;
    }

    /** find(val): search the tree for a node with value val.
     * return the node, if found; else undefined. Uses iteration. */
    find(val) {
        let current = this.root;

        while (current) {
            if (current.val === val) return current;

            if (val < current.val) current = current.left;
            if (val > current.val) current = current.right;
        }
    }

    /** findRecursively(val): search the tree for a node with value val.
     * return the node, if found; else undefined. Uses recursion. */
    findRecursively(val) {

        const getNode = (startNode) => {
            if (!startNode) return;
            if (startNode.val === val) return startNode;

            if (val < startNode.val) return getNode(startNode.left);
            if (val > startNode.val) return getNode(startNode.right);
        }

        return getNode(this.root);

    }

    /** dfsPreOrder(): Traverse the tree using pre-order DFS.
     * Return an array of visited node values. */
    dfsPreOrder() {
        const visited = [];

        const traverse = (startNode) => {
            if (!startNode) return;

            visited.push(startNode.val);
            traverse(startNode.left);
            traverse(startNode.right);
        }

        traverse(this.root);
        return visited;
    }

    /** dfsInOrder(): Traverse the tree using in-order DFS.
     * Return an array of visited node values. */
    dfsInOrder() {
        const visited = [];

        const traverse = (startNode) => {
            if (!startNode) return;

            traverse(startNode.left);
            visited.push(startNode.val);
            traverse(startNode.right);
        }

        traverse(this.root);
        return visited;
    }

    /** dfsPostOrder(): Traverse the tree using post-order DFS.
     * Return an array of visited node values. */
    dfsPostOrder() {
        const visited = [];

        const traverse = (startNode) => {
            if (!startNode) return;

            traverse(startNode.left);
            traverse(startNode.right);
            visited.push(startNode.val);
        }

        traverse(this.root);
        return visited;
    }

    /** bfs(): Traverse the tree using BFS.
     * Return an array of visited node values. */
    bfs() {

    }

    /** Further Study!
     * remove(val): Removes a node in the BST with the value val.
     * Returns the removed node. */
    // remove(val) {

    // }

    /** Further Study!
     * isBalanced(): Returns true if the BST is balanced, false otherwise. */
    // isBalanced() {

    // }

    /** Further Study!
     * findSecondHighest(): Find the second highest value in the BST, if it exists.
     * Otherwise return undefined. */
    // findSecondHighest() {

    // }
}


module.exports = BinarySearchTree;
