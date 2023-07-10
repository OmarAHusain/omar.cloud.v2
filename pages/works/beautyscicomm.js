import { 
    Badge, 
    Box, 
    Container,
    Divider,
    Heading,
    Link,
    List,
    ListItem
} from "@chakra-ui/react";
//import NextLink from 'next/link'
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, Meta, MedImage } from "../../components/work";
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article";
import Section from "../../components/section";

const Beautyscicomm = () => (
    <Layout title="BeautySciComm">
        <Container w='100%' maxW="container.md">
            <Divider my={6} />
            <Title>
                BeautySciComm <Badge>2023+</Badge>
            </Title>
            
            <Box align='center' my={4}>
                <MedImage src={"/images/bsc.png"} alt="Omar"/>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Purpose</Meta>
                        <span>To increase the quality, volume and reach of accurate beauty science content.</span>
                    </ListItem>
                </List>
            </Box>
            <Section delay={0.2}>
                <Heading as="h3" fontSize={20} mb={4}>
                    Summary
                </Heading>
                <P>
                    We believe there’s too much misinformation in the beauty space, and not enough support for people to tackle it. Misinformation confuses consumers, and pressures the beauty industry to make changes that aren’t actually safer, more effective or more environmentally friendly. Unfortunately, misinformed content is easier to make, and is inherently more shareable.
                    <br /> <br />
                    We want to even out the playing field.
                    <br /> <br />
                    By sharing accurate science and creating more informed consumers, we believe we can drive positive change in the industry.
                </P>
            </Section>
            <Section delay={0.3}>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://beautyscicomm.com" target="_blank">
                            https://beautyscicomm.com <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Web application</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Wordpress</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Blogpost</Meta>
                        <span>Will create a blog post on backstory, architecture and end result</span>
                    </ListItem>
                </List>
            </Section>
        </Container>
    </Layout>
)

export default Beautyscicomm
export { getServerSideProps } from '../../components/chakra'