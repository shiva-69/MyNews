import { Box, Flex, Heading, Spacer, } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
    return (
        <Flex minWidth='max-content' alignItems='center' gap='1' pl="6%" pr="6%" bg="black" color="white">
        <Box p='2'>
          <Heading size='lg'>NEWS</Heading>
        </Box>
        <Spacer/>
          <Flex gap="10" mr="10%" fontWeight="600">
            <Box ><Link to="/">Home</Link></Box>
            <Box ><Link to="/">Sports</Link></Box>
            <Box ><Link to="/">Travel</Link></Box>
          </Flex >
      </Flex>
    )
}