def accumulate[A, B](f: (A) => B, list : List[A]): List[B] =
  list match {
    case Nil => Nil
    case x::xs => f(x) :: accumulate(f, xs)
  }

val accumulation = accumulate[Int, Int](x => x*x, List(1,2,3))

@main def hello: Unit = 
  println(accumulation)

