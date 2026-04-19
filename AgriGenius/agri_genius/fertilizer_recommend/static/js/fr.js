document.getElementById('submitButton').addEventListener('click', function () {
    const formData = new FormData(document.getElementById('fertiForm'));
    const resultDiv = document.getElementById('result');
    formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });
    
    // Get CSRF token from the hidden form field
    const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;

    fetch('/recommend-fertilizer/', {
        method: 'POST',
        headers: {
            'X-CSRFToken': csrfToken,
        },
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            console.log("Response Data:", data);
            resultDiv.textContent = `Recommended Fertilizer: ${data.recommended_fertilizer}`;
        })
        .catch(error => {
            console.error('Error:', error);
            resultDiv.textContent = 'An error occurred. Please try again.';
        });
});