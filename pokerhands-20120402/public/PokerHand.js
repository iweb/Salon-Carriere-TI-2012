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

PokerHand.prototype.rank = function() {
    return this.findMatchingHand().label;
};

PokerHand.prototype.findMatchingHand = function() {
    for (var i = 0; i < PokerHand.highestToLowestPokerHands.length; i++) {
        if (PokerHand.highestToLowestPokerHands[i].testFunc.apply(this)) {
            return PokerHand.highestToLowestPokerHands[i];
        }
    }
};

PokerHand.prototype.isFlush = function() {
    return this.cards[0].suitValue() == this.cards[1].suitValue() &&
           this.cards[0].suitValue() == this.cards[2].suitValue() &&
           this.cards[0].suitValue() == this.cards[3].suitValue() &&
           this.cards[0].suitValue() == this.cards[4].suitValue();
};

PokerHand.prototype.isTwoPairs = function() {
    return this.timesItHasSpecifiedAmountOfAKind(2) == 2;
};

PokerHand.prototype.isStraightFlush = function() {
    return this.isFlush() && this.isStraight();
};

PokerHand.prototype.isStraight = function() {
    var numberOfValues = this.findNumberOfSameValue(), valuesInArray = [];
    for (var i in numberOfValues) {
        if (valuesInArray.indexOf(i) == -1) {
            valuesInArray.push(i);
        }
    }
    valuesInArray = valuesInArray.sort();
    return (valuesInArray.length == 5 &&
        (valuesInArray[valuesInArray.length-1] - valuesInArray[0]) == 4);
};

PokerHand.prototype.isFourOfAKind = function() {
    return this.hasSpecifiedAmountOfAKind(4);
};

PokerHand.prototype.isFullHouse = function() {
    return this.isPair() && this.isThreeOfAKind();
};

PokerHand.prototype.isThreeOfAKind = function() {
    return this.hasSpecifiedAmountOfAKind(3);
};

PokerHand.prototype.isPair = function() {
    return this.hasSpecifiedAmountOfAKind(2);
};

PokerHand.prototype.isHighCard = function() {
    return true;
};

PokerHand.prototype.findNumberOfSameValue = function() {
    var numberOfValues = {};
    for (var i = 0; i < this.cards.length; i++) {
        var key = this.cards[i].numericalValue().toString();
        if(!numberOfValues[key])
        {
            numberOfValues[key] = 1;
        }
        else
        {
            numberOfValues[key]++;
        }
    }
    return numberOfValues;
};

PokerHand.prototype.hasSpecifiedAmountOfAKind = function(amount) {
    return this.timesItHasSpecifiedAmountOfAKind(amount) == 1;
};

PokerHand.prototype.timesItHasSpecifiedAmountOfAKind = function(amount) {
    var numberOfValues = this.findNumberOfSameValue();
    var numberOfSameValueGroup = 0;
    for (var key in numberOfValues) {
        if(numberOfValues[key] == amount)
        {
            numberOfSameValueGroup++;
        }
    }
    return numberOfSameValueGroup;
}


PokerHand.highestToLowestPokerHands = [
    {
        label:"Straight Flush",
        testFunc:PokerHand.prototype.isStraightFlush
    },
    {
        label:"Four of a Kind",
        testFunc:PokerHand.prototype.isFourOfAKind
    },
    {
        label:"Full House",
        testFunc:PokerHand.prototype.isFullHouse
    },
    {
        label:"Flush",
        testFunc:PokerHand.prototype.isFlush
    },
    {
        label:"Straight",
        testFunc:PokerHand.prototype.isStraight
    },
    {
        label:"Three of a Kind",
        testFunc:PokerHand.prototype.isThreeOfAKind
    },
    {
        label:"Two Pairs",
        testFunc:PokerHand.prototype.isTwoPairs
    },
    {
        label:"Pair",
        testFunc:PokerHand.prototype.isPair
    },
    {
        label:"High Card",
        testFunc:PokerHand.prototype.isHighCard
    }
];
