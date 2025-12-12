import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Navbar from "@/components/Navbar";
import RouteMap from "@/components/RouteMap";

export default function Home() {
  return (
    <div>
      <main>
        <h1>SC 4.4.0 Route Planner</h1>
        <Navbar />
        <Form />
        <RouteMap />
        <Footer />
      </main>
    </div>
  );
}
