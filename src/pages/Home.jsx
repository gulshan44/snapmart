import React from 'react'
import Slider from '../component/Slider'
import RecentlyAdded from '../component/RecentlyAdded'
import FeaturedProducts from '../component/FeaturedProducts'

const Home = () => {

    return (
        <div>
            <Slider />
            <RecentlyAdded />
            <FeaturedProducts />
        </div>
    )
}

export default Home