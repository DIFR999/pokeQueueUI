"use client"

import * as React from "react"
import { Button } from "./button"
import { cn } from "@/lib/utils"

export const modalVariants = {
  sizes: {
    sm: "max-w-sm w-[90%]",
    md: "max-w-md w-[90%]",
    lg: "max-w-lg w-[90%]",
  },
}

export function ConfirmModal({
  open,
  onOpenChange,
  title,
  description,
  actions = [], // array de botones: [{ label, variant, onClick }]
  size = "md",
  className,
}) {
  if (!open) return null

  return (
    <div
      className={cn(
        "fixed inset-0 flex items-center justify-center bg-black/50 z-50",
        className
      )}
    >
      <div
        className={cn(
          "bg-white dark:bg-gray-800 p-6 rounded-md shadow-lg",
          modalVariants.sizes[size]
        )}
      >
        {title && <h3 className="text-lg font-semibold">{title}</h3>}
        {description && (
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            {description}
          </p>
        )}
        <div className="mt-4 flex justify-end gap-2 flex-wrap">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant={action.variant || "default"}
              size={action.size || "default"}
              onClick={() => {
                action.onClick?.()
                onOpenChange?.(false) // opcional: cierra la modal automáticamente
              }}
            >
              {action.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
