import React from 'react';
import './newDetailContent.scss';
import GeneralInfo from './generalInfo/GeneralInfo';
import SummaryInfo from './summaryInfo/SummaryInfo';
import PaymentInfo from './paymentInfo/PaymentInfo';
import FulfillmentInfo from './fulfillmentInfo/FulfillmentInfo';
import CustomerInfo from './customerInfo/CustomerInfo';
import TimeLine from './timeLine/TimeLine';

export const NewDetailContent = () => {
  return (
    <div className='new-detail-content'>
      <div className='new-detail-content-container'>
        <div className='left-side-content-wrapper'>
          <div className='left-side-content'>
            <GeneralInfo />
            <SummaryInfo />
            <PaymentInfo />
            <FulfillmentInfo />
            <CustomerInfo />
          </div>
        </div>
        <div className='right-side-timeline-wrapper'>
          <TimeLine />
        </div>
      </div>
    </div>
  );
};
