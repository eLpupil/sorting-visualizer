import React from 'react';

function MenuBar(props) {


    return (
        <nav className='menu'>
            <div>
                <div className='controls'>
                    <label htmlFor='arraySize'>Array Size</label>
                    <span> </span>
                    <input 
                        type='range' 
                        name='arraySize' 
                        id='arraySize'
                        min='10'
                        max='100'
                        step='1'
                        value={props.arraySize}
                        onChange={props.updateArraySize}
                    />
                    <p>{props.arraySize}</p>
                </div>
                <div className="controls">
                    <label htmlFor='sortSpeed'>Sorting Speed</label>
                    <span> </span>
                    <input 
                        type='range' 
                        name='sortSpeed' 
                        id='sortSpeed'
                        min='0.01'
                        max='1000'
                        step='0.01'
                        value={props.sortSpeed}
                        onChange={props.updateSpeed}
                    />
                    <p>{props.sortSpeed} (Smaller is faster)</p>
                </div>
            </div>
            <button 
                onClick={props.generateList}>
                Generate List
            </button>
            <button
                onClick={props.selection}>
                Selection Sort
            </button>
            <button>
                Bubble Sort
            </button>
        </nav>
    )
}

export default MenuBar;