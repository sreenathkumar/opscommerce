'use client'

import { Button } from "@/components/shadcn/button"
import { ClipboardCopy } from "@/components/ui/ClipBoardCopy"
import UniversalModal from "@/components/ui/UniversalModal"
import { useClipboardCopy } from "@/context/ClipboardCtx"
import { ClipboardList } from "lucide-react"

function CopyOrders() {
    const { clipboardContent, } = useClipboardCopy();

    if (!clipboardContent.text) return null;

    return (
        <UniversalModal
            title="Update Selected Orders"
            description="Change the assignee and status for the selected orders."
            trigger={
                <Button className="absolute top-0 right-0" variant='outline' size='sm'>
                    <ClipboardList />
                </Button>
            }
            body={
                <ClipboardCopy content={clipboardContent.text || ''}>
                    {clipboardContent.text}
                </ClipboardCopy>
            }

        />
    )
}

export default CopyOrders