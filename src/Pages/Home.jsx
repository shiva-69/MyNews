import { Heading, Spinner, Grid, Flex } from "@chakra-ui/react";
import React from "react";
import {NewsCard} from "../Components/NewsCard";

export const Home = () => {
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [data, setData] = React.useState(false);

    React.useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`)
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
                loading ? <Flex align="center" justify="center" mt="200px"><Spinner size='xl' /></Flex> : error ? <Heading>Error</Heading> : <Grid templateColumns='repeat(3, 1fr)' gap={6} ml="6%" >
                    {data.map((item) => ( <NewsCard item ={item}  key={item.title}/>
                    ))}
                </Grid>
            }
        </>
    )
}