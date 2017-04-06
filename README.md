# combi-clock
An odd clock, which shows the time in combinations

Reading the clock is a bit tricky but is possible.

- Top two rows are minutes
- Middle row is hours
- Bottom two rows are seconds

There are 24 combinations of 4 elements and 120 combinations of 5 elements, 
so the clock goes twice as fast inorder to get through every combination

Lets say the middle row shows `[Yellow,Blue,Red,Orange]`
- Take Reds position `2` (We use base 0) multiply it by 6 (which comes from `(4-1)!`)
- Take Oranges position `2` (Ignore Red because we have already counted it) multiply it by 2
- Take Yellows position `0` and multiply it by 1
- Ignore Blues position
- Add those numbers together `2*6 + 2*2 + 0*1 = 16`
- That is still in base-0 so add one to it `16 + 1 = 17`
- Remeber our clock is going twice as fast so divide that number by 2 '17/2 = 8.5 = 8:30`

Similar steps can be taken so find the minutes and so forth,

And you thought figuring out the time on an analog clock was hard!
