import NextLink from 'next/link'
import {
    Box,
    Heading,
    Text,
    Container,
    Divider,
    Button
} from '@chakra-ui/react'
import Section from '../components/section.js'

const NotFound = () => {
    return (
        <Container>
            <Section>
                <Heading as="h1">Still  building things out <br /> ---- <br/> Come back later! </Heading>
                <Divider my={6} />
                <Text>Error 404: Page doesn&apos;t exist... yet</Text>
                
                <Box my={6} align="center">
                    <NextLink href="/" passHref>
                        <Button colorScheme="teal">Return to home</Button>
                    </NextLink>
                </Box>
            </Section>
        </Container>
    )
}

export default NotFound
//export { getServerSideProps } from '../components/chakra'