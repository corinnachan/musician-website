async function getData() {
  const res = await fetch('https://api.airtable.com/v0/app3s3w3GADqUA5vg/Info?api_key=keyRIbqk5gVNeYlu9');
  const events = await res.json();
  return events.records;
}

document.addEventListener("DOMContentLoaded", async function() {
  const events = await getData();
  for(let e of events) {
    const event = e.fields;
    console.log(event);
    $("#shows table tbody").append(`
      <tr>
        <td>${event.eventName}</td>
        <td>${event.location}</td>
        <td>${event.date}</td>
        <td><a href="${event.ticketUrl}">${event.ticketText}</a></td>
      </tr>
    `);
  }
});