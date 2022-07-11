import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { WorkGridItem, GridItem } from '../components/grid-items'

import thumbOosh from '../public/images/ooshTech.jpg'
import thumbFit from '../public/images/fitSideKick.png'
import placeholder from '../public/images/placeholder.jpeg'



const Works = () => (
    <Layout title="Works">
        <Container>
            <Section delay={0.1}>
                <Divider my={6} />
                <Heading 
                    as="h3" 
                    fontSize={20} 
                    mb={4}
                >
                    Works
                </Heading>
            </Section>
            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section delay={0.2}>
                    <GridItem href="https://ooshtech.com" title="ooshTech" thumbnail={thumbOosh} passHref>
                        A cloud-based platform for Out Of School Hours (OOSH) services to manage students, parents, teachers and visitors.
                    </GridItem>
                </Section>
                <Section delay={0.3}>
                    <WorkGridItem href="/" title="Proposal Generator" thumbnail={placeholder} passHref>
                        A content re-use tool which allows sales teams to quickly generate targeted proposal documents for their customer&apos;s specific needs.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
            <Section delay={0.4}>
                <Divider my={6} />

                <Heading as="h3" fontSize={20} mb={4}>
                Old works
                </Heading>
            </Section>
            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section delay={0.5}>
                    <GridItem href="https://web.archive.org/web/20180308044149/http://www.fitsidekick.com/" title="FitSideKick" thumbnail={thumbFit} passHref>
                        No Longer in Operation <br /> FitSideKick was a fitness match-making platform based on fitness goals, experience, and activity.
                    </GridItem>
                </Section>
            </SimpleGrid>
        </Container>
    </Layout>
)

export default Works
export { getServerSideProps } from "../components/chakra"