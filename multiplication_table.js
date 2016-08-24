var range = c=>[...Array(c)].map((_, i) => i+1);
var result = range(9).map(i =>range(i).map(c => c+'x'+i+'='+c*i).join('\t')).join('\r\n');
console.log(result);
