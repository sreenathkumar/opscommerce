'use client'

import { Button } from '@/components/shadcn/button'
import UniversalModal from '@/components/ui/UniversalModal'
import { useSelectedOrder } from '@/context/SelectedOrderCtx'
import { Edit } from 'lucide-react'
import UpdateOrders from './UpdateOrders'


function UpdateOrderBtn() {
    const { selectedOrder } = useSelectedOrder();

    return (
        <UniversalModal
            icon={
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-inner">
                    <Edit className="w-8 h-8 text-primary" />
                </div>
            }
            title="Update Selected Orders"
            description="Change the assignee and status for the selected orders."
            trigger={
                <Button
                    size="sm"
                    className='bg-primary hover:bg-primary/90 text-primary-foreground h-11 px-5 rounded-xl shadow-lg shadow-primary/10 transition-all duration-300 gap-2'
                    disabled={selectedOrder?.length === 0}
                >
                    Update Order
                </Button>
            }
            body={<UpdateOrders />}

        />
    )
}

export default UpdateOrderBtn