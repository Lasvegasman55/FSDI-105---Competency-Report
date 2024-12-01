document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const petName = document.getElementById('petName').value;
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    
    // Ideally, here you would send this data to a backend server
    console.log(`Appointment booked for ${petName} on ${date} at ${time} for ${service}`);
    
    alert('Appointment booked successfully!');
});
