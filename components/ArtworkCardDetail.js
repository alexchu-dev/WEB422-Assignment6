/**************************************************************************************
 *  WEB422 – Assignment 4   Name: Alex Chu    Student ID: 153954219   Date: 2 Jul 2023
 *************************************************************************************/
import useSWR from "swr"
import Error from "next/error"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import { useState } from "react"
// Import useAtom hook from Jotai and the favouritesAtom declared in the other module.
import { useAtom } from "jotai"
import { favouritesAtom } from "@/store"
import { useEffect } from "react"

// In Next.js, we can use import SWR from client components and allow us to use the SWR  client data fetching hooks. Stale-while-revalidate is a strategy to return the data from cache(stale), then send the fetch request (revalidate) and finally come with the up-to-date data.
export default function ArtworkCardDetail({ objectID }) {
  const { data, error } = useSWR(
    objectID
      ? `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`
      : null
  )
  // Get a reference from favouritesAtom in the store.js
  const [favouritesList, setFavouritesList] = useAtom(favouritesAtom)

  // Manipulate the showAdded true false state if the objectID is included
  const [showAdded, setShowAdded] = useState(favouritesList.includes(objectID))

  // To be invoked when the button is clicked
  const favouritesClicked = () => {
    if (showAdded) {
      setFavouritesList((current) => current.filter((fav) => fav != objectID))
      setShowAdded(false)
    } else {
      setFavouritesList((current) => [...current, objectID])
      setShowAdded(true)
    }
  }
  // Setting side effect to debug
  useEffect(() => {
    console.log(favouritesList)
  })
  if (error) {
    return <Error statusCode={404} />
  }

  if (data) {
    return (
      <Card>
        {data?.primaryImage && (
          <Card.Img variant="top" src={data.primaryImage} />
        )}
        <Card.Body>
          <Card.Title>{data.title || "N/A"}</Card.Title>
          <Card.Text>
            <>
              <strong>Date: </strong>
              {data.objectDate || "N/A"}
              <br />
              <strong>Classification: </strong>
              {data.classification || "N/A"}
              <br />
              <strong>Medium: </strong>
              {data.medium || "N/A"}
              <br />
              <br />
              <strong>Artist: </strong>
              {data.artistDisplayName ? (
                <>
                  {data.artistDisplayName} (
                  <a
                    href={data.artistWikidata_URL}
                    target="_blank"
                    rel="noreferrer"
                  >
                    wiki
                  </a>
                  )
                </>
              ) : (
                "N/A"
              )}
              <br />
              <strong>Credit Line: </strong>
              {data.creditLine || "N/A"}
              <br />
              <strong>Dimensions: </strong>
              {data.dimensions || "N/A"}
              <br />
              <br />
              <Button
                variant={showAdded ? "primary" : "outline-primary"}
                onClick={() => favouritesClicked()}
              >
                + Favourite {showAdded ? "(added)" : ""}
              </Button>
            </>
          </Card.Text>
          <br />
          <Button variant="info" onClick={() => history.back()}>
            Back
          </Button>
        </Card.Body>
      </Card>
    )
  } else {
    return null
  }
}
