class Regular {
    constructor() {
        this.range = [50, 100];
        this.age = 1;
    }
}

class Energy {
    constructor() {
        this.range = [5, 40];
        this.age = 10;
    }
}

class Factory {
    createBulb(type) {
        let bulb;

        if (type === "regular") {
            bulb = new Regular();
        } else if (type === "energy") {
            bulb = new Energy();
        }

        return bulb;
    }
}

