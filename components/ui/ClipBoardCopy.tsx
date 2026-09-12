"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { Button } from "@/components/shadcn/button"
import { Card, CardContent } from "@/components/shadcn/card"

interface ClipboardCopyProps {
    content: string,
    children: React.ReactNode,
}

export function ClipboardCopy({ content, children }: ClipboardCopyProps) {
    const [isCopied, setIsCopied] = useState(false)

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(content)
            setIsCopied(true)
            setTimeout(() => setIsCopied(false), 2000) // Reset after 2 seconds

        } catch (err: any) {
            console.error("Failed to copy text: ", err.message)
        }
    }

    return (
        <Card className='p-0'>
            <CardContent className="p-4">
                <div className="relative w-full cursor-pointer group overflow-y-auto" onClick={copyToClipboard}>
                    <pre className="text-sm overflow-x-auto whitespace-pre-wrap wrap-break-word">{children}</pre>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-0 right-0 transition-opacity"
                        onClick={copyToClipboard}
                    >
                        {isCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4 p-0" />}
                    </Button>
                </div>
                {isCopied && <p className="text-sm text-muted-foreground mt-2 text-center">Copied to clipboard!</p>}
            </CardContent>
        </Card>
    )
}

