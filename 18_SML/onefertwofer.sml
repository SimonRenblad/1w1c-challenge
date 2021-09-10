
(*fun name(NONE) = "One for you, one for me."
| name(SOME(input)) = ("One for " ^ input ^ ", one for me.");*)

fun name(input:string option):string = 
    "One for " ^ Option.getOpt(input, "you") ^ ", one for me.";

val s = "string";
val x = name(s);