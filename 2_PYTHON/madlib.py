# C:\Users\simon\Documents\Programming_Challenge\2_PYTHON

word_types = [
'adjective',
'living creature',
'verb',
'event',
'verb',
'character',
'verb',
'creature',
'pronoun',
'adverb',
'verb',
'adjective',
'noun',
'adjective',
'verb ending in -ed',
'type of building'
]

words = []

for i in range(len(word_types)):
    words.append(input(f'Give me a {word_types[i]}: '))

str = f'A(n) {words[0]} {words[1]} {words[2]} in a(n) {words[3]} \n\
        to {words[4]} the {words[5]} from the {words[6]} {words[7]}. \n\
        {words[5]} {words[6]} {words[7]} for the {words[8]} {words[9]} \n\
        so that {words[10]} can be {words[11]} to the {words[12]}.'
print(str)
