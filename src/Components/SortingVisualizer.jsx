import React, { useState } from 'react';

function SortingVisualizer() {
    let [numbers, setList] = useState([])

    function generateList() {
        numbers = [];

        for (let i = 0; i < 10; i++) {
            numbers.push(generateNumber(5, 1000))
        }

        setList(numbers);
    }


    return (
        <div>
            <nav>
                <button onClick={generateList}>
                    Generate List
                </button>
            </nav>

            <div className='visualizer'>
                {numbers.map(number => {
                    return (
                        <div>{number}</div>
                    )
                })}
            </div>
        </div>
    )

    function generateNumber(min, max) {
        return (Math.floor(Math.random() * (max - min))) + min;
    }

}

export default SortingVisualizer;