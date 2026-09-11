import { RouterProvider } from "react-router"
import { router } from "./router"
import { AppErrorBoundary } from "./components/site/AppErrorBoundary"

const App = () => <AppErrorBoundary><RouterProvider router={router} /></AppErrorBoundary>

export default App
