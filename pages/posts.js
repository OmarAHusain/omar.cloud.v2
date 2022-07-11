import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { GridItem } from "../components/grid-items"

import thumbOosh from '../public/images/ooshTech.jpg'
import thumbFit from '../public/images/fitSideKick.png'
import placeholder from '../public/images/placeholder.jpeg'


const Posts = () => (
    <Layout title="Posts">
        <Container>
            <Section delay={0.1}>
                    <Divider my={6} />
                <Heading 
                    as="h3" 
                    fontSize={20} 
                    mb={4}
                >
                    Posts
                </Heading>
            </Section>    
            <Section delay={0.2}>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <GridItem
                        title="Introducing childcare services to the cloud"
                        thumbnail={thumbOosh}
                        href="https://omar-a-husain.medium.com/"
                    >
                    </GridItem>
                    <GridItem
                        title="The Proposal Generator"
                        thumbnail={placeholder}
                        href="https://omar-a-husain.medium.com/"
                    >
                    </GridItem>
                    <GridItem
                        title="FitSidekick - My First failed startup"
                        thumbnail={thumbFit}
                        href="https://omar-a-husain.medium.com/"
                    >
                    </GridItem>
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'