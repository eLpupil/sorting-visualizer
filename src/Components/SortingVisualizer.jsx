import React, { useState } from 'react';
import MenuBar from './MenuBar';
import NumberBar from './NumberBar';


function SortingVisualizer() {

    let run;

    let [numbers, setList] = useState([]);

    let [arraySize, setSize] = useState('50');
    let [sortSpeed, setSpeed] = useState('10'); // in ms

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
        clearInterval(run);

    }

    function selectionSort() {
        setList(prevArray => {

            let currentArray = [...prevArray];

            for (let i = 0; i < currentArray.length; i++) {
                for (let j = i + 1; j < currentArray.length; j++) {
                    if (currentArray[j].props.value < currentArray[i].props.value) {
                        let temp = currentArray[i];
                        currentArray[i] = currentArray[j];
                        currentArray[j] = temp;
                        return currentArray;
                    }
                }
            }
            clearInterval(run);
            console.log('here');
            return currentArray;
        })
    }

    function selection() {
        run = setInterval(selectionSort, sortSpeed);
    }

    function setArraySize(event) {
        setSize(event.target.value);
    }

    function setSortSpeed(event) {
        setSpeed(event.target.value);
    }


    return (
        <div className='container'>
            <MenuBar
                arraySize={arraySize}
                updateArraySize={setArraySize}
                sortSpeed={sortSpeed}
                updateSpeed={setSortSpeed}
                generateList={generateList}
                selection={selection}
                bubble
            />

            <div className='visualizer'>
                {numbers}
            </div>
        </div>
    )

    function generateNumber(min, max) {
        return (Math.floor(Math.random() * (max - min))) + min;
    }

}

export default SortingVisualizer;