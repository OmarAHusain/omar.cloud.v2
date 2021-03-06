import { AnimatePresence } from 'framer-motion'
import Layout from '../components/layouts/main'
import Chakra from '../components/chakra'
//import Fonts from '../components/fonts'

const Website = ({ Component, pageProps, router}) => {
    return (
        <Chakra cookies={pageProps.cookies}>
            
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