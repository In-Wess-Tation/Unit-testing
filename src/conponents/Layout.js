import { Outlet } from "react-router-dom";

const Layout = () => {
    return ( 
        <>
        <header>
            <p>Header</p>
        </header>
        <main>
        <Outlet />
        </main>
        <footer>
            <p>Footer</p>
        </footer>
        </>
     );
}
 
export default Layout;