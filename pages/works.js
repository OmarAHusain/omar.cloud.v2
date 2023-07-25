import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { WorkGridItem } from '../components/grid-items'

import me from '../public/images/ProfilePic2.jpg'
import bsc from '../public/images/bscwhite.png'
import thumbOosh from '../public/images/ooshTech.jpg'
import thumbFit from '../public/images/fitSideKick.png'
import workout from '../public/images/workout.png'
import generator from '../public/images/generator.png'
// import placeholder from '../public/images/placeholder-small.jpeg'


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
                    <WorkGridItem id="adamrobotics" title="Adam Robotics" thumbnail={me}>
                        Robotic engineering to replace human labour for bullshit jobs.
                    </WorkGridItem>
                </Section>
                <Section delay={0.4}>
                    <WorkGridItem id="ooshtech" title="ooshTech" thumbnail={thumbOosh}>
                        A platform for Out Of School Hours (OOSH) services to manage students, parents, teachers, and visitors.
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
                    <WorkGridItem id="workout" title="Workout Tracker" thumbnail={workout} >
                        No longer building <br /> I built a custom weightlifting tracking web app. Decided to focus on other projects.
                    </WorkGridItem>
                </Section>
                <Section delay={0.8}>
                    <WorkGridItem id="generator" title="Proposal Generator" thumbnail={generator} >
                        No longer building <br /> Content re-use tool to quickly generate targeted proposal documents.
                    </WorkGridItem>
                </Section>
                <Section delay={0.9}>
                    <WorkGridItem id="fitsidekick" title="FitSidekick" thumbnail={thumbFit} >
                        No Longer in Operation <br /> A fitness match-making platform based on fitness goals, experience, and activity.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    </Layout>
)

export default Works
export { getServerSideProps } from "../components/chakra"