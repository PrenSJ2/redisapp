import CarForm from "../lib/CarForm";
import SearchForm from "../lib/SearchForm";

export default function Home(props) {
  return (
    <div>
      <h1>Search for a Car</h1>
      <SearchForm />
      <h1>Create a Car</h1>
      <CarForm />
    </div>
  )
}