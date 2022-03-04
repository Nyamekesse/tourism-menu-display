import { useEffect, useState } from "react";
import "./App.css";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setloading] = useState(false);
  const [tours, settours] = useState([]);
  const fetchTours = async () => {
    setloading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setloading(false);
      settours(data);
    } catch (error) {
      setloading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} />
    </main>
  );
}

export default App;
