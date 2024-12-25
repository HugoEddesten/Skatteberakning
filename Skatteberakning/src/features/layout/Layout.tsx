import { Outlet } from "react-router-dom"

const Layout = () => {

    return (
        <div className="">
            <div className="flex-grow-1 min-h-screen m-4">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout