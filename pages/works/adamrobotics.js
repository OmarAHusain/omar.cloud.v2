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
// import NextLink from 'next/link'
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, Meta, MedImage } from "../../components/work";
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article";
import Section from "../../components/section";

const Adamrobotics = () => (
    <Layout title="Adam Robotics">
        <Container w='100%' maxW="container.md">
            <Divider my={6} />
            <Title>
                Adam Robotics <Badge>2023</Badge>
            </Title>
            
            <Box align='center' my={4}>
                <MedImage src="/images/ProfilePic.jpg" alt="Omar"/>
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
                    I hope to build the first seamless and intuitive human controlled humanoid robot built with a combination of custom 3d printing, off the shelf electronics, and VR.
                </P>
            </Section>
            <Section delay={0.3}>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://adam.omar.cloud" target="_blank">
                            https://adam.omar.cloud <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Robotic hardware & software</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Autocad Fusion 360, Prusa 3D Printing, Arduino C++, Rapsberry Pi, Python, OpenCV</span>
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


export default Adamrobotics
export { getServerSideProps } from '../../components/chakra'