import { useEffect, useRef, useState } from "react"
import { useLocation, useNavigation } from "react-router"
import { AnimatePresence, motion } from "motion/react"
import { useSceneMotion } from "./DepthProvider"
import { BrandScreen } from "./BrandScreen"

export const NavigationTransition = () => {
  const { pathname } = useLocation()
  const navigation = useNavigation()
  const reduce = useSceneMotion()
  const previousPath = useRef(pathname)
  const [arriving, setArriving] = useState(false)
  const pending = navigation.state !== "idle" && navigation.location?.pathname !== pathname

  useEffect(() => {
    if (previousPath.current === pathname) return
    previousPath.current = pathname
    setArriving(true)
    // Slow routes stay covered until the router settles. A newer navigation
    // cancels the preceding arrival timer; content loading is never delayed.
    const timer = window.setTimeout(() => setArriving(false), 420)
    return () => window.clearTimeout(timer)
  }, [pathname])

  return (
    <AnimatePresence>
      {(pending || arriving) && (
        <motion.div className="navigation-transition"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: reduce ? 0 : -18 }}
          transition={{ duration: reduce ? .08 : .18, ease: [.22, 1, .36, 1] }}>
          <BrandScreen overlay message={pending ? "Opening the next page…" : "Welcome to the gallery"} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
