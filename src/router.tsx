import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout'
import Product, { loader as productsLoader } from './views/Products'
import NewProduct, { action as NewProductAction } from './views/NewProduct'
import EditProduct, { loader as editProductLoader, action as editProductAction } from './views/EditProduct'

export const router = createBrowserRouter ([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Product />,
                loader: productsLoader
            },
            {
                path: 'productos/nuevos',
                element: <NewProduct />,
                action: NewProductAction
            },
            {
                path: 'productos/:id/editar',
                element: <EditProduct />,
                loader: editProductLoader,
                action: editProductAction
            }
        ]
    }
])