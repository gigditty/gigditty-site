// Simple function to send a GET request to the Gigditty backend
// Usage: call sendApiRequest() to trigger the request.
function sendApiRequest() {
  fetch('https://gigditty-api-5fd5d8905841.herokuapp.com/')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log('API request successful');
      return response.text();
    })
    .then(data => {
      console.log('Response:', data);
    })
    .catch(error => {
      console.error('API request failed:', error);
    });
}

// Automatically send request on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', sendApiRequest);
} else {
  sendApiRequest();
}
