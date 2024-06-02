"use client"
import { SearchSchema } from "@/src/schema"
import { toast } from "react-toastify"
// import { redirect } from "next/navigation"
import { useRouter } from "next/navigation"

export default function ProductSearchForm(){

    const router = useRouter()

    const handleSearchFrom = (formData: FormData) => {
        const data = {
            search: formData.get('search')
        }
        const result = SearchSchema.safeParse(data)
        if(!result.success){
            result.error.issues.forEach(issue => {
                toast.error(issue.message)
            })
            return 
        }

        router.push(`/admin/products/search?search=${result.data.search}`)
    }
    return (
        <form 
        action={handleSearchFrom}
        className="flex items-center">
            <input type="text"
                placeholder="Buscar product"
                className="p-2 placeholder-gray-400 w-full"
                name="search"
             />

             <input type="submit" 
                className="bg-indigo-600 p-2 uppercase text-white cursor-pointer"
                value={'Buscar'}
             />

        </form>
    )
}