import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => {

    return (
        <Box w="100%" textAlign="center" >
            <LinkBox cursor="pointer">
                <Image
                    src={thumbnail}
                    alt={title}
                    className="grid-item-thumbnail"
                    loading="eager"
                    height="160px"
                    width="264px"
                    style={{borderRadius: '10px', overflow: 'hidden'}}
                />
                <LinkOverlay href={href} target="_blank">
                    <Text mt={2} fontSize={30}>
                        {title}
                    </Text>
                </LinkOverlay>
                <Text fontSize={14}> {children} </Text>
            </LinkBox>
        </Box>
    )
} 

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
    <Box w="100%" textAlign="center" >
        <NextLink href={`/works/${id}`} passHref scroll={false} >
            <LinkBox cursor="pointer">
                <Image 
                    src={thumbnail}
                    alt={id}
                    className="grid-item-thumbnail"
                    placeholder="blur"
                    height="160px"
                    width="264px"
                    style={{borderRadius: '10px', overflow: 'hidden'}}
                />
                <LinkOverlay href={`/works/${id}`}>
                    <Text mt={2} fontSize={30}>
                        {title}
                    </Text>
                </LinkOverlay>
                <Text fontSize={14}>{children}</Text>
            </LinkBox>
        </NextLink>
    </Box>
)

export const GridItemStyle = () => (
    <Global 
        styles={`
            .grid-item-thumbnail {
                border-radius:12px;
            }
        `}
    />
)