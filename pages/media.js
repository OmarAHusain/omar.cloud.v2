import { Container, Heading, Divider } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import Socials from "../components/socials";
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram, IoLogoYoutube, IoLogoLinkedin, IoLogoGithub } from 'react-icons/Io'


const Media = () => {
    return (
        <Layout title="Media">
            <Container>
                <Section delay={0.1}>
                    <Divider my={6} />
                    <Heading 
                        as="h3"
                        fontSize={20}
                        mb={4}
                    >
                        Social Media
                    </Heading>
                </Section>
                <Section delay={0.2}>
                    <Socials href="https://www.facebook.com/OmarAdamHusain/" name="Facebook" logo={<IoLogoFacebook />} color="facebook" passHref></Socials>
                </Section>
            
                <Section delay={0.3}>
                    <Socials href="https://www.twitter.com/omo" name="Twitter" logo={<IoLogoTwitter />} color="twitter" passHref></Socials>
                </Section>
                <Section delay={0.4}>
                    <Socials href="https://www.instagram.com/omarahusain" logo={<IoLogoInstagram />} name="Instagram" color="orange" passHref></Socials>
                </Section>
                <Section delay={0.5}>
                    <Socials href="https://www.youtube.com/channel/UCxt0uBqVhnRv4VfaUsNII7Q" name="YouTube" logo={<IoLogoYoutube />} color="red" passHref></Socials>
                </Section>
                <Section delay={0.6}>
                    <Socials href="https://www.linkedin.com/in/omarahusain/" name="LinkedIn" logo={<IoLogoLinkedin />} color="linkedin" passHref></Socials>
                </Section>
                <Section delay={0.7}>
                    <Socials href="https://github.com/OmarAHusain" name="GitHub" logo={<IoLogoGithub />} color="gray" passHref></Socials>
                </Section>
            </Container>
        </Layout>
    )
}

export default Media
export { getServerSideProps } from '../components/chakra'