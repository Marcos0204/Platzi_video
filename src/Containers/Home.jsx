/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable indent */
import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/App.scss';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

const Home = ({ mylist, originals, trends }) => {

    return (
      <>
        <Search />

        { mylist > 0 && (
          <Categories title='Mi lista'>
            <Carousel>
              <CarouselItem />
            </Carousel>
          </Categories>

        )}
        <Categories title='Tendencias'>
          <Carousel>
            <CarouselItem />
            {trends.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
        <Categories title='Originales de platzi video'>
          <Carousel>
            <CarouselItem />
            {originals.map((item) => (
              <CarouselItem key={item.id} {...item} />
              ))}
          </Carousel>
        </Categories>
      </>
    );
};

const mapSateToProps = ({ HomeReducer }) => {
  return { mylist: HomeReducer.initialState.mylist,
    originals: HomeReducer.initialState.originals,
    trends: HomeReducer.initialState.trends,
  };
};
export default connect(mapSateToProps, null)(Home);
