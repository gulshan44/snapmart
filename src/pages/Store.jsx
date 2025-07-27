import React, { useEffect } from 'react'
import Pages from '../component/store/Pages'
import { useSearch } from '../context/SearchContext';

const Store = () => {

    const { setSearchQuery } = useSearch();

    useEffect(() => {
        setSearchQuery(""); // Clear search when store page loads
    }, [setSearchQuery]);


    return (
        <div>
            <Pages />
        </div>
    )
}

export default Store