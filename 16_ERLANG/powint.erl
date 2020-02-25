-module(powint).
-export([start/0]).

start() ->
    if_cube_sum(133, 2).

print_list(List) ->
    Result = sum_of_cubes(List),
    io:fwrite(" ~p~n", [Result]).

sum_of_cubes(List) ->
    sum_of_cubes(List, 0).

sum_of_cubes([], Result) -> Result;

sum_of_cubes([Current | Remaining], Result) ->
    Cubed = cube(Current),
    sum_of_cubes(Remaining, Cubed + Result).

cube(N) -> N * N * N.

is_in([], _) -> false;

is_in([Current | Remaining], Target) when Target == Current ->
    true;

is_in([Current | Remaining], Target) when Target /= Current ->
    is_in(Remaining, Target).

unique_combinations(Start, End, In_Set) ->
    R = In_Set,
    N = End - Start,
    factorial(N) / (factorial(R) * factorial(N - R)).

factorial(0) -> 1;
factorial(N) ->
    N * factorial(N - 1).

if_cube_sum(Number, Num_Cubes) ->
    if_cube_sum(Number, Num_Cubes, minimum_unique_list(Num_Cubes)).

if_cube_sum(Number, Num_Cubes, List) ->
    Sum = sum_of_cubes(List),
    Combo = not_first_combo(List),
    if
        Number == Sum ->
            {ok, List};
        Number > Sum ->
            if_cube_sum(Number, Num_Cubes, next_combo({simple, List}));
        (Number < Sum) and Combo ->
            if_cube_sum(Number, Num_Cubes, next_combo({shuffle, List}));
        true ->
            {false, List}
    end.

minimum_unique_list(Num_Cubes) ->
    unique_list(Num_Cubes, 1).

unique_list(Max, Min) ->
    if
        Max > Min ->
            [Max] ++ unique_list(Max - 1, Min);
        true ->
            [Min]
    end.

next_combo({simple, [Head | Tail ]}) ->
    Result = Head + 1,
    [Result] ++ Tail;

next_combo({shuffle, List}) ->
    Last = lists:last(List),
    Min = Last + 1,
    Max = Last + length(List),
    unique_list(Max, Min).

not_first_combo(List) ->
    Max = lists:last(List) + length(List) - 1,
    First = lists:nth(1, List),
    if
        Max == First ->
            false;
        true ->
            true
    end.
