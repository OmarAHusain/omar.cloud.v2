import { Box, Divider } from "@chakra-ui/react";
import Section from "./section";

const Footer = () => {
    return (
        <Section delay={0.6} width="200px">    
            <Divider my={2}/>
            <Box
                align="center"
                opacity={0.4}
                fontSize="sm"
            >
                
                &copy; {new Date().getFullYear()} | Omar Adam Husain | All Rights Reserved
            </Box>
        </Section>
    )
}

export default Footer