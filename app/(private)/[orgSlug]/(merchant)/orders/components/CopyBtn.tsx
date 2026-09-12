'use client'

import { getClipboardContent } from '@/actions/orderActions'
import { Button } from '@/components/shadcn/button'
import { ClipboardCopy } from '@/components/ui/ClipBoardCopy'
import UniversalModal from '@/components/ui/UniversalModal'
import { useSelectedOrder } from '@/context/SelectedOrderCtx'
import { ClipboardList } from 'lucide-react'
import { useEffect, useState } from 'react'

function CopyBtn() {
    const { selectedOrder } = useSelectedOrder();
    const [content, setContent] = useState('');


    useEffect(() => {
        if (!selectedOrder || selectedOrder.length === 0) return
        const fetchClipboardData = async () => {
            const res = await getClipboardContent(selectedOrder)

            if (res) {
                setContent(res)
            }

        }
        fetchClipboardData();

    }, [selectedOrder])

    if (!selectedOrder || selectedOrder.length === 0) return null;


    return (
        <UniversalModal
            title="Update Selected Orders"
            description="Change the assignee and status for the selected orders."
            trigger={
                <Button variant='outline' size='sm' className='h-11 px-4 gap-2 rounded-xl bg-card border-border text-muted-foreground hover:text-foreground'>
                    <ClipboardList />
                </Button>
            }
            body={
                <ClipboardCopy content={content} >
                    {content}
                </ClipboardCopy>
            }

        />
    )
}

export default CopyBtn