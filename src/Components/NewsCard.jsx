import { Box, Badge, Image, Flex, Link, Tag,Spacer } from "@chakra-ui/react";

export const NewsCard = ({item}) => {
    const handleDate = (str) => {
        let ans = ""
        for(let i = 0; i < str.length; i++){
            if(str[i] != "T"){
                ans += str[i]
            }
            else if(str[i] == "T"){
                break;
            }
        }
        let a = ans.split("-").reverse().join("")
        let date = ""
        for(let i = 0; i < a.length; i++){            
            if(i == 2 || i == 4){
                date += "-" + a[i];
            }
            else{
                date +=  a[i];
            }
        }
        return date
    }
    return <>
         <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' cursor="pointer" boxShadow='xl' p='6' rounded='md' bg='white' mt="15%" pb="4">
                            <Image 
                                src={item.urlToImage} 
                                objectFit='cover'
                                height="250px"
                                width="100%"
                                fallbackSrc='https://via.placeholder.com/200?text=Error+in+Loading+Image' 
                            />

                            <Box p='6' pl="0" pr="0">
                                <Box display='flex' alignItems='baseline'>
                                    {item.author && item.author.length < 15 ? <Badge borderRadius='full' px='2' colorScheme='teal'>
                                            {item.author}
                                        </Badge> : <Badge borderRadius='full' px='2' colorScheme='teal'>
                                            No Author
                                        </Badge>
                                    }
                                    <Spacer/>
                                    <Box
                                        color='gray.500'
                                        fontWeight='semibold'
                                        letterSpacing='wide'
                                        fontSize='xs'
                                        // textTransform='uppercase'
                                        ml='2'
                                    >
                                        Published on {" "}{handleDate(item.publishedAt)}
                                    </Box>
                                </Box>

                                <Box
                                    mt='1'
                                    fontWeight='semibold'
                                    as='h3'
                                    lineHeight='tight'
                                    noOfLines={2}
                                >
                                    {item.title}
                                </Box>
                            </Box>
                            <Flex direction="row"> <Tag>{item.source.name}</Tag> <Spacer/><Link href={item.url} isExternal>
                                    Read More...
                            </Link></Flex>
                        </Box>
    </>
}