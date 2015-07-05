var junjie = (function () {
  var MT = function (rowCountArg) {
    if (arguments.length > 1) {
      throw 'Only one argument expected!';
    } else {
      rowCountArg = rowCountArg || 9;
      if (rowCountArg.constructor != Number) {
        throw 'Illegal argument type!';
      } else {
        if (parseInt(rowCountArg) != rowCountArg) {
          throw 'Expected integer argument!'
        }
        if (rowCountArg < 1 || rowCountArg > 9) {
          throw 'argument should be between 1 to 9!'
        }
      }
    }
    var makeRowStr = function (rowIndex) {
      var arr = [
      ];
      for (var col = 1; col < rowIndex + 1; col++) {
        arr.push(col + '*' + rowIndex + '=' + col * rowIndex);
      }
      return arr.join('\t');
    };
    this.toString = function () {
      var arr = [
      ];
      for (var count = 1; count < rowCountArg + 1; count++) {
        arr.push(makeRowStr(count));
      }
      return arr.join('\r\n');
    };
  };
  return {
    MultiplicationTable: MT
  };
}) ();
var table = new junjie.MultiplicationTable(4);
console.log(table.toString());