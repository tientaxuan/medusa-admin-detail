import React, { useState } from 'react';
import './paymentInfo.scss';
import enterArrowIcon from '../asset/svgs/enter-arrow.svg';
import { RefundModal } from '../modal';

const PaymentInfo = () => {
  const [openRefundModal, setOpenRefundModal] = useState(false);
  return (
    <div className='payment-info paper'>
      <div className='payment-info-container paper-container'>
        <div className='payment-info-title'>
          <p className='title'>Payment</p>
          <div className='payment-status-refund-wrapper'>
            <div className='payment-status'>
              <div className='dot'></div>
              <div className='payment-status-value'>Paid</div>
            </div>
            <button
              className='refund-btn'
              onClick={(event) => {
                event.preventDefault();
                setOpenRefundModal(true);
              }}
            >
              Refund
            </button>
          </div>
        </div>
        <div className='payment-id-wrapper'>
          <div className='payment-id-and-created-at'>
            <p>pay_01FG1DWV6ARAN9R343X4NX5FZB</p>
            <p>20 Sep 2021 06:01</p>
          </div>
          <div className='payment-paid'>
            <p>$160.00</p>
            <p>USD</p>
          </div>
        </div>
        <div className='payment-refund'>
          <div className='payment-refund-title'>
            <img src={enterArrowIcon} alt='' />
            <p>Refunded</p>
          </div>
          <div className='payment-refund-value'>
            <p>-$30.00</p>
            <p>USD</p>
          </div>
        </div>
        <div className='payment-refund-total'>
          <p>Total Paid</p>
          <div className='payment-refund-total-value'>
            <p>$130.00</p>
            <p>USD</p>
          </div>
        </div>
      </div>
      <RefundModal
        modalProps={{
          visible: openRefundModal,
          onOk: () => setOpenRefundModal(false),
          onCancel: () => setOpenRefundModal(false),
        }}
      />
    </div>
  );
};

export default PaymentInfo;
