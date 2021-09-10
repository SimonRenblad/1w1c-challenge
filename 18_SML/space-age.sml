
(*does not work see space.sml*)
datatype planet = Mercury | Venus | Earth | Mars
                | Jupiter | Saturn | Neptune | Uranus

fun seconds_to_years(seconds:int):real = Real.fromInt(seconds) / 31557600.0;

fun age_on_years planet x =
    case planet of 
      Mercury s => x / 0.2408467
    | Venus s => x / 0.61519726
    | Earth s => x
    | Mars s => x / 1.8808158
    | Jupiter s => x / 11.862615
    | Saturn s => x / 29.447498
    | Neptune s => x / 84.016846
    | Uranus s => x / 164.79132;

fun age_on planet seconds = age_on_years planet seconds_to_years(seconds);

val x = age_on Mercury 33322222111