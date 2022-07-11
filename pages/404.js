import NextLink from 'next/link'
import {
    Box,
    Heading,
    Text,
    Container,
    Divider,
    Button
} from '@chakra-ui/react'
import { BsDashLg } from 'react-icons/Bs'

const NotFound = () => {
    return (
        <Container>
            <Heading as="h1">I&apos;m still  building things out <BsDashLg /> come back later! </Heading>
            <Divider my={6} />
            <Text>Error 404: Page doesn&apos;t exist... yet</Text>
            
            <Box my={6} align="center">
                <NextLink href="/" passHref>
                    <Button colorScheme="teal">Return to home</Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default NotFound