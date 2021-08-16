import React, { useState } from 'react';
// EP 2
// Arrow function
// React.Fragment alike <div> to avoid more
// import React, { useState } from 'react'; to simplyfy 
// React.useState(1); to useState(1);
const Counter = () => {

    const [count, setCount] = useState(1);

    const handleIncrement = () => {
        setCount(count + 1);
    };

        return (
            <React.Fragment>
                <h2>The count is : {count} </h2>
                <button onClick={handleIncrement }> Increment </button>
                <button onClick={() => setCount(count - 1)}> Decrement</button>
            </React.Fragment>
        );

};

export default Counter;