
# 🌾 AgriVision  

**AgriVision** is a Django-based AI-powered agriculture advisory platform that leverages **machine learning models, real-time APIs,** and **Gemini AI** to empower farmers and agricultural enthusiasts. It offers intelligent recommendations and insights through an easy-to-use web interface.

## 🌟 Features  

### 1. 🚜 Crop Recommendation 
- Recommends the most suitable crops based on soil parameters such as nitrogen, phosphorus, potassium, pH, and temperature to optimize yield and sustainability.  

### 2. 🌱 Fertilizer Recommendation 
- Suggests the ideal fertilizers to improve soil health based on crop selection and soil data, enhancing nutrient levels and ensuring healthy crop growth while minimizing environmental impact.  

### 3. ☁️ Weather Forecast  
- Provides real-time weather information and forecasts using the **[Weather API]**(https://www.weatherapi.com/), helping farmers make timely decisions on irrigation, harvesting, and protecting crops from adverse weather conditions for next 3 days.

### 4. 🧠 Farmer Chatbot
- An intelligent chatbot powered by Gemini API that answers agriculture-related queries in real time. It helps farmers with guidance on best practices, soil management, weather, and more — all in a concise and context-aware manner.

### 5. 📈 Crop Yield Prediction
- Predicts expected crop yield based on inputs such as: state, district, season, crop and area. Uses a machine learning model trained on historical yield data to provide accurate yield estimations.
- NOTE: Run the model to get .pkl file.

---
## 🧰 Tech Stack

| Layer        | Technologies Used                                         |
|--------------|-----------------------------------------------------------|
| **Backend**  | Django, Python, Machine Learning (scikit-learn, pandas)   |
| **Frontend** | HTML, CSS, JavaScript, Tailwind CSS                       |
| **APIs**     | WeatherAPI, Gemini API (for Chatbot)                      |
| **ML Models**| Crop & Fertilizer Recommender, Yield Prediction           |

---
## How to Get Your API Key for WeatherAPI  

1. Go to [https://www.weatherapi.com/](https://www.weatherapi.com/).  
2. Sign up for an account using your email or Google.  
3. Log in and find your unique API key in the dashboard.  
4. Replace the API key in `settings.py` under:  
   WEATHER_API_KEY = "your_api_key_here"
   

