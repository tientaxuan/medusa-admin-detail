import React from 'react';
import { Modal } from 'antd';
import './cancelModal.scss';

export const CancelModal = ({ modalProps, props }) => {
  return (
    <Modal
      okText={'Yes, Confirm'}
      wrapClassName='cancel-modal'
      transitionName=''
      maskTransitionName=''
      closeIcon={null}
      title={<p className='cancel-modal-title'>Cancel Order</p>}
      width={700}
      centered
      {...modalProps}
    >
      <div className='cancel-modal-content'>
        <p>Are you sure you want to cancel the order</p>
      </div>
    </Modal>
  );
};
