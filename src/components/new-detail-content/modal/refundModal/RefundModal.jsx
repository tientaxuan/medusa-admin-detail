import React from 'react';
import './refundModal.scss';
import { Modal, InputNumber, Select, Input } from 'antd';

export const RefundModal = ({ modalProps, props }) => {
  const { Option } = Select;
  const { TextArea } = Input;
  return (
    <Modal
      okText={'Completed'}
      maskTransitionName=''
      transitionName=''
      centered
      wrapClassName='refund-modal'
      title={<p className='refund-modal-title'>Create a refund</p>}
      width={800}
      {...modalProps}
    >
      <div className='refund-modal-content'>
        <p className='refund-modal-content-title'>Detail</p>
        <div className='refund-amount-wrapper'>
          <div className='refund-currency'>
            <p>Currency</p>
            <p>JPY</p>
          </div>
          <div className='refund-amount'>
            <p>Refund Amount</p>
            <InputNumber
              prefix='￥'
              style={{ width: '100%' }}
              bordered={false}
              placeholder={'0.00'}
            />
            {/* <div className='refund-amount-input'>
              <span>&#36;</span>
              <input type='number' />
              <div className='refund-amount-change-button'></div>
            </div> */}
          </div>
        </div>
        <div className='refund-reason'>
          <p>Reason</p>
          <Select
            bordered={false}
            style={{ width: '100%' }}
            onChange={(value) => {
              console.log(value);
            }}
          >
            <Option value={'Discount'} />
            <Option value={'Other'} />
          </Select>
        </div>
        <div className='refund-note'>
          <p>Note</p>
          <TextArea bordered={false} rows={4} />
        </div>
      </div>
    </Modal>
  );
};
