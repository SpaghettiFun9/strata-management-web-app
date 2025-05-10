
import * as React from "react"
import { cn } from "@/lib/utils"

const TooltipProvider = React.forwardRef(({ children }, ref) => {
  return <div ref={ref}>{children}</div>
})
TooltipProvider.displayName = "TooltipProvider"

export { TooltipProvider }
