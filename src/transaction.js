'use strict';

export default class Transaction {
    constructor(sum) {
        this.sum = +(+sum).toFixed(2);
    }
    render() {
        let div = document.createElement('div');
        div.classList.add('transactions-item');
        let span = document.createElement('span');
        span.textContent = `+ ${this.sum} Р`;
        div.append(span);
        return div;
    }
}