function solution(D) {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const result = { Mon: 0, Tue: 0, Wed: 0, Thu: 0, Fri: 0, Sat: 0, Sun: 0 }

  for (const [dateStr, val] of Object.entries(D)) {
    const day = days[new Date(dateStr).getDay()]
    result[day] += val
  }

  const dayList = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
  const vals = dayList.map(d => result[d])
  
  for (let i = 0; i < 7; i++) {
    if (vals[i] === 0) {
      let prev = i - 1, next = i + 1
      while (prev >= 0 && vals[prev] === 0) prev--
      while (next < 7 && vals[next] === 0) next++
      if (prev >= 0 && next < 7) vals[i] = Math.round((vals[prev] + vals[next]) / 2)
      else if (prev >= 0) vals[i] = vals[prev]
      else if (next < 7) vals[i] = vals[next]
    }
  }

  return dayList.reduce((acc, d, i) => (acc[d] = vals[i], acc), {})
}

module.exports = solution
