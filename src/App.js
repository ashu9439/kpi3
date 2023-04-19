import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";
import "./App.css";
import { Navigate } from "react-router-dom";
import { useState, useId } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

import MyGrid from "./pages/MyGrid";
import Dashboard from "./pages/Dashboard";

const queryClient = new QueryClient();

function App() {
  const [isSignedIn, setIsSignedIn] = useState(null);
  const signin = () => {
    setIsSignedIn(true);
  };
  const signout = () => {
    setIsSignedIn(false);
  };

  return (
    <div className="">
      <h2 className="text-center bg-primary">KPI</h2>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <div className="container">
            <MenuBar />
            <div className="card text-center">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/dashboard"
                  element={
                    <Protected isSignedIn={isSignedIn}>
                      <Dashboard />
                    </Protected>
                  }
                />
                <Route
                  path="/grid"
                  element={
                    <Protected isSignedIn={isSignedIn}>
                      <MyGrid />
                    </Protected>
                  }
                />
              </Routes>
            </div>
          </div>
          <footer className="bg-success text-center text-white fixed-bottom ">
            some about section here
            {isSignedIn ? (
              <div className="d-grid m-5">
                <button className="btn-danger" onClick={signout}>
                  Sign out
                </button>
              </div>
            ) : (
              <MyModal show={!isSignedIn} onClose={() => {}}>
                <div className="d-grid">
                  <h1>Sign in Form</h1>
                  email    : test@test.com <br/>
                  password : *******
                  <button className="btn-dark" onClick={signin}>
                    Sign in
                  </button>
                </div>
              </MyModal>
            )}
          </footer>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

function Protected({ isSignedIn, children }) {
  if (!isSignedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
}
// export default Protected

function Home() {
  return (
    <>
      <div className="card-header">Home</div>
      <div className="card-body">Home</div>
    </>
  );
}
// export default Home


const MenuBar = () => {
  return (
    <nav className="d-flex justify-content-center navbar navbar-expand-lg navbar-dark ">
      <div className="p-2">
        <Link to="/">Home</Link>
      </div>
      <div className="p-2">
        <Link to="/grid">Grid</Link>
      </div>
      <div className="p-2">
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
};
// export default MenuBar

function MyModal({ show, header, onClose, children }) {
  const id = useId();
  return (
    <Modal
      show={show}
      onHide={onClose}
      backdrop="static"
      keyboard={false}
      aria-labelledby={`contained-modal-title-${header}-${id}`}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id={`contained-modal-title-${header}-${id}`}>
          {header}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
}
