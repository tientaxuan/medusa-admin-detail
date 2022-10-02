import React, { useState } from 'react';
import './customDropdown.scss';
import moreIcon from '../asset/svgs/more.svg';

const CustomDropdown = ({ renderData }) => {
  const [toggle, setToggle] = useState(false);
  // console.log(toggle);
  return (
    <div className='custom-dropdown'>
      <div className='custom-dropdown-container'>
        <div
          className='custom-dropdown-toggle'
          onClick={() => setToggle((state) => !state)}
        >
          <img src={moreIcon} alt='' />
        </div>
        {toggle && (
          <div className='custom-dropdown-content'>
            <ul className='custom-dropdown-content-inner'>
              {renderData?.map &&
                renderData.map((item, idx) => (
                  <li
                    key={idx}
                    className='custom-dropdown-item'
                    onClick={() => {
                      (item?.secondaryAction)();
                      setToggle(false);
                    }}
                  >
                    {item?.icon}
                    <span
                      className='custom-dropdown-item-title'
                      style={{ ...item?.customStyleTitle }}
                    >
                      {item?.title}
                    </span>
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomDropdown;
