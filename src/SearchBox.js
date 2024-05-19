import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div className='pa2'>
            <input
                className='pa2 ba br4 b--pink bg-lightest-blue'
                type='search'
                placeholder="vovuvka's card name"
                onChange={searchChange}
            />
        </div>
    )
}
export default SearchBox;