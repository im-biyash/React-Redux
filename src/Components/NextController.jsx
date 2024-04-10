import React from 'react';
import { useDispatch } from 'react-redux';
import { incNum, decNum } from '../actions';

function NextController() {
  const dispatch = useDispatch();

  return (
    <div>
      <button className='p-1 w-37 h-auto text-white bg-yellow-300' onClick={() => dispatch(incNum())}>+</button>
      <button className='p-1 w-37 h-auto text-white bg-yellow-300' onClick={() => dispatch(decNum())}>-</button>
    </div>
  );
}

export default NextController;
