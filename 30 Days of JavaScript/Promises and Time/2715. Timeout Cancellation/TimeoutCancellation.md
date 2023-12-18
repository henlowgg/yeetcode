Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.

After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.

setTimeout(cancelFn, cancelTimeMs)
Initially, the execution of the function fn should be delayed by t milliseconds.

If, before the delay of t milliseconds, the function cancelFn is invoked, it should cancel the delayed execution of fn. Otherwise, if cancelFn is not invoked within the specified delay t, fn should be executed with the provided args as arguments.

 

Example 1:

Input: fn = (x) => x * 5, args = [2], t = 20
Output: [{"time": 20, "returned": 10}]
Explanation: 
const cancelTimeMs = 50;
const cancelFn = cancellable((x) => x * 5, [2], 20);
setTimeout(cancelFn, cancelTimeMs);

The cancellation was scheduled to occur after a delay of cancelTimeMs (50ms), which happened after the execution of fn(2) at 20ms.
Example 2:

Input: fn = (x) => x**2, args = [2], t = 100
Output: []
Explanation: 
const cancelTimeMs = 50;
const cancelFn = cancellable((x) => x**2, [2], 100);
setTimeout(cancelFn, cancelTimeMs);

The cancellation was scheduled to occur after a delay of cancelTimeMs (50ms), which happened before the execution of fn(2) at 100ms, resulting in fn(2) never being called.
Example 3:

Input: fn = (x1, x2) => x1 * x2, args = [2,4], t = 30
Output: [{"time": 30, "returned": 8}]
Explanation: 
const cancelTimeMs = 100;
const cancelFn = cancellable((x1, x2) => x1 * x2, [2,4], 30);
setTimeout(cancelFn, cancelTimeMs);

The cancellation was scheduled to occur after a delay of cancelTimeMs (100ms), which happened after the execution of fn(2,4) at 30ms.
 

Constraints:

fn is a function
args is a valid JSON array
1 <= args.length <= 10
20 <= t <= 1000
10 <= cancelTimeMs <= 1000








---------------------


Important things to note:

setTimeout() method:

    - The function takes two parameters: a callback function and a delay value in milliseconds. The callback function represents the code we want to execute after the delay. 
    - When we call setTimeout, it registers the callback function and starts a timer. After the delay we specified, the program adds the callback function to the event queue.
    - Another side note:
        - Event Queue: an event queue is a data structure that holds tasks to be processed by the JS runtime and when the call stack is empty (all the synchronous code has finished executing), the runtime picks the next task from the event queue and executes it.
    - By using setTimeout, we introduce an asynchronous behaviour in the code, meaning that while the delay is counting down, the program is still executing the other code without waiting for the setTimeout callback to be invoked.


Why clearTimeout() ?:

    - Need clearTimeout to cancel the scheduled execution before the delay expires. setTimeout returns a unique identifier called a timeout ID
    - clearTimeout is another built-in function that cancels a timeout previously set with setTimeout. By passing the timeout ID to clearTimeout, we prevent the execution of the callback function and stop the timer.

Using clearTimeout in conjunction with setTimeout provides us with the ability to control the execution of a scheduled function. When we set a timeout using setTimeout, the function inside it will run after the specified delay. However, by using clearTimeout, we can cancel the scheduled function before it runs which is what we want here .

In simpler terms, clearTimeout allows you to say, "Hey, hold on! Don't run that function yet!" It gives you the ability to pause or cancel the scheduled execution, providing a smoother and more responsive user experience in situations where dynamic control is required.



Approach
```s
The code defines a function named "cancellable" that takes three parameters: "fn" (a function), "args" (an array of arguments), and "t" (a time delay in milliseconds).
Inside the "cancellable" function, a nested function named "cancelFn" is defined. This function is responsible for canceling the execution of the scheduled function.
The "cancelFn" function calls clearTimeout with the timer identifier to cancel the scheduled function execution.
The setTimeout function is used to schedule the execution of a function, which is passed as the first parameter, after the specified time delay (t).
The setTimeout function returns a timer identifier, which is stored in the "timer" variable.
The scheduled function (fn) is executed using the spread operator (...args) to pass the arguments array to the function.
Finally, the "cancelFn" function is returned from the "cancellable" function, allowing you to call it later to cancel the scheduled function if needed.
```

