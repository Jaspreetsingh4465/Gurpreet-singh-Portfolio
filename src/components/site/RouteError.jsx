import { isRouteErrorResponse, useRouteError } from "react-router"
import { BrandedError } from "./BrandedError"

export const RouteError = () => {
  const error = useRouteError()
  const status = isRouteErrorResponse(error) ? error.status : undefined
  const failedImport = error instanceof Error && /Failed to fetch dynamically imported module|Importing a module script failed|Loading chunk .* failed/i.test(error.message)
  const kind = status === 404 ? "not-found" : failedImport || status === 503 ? "unavailable" : "unexpected"
  return <BrandedError kind={kind} status={status} standalone />
}
