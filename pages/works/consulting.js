import { 
    Badge, 
    Box, 
    Button,
    Container,
    Divider,
    Heading,
    Image,
    List,
    ListItem, 
    SimpleGrid,
    useColorModeValue
} from "@chakra-ui/react";
import NextLink from 'next/link'
import { EmailIcon } from "@chakra-ui/icons";
import { Title, Meta, MedImage } from "../../components/work";
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article";
import Section from "../../components/section";

const Work = () => (
    <Layout title="Consulting">
        <Container w='100%' maxW="container.md">
            <Divider my={6} />
            <Title>
                Management Consulting <Badge>2022</Badge>
            </Title>
            
            <Box align='center' my={4}>
                <MedImage src="/images/ProfilePic.jpg" alt="Omar"/>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Services</Meta>
                        <span>Product, Program, Strategy - Management Consulting</span>
                    </ListItem>
                </List>
            </Box>
            <Section delay={0.2}>
                <Heading as="h3" fontSize={20} mb={4}>
                    Summary
                </Heading>
                <P>
                    I help content creators and startups develop. This includes identifying product market fit, defining short to long term strategy, developing rythym, and tackling the big problems.
                    My methods involve working with you to discover your business direction and helping you decide your next steps in growth. 
                </P>
            </Section>
            <Section delay={0.3}>
                <Box my={4}>
                    <p align="center">
                    Send me an email to set up a free video or in-person meeting 
                    </p>
                </Box>
                <Box align="center" my={4}>
                    <NextLink href="mailto:omar.a.husain@gmail.com?subject=Management Consulting Enquiry - Hi!&body=I'm interested in talking about my business with you.%0aLet's set a time to chat.%0a %0aName: %0aBusiness/Personal Link: %0aI'm interested in: %0a%0aCheers! " >
                        <Button 
                            rightIcon={<EmailIcon />} 
                            colorScheme="blue"
                        >
                            Let&prime;s chat
                        </Button>
                    </NextLink>
                </Box>
            </Section>
            <Section delay={0.4}>
                <Divider my={6} />
                
                <SimpleGrid columns={2} gap={4} >
                    <Box>
                        <Heading as="h3" fontSize={18} mb={4}>
                            Strategy Management 
                        </Heading>
                        <P>
                            Why are you a business? What is it that will set you apart from all the rest? Strategy Manegement involves planning, implementing, reviewing, and updating your business goals and objectives. 
                            I&prime;ll help you to discover your &prime;Why&prime; and create a sustainable strategy that builds upon it.
                        </P>
                    </Box>
                    <Box align='center' my={4}>
                        <Image src={useColorModeValue('/images/golden-circle-light.png', '/images/golden-circle-dark.png')} alt="Start with why" boxSize='180px' mt={-4} />
                    </Box>
                </SimpleGrid>
            </Section>
            
            <Section delay={0.5}>
                <Divider my={6} />
                <SimpleGrid columns={2} gap={4}>
                    <Box>
                        <Heading as="h3" fontSize={18} mb={4}>
                            Program Management  
                        </Heading>
                        <P>
                            Program management is &prime;How&prime; to do your why. It is the coordinated planning, management and execution of projects that line up with your business goals and objectives. 
                            I&prime;ll help you to create, implement, and improve your programs to keep you and your team at peak performance.
                        </P>
                    </Box>
                    <Box align='center' my={4}>
                        <Image src={useColorModeValue('/images/program-light.png', '/images/program-dark.png')} alt="Program Management"  mt={-4} />
                    </Box>
                </SimpleGrid>
            </Section>
            <Section delay={0.6}>
                <Divider my={6} />
                <SimpleGrid columns={2} gap={4}>
                    <Box>
                        <Heading as="h3" fontSize={18} mb={4}>
                            Product Management
                        </Heading>
                        <P>
                            This is all about your &prime;What&prime;. Whether you&prime;re a content creator or startup, your product is what you create, build, sell or share. 
                            I&prime;ll work with you to build out your product&prime;s lifecycle, and develop your unique market offering.
                        </P>
                    </Box>
                    <Box align='center' my={4}>
                        <Image  src={useColorModeValue('/images/product-light.png', '/images/product-dark.png')} alt="Product Management" w="225" h="176" mt={-4} />
                    </Box>
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'