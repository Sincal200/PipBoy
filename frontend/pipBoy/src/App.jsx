import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
// Icons
import { RiLineChartLine, RiHashtag } from "react-icons/ri";

function App() {
  return (
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <Sidebar />
      <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 h-[100vh] overflow-y-scroll">

      <Header />
        {/* Section 1  y plantillas usadas https://tailwindcss.com/docs/guides/vite*/}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-10 gap-8">
          {/* Card 1 */}
          <div className="bg-primary-100 p-8 rounded-xl text-gray-300 flex flex-col gap-6">
            <RiLineChartLine className="text-5xl" />
            <h4 className="text-2xl">BPM Graphics</h4>
            <span className="text-5xl text-white"> Pulse</span>
            <button className="bg-red-100/20 py-2 px-6 rounded-xl text-white w-full">
                  Measure now
                </button>
          </div>
          {/* Card 2 */}
          <div className="p-4 bg-white rounded-xl flex flex-col justify-between gap-4 drop-shadow-2xl">
            <div className="flex items-center gap-4 bg-primary-100/10 rounded-xl p-4">
              <span className="bg-primary-100 text-gray-300 text-2xl font-bold p-4 rounded-xl">
                98
              </span>
              <div>
                <h3 className="font-bold">AVR</h3>
                <p className="text-gray-500">beats per minute</p>
              </div>
            </div>
            <div className="bg-primary-100/10 rounded-xl p-4">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-primary-100 text-gray-300 text-2xl font-bold p-4 rounded-xl">
                  32
                </span>
                <div>
                  <h3 className="font-bold">blood oxygen</h3>
                  <p className="text-gray-500">Oxigen</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <button className="bg-primary-100 py-2 px-6 rounded-xl text-white w-full">
                  Measure now
                </button>
              </div>
            </div>
          </div>
          {/* Futuras secciones */}

          {/* Card 3*/}
          <div className="p-4 bg-white rounded-xl flex flex-col justify-between gap-4 drop-shadow-2xl">

            <div className="bg-primary-100/10 rounded-xl p-4">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-primary-100 text-gray-300 text-2xl font-bold p-4 rounded-xl">
                  32
                </span>
                <div>
                  <h3 className="font-bold">Temperature</h3>
                  <p className="text-gray-500">in blood</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <button className="bg-primary-100 py-2 px-6 rounded-xl text-white w-full">
                  Measure now
                </button>
              </div>
            </div>
          </div>
          
        </section>
        {/* Section 2 */}
        <section className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-8">
          <div>
            <h1 className="text-2xl font-bold mb-8">Recent history</h1>
            <div className="bg-white p-8 rounded-xl shadow-2xl mb-8 flex flex-col gap-8">
              {/* Card 1 */}
              <div className="grid grid-cols-1 xl:grid-cols-4 items-center gap-4 mb-4">
                <div className="col-span-2 flex items-center gap-4">
                  <img
                    src="https://img.freepik.com/vector-gratis/corazon-verde-elemento-cardiografo_53876-116868.jpg"
                    className="w-14 h-14 object-cover rounded-xl"
                  />
                  <div>
                    <h3 className="font-bold">BPM Graphics</h3>
                    <p className="text-gray-500">BPM</p>
                  </div>
                </div>
                <div>
                  <span className="bg-green-100 text-green-800 py-1 px-3 rounded-full font-medium">
                    High
                  </span>
                </div>
                <div>
                  <span className="font-bold"> 115 BPM</span>
                </div>
              </div>
              {/* Card 2 */}
              <div className="grid grid-cols-1 xl:grid-cols-4 items-center gap-4 mb-4">
                <div className="col-span-2 flex items-center gap-4">
                  <img
                    src="https://img.freepik.com/foto-gratis/alegre-joven-deportista-posando-mostrando-pulgares-arriba-gesto_171337-8194.jpg"
                    className="w-14 h-14 object-cover rounded-xl"
                  />
                  <div>
                    <h3 className="font-bold">blood oxygen</h3>
                    <p className="text-gray-500">Oxigen</p>
                  </div>
                </div>
                <div>
                  <span className="bg-red-100 text-red-800 py-1 px-3 rounded-full font-medium">
                    Low
                  </span>
                </div>
                <div>
                  <span className="font-bold"> 99%</span>
                </div>
              </div>
            </div>
            <div className="bg-primary-900 text-gray-300 p-8 rounded-xl shadow-2xl flex items-center justify-between flex-wrap xl:flex-nowrap gap-8">
              <div>
                <RiHashtag className="text-4xl -rotate-12" />
              </div>
              <div>
                <h5 className="font-bold text-white">follow us on our Instagram channel</h5>
                <h5>Join slack channel</h5>
              </div>
              <div className="w-full xl:w-auto">
                <button className="bg-primary-100 py-2 px-6 rounded-xl text-white w-full">
                 Follow now
                </button>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-8">Recommended</h1>
              {/* Futuras secciones */}
              
          </div>
        </section>
        
      </main>
    </div>
  );
}

export default App;