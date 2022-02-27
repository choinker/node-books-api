import React, { useEffect, useState } from 'react';

const TopNav = () => {


    return (
        <div> 
            top nav 
            <div style={{display: 'flex', justifyContent: 'space-around', backgroundColor: '5e88dd'}}>
                <button> Books </button>
                <button> Movies </button>
                <button> Games </button>
                <button> Cocktails </button>
                <button> Spirits </button>
                <button> Beers </button>
            </div>
            

        </div>
    );
};

export default TopNav;