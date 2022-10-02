import React from 'react';
import './orderStep.scss';

import { RefundIcon } from '../../asset/svgs/reactComponent';

const OrderStep = ({ isLast, headerIconLeft, headerTitleRight, bodyRight }) => {
  return (
    <div className='order-step'>
      <div className='step-header'>
        <div className='step-header-right'>
          <RefundIcon />
        </div>
        <div className='step-header-left'>
          {
            <div className='title'>
              <p>Refund</p>
              <p>$30.00</p>
            </div>
          }
        </div>
      </div>
      <div className='step-body'>
        <div className='step-body-left'>
          {!isLast && <div className='connector'></div>}
        </div>
        <div className='step-body-right'>
          {
            <div className='step-body-content'>
              <p>Mon, 20 Sep 2021 11:21:43 GMT</p>
              <p>Return</p>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default OrderStep;
