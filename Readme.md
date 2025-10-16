# Weekday Value Summarizer

A small JavaScript utility that takes a dictionary of dates and integer values, and returns a summary of values grouped by weekday.

---

## 🚀 Problem Statement

Given an input dictionary where:

- Each **key** is a date in the format `YYYY-MM-DD`
- Each **value** is an integer

Return a new dictionary where:
- Keys are weekday names: `Mon, Tue, Wed, Thu, Fri, Sat, Sun`
- Values are the sum of all integers for that day of the week.

If a particular weekday is missing from the data, its value should be computed as the **average of the previous and next existing weekdays**.

---

## 💡 Example

### Input:
```js
{
  '2020-01-01': 6,   // Wed
  '2020-01-04': 12,  // Sat
  '2020-01-05': 14,  // Sun
  '2020-01-06': 2,   // Mon
  '2020-01-07': 4    // Tue
}
