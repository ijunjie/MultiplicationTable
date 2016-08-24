package mt

class MultiplicationTable extends App {
  print(1 to 9 map (i=>1 to i map(c=>s"${c}x${i}=${c*i}") mkString "\t") mkString "\r\n")
}
