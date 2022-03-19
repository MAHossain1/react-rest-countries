import Countries from "./components/Countries/Countries";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
      <Footer></Footer>
    </div>
  );
}

/* function LoadCountries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then(res => res.json())
      .then(data => setCountries(data));
  }, []);
  return (
    <div>
      <h1>Visiting Every Country of the World!!!</h1>
      <h3>Available Countries: {countries.length}</h3>
      {countries.map(country => (
        <Country
          name={country.name.common}
          population={country.population}
          capital={country.capital}
        ></Country>
      ))}
    </div>
  );
}
function Country(props) {
  return (
    <div>
      <h2>
        <small>Name:</small> {props.name}
      </h2>
      <h3>
        <small>Capital:</small> {props.capital}
      </h3>
      <h4>
        <small>Population:</small> {props.population}
      </h4>
    </div>
  );
} */

export default App;
