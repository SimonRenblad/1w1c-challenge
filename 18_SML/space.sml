datatype planet = Mercury | Venus | Earth | Mars | Jupiter | Saturn | Neptune | Uranus

fun to_hours seconds = Real.fromInt(seconds) / 31557600.0;

fun age_on Mercury seconds = (to_hours seconds) / 0.2408467
| age_on Venus seconds = (to_hours seconds) / 0.61519726 
| age_on Earth seconds = to_hours seconds
| age_on Mars seconds = (to_hours seconds) / 1.8808158
| age_on Jupiter seconds = (to_hours seconds) / 11.862615
| age_on Saturn seconds = (to_hours seconds) / 29.447498
| age_on Uranus seconds = (to_hours seconds) / 84.016846
| age_on Neptune seconds = (to_hours seconds) / 164.79132;
