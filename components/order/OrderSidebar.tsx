
import {prisma} from '@/src/lib/prisma'
import CategoryIcon from '../ui/Categoryicon'

async function getCategories(){
    return await prisma.category.findMany()
    // console.log(categories)
}

export default async function OrderSidebar(){

    const categories  = await getCategories()

    // console.log(categories)

    return(
        <aside className="md:w-72 md:h-screen bg-white">
            <nav className='mt-10'>
                {categories.map(category => (
                    <CategoryIcon
                        key={category.id}
                        category={category}
                    />
                ))}
            </nav>
        </aside>
    )
}

