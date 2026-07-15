import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import ExamCatalog from "../pages/ExamCatalog/ExamCatalog";
import ExamDetails from "../pages/ExamDetails/ExamDetails";
import ExamSession from "../pages/ExamSession/ExamSession";
import ExamResult from "../pages/ExamResult/ExamResult";
import History from "../pages/History/History";
import Admin from "../pages/Admin/Admin";
import NotFound from "../pages/NotFound/NotFound";

export default function AppRoutes() {

    return (

        <BrowserRouter>

            <Routes>

                <Route element={<MainLayout />}>

                    <Route
                        path="/"
                        element={<Home />}
                    />

                    <Route
                        path="/dashboard"
                        element={<Dashboard />}
                    />

                    <Route
                        path="/exams"
                        element={<ExamCatalog />}
                    />

                    <Route
                        path="/exam/:id"
                        element={<ExamDetails />}
                    />

                    <Route
                        path="/exam-session/:id"
                        element={<ExamSession />}
                    />

                    <Route
                        path="/exam-result"
                        element={<ExamResult />}
                    />

                    <Route
                        path="/history"
                        element={<History />}
                    />

                    <Route
                        path="/admin"
                        element={<Admin />}
                    />

                </Route>

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="*"
                    element={<NotFound />}
                />

            </Routes>

        </BrowserRouter>

    );

}