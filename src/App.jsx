import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Task from "./components/Task";

function App() {
  return (
    <>
      <Header />
      <main>
        <Task />
      </main>
      <Footer />
    </>
  );
}

export default App;
