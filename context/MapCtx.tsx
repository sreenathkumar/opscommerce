'use client'

import type { Map } from "maplibre-gl";
import { createContext, useContext, useState } from "react";

interface MapContextType {
    selectedOrderId: string | null;
    setSelectedOrderId: React.Dispatch<React.SetStateAction<string | null>>;
    mapRef: Map | null;
    setMapRef: React.Dispatch<React.SetStateAction<Map | null>>;
}

const MapCtx = createContext<MapContextType | null>(null);

export function useMapContext() {
    const context = useContext(MapCtx);

    if (!context) {
        throw new Error("useMapContext must be used within a MapProvider");
    }

    return context;
}

export function MapProvider({ children, }: { children: React.ReactNode }) {
    const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
    const [mapRef, setMapRef] = useState<Map | null>(null);

    return <MapCtx.Provider value={{ selectedOrderId, setSelectedOrderId, mapRef, setMapRef }}>
        {children}
    </MapCtx.Provider>
}
