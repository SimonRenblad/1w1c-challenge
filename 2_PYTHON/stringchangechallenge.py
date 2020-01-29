def LetterChanges(str):
    # code goes here
    alphabet = "abcdefghijklmnopqrstuvwxyz"

    str = str.lower()
    lst = list(str)
    str = ''

    for ind in range(len(lst)):
        for indA in range(len(alphabet)):
            if lst[ind] == alphabet[indA]:
                lst[ind] = alphabet[indA + 1] if alphabet[indA] != "z" else alphabet[0]
                break;
        if lst[ind] in "aeiou":
            lst[ind] = lst[ind].upper()
        str = str + lst[ind]
    return str

# keep this function call here
print(LetterChanges(input()))
