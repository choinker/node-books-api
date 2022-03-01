import { Button, HStack, Input } from '@chakra-ui/react';
import React from 'react';

const AddBook = () => {
    const handleSubmit = (e) => {

    }

    return (
        <form onSubmit={handleSubmit}>
            <HStack mt='8'>
                <Input variant='filled' placeHolder='Enter book name' />
                <Button colorScheme='pink' px='4' type='submit' > Add Book </Button>
            </HStack>

        </form> 
    )

};

export default AddBook;