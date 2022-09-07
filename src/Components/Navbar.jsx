import { Box, Flex} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
    return (
        <Flex direction="row">
            <Box>NEWS</Box>
            <Box><Link to ="/">Home</Link></Box>
            <Box><Link to ="/sports">Sports</Link></Box>
            <Box><Link to ="/travel">Travel</Link></Box>
        </Flex>

    )
}