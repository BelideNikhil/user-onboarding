import "./App.css";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import { useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { Welcome, CreateWorkSpace, SelectPlan, Completed } from "./Components/index";

const array = [1, 2, 3, 4];

export default function App() {
    const [progress, setProgress] = useState(100 / ((array.length - 1) * 2));
    const { pathname } = useLocation();
    const navigate = useNavigate();

    function progressHandler() {
        setProgress((prev) => (prev >= 100 ? 100 : prev + 100 / (array.length - 1)));
        let nextPage = "/";
        switch (pathname) {
            case "/":
                nextPage = "/create";
                break;
            case "/create":
                nextPage = "/plan";
                break;
            case "/plan":
                nextPage = "/completed";
                break;
            default:
                nextPage = "/";
        }
        navigate(nextPage);
    }

    return (
        <div className="App">
            <div className="wrapper">
                <div className="logo">
                    <img src="/logo.png" alt="eden" />
                    <h3>Eden</h3>
                </div>
                <ProgressBar percent={progress} filledBackground="#5a4ad1">
                    {array.map((step, index) => {
                        return (
                            <Step key={index}>
                                {({ accomplished }) => (
                                    <div className={`icon icon-md ${accomplished ? "active" : ""} `}>{step}</div>
                                )}
                            </Step>
                        );
                    })}
                </ProgressBar>
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/create" element={<CreateWorkSpace />} />
                    <Route path="/plan" element={<SelectPlan />} />
                    <Route path="/completed" element={<Completed />} />
                </Routes>
                <button className="btn btn-primary" onClick={progressHandler}>
                    {pathname === "/completed" ? "Launch Eden" : "Create Workspace"}
                </button>
            </div>
        </div>
    );
}
