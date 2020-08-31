# Counting Character Duplicates

Count the number of duplicates of distinct case-insensitive alphabetic characters and numeric digits

## Goal

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

## Examples

"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

## Clarification

The problem domain is string manipulation.
Consider only case-insensitive alphabetic characters and numeric digits.
Caculate the number of distinct repetitions.

## Design

String operations:

- .toLowerCase()
- .split('')
- .join('')
- .sort()
- .match()

Pipeline:

- Preparation: convert to lower case
- Rearrange: split, sort, join
- Reduce: build a string with one instance of each repeated character.
- Count: length of the reduced string
