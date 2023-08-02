import { getToken } from "./authenticate"
let token = getToken()

export async function addToFavourites(id) {
  // PUT request to /favourites/id
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/favourites/${id}`,
    {
      method: "PUT",
      headers: {
        Authorization: `JWT ${token}`,
        "Content-type": "application/json",
      },
    }
  )

  if (res.status === 200) {
    return true
  } else {
    ;[]
  }
}
export async function removeFromFavourites(id) {
  // DELETE request to /favourites/id
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/favourites/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `JWT ${token}`,
        "Content-type": "application/json",
      },
    }
  )

  if (res.status === 200) {
    return true
  } else {
    ;[]
  }
}
export async function getFavourites() {
  // GET request to /favourites
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/favourites`, {
    method: "GET",
    headers: {
      Authorization: `JWT ${token}`,
      "Content-type": "application/json",
    },
  })

  if (res.status === 200) {
    return true
  } else {
    ;[]
  }
}
export async function addToHistory(id) {
  // PUT request to /history/id
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/history/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `JWT ${token}`,
      "Content-type": "application/json",
    },
  })

  if (res.status === 200) {
    return true
  } else {
    ;[]
  }
}
export async function removeFromHistory(id) {
  // DELETE request to /history/id
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/history/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `JWT ${token}`,
      "Content-type": "application/json",
    },
  })

  if (res.status === 200) {
    return true
  } else {
    ;[]
  }
}
export async function getHistory() {
  // GET request to /history
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/history`, {
    method: "GET",
    headers: {
      Authorization: `JWT ${token}`,
      "Content-type": "application/json",
    },
  })

  if (res.status === 200) {
    return true
  } else {
    ;[]
  }
}
