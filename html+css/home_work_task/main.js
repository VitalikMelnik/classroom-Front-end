var size = 8,
    result = "";

for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
		result += (i + j) % 2 ? " " : "#";
    }
    result += "\n";
}

console.log(result);

function createChessboardString(size){

  const line = ' #'.repeat( size ),
        even = line.substring(0,size),
        odd = line.substring(1,size+1);
  let   out = '';

  while(size--){
    out = out + ((size % 2) ? odd: even ) + '\n';
  }

 return out;
}

console.log(createChessboardString(8));