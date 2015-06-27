package mt

class MultiplicationTable(rowCount: Int = 9) {
  require(rowCount > 0 && rowCount < 10)
  override def toString = {
    def rowStr(rowIndex: Int) = {
      val rowGenerator = for (col <- 1 to rowIndex) 
        yield col + "*" + rowIndex + "=" + col * rowIndex
      rowGenerator.mkString("\t")
    }
    val tableGenerator = for (count <- 1 to rowCount) 
      yield rowStr(count)
    tableGenerator.mkString("\r\n")
  }
}