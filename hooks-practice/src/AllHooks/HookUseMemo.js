import React, {useState} from 'react'

const HookUseMemo = () => {
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
      
        return (
          <div className="App">
         <div onClick={deleteCount}> - </div>
          <span> {count.num} </span>
          <div onClick={addCount}> + </div>
          </div>
        );
}

export default HookUseMemo