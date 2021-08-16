/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable indent */
import React from 'react';
import Header from '../components/Header';
import '../assets/styles/App.scss';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../Hooks/useInitialState';

const API = 'http://localhost:3000/initalState';

const Home = () => {

    const initialState = useInitialState(API);
    console.log(initialState);

    return (
      <div className='App'>
        <Header />
        <Search />

        { initialState.mylist > 0 && (
          <Categories title='Mi lista'>
            <Carousel>
              <CarouselItem />
            </Carousel>
          </Categories>

        )}
        <Categories title='Tendencias'>
          <Carousel>
            <CarouselItem />
            {initialState.trends.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
        <Categories title='Originales de platzi video'>
          <Carousel>
            <CarouselItem />
            {initialState.originals.map((item) => (
              <CarouselItem key={item.id} {...item} />
              ))}
          </Carousel>
        </Categories>
        <Footer />
      </div>
    );
};

export default Home;
