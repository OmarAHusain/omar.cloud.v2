import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { WorkGridItem } from '../components/grid-items'

import me from '../public/images/ProfilePic2.jpg'
import bsc from '../public/images/bscwhite.png'
import thumbOosh from '../public/images/ooshTech.jpg'
import thumbFit from '../public/images/fitSideKick.png'
import placeholder from '../public/images/placeholder-small.jpeg'



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
                    <WorkGridItem id="beautyscicomm" title="BeautySciComm" thumbnail={bsc}>
                        Co-Founder and Director. <br /> Beauty Industry Science communication. 
                    </WorkGridItem>
                </Section>
                <Section delay={0.3}>
                    <WorkGridItem id="adamrobotics" title="Adam Robotics" thumbnail={thumbOosh}>
                        Robotic engineering to replace human labour for bullshit jobs.
                    </WorkGridItem>
                </Section>
                <Section delay={0.4}>
                    <WorkGridItem id="ooshtech" title="ooshTech" thumbnail={thumbOosh}>
                        A cloud-based platform for Out Of School Hours (OOSH) services to manage students, parents, teachers, and visitors.
                    </WorkGridItem>
                </Section>
                <Section delay={0.5}>
                    <WorkGridItem id="consulting" title=" Consulting" thumbnail={me} >
                        Independent Management Consultant for content creators and tech startups.
                    </WorkGridItem>
                </Section>
                
            </SimpleGrid>
            <Section delay={0.6}>
                <Divider my={6} />

                <Heading as="h3" fontSize={20} mb={4}>
                Old works
                </Heading>
            </Section>
            <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <Section delay={0.7}>
                    <WorkGridItem id="generator" title="Proposal Generator" thumbnail={placeholder} >
                        No Longer working on this <br /> A content re-use tool which allows sales teams to quickly generate targeted proposal documents for their customer&apos;s specific needs.
                    </WorkGridItem>
                </Section>
                <Section delay={0.8}>
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