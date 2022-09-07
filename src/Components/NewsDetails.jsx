import { Heading } from "@chakra-ui/react"
import { useSelector } from "react-redux"
export const NewsDetails = () => {
    const news = useSelector(state => state)
    console.log(news)
    return <Heading> Details</Heading>
}