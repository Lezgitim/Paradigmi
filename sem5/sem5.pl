len([], 0).
len([A|T], Len) :-
    len(T, Len1), Len is A + Len1.
    

:- len([1,2,3,4,5,6,7,8,9,10], Len1), write(Len1).
    

