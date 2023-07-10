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
                        <span>To track my weightlifting exercises and performance over time</span>
                    </ListItem>
                </List>
            </Box>
            <Section delay={0.2}>
                <Heading as="h3" fontSize={20} mb={4}>
                    Summary
                </Heading>
                <P>
                    I was searching for a good weightlifting tracker that could replace a simple pen/paper for gym use. The premise was to track the exercises I performed, the weights, and the sets/reps. Unfortunately I discovered my gym has bad reception and was unable to enter in data while working out. A lesson to test small before building an entire app. Now working on other projects instead.
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
                        <span>NextJS, AWS Amplify, AWS DynamoDB</span>
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