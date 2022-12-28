import { AnimatePresence } from 'framer-motion'
import Script from 'next/script'
import Layout from '../components/layouts/main'
import Chakra from '../components/chakra'
//import Fonts from '../components/fonts'

const Website = ({ Component, pageProps, router}) => {
    return (
        <Chakra cookies={pageProps.cookies}>
            <Script async 
                src="https://www.googletagmanager.com/gtag/js?id=G-NV7PXPE5P7" 
                strategy='afterInteractive'
            />
            <Script 
                id="google-analytics" 
                strategy="afterInteractive"
            >
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-NV7PXPE5P7');
                `}
            </Script>
            <Layout router={router}>
                <AnimatePresence 
                    exitBeforeEnter
                    initial={true}
                    onExitComplete={() => {
                        if (typeof window !== 'undefined') {
                            window.scrollTo({ top: 0 })
                        }
                    }}
                >
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </Layout>
        </Chakra>
    )
}

export default Website