interface DefaultLayoutProps {
   children: React.ReactNode
}
import { Footer } from '../components/Footer/Fotter'
import { Navbar } from '../components/Navbar/NavBar'
import * as C from './styled'


export const DefaultLayout = ({ children }: DefaultLayoutProps) => {

   return (
      <>
         <Navbar />
         <C.maincontianer>{children}</C.maincontianer>
         <Footer />
      </>
   )
}