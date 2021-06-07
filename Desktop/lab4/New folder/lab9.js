function Subject() {
    this.observers = [];
}

Subject.prototype = {
    subscribe: function(fn) {
        this.observers.push(fn);
    },
    unsubscribe: function(fn) {
        this.observers = this.observers.filter(f => f !== fn);
    },
    emit: function(msg) {
        this.observers.forEach(function(fn) {
            fn.call(null, msg);
        });
    }
}

function foo(msg) {
    console.log('foo: ' + msg);
}

const subject = new Subject();
subject.subscribe(console.log);
subject.subscribe(foo);
subject.emit('Hello1');
subject.emit('Hello2');
subject.unsubscribe(foo);
subject.emit('Hello3');