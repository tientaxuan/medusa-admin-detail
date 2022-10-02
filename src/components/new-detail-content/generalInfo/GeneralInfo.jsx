import React, { useState } from 'react';
import './generalInfo.scss';
import copyIcon from '../asset/svgs/copy.svg';
import CustomDropdown from '../customDropdown/CustomDropdown';
import { CancelIcon } from '../asset/svgs/reactComponent/CancelIcon';
import { CancelModal } from '../modal';

const GeneralInfo = () => {
  const [isHoverId, setIsHoverId] = useState(false);

  const [openCancelModal, setOpenCancelModal] = useState(false);

  console.log(openCancelModal);

  const renderData = [
    {
      icon: <CancelIcon />,
      title: 'Cancel Order',
      secondaryAction: () => setOpenCancelModal(true),
      customStyleTitle: {},
    },
  ];

  return (
    <div className='general-info paper'>
      <div className='general-info-container paper-container'>
        <div className='order-general-info'>
          <div className='order-general-left'>
            <div
              className='order-id'
              onMouseOver={() => setIsHoverId(true)}
              onMouseOut={() => setIsHoverId(false)}
            >
              <p>#1</p>
              <img src={copyIcon} alt='' />
              {isHoverId && <div className='copy-hover'>Copy ID</div>}
            </div>
          </div>
          <div className='order-general-right'>
            <div className='dot'></div>
            <p className='order-status'>Processing</p>
            <div className='more-open'>
              {/* <img src={moreIcon} alt="" /> */}
              <CustomDropdown renderData={renderData} />
            </div>
          </div>
        </div>
        <div className='created-at'>
          <p>{`20 Sep 2021 06:01`}</p>
        </div>
        <div className='user-general-info'>
          <div className='user-email user-general-info-item'>
            <div>Email</div>
            <div className='user-email-value'>
              <p>lebron@james.com</p>
              <img src={copyIcon} alt='' />
            </div>
          </div>
          <div className='user-general-info-divider'></div>
          <div className='user-phone user-general-info-item'>
            <div>Phone</div>
            <div>123456789</div>
          </div>
          <div className='user-general-info-divider'></div>
          <div className='user-payment user-general-info-item'>
            <div>Payment</div>
            <div>Manual</div>
          </div>
        </div>
      </div>
      <CancelModal
        modalProps={{
          visible: openCancelModal,
          onCancel: (event) => {
            event.preventDefault();
            setOpenCancelModal(false);
          },
          onOk: (event) => {
            event.preventDefault();
            setOpenCancelModal(false);
          },
        }}
      />
    </div>
  );
};

export default GeneralInfo;
