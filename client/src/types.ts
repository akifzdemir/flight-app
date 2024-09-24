interface AircraftType {
  iataMain: string;
  iataSub: string;
}

interface BaggageClaim {
  belts: string[];
}

interface Codeshares {
  codeshares: string[];
}

interface PublicFlightState {
  flightStates: string[];
}

interface Route {
  destinations: string[];
  eu: string;
  visa: boolean;
}

export interface FlightData {
  lastUpdatedAt: string;
  actualLandingTime: string;
  aircraftType: AircraftType;
  baggageClaim: BaggageClaim;
  codeshares: Codeshares;
  estimatedLandingTime: string;
  expectedTimeOnBelt: string;
  flightDirection: string;
  flightName: string;
  flightNumber: number;
  _id: string;
  isOperationalFlight: boolean;
  mainFlight: string;
  prefixIATA: string;
  prefixICAO: string;
  airlineCode: number;
  publicFlightState: PublicFlightState;
  route: Route;
  scheduleDateTime: string;
  scheduleDate: string;
  scheduleTime: string;
  serviceType: string;
  terminal: number;
  schemaVersion: string;
}
