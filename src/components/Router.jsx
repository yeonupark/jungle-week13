import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useParams } from 'react-router-dom';
import App from "./App";
import TodoDetail from "./TodoDetail";

const Router = () => {

    const param = useParams();

    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/todos/:id" element={<TodoDetail />} />
        </Routes>
        </BrowserRouter>
    );
};

export default Router;