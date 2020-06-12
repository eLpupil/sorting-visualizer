import React, { useState } from 'react';
import NumberBar from './NumberBar';


function SortingVisualizer() {
    let [numbers, setList] = useState([]);

    let [arraySize, setSize] = useState('10'); // Option for array size

    function generateList() {
        numbers = [];

        for (let i = 0; i < arraySize; i++) {
            let number = generateNumber(5, 750);
            numbers.push(
                <NumberBar
                    key={i}
                    value={number}
                    style={{ height: `${number}px` }}
                />
            )
        }

        setList(numbers);
    }


    function bubbleSort() {

        setList(prevArray => {
            let currentArray = [...prevArray];
            for (let i = 0; i < currentArray.length; i++) {
                for (let j = i + 1; j < currentArray.length; j++) {
                    if (currentArray[j].props.value < currentArray[i].props.value) {
                        let temp = currentArray[i];
                        currentArray[i] = currentArray[j];
                        currentArray[j] = temp;
                    }
                }
            }

            return currentArray;
        })
    }

    return (
        <div className='container'>
            <nav>
                <button onClick={generateList}>
                    Generate List
                </button>
                <button onClick={bubbleSort}>
                    Bubble Sort
                </button>
                <button onClick={testFunction}>
                    Test Button
                </button>
            </nav>

            <div className='visualizer'>
                {numbers}
            </div>
        </div>
    )

    function generateNumber(min, max) {
        return (Math.floor(Math.random() * (max - min))) + min;
    }

    function testFunction() {
        numbers.forEach(number => {
            console.log(number.key);
        })
    }

}

export default SortingVisualizer;