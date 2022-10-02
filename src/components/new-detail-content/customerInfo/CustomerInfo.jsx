import React from 'react';
import './customerInfo.scss';
import CustomDropdown from '../customDropdown/CustomDropdown';
import {
  MailIcon,
  ShippedIcon,
  UserIcon,
  BillingIcon,
} from '../asset/svgs/reactComponent';

const CustomerInfo = () => {
  const renderData = [
    {
      icon: <ShippedIcon />,
      title: 'Edit Shipping Address',
      secondaryAction: () => {},
      customStyleTitle: {},
    },
    {
      icon: <UserIcon />,
      title: 'Go to Customer',
      secondaryAction: () => {},
      customStyleTitle: {},
    },
    {
      icon: <BillingIcon />,
      title: 'Edit Billing Address',
      secondaryAction: () => {},
      customStyleTitle: {},
    },
    {
      icon: <MailIcon />,
      title: 'Edit Email Address',
      secondaryAction: () => {},
      customStyleTitle: {},
    },
  ];
  return (
    <div className='customer-info paper'>
      <div className='customer-info-container paper-container'>
        <div className='customer-info-title'>
          <p>Customer</p>
          <div className='more-icon'>
            {/* <img src={moreIcon} alt="" /> */}
            <CustomDropdown renderData={renderData}></CustomDropdown>
          </div>
        </div>
        <div className='customer-avatar-wrapper'>
          <div className='customer-avatar'>
            <span>L</span>
          </div>
          <div className='customer-name'>
            <p>Lebron James</p>
            <p>Los Aneles, us</p>
          </div>
        </div>
        <div className='customer-detail'>
          <div className='customer-detail-item'>
            <p className='detail-item-title'>Contact</p>
            <ul className='detail-item-content'>
              <li>lebron@james.com</li>
              <li>123456789</li>
            </ul>
          </div>
          <div className='customer-detail-item'>
            <p className='detail-item-title'>Shipping</p>
            <ul className='detail-item-content'>
              <li>Hollywood Boulevard 1</li>
              <li>Los Angeles, null 90001 US</li>
            </ul>
          </div>
          <div className='customer-detail-item'>
            <p className='detail-item-title'>Billing</p>
            <ul className='detail-item-content'>
              <li>Hollywood Boulevard 1</li>
              <li>Los Angeles, null 90001 US</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerInfo;
