
it('should calculate the monthly rate correctly', function () {
  const values = {amount: 100000, years: 10, rate: 12 };
  expect(calculateMonthlyPayment(values)).toEqual('1434.71')
});


it("should return a result with 2 decimal places", function() {
  const values = { amount:250000, years: 30, rate: 3.45};
  expect(calculateMonthlyPayment(values)).toEqual('1115.65');
});

/// etc
