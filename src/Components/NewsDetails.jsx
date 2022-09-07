import { Flex, Heading, Link, Box, LinkOverlay, Image, LinkBox, Text  } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux"
export const NewsDetails = () => {
    const {news} = useSelector(state => state)
    console.log(news);

    const [headline, setHeadline] = React.useState([]);
    // const news = {
    //     source: {
    //     id: "engadget",
    //     name: "Engadget"
    //     },
    //     author: "Kris Holt",
    //     title: "Anyone can now cross-post Reels from Instagram to Facebook",
    //     description: "Despite some missteps with Instagram\r\n, Meta is marching forward with its plan to make Reels a bigger component of its apps\r\n in an attempt to better compete with TikTok\r\n. It's rolling out several updates to Reels, particularly on Facebook's side. For one th…",
    //     url: "https://www.engadget.com/facebook-reels-instagram-crossposting-add-yours-tiktok-184410879.html",
    //     urlToImage: "https://s.yimg.com/os/creatr-uploaded-images/2022-08/e60d2d00-1d91-11ed-8fd9-0af22f9631e5",
    //     publishedAt: "2022-08-16T18:44:10Z",
    //     content: "Despite some missteps with Instagram\r\n, Meta is marching forward with its plan to make Reels a bigger component of its apps\r\n in an attempt to better compete with TikTok\r\n. It's rolling out several u… [+1879 chars]"
    //     }

        React.useEffect(()=> {
            fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=c3847362a492436b8db79658d4060e03&pagesize=4")
            .then(res => res.json())
            .then((res) => (setHeadline(res.articles), console.log("inside: " ,headline)
            ))
        }, [])
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

    return <Flex direction="row" gap={20} ml="6%">
        <Flex direction="column" basis="60%">
            <Heading fontSize="40px" align="left" mb="2%">{news.title}</Heading>
            <Box
                color='gray.700'
                fontWeight='semibold'
                letterSpacing='wide'
                fontSize='s'
                align="left"
                mb="2%"
            >
                Published on {" "}{handleDate(news.publishedAt)}
            </Box>
            <Image 
                src={news.urlToImage} 
                objectFit='cover'
                height="50%"
                width="100%"
                fallbackSrc='https://via.placeholder.com/200?text=Error+in+Loading+Image' 
            />
            
            <Text fontSize='xl' align="left" mt="4%">{news.content}</Text>
            <Link href={news.url} isExternal>
                        Read More on Website...
                    </Link>
        </Flex>
    <Flex direction="column" width="30%" >
            <Text fontWeight="700" fontSize="xl" align="left" mb="2%">Top Stories</Text>
            {headline.map((item) => (
                <LinkBox as='article' maxW='sm' p='2' borderWidth='1px' rounded='md' bg="#f0f1f2" mb="4%" fontSize="20px" key={item.title} >
                    <Text size='md' my='2'>
                        <LinkOverlay href={item.url} isExternal>
                            {item.title}
                        </LinkOverlay>
                    </Text>
                </LinkBox>
            ))}
        </Flex>
    </Flex>


    
}