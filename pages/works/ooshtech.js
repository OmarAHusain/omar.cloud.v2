import { 
    Badge, 
    Container,
    Divider,
    Link,
    List,
    ListItem 
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article";

const Work = () => (
    <Layout title="ooshTech">
        <Container>
            <Divider my={6} />
            <Title>
                ooshTech <Badge>2020 - current</Badge>
            </Title>

            <WorkImage src="/images/ooshTech.jpg" alt="ooshTech" />

            <P>
                ooshTech is a platform dedicated to fulfilling the software administration needs of Out Of School Hours (OOSH) services.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://ooshtech.com" target="_blank">
                        https://ooshtech.com <ExternalLinkIcon mx="2px" />
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
        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'