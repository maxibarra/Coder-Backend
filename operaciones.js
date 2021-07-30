"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Suma = exports.Resta = void 0;
class Resta {
    constructor(a, b) {
        this.res = 0;
        this.res = a - b;
    }
    verResta() {
        return this.res;
    }
}
exports.Resta = Resta;
class Suma {
    constructor(a, b) {
        this.result = 0;
        this.result = a + b;
    }
    ver() {
        return this.result;
    }
}
exports.Suma = Suma;
