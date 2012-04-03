var Card = function(cardRepresentation) {
   this.validate(cardRepresentation);
   this.card = cardRepresentation;
};

Card.prototype.validate = function(card) {
    if (card === undefined) {
        throw("Invalid card");
    }
};

Card.prototype.numericalValue = function() {
    return Card.convertCardToValue[this.card.charAt(0)];
};

Card.prototype.suitValue = function() {
    return this.card.charAt(1);
};

Card.convertCardToValue = {
    "2":2,
    "3":3,
    "4":4,
    "5":5,
    "6":6,
    "7":7,
    "8":8,
    "9":9,
    "T":10,
    "J":11,
    "Q":12,
    "K":13,
    "A":14
};