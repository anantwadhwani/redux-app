import React from 'react'
import { useDispatch } from 'react-redux'
import { actionCreators } from '../state';
import { bindActionCreators } from 'redux';

const Shop = () => {
    const dispatch = useDispatch();
    const {deposit, withdraw} = bindActionCreators(actionCreators, dispatch);
    return (
        <div className='container my-5'>
            <button className='mx-2' onClick={() => withdraw(100)}>-</button>
            Withdraw/Deposit
            <button className='mx-2' onClick={() => deposit(100)}>+</button>
        </div>
    )
}

export default Shop
