```

function calculaNota(ex, p1, p2) {
  const exr = ex * 1
  const p1r = p1 * 2
  const p2r = p2 * 3
  const media = ((exr + p1r + p2r)/6)
if (media >= 9) {return ("A")}
  else if (media < 9 && media >= 7.5){return ("B")}
  else if (media < 7.5 && media >= 6){return ("C")}
  else if (media < 6){return ("D")}
}

calculaNota (10,5,6)

```

