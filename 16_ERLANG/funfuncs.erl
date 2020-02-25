% practice math time
-module(funfuncs).
-export([export_all]).
        

factorial(0) -> 1;
factorial(N) -> N * factorial(N-1).

% insertion sort

isort([]) -> [];
isort([X | []]) -> [X];

isort(ToSort) -> isort(ToSort, []).

isort([], Sorted) -> Sorted;

isort(Unsorted, Sorted) ->
    Max = list:max(Unsorted),
    isort(lists:delete(Max, Unsorted), [Max] ++ Sorted).

% pattern matching to create message

send_message({open, Sender, Receiver}).

% sum of numbers

sum([], Sum) -> Sum;

sum([H | T], Sum) ->
    sum(T, H + Sum).

% power function

power(_ , 0) -> 1;

power(Number, Power) ->
    Number * power(Number, Power - 1).

% take a list of numbers and multiply all of them

multiply_list([], _) -> [];

multiply_list([H|T], Factor) ->
    Element = H * Factor,
    [Element] ++ multiply_list([T], Factor). 

