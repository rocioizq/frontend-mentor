import "./App.css"
import CarsCard from "./components/CarsCard";
import { cars } from './dataCars.jsx';

export default function App() {
  return (
    <div className="container">
      {cars.map((car) => (
        <CarsCard key={car.id} {...car} />
      ))}
    </div>
  );
}