import { createBrowserRouter } from "react-router"
import { Layout } from "./components/site/Layout"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"

// Home ships in the main bundle; every other page is its own chunk, loaded on
// first visit. `lazy` resolves to the route's Component per React Router 7.
const page = (name) => async () => {
  const mod = await import(`./pages/${name}.jsx`)
  return { Component: mod[name] }
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
