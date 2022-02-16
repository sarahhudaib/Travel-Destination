import Header from "../header/Header";
import Tours from "../tours/Tours";
import Footer from "../footer/Footer";
import "./Home.css";

export default function Home(props) {
  return (
    <div>
      <Header />

      <Tours data={props.data} />

      <Footer />
    </div>
  );
}
