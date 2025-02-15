import {Header} from "../components/layout/header/Header.tsx";
import {Outlet} from "react-router-dom";

export const AppLayout = () => {
    return <>
        <Header/>
        <Outlet/>
    </>;
}