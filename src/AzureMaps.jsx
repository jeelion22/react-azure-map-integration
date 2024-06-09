import React, { useEffect, useRef } from "react";
import * as atlas from "azure-maps-control";
import "azure-maps-control/dist/atlas.min.css";

const AzureMaps = ({ dealers }) => {
  const subscriptionKey = import.meta.env.VITE_SUBSCRIPTION_KEY;
  const mapRef = useRef(null);

  useEffect(() => {
    if (!subscriptionKey) {
      console.error("Subscription key is not set.");
      return;
    }

    let map;
    const loadMap = () => {
      if (!mapRef.current) return;

      map = new atlas.Map(mapRef.current, {
        authOptions: {
          authType: atlas.AuthenticationType.subscriptionKey,
          subscriptionKey: subscriptionKey,
        },
        center:
          dealers.length > 0
            ? [dealers[0].position[0], dealers[0].position[1]]
            : [0, 0],
        zoom: 10,
        view: "Auto",
      });

      map.events.add("ready", () => {
        dealers.forEach((dealer) => {
          if (!dealer.position || dealer.position.length < 2) {
            console.error("Invalid dealer position:", dealer);
            return;
          }

          const marker = new atlas.HtmlMarker({
            color: "DodgerBlue",
            text: "H",
            position: [dealer.position[0], dealer.position[1]],
          });

          const popup = new atlas.Popup({
            pixelOffset: [0, -30],
          });

          map.events.add("click", marker, () => {
            popup.setOptions({
              position: [dealer.position[0], dealer.position[1]],
              content: `<div style="padding: 10px">
                  <p>${dealer.name}</p>
                  <p>${dealer.address}</p>
                </div>`,
            });
            popup.open(map);
          });

          map.markers.add(marker);
          map.popups.add(popup);
        });
      });
    };

    loadMap();

    return () => {
      if (map) {
        map.dispose();
      }
    };
  }, [subscriptionKey, dealers]);

  return (
    <div
      className="mt-4 rounded"
      ref={mapRef}
      style={{ height: "60vh", width: "100%" }}
    ></div>
  );
};

export default AzureMaps;
