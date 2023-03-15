import React, {useState, useEffect} from 'react'


const HookUseEffect = () => {
 
const [count, setCount] = useState({
    num: 1,
    id: 'abcd'
  });
 
  const addCount = () => {
    setCount((prev) => {
  
      return {
        ...prev, 
        num: prev.num + 1
      }
  
    });
   
  }
  const deleteCount = () => {
    setCount((prev) => {
  
      return {
        ...prev,
        num: prev.num - 1
      }
  
    });
  }
   const [screenWidth, setScreenWidth] = useState(window.innerWidth); 
  useEffect(() => {
    window.addEventListener('resize', () => {
        setScreenWidth(window.innerWidth);
    })
    console.log("I ran");   
 }, [count]);
 

    return (
      <div className="App">
     <div onClick={deleteCount}> - </div>
      <span> {count.num} </span>
      <div onClick={addCount}> + </div>
      <div>{ screenWidth }</div>
      </div>
    );
}

export default HookUseEffect