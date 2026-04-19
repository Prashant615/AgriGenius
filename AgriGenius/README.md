# 🌾 AgriGenius

> An AI-powered agricultural intelligence platform designed to assist farmers with smart crop recommendations, fertilizer suggestions, and yield predictions.

---

## 📌 About AgriGenius

**AgriGenius** is a Final Year Project (FYP) built to bridge the gap between modern AI capabilities and the agricultural sector. The system leverages machine learning models and a conversational AI chatbot to help farmers make data-driven decisions about crop selection, fertilizer usage, and expected crop yields — all through an intuitive web interface.

---

## 🚀 Features

- 🌱 **Crop Recommendation** — Suggests the most suitable crops based on soil and environmental parameters.
- 🧪 **Fertilizer Recommendation** — Recommends optimal fertilizers based on soil nutrient levels and crop type.
- 📈 **Crop Yield Prediction** — Predicts expected yield to help farmers plan production.
- 🤖 **AI Chatbot** — A Gemini-powered chatbot that answers farming and agriculture-related queries.
- 🖥️ **Modern Web Interface** — A Django-based web application with a clean and responsive UI.

---

## 🛠️ Tech Stack

| Layer         | Technology                          |
|---------------|--------------------------------------|
| Backend       | Django (Python)                      |
| ML Models     | scikit-learn (pkl files)             |
| AI Chatbot    | Google Gemini API                    |
| Frontend      | HTML, CSS, JavaScript                |
| Data          | Custom agricultural datasets         |
| Environment   | Python virtual environment (`.venv`) |

---

## 📁 Project Structure

```
AgriGenius/
├── agri_genius/             # Django project root
│   ├── agri_vision/         # Core Django app (settings, urls, wsgi)
│   └── ...                  # Other Django apps
├── DataSets/                # Training datasets
├── figures/                 # Charts and figures
├── Crop_Recommend.pkl       # Crop recommendation ML model
├── Fertilizer_Recommend.pkl # Fertilizer recommendation ML model
├── Crop_Yield.pkl           # Crop yield prediction ML model
├── requirements.txt         # Python dependencies
├── .env.example             # Environment variable template
└── README.md                # Project documentation
```

---

## ⚙️ Setup & Installation

### Prerequisites
- Python 3.10+
- pip

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/AgriGenius.git
cd AgriGenius
```

### 2. Create a Virtual Environment
```bash
python -m venv .venv
.venv\Scripts\activate   # On Windows
```

### 3. Install Dependencies
```bash
pip install -r requirements.txt
```

### 4. Configure Environment Variables

Copy the `.env.example` file to `.env` and fill in the required values:

```bash
cp .env.example .env
```

Edit `.env` with your credentials:
```
SECRET_KEY=your_django_secret_key
GEMINI_API_KEY=your_google_gemini_api_key
DEBUG=True
```

### 5. Apply Migrations
```bash
python agri_genius/manage.py migrate
```

### 6. Run the Development Server
```bash
python agri_genius/manage.py runserver
```

Visit `http://127.0.0.1:8000` in your browser.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to open an issue or submit a pull request.

---

## 📄 License

This project is developed as an academic Final Year Project. All rights reserved.

---

## 👨‍💻 Authors

- **AgriGenius Team** — Final Year Project, Department of Computer Science

---

> *"Empowering farmers with the intelligence they deserve."* 🌿
