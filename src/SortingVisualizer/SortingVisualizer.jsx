import React from 'react';
import './SortingVisualizer.css';
import {getMergeSortAnimations} from "../sortingAlgorithms/sortingAlgorithms.js";

//setting all the constant values for visualization effects when array is being sorted
const ANIMATION_SPEED_MS = 1;

const PRIMARY_COLOR = 'blue'

const SECONDARY_COLOR = 'red'


export default class SortingVisualizer extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < 283; i++)
        {
            array.push(randomIntFromInterval(5, 150));
        }
        this.setState({array});
    }

    mergeSort() {
        const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
    }

    quickSort() {}

    heapSort() {}

    bubbleSort () {}


    render() {
        const{array} = this.state;

        return (
            <div className="array-container">
                {array.map ((value, idx) => (
                    <div
                    className="array-bar"
                    key={idx}
                    style={{height: `${value}px`}}></div>
                    )
                )}
                <button onClick={() => this.resetArray()}>Generate New Array</button>
                <button onClick={() => this.mergeSort()}>Merge Sort</button>
                <button onClick={() => this.quickSort()}>Quick Sort</button>
                <button onClick={() => this.heapSort()}>Heap Sort</button>
                <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
                </div>
        );
    }
}


function randomIntFromInterval (min, max) {
    //min and max are included
    return Math.floor(Math.random() * (max - min + 1) * min);
}
