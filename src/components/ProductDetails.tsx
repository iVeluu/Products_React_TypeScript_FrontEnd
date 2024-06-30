import { useNavigate, Form, ActionFunctionArgs, redirect } from "react-router-dom"
import { Product } from "../types"
import { formatCurrency } from "../utils"
import { deleteProduct } from "../services/ProductService"


type ProductDetailsProps = {
    product : Product
}

export async function action({ params } : ActionFunctionArgs ) {
    if(params.id !== undefined){
        await deleteProduct(+params.id)
        return redirect('/')
    }
}

export default function ProductDetails({ product } : ProductDetailsProps ) {

    const navigate = useNavigate()

    const isAvailable = product.availability

    return (
            <tr className="border-b ">
                <td className="p-3 text-lg text-gray-800">
                    { product.name }
                </td>
                <td className="p-3 text-lg text-gray-800">
                    { formatCurrency(product.price) }
                </td>
                <td className="p-3 text-lg text-gray-800">
                    { isAvailable ? 'Disponible' : 'No disponible'}
                </td>
                <td className="p-3 text-lg text-gray-800 ">
                    <div className="flex gap-2 items-center"> 
                        <button
                            onClick={() => navigate(`/productos/${product.id}/editar`)}
                            className="bg-indigo-600 text-white rounded-lg w-full p-2 text-xs uppercase font-bold text-center"
                            >Editar</button>
                        <Form 
                            className="w-full" 
                            method="POST" 
                            action={`productos/${product.id}/eliminar`}
                            onSubmit={(e : React.FormEvent<HTMLFormElement>) => {
                                if(!confirm('¿Eliminar?')){
                                    e.preventDefault()
                                }
                            }} 
                        >
                            <input
                                value={'Eliminar'}
                                type="submit"
                                className="bg-red-600 text-white rounded-lg w-full p-2 text-xs uppercase font-bold text-center cursor-pointer"
                            />
                        </Form>
                    </div>
                </td>
            </tr> 
    )
}
