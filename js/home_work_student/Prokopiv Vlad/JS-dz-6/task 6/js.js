var arr = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', '8-()' ];

function unique(arr) {
  var result = [];

  start:
    for (var i = 0; i < arr.length; i++) {
      var str = arr[i];
      for (var j = 0; j < result.length; j++) {
        if (result[j] == str) continue start;
      }
      result.push(str);
    }

  return result;
}

console.log(unique(arr));