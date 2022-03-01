import React from 'react';
import { Button, VStack, IconButton, Heading } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

const TopNav = ({setScene}) => {

    // p={x} - injects padding where x*4(pixels), so 4 is 16 pixels of padding
    // https://chakra-ui.com/docs/theming/theme - chakra color docs, used in header gradient
    return (
        <VStack p={4}>
            <IconButton icon={<FaSun />} isRound size='lg' alignSelf='flex-end' />
            <Heading 
                style={{marginBottom: '24px'}} 
                size='2xl' fontWeight='extrabold' 
                bgGradient='linear(to-r, pink.500, pink.300, blue.500)'
            >
                top nav
            </Heading>
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