//формируется Слот выводит компонент модального окна. Перекрывает страницу описания товара /product/[id]
//при перезагрузке страницы Слот(модальное окно) исчезает и попадаем непосредственно на страницу товара 

import { ChooseProductModal, } from "@/shared/components/shared"
import { prisma } from "@/prisma/prisma-client"
import { notFound } from "next/navigation"

export default async function ProductModalPage({ params: { id } }: { params: { id: string } }) {

    //делаем запрос к БД, который потом отправляется в компонент модального окна
    const product = await prisma.product.findFirst({
        where: {
            id: Number(id),
        },
        include: {
            // -------- Мой код -------- //
            ProductIngredient: {
                // orderBy: { id: 'desc' },
                include: {
                    Ingredient: true
                }
            },
            ProductItem: true,
         
                    //NOTE ---- оригинал ---- //
        // ingredients: true, 
        // items: true, 
         
        },

    });

    //условие: если продуктов нет - переводить на 404
    if (!product) {
        return notFound();
    }

    //передадим данные в модальное окно которое будет выводиться в данном слоте
   return <ChooseProductModal product={product} />
}