'use client';

import { useSearchParams } from "next/navigation";
import { useMemo } from 'react';
import useSWR from "swr";

import { Button } from '@/components/shadcn/button';
import { Skeleton } from '@/components/shadcn/skeleton';
import { TableBody, TableCell, TableRow } from "@/components/shadcn/table";

import UniversalModal from '@/components/ui/UniversalModal';
import { useSelectedOrder } from '@/context/SelectedOrderCtx';
import { OrderType } from "@/types/OrderType";
import { Edit } from 'lucide-react';
import OrderRowItem from "./OrderRowItem";
import UpdateOrders from './UpdateOrders';

const fetcher = (url: string) => fetch(url).then((res) => {
    if (!res.ok) throw new Error('Failed to fetch orders');
    return res.json();
});

interface OrdersTableContentProps {
    columns: number;
    fallbackData: OrderType[]
}

function OrdersTableContent({ columns, fallbackData }: OrdersTableContentProps) {
    const searchParams = useSearchParams();

    // Get current active URL query/sort states
    const query = searchParams.get('query') || '';
    const sort = searchParams.get('sort') || '';
    const pageNumber = parseInt(searchParams.get('page') || '1', 10);

    // Generate stable SWR key using useMemo
    const swrKey = useMemo(() => {
        const cleanParams = new URLSearchParams();
        cleanParams.append('page', pageNumber.toString());

        if (query.trim() !== '') {
            cleanParams.append('query', query);
        }
        if (sort.trim() !== '') {
            cleanParams.append('sort', sort);
        }

        return `/api/webhook/updates?${cleanParams.toString()}`;
    }, [pageNumber, query, sort]);

    // Prevent infinite fallback assignment re-renders by memoizing the SWR options fallback
    const swrOptions = useMemo(() => ({
        refreshInterval: 60000,
        revalidateFirstPage: true,
        keepPreviousData: true,
        fallbackData: { orders: fallbackData },
    }), [fallbackData]);

    //Infinite Scroll Data Layer setup
    const { data, isLoading } = useSWR<{ orders: OrderType[] }>(
        swrKey,
        fetcher,
        swrOptions
    );

    const orders = data?.orders ?? [];

    return (
        <TableBody>
            {orders.length > 0 ? (
                orders.map((order) => (
                    <OrderRowItem key={order.order_id} order={order}>
                        <EditOrderBtn order_id={order.order_id} />
                    </OrderRowItem>
                ))
            ) : !isLoading ? (
                <TableRow className="border-b border-border/60 hover:bg-muted/10 transition-colors group">
                    <TableCell colSpan={columns} className="px-6 py-4 font-medium text-center text-muted-foreground">
                        No orders found
                    </TableCell>
                </TableRow>
            ) : (
                Array.from({ length: 10 }).map((_, rowIndex) => (
                    <TableRow key={rowIndex} className="border-b border-border/60 hover:bg-muted/10 transition-colors group">
                        {Array.from({ length: columns }).map((_, colIndex) => (
                            <TableCell key={colIndex}>
                                <Skeleton className="h-4 w-full" />
                            </TableCell>
                        ))}
                    </TableRow>
                ))
            )}
        </TableBody>
    );
}

// Keep EditOrderBtn down here, optimized with stable callbacks
function EditOrderBtn({ order_id }: { order_id: string, }) {
    const { setSelectedOrder } = useSelectedOrder()

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
                <Button variant='link' onClick={() => setSelectedOrder([order_id])} >
                    Edit
                </Button>
            }
            body={<UpdateOrders order_id={order_id} />}

        />
    )
}
export default OrdersTableContent;