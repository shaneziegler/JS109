This code demonstrates pass-by-value.  Javascript uses pass-by-value when you pass primitive values or variables assigned to primitive values to a function as arguments or return a primitive from a function.  Any operations performed on the primitive value in the functions will not alter the original value/variable.  A copy of the value will be used instead, not the original found in the outer scope, for the function scope parameters.

On line , the `console.log` method is invoked with the value held by the variable `` passed as an argument.  `` gets output to the screen, since that is what the variable `` is now assigned.

On line , the `` function is invoked and a pointer to the the array/object `` is passed-by-reference to it as an argument to the parameter ``.  `` and `` now reference the same array/object in memory.

On line 5, the `doSomething` function is invoked and copy of the value held by the variable `num` is passed-by-value to it as an argument and assigned to the parameter `inputNum`. 

 On line 6, the variable `arr2` is reassigned to point to the array `[1, 2, 3]`.  The variable `arr1` and the `arr2` variable no longer reference the same place in computer memory, so from now on, we can't mutate the object that the variable `arr1` still points to by mutating `arr2`.