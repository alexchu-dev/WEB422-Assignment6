/**************************************************************************************
 *  WEB422 – Assignment 4   Name: Alex Chu    Student ID: 153954219   Date: 2 Jul 2023
 *************************************************************************************/
import { useRouter } from "next/router"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ArtworkCardDetail from "@/components/ArtworkCardDetail"

export default function Artwork() {
  const router = useRouter()
  const { objectID } = router.query
  return (
    <Row>
      <Col>
        <ArtworkCardDetail objectID={objectID} />
      </Col>
    </Row>
  )
}
