/* eslint-disable import/no-cycle */
import React, { useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/Player.scss';
import {
  useParams,
} from 'react-router-dom';
import { getVideoSource } from '../Action/LoginAction';

const Players = ({ history, getVideoSource, playing }) => {
  const { id } = useParams();

  const hasPlaying = Object.keys(playing).length > 0;

  useLayoutEffect(() => {
    console.log(playing.source);
    getVideoSource(id);
  }, [playing.source]);

  return hasPlaying && (
    <div className='Players'>
      <video controls autoPlay>
        <source src={playing.source} type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button
          onClick={() => (history.goBack())}
          type='button'
        >
          regresar
        </button>
      </div>
    </div>
  ) ;
};

Players.defaultProps = {
  playing: {},
};

const mapStateToProps = ({ myList: { playing } }) => {

  return {
    playing,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getVideoSource: (id) => dispatch(getVideoSource(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Players);
