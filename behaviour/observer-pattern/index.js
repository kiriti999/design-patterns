// Example 1

var Subject = function () {
    const observers = new Map();

    return {
        subscribe: function (observer, name) {
            observers.set(observer, name);
        },
        unsubscribe: function (observer) {
            observers.delete(observer);
        },
        notify: function (observer, value) {
            observer.notify(value);
        },
        notifyAll: function () {
            observers.forEach((value, observer) => {
                observer.notify(value);
            })
        }
    };
};

var Observer = function () {
    return {
        notify: function (index) {
            console.log("Observer " + index + " is notified!");
        }
    }
}

var subject = new Subject();
var observer1 = new Observer();
var observer2 = new Observer();
var observer3 = new Observer();
var observer4 = new Observer();

subject.subscribe(observer1, '1');
subject.subscribe(observer2, '2');
subject.subscribe(observer3, '3');
subject.subscribe(observer4, '4');

subject.notify(observer2, '2'); // Observer 2 is notified!

subject.unsubscribe(observer2);
subject.notifyAll();
// Observer 1 is notified!
// Observer 2 is notified!
// Observer 3 is notified!
// Observer 4 is notified!


// Example 2
console.log('')
const paperNames = {
    dc: 'dc',
    times: 'times'
}

let newsPapers = new Map();

function subscribe(paperType, user) {
    const userKey = newsPapers.get(user);
    if (userKey?.length) {
        userKey.push(paperType);
        newsPapers.set(user, userKey);
        return;
    }
    newsPapers.set(user, [paperType]);
}

function unsubscribe(paperName, user) {
    const papers = newsPapers.get(user);
    const index = papers.indexOf(paperName);
    papers.splice(index, 1);
}

function publish() {
    newsPapers.forEach((paperType, user) => {
        if (user) console.log(`User ${user} is subscribed to ${paperType} paper`);
    });
}

subscribe(paperNames.dc, 'kiriti');
subscribe(paperNames.times, 'John');
subscribe(paperNames.dc, 'Peter');
subscribe(paperNames.times, 'kiriti');
publish();

unsubscribe(paperNames.dc, 'kiriti');
publish();

