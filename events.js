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

    // creating the section called event
    const section = document.createElement("section");
    section.classList.add("event");

    // creating a new section called event__info and adding it to event
    const info = document.createElement("section");
    info.classList.add("event__info")
    section.appendChild(info);

    // creating a new section for the date + month
    const dateSection = document.createElement("section");
    dateSection.classList.add("event__dates");

    // creating a h2 with textcontent of date
    const date = document.createElement("h2");
      date.textContent = event.date;
      date.classList.add("event__date");

      dateSection.appendChild(date);

      // creating a h2 with the textcontent of month
    const month = document.createElement("h2");
      month.textContent = event.month;
      month.classList.add("event__month");

      // adding month to datesection
      dateSection.appendChild(month);

      // then adding the datesection to the section info
      info.appendChild(dateSection);

      //creating a h4 with the textcontent from time
    const time = document.createElement("h4");
      time.textContent = event.time;
      time.classList.add("event__time");

      info.appendChild(time);

      //creating a h3 with the textcontent from detSker
    const detSker = document.createElement("h3");
        detSker.textContent = event.detSker;
        detSker.classList.add("event__detSker");

        info.appendChild(detSker);

        //creating a section for the triangles that make it look like a bookmark
    const triangles = document.createElement("section");
      triangles.classList.add("triangles");
      // adding this section to the event section
      section.appendChild(triangles)

      //creating the triangles
    const triangle1 = document.createElement("div");
      triangle1.classList.add("event__triangle--topRight");
      triangles.appendChild(triangle1);

    const triangle2 = document.createElement("div");
      triangle2.classList.add("event__triangle--bottomRight");
      triangles.appendChild(triangle2);

  
    if(event.category ==="familie"){
      info.classList.toggle("family__section");
      triangle1.classList.toggle("family__triangle1");
      triangle2.classList.toggle("family__triangle2");
      date.classList.toggle("family__date");
      time.classList.toggle("family__time");
    }
    else if(event.category ==="kultur"){
      info.classList.toggle("kultur__section");
      triangle1.classList.toggle("kultur__triangle1");
      triangle2.classList.toggle("kultur__triangle2");
      date.classList.toggle("kultur__date");
      time.classList.toggle("kultur__time");
    }


  document.querySelector(".events").appendChild(section);

  }}
    


