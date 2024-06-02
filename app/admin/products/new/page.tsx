// import ProductTable from "@/components/products/ProductsTable";
import AddProductsForm from "@/components/products/AddProductsForm";
import ProductForm from "@/components/products/ProductForm";
import Heading from "@/components/ui/heading";
// import { prisma } from "@/src/lib/prisma";

export default function CreateProductPage(){


    return (
        <>
            <Heading>
                Nuevo producto

            </Heading>

            <AddProductsForm >
                <ProductForm />
            </AddProductsForm>

            
        </>
    )
}