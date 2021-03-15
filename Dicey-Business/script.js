"use strict";
function encapsulator() {
    var CONTAINER = document.getElementById("container"), GENERATE_BTN = document.getElementById("controls").querySelectorAll("button")[0], REROLL_BTN = document.getElementById("controls").querySelectorAll("button")[1], SUM_BTN = document.getElementById("controls").querySelectorAll("button")[2], STATUS = document.getElementById("status");
    var counter = 1, dice = [];
    var Die = /** @class */ (function () {
        class Die {
            constructor() {
                this.div = document.createElement('div');
                this.div.classList.add('die');
                this.div.id = counter;
                this.value;
                CONTAINER.appendChild(this.div);
                this.animate();
                counter++;
                dice.push(this);
                this.listen();
            }
            animate(limit) {
                var _this = this;
                if (limit === void 0) { limit = 1000; }
                var start = Date.now();
                var timer = setInterval(function () {
                    var timePassed = Date.now() - start;
                    if (timePassed >= limit) {
                        clearInterval(timer);
                        return;
                    }
                    _this.roll();
                }, Die.bind, (this), 100);
            }
            roll(min, max) {
                if (min === void 0) { min = 1; }
                if (max === void 0) { max = 6; }
                var r = randomDieVal(min, max);
                this.value = r;
                this.div.innerHTML = '<span>' + setFace(this.value) + '</span>';
            }
            listen() {
                var _this = this;
                this.div.addEventListener('click', function () {
                    _this.animate();
                    STATUS.innerHTML = "<span>Selected die rerolled</span>";
                });
                this.div.addEventListener('dblclick', function () {
                    _this.div.remove();
                    var rIndex = dice.indexOf(_this);
                    dice.splice(rIndex, 1);
                    reorderDice();
                    STATUS.innerHTML = "<span>Selected die removed</span>";
                });
                this.div.addEventListener('contextmenu', function () {
                    _this.div.remove();
                    var rIndex = dice.indexOf(_this);
                    dice.splice(rIndex, 1);
                    reorderDice();
                    STATUS.innerHTML = "<span>Selected die removed</span>";
                });
            }
        }
        return Die;
    }());
    GENERATE_BTN.addEventListener('click', function () {
        new Die();
        var noun = setNoun();
        STATUS.innerHTML = "<span>Number of " + noun + ": " + dice.length + "</span>";
    });
    REROLL_BTN.addEventListener('click', function () {
        if (dice.length === 0) {
            STATUS.innerHTML = "<span>NO DICE</span>";
            return;
        }
        else
            dice.forEach(function (die) {
                die.animate(1000);
                var noun = setNoun();
                STATUS.innerHTML = "<span>" + dice.length + " " + noun + " rerolled</span>";
            });
    });
    SUM_BTN.addEventListener('click', function () {
        if (dice.length === 0) {
            STATUS.innerHTML = "<span>NO DICE</span>";
            return;
        }
        else {
            var sum_1 = 0;
            var noun = setNoun();
            dice.forEach(function (die) {
                sum_1 += die.value;
            });
            STATUS.innerHTML = "<span>Sum of " + noun + ": " + sum_1 + "</span>";
        }
    });
    function setNoun() {
        var n;
        if (dice.length === 1) {
            n = 'die';
        }
        else if (dice.length > 1) {
            n = 'dice';
        }
        return n;
    }
    function randomDieVal(min, max) {
        var val = Math.floor(Math.random() * ((max + 1) - min) + min);
        return val;
    }
    function setFace(value) {
        switch (value) {
            case 1:
                return '\u2680';
            case 2:
                return '\u2681';
            case 3:
                return '\u2682';
            case 4:
                return '\u2683';
            case 5:
                return '\u2684';
            case 6:
                return '\u2685';
        }
    }
    function reorderDice() {
        var x = 0;
        dice.forEach(function (die) {
            die.div.id = x;
            x++;
        });
        counter = dice.length;
    }
}
encapsulator();
