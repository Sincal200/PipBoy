import React from 'react';
import { useNavigate } from 'react-router-dom';

function DeviceSelection() {
    const paraHome = () => {
        navigate('/home');
    };
      const paraHome2 = () => {
        navigate('/oxygen');
    };

    return(
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-10 gap-8">

            <div className="bg-primary-100 p-8 rounded-xl text-gray-300 flex flex-col gap-6">
                <RiLineChartLine className="text-5xl" />
                <h4 className="text-2xl">HR Sensor</h4>
                <span className="text-5xl text-white">Pulse</span>
                {/* con onclick para ir a otro lado */}
                <button onClick={paraHome} className="bg-red-100/20 py-2 px-6 rounded-xl text-white w-full">
                    Select
                </button>
            </div>
            
        </section>
    );

}

export default DeviceSelection;