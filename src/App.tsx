import React, { useEffect, useState } from "react";
import "./App.css";
// import axios from "axios";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Page from "./Pagination";
import CarouselTemplate from "./Carousel";

// import { Alert, Button, Modal, Navbar } from "flowbite-react";

function App() {
  // const [show, setShow] = useState(false);
  // const fetchData = async () => {
  //   const response = await axios.get("http://localhost:8000/posts");
  //   console.log(response.data);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <>
      <Navbar />
      <Sidebar />
      <CarouselTemplate />
      <Page />

      {/* <React.Fragment>
        <Button onClick={() => setShow(true)}>Toggle modal</Button>
        <Modal show={show} onClose={() => setShow(false)}>
          <Modal.Header>Terms of Service</Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts
                new consumer privacy laws for its citizens, companies around the
                world are updating their terms of service agreements to comply.
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation
                (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                common set of data rights in the European Union. It requires
                organizations to notify users as soon as possible of high-risk
                data breaches that could personally affect them.
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setShow(false)}>I accept</Button>
            <Button color="gray" onClick={() => setShow(false)}>
              Decline
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment> */}
    </>
  );
}

export default App;
