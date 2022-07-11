import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
//import { Center, flexbox, Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
//import { roundValueToStep } from '@chakra-ui/utils'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;

    img {
        transition: 300ms ease;
      }

    &:hover img {
        transform: rotate(20deg);
    }`

const Logo = () => {
    //const footPrintImg = `/images/logo2.png`
    const footPrintImg = `/images/logo2${useColorModeValue('', '-dark')}.png`
    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <Image src={footPrintImg} width={20} height={20} alt="Logo" />
                    <Text color={useColorModeValue('gray.800', 'whiteAlpha.900')} fontFamily='M PLUS Rounded 1c' fontWeight="bold" ml={3}>
                        Omar Adam Husain
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo