/**
 * Generates a Google Maps search URL for a given place name
 * @param placeName - The name of the place to search for
 * @returns A Google Maps search URL
 */
export function getGoogleMapsUrl(placeName: string): string {
  const encodedPlace = encodeURIComponent(`${placeName}, Dwarka, Gujarat, India`);
  return `https://www.google.com/maps/search/?api=1&query=${encodedPlace}`;
}
