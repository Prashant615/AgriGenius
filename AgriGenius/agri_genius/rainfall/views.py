import requests
from django.conf import settings
from django.shortcuts import render

def weather_forecast(request):
    weather_data = None
    error = None

    if request.method == 'POST':
        city = request.POST.get('city')
        api_key = settings.WEATHER_API_KEY
        url = f'https://api.weatherapi.com/v1/forecast.json?key={api_key}&q={city}&days=3'

        try:
            response = requests.get(url)
            if response.status_code == 200:
                data = response.json()
                # Extract current weather and forecast data
                weather_data = {
                    'current': {
                        'city': data['location']['name'],
                        'region': data['location']['region'],
                        'temperature': data['current']['temp_c'],
                        'condition': data['current']['condition']['text'],
                        'icon': data['current']['condition']['icon'],
                    },
                    'forecast': [
                        {
                            'date': forecast['date'],
                            'max_temp': forecast['day']['maxtemp_c'],
                            'min_temp': forecast['day']['mintemp_c'],
                            'condition': forecast['day']['condition']['text'],
                            'icon': forecast['day']['condition']['icon'],
                        }
                        for forecast in data['forecast']['forecastday']
                    ]
                }
            else:
                error = f"City '{city}' not found!"
        except requests.exceptions.RequestException:
            error = "Error fetching weather data. Please try again later."

    return render(request, 'rainfall/rainfall.html', {'weather_data': weather_data, 'error': error})
