import React from 'react';
import { Button, VStack, IconButton, Heading, HStack, useColorMode } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

const TopNav = ({setScene}) => {

    const { colorMode, toggleColorMode } = useColorMode();
    // p={x} - injects padding where x*4(pixels), so 4 is 16 pixels of padding
    // https://chakra-ui.com/docs/theming/theme - chakra color docs, used in header gradient
    // without bgClip='text' the background of text has the gradient

    // TODO: figure out why buttons div styling is getting ignored, adding alignItems='stretch' to buttons div spaces them out across the space
    return (
        <VStack p={4}>
            <IconButton icon={<FaSun />} isRound size='lg' alignSelf='flex-end' onClick={toggleColorMode} />
            <Heading 
                style={{marginBottom: '24px'}} 
                size='2xl' fontWeight='extrabold' 
                bgGradient='linear(to-r, pink.500, pink.300, blue.500)'
                bgClip='text'
            >
                top nav
            </Heading>
            <HStack style={{width: '100%', justifyContent: 'space-around'}}>
            {/* <div style={{display: 'flex', justifyContent: 'space-around', backgroundColor: '5e88dd'}}> */}
                <Button onClick={() => {setScene('books')}} > 
                    Books 
                </Button>
                <Button onClick={() => {setScene('movies')}} > 
                    Movies 
                </Button>
                <Button onClick={() => {setScene('games')}} > 
                    Games 
                </Button>
                <Button onClick={() => {setScene('quotes')}} > 
                    Quotes 
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
            {/* </div> */}
            </HStack>
        </VStack>
    );
};

export default TopNav;