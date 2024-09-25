import { Input } from "@/components/ui/input"
import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"

interface OutlineFormFieldProps {
    control: any;
    name: string;
    placeholder?: string;
    type?: string;
}

export default function OutlineFormField({ control, name, placeholder = 'Enter text', type = 'text' }: OutlineFormFieldProps) {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className="relative">
                    <FormControl>
                        <OutlineInput
                            {...field}
                            type={type}
                            placeholder={placeholder}
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

function OutlineInput({ ...props }) {
    return (
        <div className="relative">
            <Input
                {...props}
                className={`
                    peer
                    text-xs
                    placeholder-transparent
                    peer-placeholder-shown:placeholder-gray-400
                    peer-focus:placeholder-transparent
                `}
                placeholder={""} // Hides the default placeholder
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
    )
}
