/**************************************************************************************
 *  WEB422 – Assignment 4   Name: Alex Chu    Student ID: 153954219   Date: 2 Jul 2023
 *************************************************************************************/
import Container from "react-bootstrap/Container"
import MainNav from "@/components/MainNav"
import Footer from "@/components/Footer"

export default function Layout(props) {
  return (
    <>
      <div className="main">
        <MainNav />
        <br />
        <Container>{props.children}</Container>
        <br />
        <Footer />
      </div>
    </>
  )
}
