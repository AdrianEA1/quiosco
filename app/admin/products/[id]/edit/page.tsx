import EditProductFrom from "@/components/products/EditProductForm"
import ProductForm from "@/components/products/ProductForm"
import GoBackButton from "@/components/ui/GoBackButton"
import Heading from "@/components/ui/heading"
import { prisma } from "@/src/lib/prisma"
// import Link from "next/link"
import { notFound, redirect } from "next/navigation"

async function getProductById(id: number){
    const product = await prisma.product.findUnique({
        where:{
            id
        }
    })

    if(!product){
        notFound()
    }
    return product
}

export default async function EditProductPage({params}: {params: {id: string}}){

    const product = await getProductById(+params.id)

    return (
        <>
            <Heading>
                Editar Productos: {product.name}
            </Heading>

            <GoBackButton/>

            <EditProductFrom>
                <ProductForm 
                    product={product}
                />
            </EditProductFrom>
        </>
    )
}