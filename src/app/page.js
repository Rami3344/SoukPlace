import Information from "../../components/Information";
import Filters from "../../components/Filters";
import Content from "../../components/Content";
import Navbar from "../../components/Navbar";

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
