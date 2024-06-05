import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const OurLocation = () => {
    return (
        <div className="w-11/12 mx-auto mt-24">

            <div className='text-center'>
                <h1 className='text-4xl font-bold text-[#062760]'>Find Us On Map</h1>
            </div>


            <div>

          <div className='mt-10'>
          <MapContainer center={[24.9020,   91.8806]} zoom={13} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>  <MapContainer center={[24.9020,  91.8806]} zoom={5} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[24.9020,   91.8806]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
          </div>

            </div>

        </div>
    );
};

export default OurLocation;