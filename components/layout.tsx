import Header from 'components/header'
import Footer from 'components/footer'

export default function Layout({ children }:
  {children:any}){
  return (
    <>
      <Header />
      
      <main>{ children }</main>
      
      <Footer />
    </>
  )
}
