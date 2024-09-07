import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const OurLocation = () => {
    return (
        <div className="w-11/12 mx-auto mt-24 ">

            <div className='text-center'>
                <h1 className='text-3xl font-bold text-gray-500 mt-5'>Find us to Contact</h1>
            </div>



            <div>

              <div className='mt-10 flex flex-col md:flex-row items-center gap-5'>

                <div className='w-full md:w-2/4 text-center space-y-5'>

                 <h1 className='text-center text-2xl font-bold'>
                  Contact Details
                 </h1>

                 <div>
                  <h1>Email: jahedmunna612@gmail.com</h1>
                  <h1>Phone: +8801795500756</h1>
                 </div>

                 <h1 className='text-center text-2xl font-bold'>
                  Our Offices
                 </h1>

                 <div>
                  <h1 className='font-bold'>TechWave Solutions</h1>
                  <h1>San Francisco, California, USA</h1>
                 </div>

                 <div>
                  <h1 className='font-bold'>Innovatech Group</h1>
                  <h1>Berlin, Germany</h1>
                 </div>

                 <div>
                  <h1 className='font-bold'>Digital Nexus</h1>
                  <h1>Tokyo, Japan</h1>
                 </div>





                </div>

                <div className='w-full md:w-2/4' >
          <MapContainer center={[24.9006,91.8812]} zoom={12} style={{ height: "400px", zIndex:"0"}}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>  <MapContainer center={[24.9006,91.8812]} zoom={12} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[24.9006,91.8812]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
          </div>






              </div>

         

            </div>

        </div>
    );
};

export default OurLocation;