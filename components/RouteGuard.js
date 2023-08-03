import { useAtom } from "jotai"
import { useEffect } from "react"
import { favouritesAtom, searchHistoryAtom } from "@/store"
import { getFavourites, getHistory } from "@/lib/userData"
import { useRouter } from "next/router"
import { getToken } from "@/lib/authenticate"

const PUBLIC_PATHS = ["/login", "/", "/_error", "/register"]

export default function RouteGuard(props) {
  const router = useRouter()
  const [favouritesList, setFavouritesList] = useAtom(favouritesAtom)
  const [searchHistory, setSearchHistory] = useAtom(searchHistoryAtom)

  async function updateAtoms() {
    setFavouritesList(await getFavourites())
    setSearchHistory(await getHistory())
  }

  useEffect(() => {
    updateAtoms()

    // Check if the user is on a public path or has a valid token
    if (!PUBLIC_PATHS.includes(router.pathname) && !getToken()) {
      router.push("/login")
    }
  }, [router])
  return <>{props.children}</>
}
