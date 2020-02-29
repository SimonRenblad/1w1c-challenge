object FunctionPractice {
  
  def main(args: Array[String]) : Unit = {
    
    var listToSort : Array[Int] = Array(6, 3, 4, 5, 1, 7, 2);

    val listSorted : Array[Int] = heap_sort(listToSort);

    for( element <- listSorted) {
      println(element);
    }

  }

  def heap_sort(ls: Array[Int]) : Array[Int] = {
    
    ls = heapify(ls);

    var length : Int = ls.length;
    var index : Int = ls.length - 1;
    var root : Int = 0;

    while(index > root) {

      var temp : Int = ls(index);
      ls(index) = ls(root);
      ls(root) = temp;
      length -= 1;
      
      ls = sift_down(ls, root, length - 1);

      i -= 1;

    }

    return ls;

  }

  def heapify(ls: Array[Int]) : Array[Int] = {
      
    var index : Int = ls.length;
    var root : Int = 0;

    while(index > root) {

      var maxIndex = index;
      if(index % 2 == 0) {
        
        index -= 1;
        if(ls(index) > ls(maxIndex)) {
          maxIndex = index;
        }

      }   
      parentIndex = (index - 1) / 2;

      if(ls(maxIndex) > ls(parentIndex)) {

        var temp : Int = ls(parentIndex);
        ls(parentIndex) = ls(maxIndex);
        ls(maxIndex) = temp;

        ls = sift_down(ls, maxIndex, ls.length - 1);

      }
    }

    return ls;
      
  }

  def sift_down(ls: Array[Int], parentIndex: Int, arrayEnd: Int) : Array[Int] = {
    
    while(parentIndex < arrayEnd) {

      val leftChild : Int = (parentIndex * 2) + 1;
      val rightChild : Int = (parentIndex * 2) + 2;
      var maxIndex : Int = parentIndex;

      if(leftChild > arrayEnd) {return ls;}

      if(rightChild <= arrayEnd) {
         maxIndex = rightChild;
      }
      if(ls(leftChild) > ls(maxIndex)) {
         maxIndex = leftChild;
      }
      if(ls(maxIndex) <= ls(parentIndex)) {return ls;}

      val temp : Int = ls(parentIndex);
      ls(parentIndex) = ls(maxIndex);
      ls(maxIndex) = temp;
      parentIndex = maxIndex;
    }

    return ls;
  }

}
