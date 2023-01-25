import React, { useEffect, useState } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Car.style.css';

const Car = ({ car }) => {
  const [index, setIndex] = useState(0);
  const [value, onChange] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const { carName, detail, carPrice, images } = car;
  const handlePrev = () => {
    if (index < 1) return;
    setIndex(index - 1);
  };
  const handleNext = () => {
    if (index === images.length - 1) return;
    setIndex(index + 1);
  };
  useEffect(() => {
    setModalContent('');
  }, [car]);
  const handleClick = () => {
    setIsModalOpen(true);
    setModalContent(`You have booked successfully for ${value}`);
  };
  return (
    <section className='car-container'>
      <img src={images[index]} className='car-img' alt={carName} />
      <div>
        {images.map((img, index) => {
          return (
            <img src={img} key={index} className='small-car' alt={carName} />
          );
        })}
      </div>
      <h3 className='car-name'>{carName}</h3>
      <p className='price'>Price: {carPrice}$</p>
      <p className='detail'>{detail}</p>
      <div className='book'>
        <button className='btn btn-book' onClick={() => setIsModalOpen(true)}>
          book
        </button>
      </div>
      <button className='next icon' onClick={handleNext}>
        <FaArrowAltCircleRight />
      </button>
      <button className='prev icon' onClick={handlePrev}>
        <FaArrowAltCircleLeft />
      </button>
      {isModalOpen && (
        <div className='modal'>
          <Calendar onChange={onChange} className='calendar' value={value} />
          {modalContent ? <p>{modalContent}</p> : ''}
          <button className='btn' onClick={handleClick}>
            book
          </button>
          <p className='close-modal' onClick={() => setIsModalOpen(false)}>
            close
          </p>
        </div>
      )}
    </section>
  );
};

export default Car;
