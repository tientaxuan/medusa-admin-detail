import React, { useState } from 'react';
import './fulfillmentModal.scss';
import { Modal, Table } from 'antd';
import _ from 'lodash';

const dummyData = [
  {
    detail: {
      thumb:
        'https://medusa-public-images.s3.eu-west-1.amazonaws.com/bottle.png',
      name: 'Medusa Water Bottle',
      size: 'One Size',
    },
    quantity: 3,
  },
  {
    detail: {
      thumb:
        'https://medusa-public-images.s3.eu-west-1.amazonaws.com/bottle.png',
      name: 'Medusa Water Bottle',
      size: 'One Size',
    },
    quantity: 3,
  },
  {
    detail: {
      thumb:
        'https://medusa-public-images.s3.eu-west-1.amazonaws.com/bottle.png',
      name: 'Medusa Water Bottle',
      size: 'One Size',
    },
    quantity: 3,
  },
];

export const FulfillmentModal = ({ modalProps, props }) => {
  const [metadataLength, setMetadataLength] = useState(1);

  const [metadataArray, setMetadataArray] = useState(() =>
    new Array(1).fill(0).map((ele, idx) => ({
      key: '',
      value: '',
      index: '',
    })),
  );

  const columns = [
    {
      title: <p className='fulfillment-modal-table-title'>Detail</p>,
      dataIndex: 'detail',
      key: 'detail',
      width: '80%',
    },
    {
      title: <p className='fulfillment-modal-table-title quantity'>Quantity</p>,
      dataIndex: 'quantity',
      key: 'quantity',
      width: '20%',
    },
  ];

  return (
    <Modal
      centered
      wrapClassName='fulfillment-modal'
      title={<p className='fulfillment-modal-title'>Create Fulfillment</p>}
      width={800}
      transitionName=''
      maskTransitionName=''
      {...modalProps}
    >
      <div className='fulfillment-modal-content'>
        <div className='items'>
          <p className='title'>Items</p>
          <Table
            columns={columns}
            rowSelection={{
              type: 'checkbox',
            }}
          ></Table>
        </div>
      </div>
    </Modal>
  );
};
