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
    <Layout title="Generator">
        <Container>
            <Divider my={6} />
            <Title>
                Proposal Generator <Badge>2021</Badge>
            </Title>

            <WorkImage src="/images/placeholder.jpeg" alt="Proposal Generator" />

            <P>
                A proposal generator that helps re-use content for sales pipelines.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://generator.omar.cloud" target="_blank">
                        https://www.generator.omar.cloud <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Web application</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>NextJS, NodeJS, S3, API Gateway, Lambda, DynamoDB</span>
                </ListItem>
                <ListItem>
                    <Meta>Blogpost</Meta>
                    <span>Will create a blog post on architecture and process</span>
                </ListItem>
            </List>
        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'