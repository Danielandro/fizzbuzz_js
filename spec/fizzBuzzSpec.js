describe('Javabuzz', function () { 

  var javabuzz;

  beforeEach(function() {
    javabuzz = new Javabuzz();
  });

  describe('knows when a number is', function() {
    it('divisible by 3', function() {
      expect(javabuzz.isDivisibleBy(6, 3)).toBe(true);
    });  
    
    it('divisible by 5', function() {
      expect(javabuzz.isDivisibleBy(10, 5)).toBe(true);
    });

  });
  describe('knows when a number is NOT', function() {
    it('divisible by 3', function () {
      expect(javabuzz.isDivisibleBy(4, 3)).toBe(false);
    });

    it('divisible by five', function() {
      expect(javabuzz.isDivisibleBy(6, 5)).toBe(false);
    });
  });

});

