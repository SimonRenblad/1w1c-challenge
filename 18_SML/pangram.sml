(*helper range function*)
fun range(low, high) =
    let
        val out = []
    in
        if
            low <= high
        then
            low::range(low+1, high)
        else
            out
    end

(*function to find if integer is in list*)
fun is_in ([], num:int) = false
| is_in (x::xs:int list, num:int) = (x=num) orelse is_in(xs,num);

fun is_in_all([], search_list) = true
| is_in_all(x::xs, search_list) = is_in(search_list, x) andalso is_in_all(xs, search_list);

(*convert string to ascii ordinal list*)
fun str_to_int_list s = map ord (explode s);

(*convert ascii ordinal to lower case*)
fun lower_case num = fun gen_alph(122) = [122]
| gen_alph(x) = x::gen_alph(x+1);

val gn = gen_alph(97);

fun is_in ([], num:int) = false
| is_in (x::xs:int list, num:int) = (x=num) orelse is_in(xs,num);

fun is_in_all([], search_list) = true
| is_in_all(x::xs, search_list) = is_in(search_list, x) andalso is_in_all(xs, search_list);

fun str_to_int_list s = map ord (explode s);

fun isPangram s = is_in_all(gn, str_to_int_list(s));
    if is_in(range(65, 90), num)
    then num + 32
    else num;

fun lower_case_all l:int list = map lower_case l;

(*contains all ascii values of lower case english alphabet*)
val alphabet = range(97, 122);

fun isPangram s = is_in_all(alphabet, lower_case_all(str_to_int_list(s)));
