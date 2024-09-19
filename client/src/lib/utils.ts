import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDateForShow = (
  input: string | number,
  hourMunite = false
) => {
  return new Date(input).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: hourMunite ? "numeric" : undefined,
    minute: hourMunite ? "numeric" : undefined,
  });
};

export const formatTime = (input: string | number) => {
  return new Date(input).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
  });
};

export const calculateDuration = (
  departureTime: string,
  arrivalTime: string
): string => {
  const departure = new Date(departureTime);
  const arrival = new Date(arrivalTime);

  const durationMs = arrival.getTime() - departure.getTime();
  const absoluteDurationMs = Math.abs(durationMs);

  const hours = Math.floor(absoluteDurationMs / (1000 * 60 * 60));
  const minutes = Math.floor(
    (absoluteDurationMs % (1000 * 60 * 60)) / (1000 * 60)
  );

  return `${hours}h ${minutes}m`;
};
