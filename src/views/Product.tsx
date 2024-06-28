import { Link } from "react-router-dom"


export default function Product() {
  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-4xl font-black text-slate-500">Productos</h2>
        <Link 
          to='productos/nuevos'
          className="rounded-md bg-indigo-600 hover:bg-indigo-500 p-3 text-sm font-bold text-white shadow-sm"
        >
          Agregar Producto
        </Link>
      </div>
    </>
  )
}
