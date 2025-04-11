import OverviewComponent from "./OverviewComponent";
import TitleComponent from "./TitleComponent";

export default function DetailComponent({ data }) {
 return (
  <>
   <TitleComponent
    location={data.location}
    address={data.address}
    price={data.price}
   />
   <OverviewComponent
    travelTime={data.travelTime}
    weather={data.weather}
    rating={data.rating}
    description={data.description}
   />
  </>
 );
}
