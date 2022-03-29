/* 
We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

Zero is even.

One is odd.

For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

*/
//note: I think I still struggle with recursion, so I want to try to do more problems with this...
function isEven(num) {
    if (num == 0)
      return true;
    if (num == 1)
      return false;
    if (num < 0)
      return "??";
    else return isEven(num - 2);
  }
  
  console.log(isEven(50));
  // → true
  console.log(isEven(75));
  // → false
  console.log(isEven(-1));
  // → ??