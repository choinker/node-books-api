import React, { useEffect, useState } from 'react';

const TopNav = ({setScene}) => {


    return (
        <div> 
            top nav 
            <div style={{display: 'flex', justifyContent: 'space-around', backgroundColor: '5e88dd'}}>
                <button onClick={() => {setScene('books')}} > 
                    Books 
                </button>
                <button onClick={() => {setScene('movies')}} > 
                    Movies 
                </button>
                <button onClick={() => {setScene('games')}} > 
                    Games 
                </button>
                {/* <button
                    onClick={() => {setScene('cocktails')}}
                > Cocktails </button>
                <button
                    onClick={() => {setScene('spirits')}}
                > Spirits </button>
                <button
                    onClick={() => {setScene('beers')}}
                > Beers </button> */}
            </div>
            

        </div>
    );
};

export default TopNav;