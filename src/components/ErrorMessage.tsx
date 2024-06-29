import { PropsWithChildren } from "react";

export default function ErrorMessage({ children } : PropsWithChildren ) {
    return (
        <div className="text-center my-4 bg-red-300 text-red-700 font-bold p-3 uppercase border-l-8 border-red-600">
            {children}
        </div>
    )
}
