import { Heading, Spinner, Box, Badge, Image, Grid  } from "@chakra-ui/react";
import React from "react";
export const Home = () => {
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [data, setData] = React.useState(false);

    React.useEffect(() => {
        fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=c3847362a492436b8db79658d4060e03")
            .then((res) => res.json())
            .then((res) => setData(res.articles))
            .catch((err) => {
                console.log(err)
                setError(true);
            })
            .finally(() => setLoading(false))
    }, [])

    return (
        <>
            {
                loading ? <Spinner /> : error ? <Heading>Error</Heading> : <Grid templateColumns='repeat(3, 1fr)' gap={6} ml="6%" >
                    { data.map((item) => (
                    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                        <Image src={item.urlToImage} objectFit='cover'  height ="250px" width="100%" fallbackSrc='https://via.placeholder.com/200?text=Error+in+Loading+Image'/>

                        <Box p='6'>
                            <Box display='flex' alignItems='baseline'>
                                <Badge borderRadius='full' px='2' colorScheme='teal'>
                                    New
                                </Badge>
                                <Box
                                    color='gray.500'
                                    fontWeight='semibold'
                                    letterSpacing='wide'
                                    fontSize='xs'
                                    textTransform='uppercase'
                                    ml='2'
                                >
                                    4 beds &bull; 8 baths
                                </Box>
                            </Box>

                            <Box
                                mt='1'
                                fontWeight='semibold'
                                as='h4'
                                lineHeight='tight'
                                // noOfLines={1}
                            >
                                {item.title}
                            </Box>

                            <Box>
                                {67}
                                <Box as='span' color='gray.600' fontSize='sm'>
                                    / wk
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                ))}
                </Grid>
            }
        </>
    )
}