const should = require('chai').should();
const fizzBuzzer = require('../fizzBuzzer');

// unit test for 'fizzBuzzer'
describe('fizzBuzzer', () => {

  // test if divisble by 15
  it('should return fizz-buzz', () => {

    // nums divisible by 15
    const normalCases = [15, 30, 45];

    // loop thru each num
    normalCases.forEach( (num) => {
      
      // get answer from function
      const answer = fizzBuzzer(num);

      // setup expected response
      answer.should.equal('fizz-buzz');

    });

  });

  // test if divisble by 5
  it('should return buzz', () => {
    
    // nums divisible by 15
    const normalCases = [5, 10, 20];

    // loop thru each num
    normalCases.forEach( (num) => {
      
      // get answer from function
      const answer = fizzBuzzer(num);

      // setup expected response
      answer.should.equal('buzz');
      
    });

  });
  
  // test if divisble by 3
  it('should return fizz', () => {
    
    // nums divisible by 15
    const normalCases = [3, 6, 9];

    // loop thru each num
    normalCases.forEach( (num) => {
      
      // get answer from function
      const answer = fizzBuzzer(num);

      // setup expected response
      answer.should.equal('fizz');
      
    });

  });

  // test for error when non-numeric value passed in
  it('should throw an error', () => {

    // setup bad values
    const badValues = ['5', '10', '15', 'twenty'];

    // loop thru each value
    badValues.forEach( (num) => {
      
      // run iife
      ( () => {
        fizzBuzzer(num)
      }).should.throw(Error);

    });

  }); /* don't really understand this */

});