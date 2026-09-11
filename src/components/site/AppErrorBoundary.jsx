import { Component } from "react"
import { BrandedError } from "./BrandedError"

/** Last resort for render failures outside the router's own boundary. */
export class AppErrorBoundary extends Component {
  state = { failed: false }
  static getDerivedStateFromError() { return { failed: true } }
  render() {
    return this.state.failed ? <BrandedError kind="unexpected" standalone /> : this.props.children
  }
}
