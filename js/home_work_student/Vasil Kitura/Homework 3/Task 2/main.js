Stop:
  for (var i = 2; i <= 10; i++) {
    for (var j = 2; j < i; j++) {
      if (i % j == 0) continue Stop ;
    }
    alert( i );
  }

