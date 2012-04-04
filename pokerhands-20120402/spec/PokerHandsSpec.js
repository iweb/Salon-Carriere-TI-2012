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

        it("two pairs", function () {
            var pokerHand = new PokerHand("2C 2D AC AS 7C");
            expect(pokerHand.rank()).toEqual("Two Pairs");
        });

        it("three of a kind", function () {
            var pokerHand = new PokerHand("2C AD AC AS 7C");
            expect(pokerHand.rank()).toEqual("Three of a Kind");
        });

        it("full house", function () {
            var pokerHand = new PokerHand("3C AD AC AS 3C");
            expect(pokerHand.rank()).toEqual("Full House");
        });

        it("four of a kind", function () {
            var pokerHand = new PokerHand("5C 5D 5H 5S 3C");
            expect(pokerHand.rank()).toEqual("Four of a Kind");
        });

        it("straight", function () {
            var pokerHand = new PokerHand("3C 4D 5H 6S 7C");
            expect(pokerHand.rank()).toEqual("Straight");
        });

        it("straight flush", function () {
            var pokerHand = new PokerHand("3C 4C 5C 6C 7C");
            expect(pokerHand.rank()).toEqual("Straight Flush");
        });
    });
});

