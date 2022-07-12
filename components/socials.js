import { 
    Box,
    Link,
    Button
} from "@chakra-ui/react";

const Socials = ({href, name, logo, color}) => {
    const variant = "solid"
    if (color === "gray") {
        //variant = "outline"
    }
    return (
        <Box
            flexShrink={0}
            mt={{ base: 4, md:0 }}
            ml={{ md: 6 }}
            textAlign="center"
        >   
            <Link href={href} target="_blank">
                <Button
                    variant={variant}
                    colorScheme={color}
                    leftIcon={logo}
                    size='lg'
                    width="150px"
                >
                    {name}
                </Button>
            </Link>
        </Box>
    )
}

export default Socials