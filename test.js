const solution = require('./solution')

function testCase(input, expected) {
  const out = solution(input)
  console.log('\nInput:', input)
  console.log('Output:', out)
  console.log('Expected:', expected)
}

console.log('=== Test 1 ===')
testCase(
  {
    '2020-01-01': 4,
    '2020-01-03': 6,
    '2020-01-04': 8,
    '2020-01-05': 2,
    '2020-01-06': -6,
    '2020-01-07': 2,
    '2020-01-08': -2
  },
  { Mon: -6, Tue: 2, Wed: 4, Thu: 4, Fri: 6, Sat: 8, Sun: 2 }
)

console.log('\n=== Test 2 (missing Thu & Fri) ===')
testCase(
  {
    '2020-01-01': 6,
    '2020-01-04': 12,
    '2020-01-05': 14,
    '2020-01-06': 2,
    '2020-01-07': 4
  },
  { Mon: 2, Tue: 4, Wed: 6, Thu: 8, Fri: 10, Sat: 12, Sun: 14 }
)
