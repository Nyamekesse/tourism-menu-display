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

  const removeTour = (id) => {
    const newTourList = tours.filter((tour) => tour.id !== id);
    settours(newTourList);
  };
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  } else if (tours.length === 0) {
    return (
      <main className="no-tours">
        <h2>No tours available</h2>
        <button onClick={() => fetchTours()}>refresh</button>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} deleteTour={removeTour} />
    </main>
  );
}

export default App;
