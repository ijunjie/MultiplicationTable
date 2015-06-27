/*
 * 这是一个 JavaScript 代码草稿纸。
 *
 * 输入一些 JavaScript，然后可点击右键或从 执行 菜单中选择：
 * 1. 运行 对选中的文本求值(eval) (Ctrl+R)，
 * 2. 查看 对返回值使用对象查看器 (Ctrl+I)，
 * 3. 显示 在选中内容后面以注释的形式插入返回的结果。 (Ctrl+L)
 */
var mymodule = (function (module) {
  var MT = function (rowCountArg) {
    var rowCount = 0;
    if (arguments.length == 0) {
      rowCount = 9;
    } else if (arguments.length > 1) {
      throw 'Expected only one argument!';
    } else {
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
      rowCount = rowCountArg;
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
      for (var count = 1; count < rowCount + 1; count++) {
        arr.push(makeRowStr(count));
      }
      return arr.join('\r\n');
    };
  };
  return {
    MultiplicationTable: MT
  };
}) ({});
var table = new mymodule.MultiplicationTable(8);
console.log(table.toString());
/*
Exception: TypeError: mymodule.MultiplicationTable is not a constructor
@Scratchpad/1:50:13
*/
