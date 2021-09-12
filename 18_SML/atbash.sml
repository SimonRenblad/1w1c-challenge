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

(*len function*)
fun len nil = 0
| len (_::xs) = 1 + len xs;

(*function to find if integer is in list*)
fun is_in ([], num:int) = false
| is_in (x::xs:int list, num:int) = (x=num) orelse is_in(xs,num);

(*convert string to ascii ordinal list*)
fun str_to_int_list s = map ord (explode s);

(*convert ascii ordinal list to string*)
fun int_list_to_str l = implode(map chr l);

(*filter implementation*)
fun filter p nil = nil
| filter p (x::xs) =
    if p x
    then x :: filter p xs
    else filter p xs;

(*convert ascii ordinal to lower case*)
fun lower_case num = 
    if is_in(range(65, 90), num)
    then num + 32
    else num;

fun lower_case_all l:int list = map lower_case l;

fun remove_non_alpha l:int list = filter (fn x => ((is_in(range(97, 122), x) orelse (is_in(range(48,57), x))))) l;

fun cipher_character num = 
    if is_in(range(48,57), num) (*handle numbers*)
    then num
    else (num-96)*(~1) mod 27 + 96;

fun cipher_all ls = map cipher_character ls;

fun split ([], n) = nil
| split(l, n) = 
    if len(l) < n
    then [l]
    else List.take(l, n)::split(List.drop(l, n), n);

fun add_white_spac [] = []
| add_white_spac (l::ls) = l @ [32] @ add_white_spac ls;

fun add_white_space l = 
    let
        val s = add_white_spac(split(l,5))
    in
        List.take(s, len(s) - 1)
    end

fun decode (phrase: string): string = 
  int_list_to_str(cipher_all(remove_non_alpha(lower_case_all(str_to_int_list(phrase)))));

fun encode (phrase: string): string =
  int_list_to_str(add_white_space(cipher_all(remove_non_alpha(lower_case_all(str_to_int_list(phrase))))));
