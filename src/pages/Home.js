import React from 'react';
import Tags from '../components/tags/Tags';
import VideoGrids from '../components/grid/VideoGrids';
import Pagination from '../components/ui/Pagination';

const Home = () => {
    return (
        <>
            <Tags />
            <VideoGrids />
            <Pagination />
        </>
    );
};

export default Home;