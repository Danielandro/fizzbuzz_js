Javabuzz
--------

Classic fizzbuzz challenge TDD'd in JavaScript using Jasmine

Rules
-----
* Print the numbers from 1 to 100
* If a number is divisible by 3 print "Fizz" instead
* If a number is divisible by 5 print "Buzz" instead
* If a number is divisible by 3 and 5 print "FizzBuzz" instead

Instructions
------------

Fork the repo

Open the `SpecRunner.html` file in your browser

Launch the console: `Command+Option+J` (Mac), `Control+Shift+J` (Windows/Linux)

**Example**

```javascript

var javaBuzz = new Javabuzz();

// for numbers 1-100
for(var i = 0; i <= 100; i++) {
  console.log(javabuzz.says(i));
}

```
