import { Input } from "@/components/ui/input";
import React from "react";

const OutlineInput = React.forwardRef<HTMLInputElement, any>(({ ...props }, ref) => {
    return (
        <div className="relative">
            <Input
                {...props}
                ref={ref}  // Forward the ref to the Input component
                className={`
                    peer
                    text-xs
                    placeholder-transparent
                    peer-placeholder-shown:placeholder-gray-400
                    peer-focus:placeholder-transparent
                `}
                autoComplete="off"  // Disables autocomplete
                placeholder=""  // Hides the default placeholder
            />
            <span
                className={`
                    absolute
                    left-3
                    transition-all
                    duration-200
                    pointer-events-none
                    bg-background px-1
                    ${props.value || props.placeholder
                    ? 'text-xs text-primary -top-2'
                    : 'text-xs text-muted-foreground top-2.5'
                }
                    peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-muted-foreground
                    peer-focus:-top-2 peer-focus:text-primary
                `}
            >
                {props.placeholder} {/* This acts as the floating label */}
            </span>
        </div>
    );
});

// Optional but useful for debugging
OutlineInput.displayName = "OutlineInput";

export default OutlineInput;
