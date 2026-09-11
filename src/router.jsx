import { createBrowserRouter } from "react-router"
import { Layout } from "./components/site/Layout"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { BrandScreen } from "./components/site/BrandScreen"
import { RouteError } from "./components/site/RouteError"

// Home ships in the main bundle; every other page is its own chunk, loaded on
// first visit. `lazy` resolves to the route's Component per React Router 7.
const pages = {
  About: () => import("./pages/About.jsx"),
  Work: () => import("./pages/Work.jsx"),
  WorkCategory: () => import("./pages/WorkCategory.jsx"),
  Artwork: () => import("./pages/Artwork.jsx"),
  Archive: () => import("./pages/Archive.jsx"),
  Exhibitions: () => import("./pages/Exhibitions.jsx"),
  Achievements: () => import("./pages/Achievements.jsx"),
  Journal: () => import("./pages/Journal.jsx"),
  JournalArticle: () => import("./pages/JournalArticle.jsx"),
  Contact: () => import("./pages/Contact.jsx"),
}
const page = (name) => async () => ({ Component: (await pages[name]())[name] })

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    HydrateFallback: BrandScreen,
    ErrorBoundary: RouteError,
    children: [
      { index: true, element: <Home /> },
      { path: "about", lazy: page("About") },
      { path: "work", lazy: page("Work") },
      { path: "work/:category", lazy: page("WorkCategory") },
      { path: "work/:category/:slug", lazy: page("Artwork") },
      { path: "archive", lazy: page("Archive") },
      { path: "exhibitions", lazy: page("Exhibitions") },
      { path: "achievements", lazy: page("Achievements") },
      { path: "journal", lazy: page("Journal") },
      { path: "journal/:slug", lazy: page("JournalArticle") },
      { path: "contact", lazy: page("Contact") },
      { path: "*", element: <NotFound /> },
    ],
  },
])

