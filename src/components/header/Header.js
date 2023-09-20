import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBed,
  faCalendarDays,
  faPerson,
} from '@fortawesome/free-solid-svg-icons';

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import './Header.css';

const Header = () => {
  // quản lý đóng mở khi click chọn ngày tháng
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  // quản lý đóng mở khi click chọn options
  const [openOption, setOpenOption] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  // hàm xử lý khi click options nhận 2 đối số name và operation
  // hành động click '+' tăng value operation ==='i', click '-' giảm value operation ==='d'
  // kiểm tra key === name trong obj options có hành động === i  giá trị + 1
  // kiểm tra key === name trong obj options có hành động !== i  giá trị - 1
  const handleOption = (name, operation) => {
    setOptions(prev => {
      return {
        ...prev,
        [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  // hàm xử lý khi click button search -> chuyển sang page search
  const handleSearch = e => {
    window.location.replace('/search');
  };

  return (
    <div className="header">
      <div className="headerContainer">
        <h2 className="headerTitle">A lifetime of discount? It's Genuius.</h2>
        <p className="headerDescription">
          Get rewarded for travels - unlock instant saving of 10% or more with a
          free acount
        </p>
        <a className="headerButton" href="/">
          Sign in / Register
        </a>
        <div className="headerSearch">
          <div className="headerItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input
              className="searchInput"
              type="text"
              placeholder="Where are you going?"
            ></input>
          </div>
          <div className="headerItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            {/* khi click vào ô ngày tháng set lại state open 
                để đóng mở popup lựa chọn ngày tháng . cập nhật ngày tháng đã chọn
            */}
            <span onClick={() => setOpen(!open)} className="headerText">
              {`${format(date[0].startDate, 'MM/dd/yyy')} to ${format(
                date[0].endDate,
                'MM/dd/yyy'
              )}`}
            </span>
            {/* kiểm tra state open == true hiển thị popup chọn ngày tháng */}
            {open && (
              <DateRange
                editableDateInputs={true}
                moveRangeOnFirstSelection={false}
                className="date"
                minDate={new Date()}
                onChange={item => setDate([item.selection])}
                ranges={date}
              />
            )}
          </div>
          <div className="headerItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span
              className="headerText"
              onClick={() => setOpenOption(!openOption)}
            >
              {`${options.adult} adult ${options.children} children ${options.room} room `}
            </span>
            {/* kiểm tra state openOption == true hiển thị popup chọn options */}
            {openOption && (
              <div className="headerOption">
                <div className="optionItem">
                  <span>Adult</span>
                  <div className="optionCounter">
                    <button
                      disabled={options.adult <= 1}
                      className="btnCounter"
                      onClick={() => handleOption('adult', 'd')}
                    >
                      -
                    </button>
                    <span>{options.adult}</span>
                    <button
                      className="btnCounter"
                      onClick={() => handleOption('adult', 'i')}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionItem">
                  <span>Children</span>
                  <div className="optionCounter">
                    <button
                      disabled={options.children <= 0}
                      className="btnCounter"
                      onClick={() => handleOption('children', 'd')}
                    >
                      -
                    </button>
                    <span>{options.children}</span>
                    <button
                      className="btnCounter"
                      onClick={() => handleOption('children', 'i')}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionItem">
                  <span>Room</span>
                  <div className="optionCounter">
                    <button
                      disabled={options.room <= 1}
                      className="btnCounter"
                      onClick={() => handleOption('room', 'd')}
                    >
                      -
                    </button>
                    <span>{options.room}</span>
                    <button
                      className="btnCounter"
                      onClick={() => handleOption('room', 'i')}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="headerItem">
            <button onClick={handleSearch} className="buttonSearch">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
