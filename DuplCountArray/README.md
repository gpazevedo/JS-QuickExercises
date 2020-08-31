# Counting Primitive Duplicates

Count the number of duplicates of distinct primitives in an array.

## Goal

Write a function that will return the count of distinct primitives that occur more than once in the input array. The input array can be assumed to contain only primitive values.

## Clarification

The problem domain is array manipulation.
Consider only primitibe values.
Caculate the number of distinct primitive value repetitions.
The duplicated elements is not need, just how many they are.

## Design

Scan the array to:

- Build a set with all the present elements
- Build a set with the duplicated elements

Return the size of the duplicated elements.

Go through all the elemens of the array
