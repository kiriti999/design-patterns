/* An example of where the Prototype pattern is useful is the initialization of business objects with
values that match the default values in the database.
The prototype object holds the default values that are copied over into a newly created business object. */

/* Classical languages rarely use the Prototype pattern, but JavaScript being a prototypal language uses this
pattern in the construction of new objects and their prototypes. */

/* Participants
The objects participating in this pattern are:

Client -- In example code: the run() function.
creates a new object by asking a prototype to clone itself

Prototype -- In example code: CustomerPrototype
creates an interfaces to clone itself

Clones -- In example code: Customer
the cloned objects that are being created */

function CustomerPrototype(proto) {
    this.proto = proto;

    this.clone = function () {
        var customer = new Customer();

        customer.first = proto.first;
        customer.last = proto.last;
        customer.status = proto.status;

        return customer;
    };
}

function Customer(first, last, status) {

    this.first = first;
    this.last = last;
    this.status = status;

    this.say = function () {
        console.log("name: " + this.first + " " + this.last +
            ", status: " + this.status);
    };
}

function run() {

    var proto = new Customer("n/a", "n/a", "pending");
    var prototype = new CustomerPrototype(proto);

    var customer = prototype.clone();
    customer.say();
}
