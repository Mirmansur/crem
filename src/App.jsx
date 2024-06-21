import Header from "./componetns/header/Header";
import Laminat from "./componetns/main/Laminat";
import Componi from "./componetns/main/Componi";
import Diplom from "./componetns/main/Diplom";
import Crem from "./componetns/main/Crem";
import Information from "./componetns/main/Information";
import Person from "./componetns/main/Person";
import News from "./componetns/main/News";
import Footer from "./componetns/footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Laminat />
      <Componi />
      <Diplom />
      <Crem />
      <Information />
      <Person />
      <News />
      <Footer />
    </div>
  );
};

export default App;
