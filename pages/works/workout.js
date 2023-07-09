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

const Workout = () => (
    <Layout title="Workout App">
        <Container w='100%' maxW="container.md">
            <Divider my={6} />
            <Title>
                Workout Tracker <Badge>2023</Badge>
            </Title>
            
            <Box align='center' my={4}>
                <MedImage src={"/images/workout.png"} alt="Omar"/>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Purpose</Meta>
                        <span>To create a remotely controlled humanoid robot</span>
                    </ListItem>
                </List>
            </Box>
            <Section delay={0.2}>
                <Heading as="h3" fontSize={20} mb={4}>
                    Summary
                </Heading>
                <P>
                    I help content creators and startups develop. This includes identifying product market fit, defining short to long term strategy, developing rhythm, and tackling the big problems.
                    My methods involve working with you to discover your business direction and helping you decide your next steps in growth. 
                </P>
            </Section>
            <Section delay={0.3}>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://workout.omar.cloud" target="_blank">
                            https://workout.omar.cloud <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Web application</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>VueJS, NodeJS, GCP, Firestore</span>
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

export default Workout
export { getServerSideProps } from '../../components/chakra'