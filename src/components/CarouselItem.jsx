/* eslint-disable react/no-typos */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setFavorite, deleteFavorite } from '../Action/HomeAction';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import removeIcon from '../assets/static/remove-icon.png';

const CarouselItem = (props) => {
  const { cover,
    title,
    year,
    contentRating,
    duration,
    id,
    setFavorite,
    deleteFavorite,
    isList,
  } = props;
  const hanledSetFavorite = () => (
    setFavorite({
      cover, title, year, contentRating, duration, id,
    })
  );
  const hanledDeleteFavorite = (itemID) => (
    deleteFavorite(itemID)
  );
  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div>
          <img
            className='carousel-item__details--img'
            src={playIcon}
            alt='Play Icon'
          />
          {
            isList ?
              (
                <img
                  className='carousel-item__details--img'
                  src={removeIcon}
                  alt='Plus Icon'
                  onClick={() => hanledDeleteFavorite(id)}
                />
              ) : (
                <img
                  className='carousel-item__details--img'
                  src={plusIcon}
                  alt='Plus Icon'
                  onClick={hanledSetFavorite}
                />
              )
          }

        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>
          {`${year} ${contentRating} ${duration} minutos`}
        </p>
      </div>
    </div>
  );
};
CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFavorite: (payload) => dispatch(setFavorite(payload)),
    deleteFavorite: (payload) => dispatch(deleteFavorite(payload)),
  };
};

export default connect(null, mapDispatchToProps)(CarouselItem);
