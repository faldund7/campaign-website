import React from 'react';
import '../css/Row.css';

function Row({ title, isLargeRow = false, data, templateFunction }) {

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row__posters'>
                {data.map((value) => 
                    isLargeRow && (
                            <img 
                                id={`img${value.id}`}
                                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                                key={value.id}
                                src={`${value.url}`} alt={value.name}
                                onClick={() => templateFunction(value)}
                            />
                        
                        ) 
                )}
                
            </div>
        </div>
    );
}

export default Row;