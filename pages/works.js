import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { WorkGridItem } from '../components/grid-items'

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
                    <WorkGridItem id="ooshtech" title="ooshTech" thumbnail={thumbOosh}>
                        A cloud-based platform for Out Of School Hours (OOSH) services to manage students, parents, teachers, and visitors.
                    </WorkGridItem>
                </Section>
                <Section delay={0.3}>
                    <WorkGridItem id="generator" title="Proposal Generator" thumbnail={placeholder} >
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
                    <WorkGridItem id="fitsidekick" title="FitSidekick" thumbnail={thumbFit} >
                        No Longer in Operation <br /> FitSideKick was a fitness match-making platform based on fitness goals, experience, and activity.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    </Layout>
)

export default Works
export { getServerSideProps } from "../components/chakra"