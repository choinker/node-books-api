import React from 'react';
import { HStack, VStack, IconButton, StackDivider } from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';
import AddBook from './AddBook';

const CategoryHome = ({categoryName = 'default', categoryData = []}) => {

    // TODO: extract year from pubDate, break out card component
    // Right now the maxW styling doesn't work because I wrapped them in an HStack, VStack combo, if I remove the VStack it will work
    // 24min flat in tutorial 

    return (
        <VStack divider={<StackDivider />}>
            <h2>
                Category Home: {categoryName}
            </h2>
            <AddBook />

            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                {categoryData && categoryData.map((element) => {
                    return (
                        <HStack 
                            key={element._id} p='2' 
                            borderColor='gray.100' 
                            borderWidth='2px' borderRadius='lg' 
                            width='50%' 
                            maxW={{base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw'}}
                        >
                            <VStack>
                                <div>title: {element.title} </div>
                                <div>author: {element.author} </div>
                                <div>pubDate: {element.pubDate} </div>
                                <IconButton icon={<FaHeart />} />
                            </VStack>
                        </HStack>
                    );
                })}
            </div>
        </VStack>
    );
}

export default CategoryHome;
