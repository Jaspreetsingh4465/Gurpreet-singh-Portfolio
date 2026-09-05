/**
 * Maps the plain string keys used in content/site.js to Phosphor components,
 * so the content file stays free of imports and JSX.
 */
import {
  PaintBrush,
  Buildings,
  Trophy,
  Globe,
  UserFocus,
  Mountains,
  Scroll,
  Flag,
  Camera,
  ChalkboardTeacher,
  InstagramLogo,
  FacebookLogo,
  YoutubeLogo,
  LinkedinLogo,
} from "@phosphor-icons/react"

export const icons = {
  brush: PaintBrush,
  building: Buildings,
  trophy: Trophy,
  globe: Globe,
  portrait: UserFocus,
  landscape: Mountains,
  scroll: Scroll,
  flag: Flag,
  camera: Camera,
  teacher: ChalkboardTeacher,
  instagram: InstagramLogo,
  facebook: FacebookLogo,
  youtube: YoutubeLogo,
  linkedin: LinkedinLogo,
}
