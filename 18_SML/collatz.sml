fun collatz_helper(n:int, count:int) = 
    if n=1
    then count
    else
        if (n mod 2) = 0
        then collatz_helper(n div 2, count+1)
        else collatz_helper(3*n + 1, count+1);

fun collatz n = 
    if n <= 0
    then NONE
    else SOME(collatz_helper(n, 0));