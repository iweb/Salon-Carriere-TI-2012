describe("Card", function(){
    it("exists", function () {
        expect(function(){ new Card();}).toThrow("Invalid card");
    });

    describe("parses one card", function () {
        it("using all possible cards value", function () {
            var cards = ["2C","3C","4C","5C","6C","7C","8C","9C","TC","JC","QC","KC","AC"];
            var values = [2,3,4,5,6,7,8,9,10,11,12,13,14];
            for (var i = 0; i < 13; i++) {
                expectCardToBeValue(cards[i], values[i]);
            }
        });

        it("using all possible cards suit", function () {
            var cards = ["2C","2D","2H","2S"];
            var suits = ["C","D","H","S"];
            for (var i = 0; i < 3; i++) {
                expectCardToBeOfSuit(cards[i], suits[i]);
            }
        });
    });
});

expectCardToBeValue = function (card, value) {
    card = new Card(card);
    expect(card.numericalValue()).toEqual(value);
};

expectCardToBeOfSuit = function (card, value) {
    card = new Card(card);
    expect(card.suitValue()).toEqual(value);
};
