import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Alert, Button, Modal, Card } from "flowbite-react";

function App() {
  const [show, setShow] = useState(false);
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/posts");
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <React.Fragment>
        <Button onClick={() => setShow(true)}>Toggle modal</Button>
        <Modal show={show} onClose={() => setShow(false)}>
          <Modal.Header>Terms of Service</Modal.Header>
          <Modal.Body>
            <div className="max-w-sm">
              <Card
                horizontal={true}
                imgSrc="https://flowbite.com/docs/images/blog/image-4.jpg"
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </Card>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setShow(false)}>I accept</Button>
            <Button color="gray" onClick={() => setShow(false)}>
              Decline
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    </>
  );
}

export default App;
