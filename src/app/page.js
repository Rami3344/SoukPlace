import Information from "../../components/Information";
import Navbar from "../../components/Navbar";
import Filters from "../../components/Filters";
import Content from "../../components/Content";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Information/>
      <Filters />
      <Content />
    </div>
  );
}
