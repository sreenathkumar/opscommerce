import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/shadcn/select"
import { DriversType } from "./UpdateOrders"
import { OrderStatus } from "@prisma/client"



function StatusUpdateOptions({ label, id, placeholder }: { label: string, id: string, placeholder: string }) {
    return (
        <div className="space-y-2">
            <label htmlFor={id} className="text-sm text-foreground">
                {label}
            </label>
            <Select name="status">
                <SelectTrigger className="mt-2">
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    {
                        Object.values(OrderStatus).map((status) => (
                            <SelectItem key={status} value={status}>
                                {status}
                            </SelectItem>
                        ))
                    }
                </SelectContent>
            </Select>
        </div>
    )
}

function AssigneeUpdateOptions({ options, label, id, placeholder }: { options?: DriversType[], label: string, id: string, placeholder: string, }) {
    return (
        <div className="space-y-2">
            <label htmlFor={id} className="text-sm text-foreground">
                {label}
            </label>
            <Select name="assigneeId">
                <SelectTrigger id={id} className="mt-2">
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="none">
                        None
                    </SelectItem>
                    {options?.map((driver) => (
                        <SelectItem key={driver.id} value={driver.id}>
                            {driver.name}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    )
}

export { StatusUpdateOptions, AssigneeUpdateOptions }