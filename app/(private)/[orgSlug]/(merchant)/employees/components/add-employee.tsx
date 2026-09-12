import { Button } from "@/components/shadcn/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/shadcn/tabs"
import UniversalModal from "@/components/ui/UniversalModal"
import DirectRegisterForm from "./direct-register-form"
import InviteLinkForm from "./invite-link-form"


export default function AddEmployee() {
    return (
        <UniversalModal
            trigger={
                <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-5 py-5 rounded-xl shadow-lg shadow-primary/15 transition-all duration-200 cursor-pointer flex items-center gap-2 text-sm self-start sm:self-auto">
                    Add Employee
                </Button>
            }
            title="Add Employee"
            description="Please use gmail, yahoo, or outlook email addresses to add employees."
            body={
                <Tabs className='w-full' defaultValue="direct">
                    <TabsList className='w-full bg-muted/20'>
                        <TabsTrigger value="direct" className='w-full text-center dark:data-[state=active]:bg-muted/70 '>
                            Direct Register
                        </TabsTrigger>
                        <TabsTrigger value="link" className='w-full text-center dark:data-[state=active]:bg-muted/70'>
                            Invite Link
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="direct" className='w-full p-4'>
                        <DirectRegisterForm />
                    </TabsContent>
                    <TabsContent value="link" className='w-full p-4'>
                        <InviteLinkForm />
                    </TabsContent>
                </Tabs>
            }
        />
    )
}

