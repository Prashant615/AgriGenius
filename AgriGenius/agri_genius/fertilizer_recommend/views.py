import joblib
from django.shortcuts import render
from django.http import JsonResponse
import logging
import os

# Define the mappings as provided
fertilizer_mapping = {
    0: "10-10-10",
    1: "10-26-26",
    2: "14-14-14",
    3: "14-35-14",
    4: "15-15-15",
    5: "17-17-17",
    6: "20-20",
    7: "28-28",
    8: "DAP",
    9: "Potassium chloride",
    10: "Potassium sulfate.",
    11: "Superphosphate",
    12: "TSP",
    13: "Urea",
}


def recommend_ferti(request):
    prediction = None
    if request.method == "POST":
        try:
            # Extract form data from the request
            data = request.POST
            temperature = float(data["temperature"])
            humidity = float(data["humidity"])
            moisture = float(data["moisture"])
            nitrogen = float(data["nitrogen"])
            potassium = float(data["potassium"])
            phosphorous = float(data["phosphorous"])
            soil_type = int(data["soil_type"])
            crop_type = int(data["crop_type"])

            # Encode the categorical variables (soil_type, crop_type)
            numerical_features = [
                temperature,
                humidity,
                moisture,
                nitrogen,
                potassium,
                phosphorous,
            ]

            # Get the path to the scaler model file (FYP directory)
            base_dir = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
            scaler_path = os.path.join(base_dir, "Fertilizer_scaler.pkl")
            scaler_model = joblib.load(scaler_path)

            # Scale the numerical features (using already fitted scaler)
            numerical_features_scaled = scaler_model.transform(
                [numerical_features]
            )  # Use transform instead of fit_transform
            print(f"Scaled Values: {numerical_features_scaled}")

            # Prepare the input data for prediction
            input_data = numerical_features_scaled.flatten().tolist() + [
                soil_type,
                crop_type,
            ]
            print(f"Input Data for Prediction: {input_data}")

            # Load the model (you could load it once at the start like the encoders if needed)
            model_path = os.path.join(base_dir, "Fertilizer_Recommend.pkl")
            model = joblib.load(model_path)
            prediction = model.predict([input_data])

            # Map the prediction to fertilizer
            predicted_fertilizer = fertilizer_mapping.get(prediction[0], "Unknown")

            # Return the prediction as a JSON response
            return JsonResponse({"recommended_fertilizer": predicted_fertilizer})

        except Exception as e:
            # Log the error and return a 400 response with error details
            logging.error(f"Error in recommend_ferti: {e}")
            return JsonResponse({"error": str(e)}, status=400)
    return render(request, "fertilizer_recommend/ferti_recommend.html")
