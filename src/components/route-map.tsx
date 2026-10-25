import { useEffect, useMemo, useRef } from "react";
import { MapContainer, TileLayer, Polyline, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { stops } from "@/data/stops";

const INK = "#0E2B31";
const LAKE = "#17575E";
const TEA = "#E8A020";

function numberIcon(order: number, active: boolean, highlight: boolean) {
  const bg = active ? TEA : highlight ? LAKE : "#EFF2EC";
  const fg = active || highlight ? (active ? INK : "#EFF2EC") : INK;
  return L.divIcon({
    className: "stop-marker-label",
    html: `<div style="width:30px;height:30px;border:2px solid ${INK};border-radius:2px;background:${bg};color:${fg};display:flex;align-items:center;justify-content:center;font-family:'IBM Plex Mono',monospace;font-size:13px;font-weight:600;box-sizing:border-box">${order}</div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
  });
}

function distanceIcon(text: string) {
  return L.divIcon({
    className: "distance-label",
    html: `<span>${text}</span>`,
    iconSize: [0, 0],
    iconAnchor: [0, 8],
  });
}

function MapController({ activeId, fitToken }: { activeId: string | null; fitToken: number }) {
  const map = useMap();
  const bounds = useMemo(
    () => L.latLngBounds(stops.map((s) => [s.lat, s.lng] as [number, number])),
    [],
  );

  useEffect(() => {
    map.fitBounds(bounds, { padding: [48, 48] });
  }, [map, bounds, fitToken]);

  useEffect(() => {
    if (!activeId) return;
    const s = stops.find((x) => x.id === activeId);
    if (s) map.flyTo([s.lat, s.lng], 15, { duration: 0.7 });
  }, [map, activeId]);

  useEffect(() => {
    const t = setTimeout(() => map.invalidateSize(), 200);
    return () => clearTimeout(t);
  }, [map]);

  return null;
}

export type RouteMapProps = {
  activeId: string | null;
  onSelect: (id: string) => void;
  fitToken: number;
};

export default function RouteMap({ activeId, onSelect, fitToken }: RouteMapProps) {
  const first = stops[0]!;
  const center = useRef<[number, number]>([first.lat, first.lng]);

  const legs = stops.slice(1).map((s, i) => {
    const prev = stops[i]!;
    return {
      id: s.id,
      from: [prev.lat, prev.lng] as [number, number],
      to: [s.lat, s.lng] as [number, number],
      mid: [(prev.lat + s.lat) / 2, (prev.lng + s.lng) / 2] as [number, number],
      boat: s.travelMode === "boat",
      label: `${s.distanceFromPrevKm.toFixed(1)} กม. · ${s.travelMode === "boat" ? "เรือ" : "รถ"} ~${s.travelMinutes} นาที`,
    };
  });

  return (
    <MapContainer
      center={center.current}
      zoom={13}
      scrollWheelZoom
      className="h-[60vh] min-h-[360px] w-full border border-border md:h-[70vh]"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {legs.map((leg) => (
        <Polyline
          key={leg.id}
          positions={[leg.from, leg.to]}
          pathOptions={{
            color: leg.boat ? LAKE : INK,
            weight: 3,
            dashArray: leg.boat ? "8 8" : undefined,
          }}
        />
      ))}
      {legs.map((leg) => (
        <Marker
          key={`label-${leg.id}`}
          position={leg.mid}
          icon={distanceIcon(leg.label)}
          interactive={false}
        />
      ))}
      {stops.map((s) => (
        <Marker
          key={s.id}
          position={[s.lat, s.lng]}
          icon={numberIcon(s.order, activeId === s.id, !!s.isHighlight)}
          title={s.name}
          eventHandlers={{ click: () => onSelect(s.id) }}
        />
      ))}
      <MapController activeId={activeId} fitToken={fitToken} />
    </MapContainer>
  );
}
