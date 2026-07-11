import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

import Header from "../components/layout/Header";
import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";

export default function MainLayout() {

    return (

        <>

            <Header />

            <Navigation />

            <Container
                maxWidth="lg"
                sx={{ mt: 4 }}
            >

                <Outlet />

            </Container>

            <Footer />

        </>

    );

}