import BarChart from "components/BarCharts";
import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className='text-primary'>Dashboard</h1>

        <div className="row px-3">

          <div className="col-5">
            <BarChart />
          </div>

        </div>

        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
