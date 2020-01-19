// CREATE A LINKED LIST CLASS
function LinkedList() {
    var length = 0;
    var head = null;

    var Node = function (element) {
        this.element = element;
        this.next = null;
    };

    this.head = function () {
        return head;
    };

    this.size = function () {
        return length;
    };

    this.add = function (element) {
        // Only change code below this line
        var newNode = new Node(element);
        if (length == 0) {
            head = new Node(element);
        } else {
            // start with the first node
            let current = head;

            // keep going until you reach the end
            while (current.next != null) {
                current = current.next;
            }

            // when you reach the end, linke the node to the list
            current.next = newNode;

            // increase the length
        }
        length++;
        // Only change code above this line
    };

    this.remove = function (element) {
        // ????????????????? it's too hard!
    }
}