import { setSocioLocation } from "./TransientState.js";

export const LocationChoices = async () => {
  const response = await fetch("http://localhost:8088/socioLocations");
  const locations = await response.json();

  document.addEventListener("change", handleLocationChange);

  let locationHtml = "<h3>Which type of area do you live in?</h3>";
  const locationArray = locations.map((location) => {
    return `<input type="radio" name="location" value="${location.id}"/>${location.label}`;
  });
  const locationOptions = locationArray.join(" ");
  locationHtml += locationOptions;
  return locationHtml;
};

const handleLocationChange = (changeEvent) => {
  if (changeEvent.target.name === "location") {
    const convertedToInteger = parseInt(changeEvent.target.value);
    setSocioLocation(convertedToInteger);
  }
};
