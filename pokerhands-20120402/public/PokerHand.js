var PokerHand = function(hand) {
    this.cards = [];
    this.validateHand(hand);
    this.createCardsFromHand(hand);
};

PokerHand.prototype.validateHand = function(hand) {
    if (hand === undefined) {
        throw("Invalid hand");
    }
};

PokerHand.prototype.createCardsFromHand = function (hand) {
    var cards = this.splitHand(hand);
    for (var i = 0; i < cards.length; i++) {
        this.cards[i] = new Card(cards[i]);
    }
};

PokerHand.prototype.splitHand = function(hand){
    return hand.split(" ");
};

PokerHand.prototype.cardsValue = function(){
    var values = [];
    for (var i = 0; i < this.cards.length; i++) {
        values[i] = this.cards[i].numericalValue();
    }
    return values;
};

PokerHand.prototype.suitsValue = function(){
    var values = [];
    for (var i = 0; i < this.cards.length; i++) {
        values[i] = this.cards[i].suitValue();
    }
    return values;
};


PokerHand.prototype.rank = function(){
    if (this.isAFlush()){
        return "Flush";
    }
    else if(this.isAPair()){
        return "Pair";
    }
    else{
        return this.highCard();
    }
};

PokerHand.prototype.isAFlush = function() {
    return this.cards[0].suitValue() == this.cards[1].suitValue() &&
           this.cards[0].suitValue() == this.cards[2].suitValue() &&
           this.cards[0].suitValue() == this.cards[3].suitValue() &&
           this.cards[0].suitValue() == this.cards[4].suitValue();
}

PokerHand.prototype.isAPair = function() {
    var numberOfValues =[0,0,0,0,0,0,0,0,0,0,0,0,0];
    for (var i = 0; i < this.cards.length; i++) {
        numberOfValues[this.cards[i].numericalValue()]++;
    }
    for (var i = 0; i < numberOfValues.length; i++) {
        if(numberOfValues[i] == 2)
        {
            return true;
        }
    }
}

PokerHand.prototype.highCard = function() {
    return "High Card";
}