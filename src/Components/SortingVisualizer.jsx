import React, { useState } from 'react';

function SortingVisualizer() {
    let [numbers, setList] = useState([])

    function generateList() {
        numbers = [];

        for (let i = 0; i < 50; i++) {
            numbers.push(generateNumber(5, 750))
        }

        setList(numbers);
    }


    return (
        <div className='container'>
            <nav>
                <button onClick={generateList}>
                    Generate List
                </button>
            </nav>

            <div className='visualizer'>
                {numbers.map(number => {
                    return (
                        <div
                            className='number-bars'
                            style={{ height: `${number}px` }}
                        >
                        </div>
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