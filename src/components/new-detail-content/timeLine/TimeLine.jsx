import React from 'react';
import './timeLine.scss';
import Note from './note/Note';
import OrderStep from './orderStep/OrderStep';
import {
  RefundIcon,
  ExchangeIcon,
  RequestedIcon,
} from '../asset/svgs/reactComponent';
import CustomDropdown from '../customDropdown/CustomDropdown';

const timeLine = [
  {
    headerIconLeft: <RefundIcon />,
    headerTitleRight: (
      <div className='title'>
        <p>Refund</p>
        <p>$30.00</p>
      </div>
    ),
    bodyRight: (
      <div className='step-body-content'>
        <p>Mon, 20 Sep 2021 11:21:43 GMT</p>
        <p>Return</p>
      </div>
    ),
  },
  {
    headerIconLeft: <RefundIcon />,
    headerTitleRight: (
      <div className='title'>
        <p>Refund</p>
        <p>$30.00</p>
      </div>
    ),
    bodyRight: (
      <div className='step-body-content'>
        <p>Mon, 20 Sep 2021 11:21:43 GMT</p>
        <p>Return</p>
      </div>
    ),
  },
  {
    headerIconLeft: <RefundIcon />,
    headerTitleRight: (
      <div className='title'>
        <p>Refund</p>
        <p>$30.00</p>
      </div>
    ),
    bodyRight: (
      <div className='step-body-content'>
        <p>Mon, 20 Sep 2021 11:21:43 GMT</p>
        <p>Return</p>
      </div>
    ),
  },
  {
    headerIconLeft: <RefundIcon />,
    headerTitleRight: (
      <div className='title'>
        <p>Refund</p>
        <p>$30.00</p>
      </div>
    ),
    bodyRight: (
      <div className='step-body-content'>
        <p>Mon, 20 Sep 2021 11:21:43 GMT</p>
        <p>Return</p>
      </div>
    ),
  },
  {
    headerIconLeft: <RefundIcon />,
    headerTitleRight: (
      <div className='title'>
        <p>Refund</p>
        <p>$30.00</p>
      </div>
    ),
    bodyRight: (
      <div className='step-body-content'>
        <p>Mon, 20 Sep 2021 11:21:43 GMT</p>
        <p>Return</p>
      </div>
    ),
  },
  {
    headerIconLeft: <RefundIcon />,
    headerTitleRight: (
      <div className='title'>
        <p>Refund</p>
        <p>$30.00</p>
      </div>
    ),
    bodyRight: (
      <div className='step-body-content'>
        <p>Mon, 20 Sep 2021 11:21:43 GMT</p>
        <p>Return</p>
      </div>
    ),
  },
  {
    isLast: true,
    headerIconLeft: <RefundIcon />,
    headerTitleRight: (
      <div className='title'>
        <p>Refund</p>
        <p>$30.00</p>
      </div>
    ),
    bodyRight: (
      <div className='step-body-content'>
        <p>Mon, 20 Sep 2021 11:21:43 GMT</p>
        <p>Return</p>
      </div>
    ),
  },
];

const renderData = [
  {
    icon: <RefundIcon />,
    title: 'Request Return',
    secondaryAction: () => {},
    customStyleTitle: {},
  },
  {
    icon: <ExchangeIcon />,
    title: 'Request Return',
    secondaryAction: () => {},
    customStyleTitle: {},
  },
  {
    icon: <RequestedIcon />,
    title: 'Request Return',
    secondaryAction: () => {},
    customStyleTitle: {},
  },
];

const TimeLine = () => {
  return (
    <div className='time-line paper'>
      <div className='time-line-container'>
        <div className='time-line-title paper-container'>
          <p>Timeline</p>
          <div className='more-icon'>
            {/* <img src={moreIcon} alt="" /> */}
            <CustomDropdown renderData={renderData} />
          </div>
        </div>
        <Note></Note>
        <div className='divider'></div>
        <div className='order-step-wrapper paper-container'>
          {timeLine?.map &&
            timeLine.map((step, idx) => (
              <OrderStep
                key={idx}
                bodyRight={step?.bodyRight}
                headerIconLeft={step?.headerIconLeft}
                headerTitleRight={step?.headerTitleRight}
                isLast={step?.isLast}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
