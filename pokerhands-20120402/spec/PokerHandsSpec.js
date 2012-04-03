describe("PokerHand", function(){
    it("exists", function () {
        expect(function(){ new PokerHand();}).toThrow("Invalid hand");
    });

    describe("parses a full hand", function () {
        it("values", function () {
            var pokerHand = new PokerHand("2H 3D 5S 9C KD");
            expect(pokerHand.cardsValue()).toEqual([2,3,5,9,13]);
        });

        it("suits", function () {
            var pokerHand = new PokerHand("2H 3D 5S 9C KD");
            expect(pokerHand.suitsValue()).toEqual(["H","D","S","C","D"]);
        });
    });

    describe("ranks", function () {
        it("a flush", function () {
            var pokerHand = new PokerHand("2C 3C AC 8C 7C");
            expect(pokerHand.rank()).toEqual("Flush");
        });

        it("a high card", function () {
            var pokerHand = new PokerHand("2C 4D AC 8S 7C");
            expect(pokerHand.rank()).toEqual("High Card");
        });

        it("a pair", function () {
            var pokerHand = new PokerHand("2C 2D AC 8S 7C");
            expect(pokerHand.rank()).toEqual("Pair");
        });
    });
});

