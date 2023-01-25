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
    setTimeout(() => {
      setIsModalOpen(false);
    }, [8000]);
  }, [isModalOpen]);

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
        <Calendar onChange={onChange} value={value} />
        <button className='btn btn-book' onClick={handleClick}>
          book
        </button>
      </div>
      <button className='next icon' onClick={handleNext}>
        <FaArrowAltCircleRight />
      </button>
      <button className='prev icon' onClick={handlePrev}>
        <FaArrowAltCircleLeft />
      </button>
      {isModalOpen && <div className='modal'>{modalContent}</div>}
    </section>
  );
};

export default Car;
