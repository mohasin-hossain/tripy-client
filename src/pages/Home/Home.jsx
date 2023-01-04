import React from 'react';
import Activities from '../../components/Activities/Activities';
import Banner from '../../components/Banner/Banner';
import Process from '../../components/Process/Process';
import Tours from '../Tours/Tours';
import Footer from '../../components/shared/Footer/Footer'

const Home = () => {
    return (
        <main>
           <Banner /> 
           <Process />
           <Tours />
           <Activities />
           <Footer />
        </main>
    );
};

export default Home;