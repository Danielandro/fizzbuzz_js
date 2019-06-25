describe('Javabuzz', function () {

  var javabuzz;

  beforeEach(function () {
    javabuzz = new Javabuzz();
  });

  describe('knows when a number is', function () {
    it('divisible by 3', function () {
      expect(javabuzz.isDivisibleByThree(6)).toBe(true);
    });

    it('divisible by 5', function () {
      expect(javabuzz.isDivisibleByFive(10)).toBe(true);
    });

    it('divisible by 15', function () {
      expect(javabuzz.isDivisibleByFifteen(15)).toBe(true);
    });

  });
  describe('knows when a number is NOT', function () {
    it('divisible by 3', function () {
      expect(javabuzz.isDivisibleByThree(4)).toBe(false);
    });

    it('divisible by five', function () {
      expect(javabuzz.isDivisibleByFive(6)).toBe(false);
    });

    it('divisible by 15', function () {
      expect(javabuzz.isDivisibleByFifteen(17)).toBe(false);
    });
  });

  describe('when playing, says', function () {
    
    describe('"Java" when number is divisble by 3', function () {
      it('number is 3', function () {
        expect(javabuzz.says(3)).toEqual("Java");
      });

      it('number is 12', function () {
        expect(javabuzz.says(12)).toEqual("Java");
      });
    });

    describe('"Buzz" when number divisble by 5', function() {
      it('number is 5', function() {
        expect(javabuzz.says(5)).toEqual("Buzz");
      });
      
      it('number is 10', function () {
        expect(javabuzz.says(10)).toEqual("Buzz");
      }); 
    });

    describe('"Javabuzz" when number divisible by 15', function() {
      it('number is 15', function () {
        expect(javabuzz.says(15)).toEqual("Javabuzz");
      }); 

      it('number is 30', function () {
        expect(javabuzz.says(30)).toEqual("Javabuzz");
      }); 
    });    

    describe('The number when not divisible by 3, 5 or 15', function() {
      it('number is 11', function () {
        expect(javabuzz.says(11)).toEqual(11);
      });

      it('number is 19', function () {
        expect(javabuzz.says(19)).toEqual(19);
      });
    });
    
  });
});
