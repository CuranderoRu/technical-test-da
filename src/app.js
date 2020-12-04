'use strict';

import Transaction from './transaction.js';

import '../SASS/style.scss'

class App {
    constructor() {
        this.transactions = [];
        this.total = 0;
    };

    addToList(transaction) {
        if (!transaction.sum) {
            return;
        }
        let totalCaption = document.getElementById('header__total');
        let totalNumOfTrans = document.getElementById('header__transactions');
        let totalAverage = document.getElementById('header__average');
        if (!this.transactions.length) {
            let sectionNoTrans = document.getElementById('no__transactions');
            sectionNoTrans.className = "";
            sectionNoTrans.classList.add('invisible');
            totalCaption.parentNode.className = 'header-caption';
            totalNumOfTrans.parentNode.className = 'header-caption';
            totalAverage.parentNode.className = 'header-caption';
        }
        this.transactions.push(transaction);
        let section = document.getElementsByClassName('transactions')[0];
        console.log(totalCaption['clientWidth']);
        section.prepend(transaction.render());
        this.total += transaction.sum;

        totalCaption.innerText = this.total;
        totalNumOfTrans.innerText = this.transactions.length;
        totalAverage.innerText = (this.total / this.transactions.length).toFixed(2);


    };
    run() {
        let input = document.getElementById('sum__input');
        input.addEventListener('keydown', (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                if (e.target.value > 0) {
                    this.addToList(new Transaction(e.target.value))
                    e.target.value = "";
                }
            }
        });
        let sectionNoTrans = document.getElementById('no__transactions');
        sectionNoTrans.classList.add('no-transactions');
    }
};

let app = new App();
app.run();