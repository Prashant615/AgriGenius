document.getElementById('submitButton').addEventListener('click', function () {
    const formData = new FormData(document.getElementById('cropForm'));
    const resultDiv = document.getElementById('result');
    
    // Get CSRF token from the hidden form field
    const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;

    fetch('/recommend-crop/', {
        method: 'POST',
        headers: {
            'X-CSRFToken': csrfToken,
        },
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            resultDiv.textContent = `Recommended Crop: ${data.recommended_crop}`;
        })
        .catch(error => {
            console.error('Error:', error);
            resultDiv.textContent = 'An error occurred. Please try again.';
        });
});

function redirectToPage() {
    const selectedValue = document.querySelector('.abc').value;
    switch (selectedValue) {
        case "1":
            window.location.href = "/fertilizer-recommendation"; // Change to the correct URL for Fertilizer Recommendation page
            break;
        case "2":
            window.location.href = "/weather-forecast"; // Change to the correct URL for Weather Forecast page
            break;
        case "3":
            window.location.href = "/crop-yield"; // Change to the correct URL for Crop Yield page
            break;
        default:
            break;
    }
}
