function getJSON() {
   console.log("Started");
    fetch('events.json')
      .then((response) => {
        if (!response.ok) {
          // If the request does not return 300 OK
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((events) => {
        // Pass the received data on to the function that formats it
        console.log("Data received:", events);
        createEvent(events);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
      });
  }

  function createEvent(events) {
  for (const event of events) {
    const section = document.createElement("section");
    section.classList.add("event");

    const date = document.createElement("h2");
    console.log("date",event)
    date.textContent = event.date;
    date.classList.add("event__date");

    section.appendChild(date);

    document.querySelector(".events").appendChild(section);

  }}
    


