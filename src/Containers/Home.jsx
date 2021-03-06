/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable indent */
import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/App.scss';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

const Home = (props) => {

    const { mylist, originals, trends } = props;
    return (
      <>
        <Header />
        <Search isHome />

        {props && mylist.length > 0 && (
          <Categories title='Mi lista'>
            <Carousel>
              {mylist.map((item, index) => (
                <CarouselItem
                  key={index}
                  {...item}
                  isList
                />
            ))}
            </Carousel>
          </Categories>

        )}
        <Categories title='Tendencias'>
          <Carousel>
            {trends.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
        <Categories title='Originales de platzi video'>
          <Carousel>
            {originals.map((item) => (
              <CarouselItem key={item.id} {...item} />
              ))}
          </Carousel>
        </Categories>
      </>
    );
};

const mapStateToProps = ({ HomeReducer, myList }) => {
  return { mylist: myList.mylist,
    originals: HomeReducer.initialState.originals,
    trends: HomeReducer.initialState.trends,
  };
};

export default connect(mapStateToProps)(Home);
