import { Container, Heading, Divider } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import Socials from "../components/socials";
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook'
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram'
import { FaYoutube } from '@react-icons/all-files/fa/FaYoutube'
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub'


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
                    <Socials href="https://www.facebook.com/OmarAdamHusain/" name="Facebook" logo={<FaFacebook />} color="facebook" passHref></Socials>
                </Section>
            
                <Section delay={0.3}>
                    <Socials href="https://www.twitter.com/omo" name="Twitter" logo={<FaTwitter />} color="twitter" passHref></Socials>
                </Section>
                <Section delay={0.4}>
                    <Socials href="https://www.instagram.com/omarahusain" logo={<FaInstagram />} name="Instagram" color="orange" passHref></Socials>
                </Section>
                <Section delay={0.5}>
                    <Socials href="https://www.youtube.com/channel/UCxt0uBqVhnRv4VfaUsNII7Q" name="YouTube" logo={<FaYoutube />} color="red" passHref></Socials>
                </Section>
                <Section delay={0.6}>
                    <Socials href="https://www.linkedin.com/in/omarahusain/" name="LinkedIn" logo={<FaLinkedin />} color="linkedin" passHref></Socials>
                </Section>
                <Section delay={0.7}>
                    <Socials href="https://github.com/OmarAHusain" name="GitHub" logo={<FaGithub />} color="gray" passHref></Socials>
                </Section>
            </Container>
        </Layout>
    )
}

export default Media
export { getServerSideProps } from '../components/chakra'