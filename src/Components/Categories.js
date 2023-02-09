import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

export default function Categories() {
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  // console.log(status);
  const displayState = (action) => {
    dispatch(action);
  };
  return (
    <div>
      <p>{status}</p>
      <button type="button" onClick={() => displayState(checkStatus())}>Check Status</button>
    </div>
  );
}
