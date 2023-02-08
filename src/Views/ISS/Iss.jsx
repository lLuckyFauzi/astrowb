import React, { useEffect, useState } from "react";
import Map from "./Partials/Map";
import { getIssPosition } from "../../data/useIssTracker";

const Iss = () => {
  const [loading, setLoading] = useState(true);
  const [iss, setIss] = useState({});

  const getData = async () => {
    const data = await getIssPosition();
    setIss({
      latitude: data.data.latitude,
      longitude: data.data.longitude,
    });
    setLoading(false);
  };

  useEffect(() => {
    setInterval(() => {
      getData();
    }, 3000);
    // return clearInterval();
  }, []);
  return (
    <>
      {iss && (
        <div
          style={{
            minHeight: "100vh",
            minWidth: "100vw",
          }}
        >
          {!loading && (
            <Map
              position={{ latitude: iss.latitude, longitude: iss.longitude }}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Iss;
