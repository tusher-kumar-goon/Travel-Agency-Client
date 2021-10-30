import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import BestDeals from '../BestDeals/BestDeals';
import Others from '../Others/Others';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>
            <Services></Services>
            <Others></Others>
            <BestDeals></BestDeals>
            <Footer></Footer>
        </div>
    );
};

export default Home;