import { useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const fetchData = async () => {
    const response = await axios.get("http://localhost:8000/posts");
    console.log(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <></>;
}

export default App;
