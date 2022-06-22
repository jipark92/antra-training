import { useState } from "react";

const useCounter = () => {
    const [counter, setCounter] = useState(0);

    const sub = () => {
        console.log("sub");
        setCounter(counter - 1);
    };

    const add = () => {
        console.log("add");
        setCounter(counter + 1);
    };

    return [sub, add, counter];
};

export default useCounter;
