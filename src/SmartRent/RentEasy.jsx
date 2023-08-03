import "./RentEasy.css";
import RentFooter from "./RentFooter";
import RentHeader from "./RentHeader";
import RentMain from "./RentMain";
import RentNav from "./RentNav";

export default function RentEasy () {
  return (
    <div className="rent-easy">
      <RentNav/>
      <RentHeader/>
      <RentMain/>
      <RentFooter/>
    </div>
  );
};
