import React, { useState } from 'react';
import './fulfillmentInfo.scss';
import { FulfillmentModal } from '../modal';

const FulfillmentInfo = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className='fulfillment-info paper'>
      <div className='fulfillment-info-container paper-container'>
        <div className='fulfillment-info-title'>
          <p>Fulfillment</p>
          <button onClick={() => setOpenModal(true)}>Create Fulfillment</button>
        </div>
        <div className='shipping-method'>
          <p>Shipping Method</p>
          <p>Standard Shipping</p>
        </div>
        <div className='fulfillment-info-detail'>
          <p>Fulfillment #1 Fulfilled by Manual</p>
          <p>
            Tracking <span>123456789</span>
          </p>
        </div>
      </div>
      <FulfillmentModal
        modalProps={{
          visible: openModal,
          onOk: () => setOpenModal(false),
          onCancel: () => setOpenModal(false),
        }}
      />
    </div>
  );
};

export default FulfillmentInfo;
