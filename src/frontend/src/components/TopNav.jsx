import React, { useEffect, useState } from 'react';
import { Button, VStack, IconButton } from '@chakra-ui/react';

const TopNav = ({setScene}) => {


    return (
        <VStack>
            <IconButton isRound />
            <h1>top nav</h1>
            <div style={{display: 'flex', justifyContent: 'space-around', backgroundColor: '5e88dd'}}>
                <Button onClick={() => {setScene('books')}} > 
                    Books 
                </Button>
                <Button onClick={() => {setScene('movies')}} > 
                    Movies 
                </Button>
                <Button onClick={() => {setScene('games')}} > 
                    Games 
                </Button>
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
        </VStack>
    );
};

export default TopNav;