import React from 'react';
import Card from './Card';

const CardList = ({ boruvkas, searchPerformed }) => {
    return (
        <div>
            {boruvkas.map((user, i) => {
                return (
                    <Card
                        key={i}
                        id={boruvkas[i].id}
                        name={boruvkas[i].name}
                        description={searchPerformed ? boruvkas[i].description : ''}
                        pic={boruvkas[i].pic}
                    />
                );
            })}
        </div>
    );
}

export default CardList;