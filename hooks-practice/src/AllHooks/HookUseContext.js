import React, {useContext} from 'react'
import { HookDemo } from "./Context";

const HookUseContext = () => {
 
const { count, setCount } = useContext(HookDemo);   
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

export default HookUseContext