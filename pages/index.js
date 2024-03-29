import { 
    Link,
    Container, 
    Box, 
    Heading,
    Button, 
    useColorModeValue,
    chakra 
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import NextLink from 'next/link'
import Image from 'next/image'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { ChevronRightIcon } from '@chakra-ui/icons'
//import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons'

const ProfileImage = chakra(Image, {
    shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => {
    return (
        <Layout
            bg={useColorModeValue('#f0e7db', '#202023')}
        >
            <Container>
                <Box 
                    borderRadius="lg" 
                    bg={useColorModeValue('blackAlpha.200', 'whiteAlpha.200')} 
                    p={3} 
                    mb={6} 
                    align="center"
                    css={{ backdropFilter: 'blur(10px)' }}
                    >
                    Dir @ BSC | MBA @ USYD
                </Box>
                <Section delay={0.1}>
                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading 
                            as="h2" 
                            variant="page-title"
                        >
                            Omar Adam Husain
                        </Heading>
                        <p>
                            Full Stack Problem Solver
                        </p>
                        
                    </Box>
                    <Box
                        flexShrink={0}
                        mt={{ base: 4, md:0 }}
                        ml={{ md: 6 }}
                        textAlign="center"
                    >
                        <Box
                            borderColor="whiteAlpha.800"
                            borderWidth={2}
                            borderStyle="solid"
                            w="100px"
                            h="100px"
                            display="inline-block"
                            borderRadius="full"
                            overflow="hidden"
                        >
                            <ProfileImage 
                                src="/images/ProfilePic.jpg"
                                alt="Profile image"
                                borderRadius="full"
                                width="100%"
                                height="100%"
                                loading="eager"
                            />
                        </Box>
                    </Box>
                </Box>
                </Section>
                <Section delay={0.2}>
                    <Heading 
                        as="h3" 
                        variant="section-title"
                        textDecoration="underline"
                        fontSize="20"
                        textUnderlineOffset="6"
                        textDecorationColor="#525252"
                        textDecorationThickness="4"
                        marginTop="3"
                        marginBottom="4"
                    >
                        Work
                    </Heading>
                    <Paragraph>
                        Omar is a Director at BeautySciComm, freelance management consultant and full-stack developer. 
                        On the side he has a passion for motorcycles, snowboarding, and robots. Sometimes they overlap.
                        <NextLink href="/" pasHref scroll={false}>
                            <Link target="_blank"></Link>
                        </NextLink>
                    </Paragraph>
                </Section>
                <Section delay={0.3}>
                    <Box align="center" my={4}>
                        <NextLink href="/works" passHref scroll={false}>
                            <Button 
                                rightIcon={<ChevronRightIcon />} 
                                colorScheme="blue"
                            >
                                My portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
                <Section delay={0.4}>
                    <Heading 
                        as="h3" 
                        variant="section-title"
                        textDecoration="underline"
                        fontSize="20"
                        textUnderlineOffset="6"
                        textDecorationColor="#525252"
                        textDecorationThickness="4"
                        marginTop="3"
                        marginBottom="4"
                    >
                        Bio
                    </Heading>
                </Section>
                <Section delay={0.5}>
                    <BioSection>
                        <BioYear>2023</BioYear>
                        Co-founder & Director | BeautySciComm
                    </BioSection>
                </Section>
                <Section delay={0.6}>
                    <BioSection>
                        <BioYear>2020</BioYear>
                        Technical Program Manager | Amazon Web Services
                    </BioSection>
                </Section>
                <Section delay={0.7}>
                    <BioSection>
                        <BioYear>2020</BioYear>Master of Business Administration | University of Sydney
                    </BioSection>
                </Section>
                <Section delay={0.8}>
                    <BioSection>
                        <BioYear>2016</BioYear>Country IT Manager AU/NZ | H&M
                    </BioSection>
                </Section>
                <Section delay={0.9}>
                    <BioSection>
                        <BioYear>2015</BioYear>Systems Consultant | Microchannel Services
                    </BioSection>
                </Section>
                <Section delay={1}>
                    <BioSection>
                        <BioYear>2013</BioYear>Systems Consultant | Oriel Technologies
                    </BioSection>
                </Section>
                <Section delay={1.1}>
                    <BioSection>
                        <BioYear>2011</BioYear>Client Engineer | NBCUniversal
                    </BioSection>
                </Section>
                <Section delay={1.2}>
                    <BioSection>
                        <BioYear>2010</BioYear>Systems Analyst | JBWere Goldman Sachs
                    </BioSection>
                </Section>
                <Section delay={1.3}>
                    <BioSection>
                        <BioYear>2010</BioYear>Bachelor of Computing | University of Tasmania
                    </BioSection>
                </Section>
                <Section delay={1.4}>
                    <BioSection>
                        <BioYear>1987</BioYear>Born in Sydney, Australia (Eora Nation)
                    </BioSection>
                </Section>
            </Container>
        </Layout>
    )
}

export default Home
export { getServerSideProps } from '../components/chakra'