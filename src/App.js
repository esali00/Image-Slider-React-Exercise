import './App.css';
import { useState } from "react"

function App() {
  let prev_btn = document.querySelector(".prev-btn")
  let next_btn = document.querySelector(".next-btn")

  const paths = [
    "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  ];

  let [index, setIndex] = useState(0) 
  
  const prevImg = () => {
    setIndex(index === 0 ? paths.length - 1 : index - 1)
  }

  const nextImg = () => {
    setIndex(index === paths.length - 1 ? 0 : index + 1)
  }
  
  return (
    <div className="image-carousel">
      <h1>Project 1: Image-Carousel</h1>
      <div className="img-container">
        <span className="prev-btn" onClick={() => {prevImg()}}>{'<'}</span>
        <img src={ paths[index] }></img>
        <span className="next-btn" onClick={() => {nextImg()}}>{'>'}</span>
      </div>
    </div>
  );
}

export default App;
