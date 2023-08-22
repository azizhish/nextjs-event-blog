import EventList from "../components/event-list";
import { getFeaturedEvents } from "../dummy-data";

function HomePage(props) {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvents}></EventList>
    </div>
  );
}

export default HomePage;
