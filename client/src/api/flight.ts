import { FlightData } from "@/types";
import { instance as axios } from "./axiosInstance";

const addFlight = (data: FlightData) => axios.post("/flights", data);

const deleteFlight = (id: string) => axios.delete(`/flights/${id}`);

export { addFlight, deleteFlight };
