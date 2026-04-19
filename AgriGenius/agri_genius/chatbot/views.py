import requests
import json
import re
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
from django.shortcuts import render
import google.generativeai as genai

# Configure Gemini
genai.configure(api_key=settings.GEMINI_API_KEY)


def chatbot_page(request):
    return render(request, 'chatbot.html')


# Function to fetch weather dynamically
def get_weather(city):
    api_key = settings.WEATHER_API_KEY
    url = f"https://api.weatherapi.com/v1/current.json?key={api_key}&q={city}"
    try:
        response = requests.get(url)
        if response.status_code == 200:
            data = response.json()
            condition = (
                data.get("current", {}).get("condition", {}).get("text", "No data")
            )
            temp_c = data.get("current", {}).get("temp_c", "No data")
            return f"The weather in {city} is {condition} with a temperature of {temp_c}°C."
        else:
            return "Unable to fetch weather information. Please try again."
    except Exception as e:
        return f"Error retrieving weather data: {str(e)}"


# Extract city name from user query
def extract_city_from_query(query):
    city_pattern = r"(?:weather in|temperature in|climate in)\s*([a-zA-Z\s]+)"
    match = re.search(city_pattern, query, re.IGNORECASE)
    return match.group(1).strip() if match else None


# Function to get response from Gemini API with strict farmer constraints
def get_gemini_response(prompt):
    try:
        # Strict System Instruction to restrict context purely to agriculture/farming
        system_instruction = (
            "You are an expert agricultural assistant specifically designed for farmers. "
            "You must ONLY answer questions related to farming, agriculture, crops, fertilizers, weather, and soil. "
            "Answer concisely in a few sentences. "
            "If a user asks ANYTHING else (e.g., coding, general knowledge, math, pop culture, casual chat unrelated to farming), "
            "you must immediately reject the question and politely state that you can only answer farmer-related questions."
        )
        
        # Initialize the model with the system instruction
        model = genai.GenerativeModel("gemini-2.5-flash", system_instruction=system_instruction)
        response = model.generate_content(prompt)
        content = response.text.strip()
        
        # Return max 10 lines for conciseness as originally intended
        return "\n".join(content.split("\n")[:10])
    except Exception as e:
        msg = str(e)
        if "quota" in msg.lower() or "insufficient_quota" in msg:
            return (
                "The online AI service (Gemini) is currently unavailable for this project "
                "because its free quota is exhausted or disabled.\n\n"
                "You can still use all other features (crop recommendation, fertilizer, yield, weather)."
            )
        return f"The chatbot is temporarily unavailable due to a technical issue: {msg}"


# Chatbot API view
@csrf_exempt
def chatbot_query(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            user_query = data.get("query", "").strip()

            if not user_query:
                return JsonResponse({"response": "Please enter a question."})

            # Auto-detect city for weather-related queries
            if "weather" in user_query.lower() or "temperature" in user_query.lower():
                city = extract_city_from_query(user_query)
                if city:
                    return JsonResponse({"response": get_weather(city)})
                else:
                    return JsonResponse(
                        {
                            "response": "Please specify a city to get the weather details."
                        }
                    )

            # Get response from Gemini using existing function
            gemini_response = get_gemini_response(user_query)
            return JsonResponse({"response": gemini_response})

        except Exception as e:
            return JsonResponse({"response": f"Error: {str(e)}"})

    return JsonResponse({"response": "Invalid request."})
