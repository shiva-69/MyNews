import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
    return (
        <Flex minWidth='max-content' alignItems='center' gap='1' pl="6%" pr="6%" bg="black" color="white" mb="1%" >
            <Box p='2'>
                <Heading size='lg'>NEWS</Heading>
            </Box>
            <Spacer/>
            <Flex gap="10"  fontWeight="600">
                <Box ><Link to="/">Home</Link></Box>
                <Box ><Link to="/sports">Sports</Link></Box>
                <Box ><Link to="/travel">Travel</Link></Box>
                <Box ><Link to="/culture">Culture</Link></Box>
            </Flex >
      </Flex>
    )
}