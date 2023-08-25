import { useMemo, useRef, useState, useCallback } from "react";
import { flushSync } from "react-dom";

// function fib(n) {
//   if (n === 1 || n === 2) {
//     return 1;
//   }
//   return fib(n - 1) + fib(n - 1);
// }

function Counter() {
  console.log("render Counter");
  const [number, setNumber] = useState(1);

  let num = useRef(0);

  function handleClick(e) {
    e.stopPropagation();
    // setTimeout(() => {
    //   setNumber((number) => number + 1);
    // }, 2000);
    flushSync(() => {
      setNumber((number) => number + 1);
      setNumber((number) => number + 1);
      setNumber((number) => number + 1);
    });

    num.current++;
    window.print();

    console.log(number);
  }

  const fibFx = useCallback(function fib(n) {
    if (n === 1 || n === 2) {
      return 1;
    }
    return fib(n - 1) + fib(n - 2);
  }, []);

  const fibMemoized = useMemo(() => fibFx(number), [number, fibFx]);

  return (
    <>
      <h1 style={{ color: "white" }}>
        {number}|{fibMemoized}
        {/* {fib(number)} */}
        {/* {num.current} */}
      </h1>
      <button onClick={handleClick}>Add</button>
    </>
  );
}

export default Counter;
