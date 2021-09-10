val s = "Hello World" : string;

fun square x = x*x;

fun add x y = x + y;

val add10 = add 10;

val y = add10 5 : int;

fun fact 0 = 1
    | fact x = x * fact (x-1);

val z = fact(3) : int;

val p = 3::[1,2];

val sqlist = map square;

val c = sqlist p;

(* done without folding*)
fun concat (l:string list):string =
    case l of
    [] => ""
    | x::xs => x ^ (concat xs)

(*done with folding iteratively front to back tail-recursive*)
fun concatf (l:string list):string = foldl (fn (x,acc) => acc^x) "" l;

(*done with fold right or back to front regular recursion*)
fun concatfr (l:string list):string = foldr (fn (x, acc) => x^acc) "" l;

val randstring:string list = ["rand","om string"];

val st = concat randstring;

val st1 = concatf randstring;

val st2 = concatfr randstring;

val _ = print "hello";