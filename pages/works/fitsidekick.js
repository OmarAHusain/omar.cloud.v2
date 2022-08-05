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
                FitSidekick <Badge>2016 - 2018</Badge>
            </Title>
            
            <WorkImage src="/images/fitSideKick.png" alt="FitSideKick" />

            <P>
                FitSidekick was a fitness match-making platform based on fitness goals, experience, and activity.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://web.archive.org/web/20180308044149/http://www.fitsidekick.com/" target="_blank">
                        http://www.fitsidekick.com (web.archive.org) <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Web & mobile application</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>PHP, Apache, MySQL, iOS, Android</span>
                </ListItem>
                <ListItem>
                    <Meta>Blogpost</Meta>
                    <span>Will create a blog post on backstory, modifications, architecture and end result</span>
                </ListItem>
            </List>
        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'