$(function () {
    // Sample lists (Replace with actual 32 states, 645 districts, 123 crops)
    var state_names = [
        'Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam',
        'Bihar', 'Chandigarh', 'Chhattisgarh', 'Dadra and Nagar Haveli', 'Goa',
        'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand',
        'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya',
        'Mizoram', 'Nagaland', 'Odisha', 'Puducherry', 'Punjab', 'Rajasthan', 'Sikkim',
        'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
    ]
    var district_names = [
        "24 PARAGANAS NORTH", "24 PARAGANAS SOUTH", "ADILABAD", "AGAR MALWA", "AGRA", "AHMADABAD",
        "AHMEDNAGAR", "AIZAWL", "AJMER", "AKOLA", "ALAPPUZHA", "ALIGARH", "ALIRAJPUR", "ALLAHABAD",
        "ALMORA", "ALWAR", "AMBALA", "AMBEDKAR NAGAR", "AMETHI", "AMRAVATI", "AMRELI", "AMRITSAR",
        "AMROHA", "ANAND", "ANANTAPUR", "ANANTNAG", "ANJAW", "ANUGUL", "ANUPPUR", "ARARIA", "ARIYALUR",
        "ARWAL", "ASHOKNAGAR", "AURAIYA", "AURANGABAD", "AZAMGARH", "BADGAM", "BAGALKOT", "BAGESHWAR",
        "BAGHPAT", "BAHRAICH", "BAKSA", "BALAGHAT", "BALANGIR", "BALESHWAR", "BALLIA", "BALOD",
        "BALODA BAZAR", "BALRAMPUR", "BANAS KANTHA", "BANDA", "BANDIPORA", "BANGALORE RURAL", "BANGALORE URBAN",
        "BANKA", "BANKURA", "BANSWARA", "BARABANKI", "BARAMULA", "BARAN", "BARDHAMAN", "BAREILLY", "BARGARH",
        "BARPETA", "BARWANI", "BASTAR", "BASTI", "BATHINDA", "BEED", "BEGUSARAI", "BELGAUM", "BELLARY",
        "BETUL", "BHAGALPUR", "BHANDARA", "BHARATPUR", "BHARUCH", "BHAVNAGAR", "BHILWARA", "BHIND", "BHIWANI",
        "BHOJPUR", "BHOPAL", "BIDAR", "BIJAPUR", "BIJNOR", "BIKANER", "BILASPUR", "BIRBHUM", "BISHNUPUR",
        "BOKARO", "BONGAIGAON", "BUDAUN", "BULANDSHAHR", "BULDANA", "BUNDI", "BURHANPUR", "BUXAR", "CACHAR",
        "CHAMARAJANAGAR", "CHAMBA", "CHAMOLI", "CHAMPHAI", "CHANDAULI", "CHANDIGARH", "CHANDRAPUR", "CHANDEL",
        "CHANDRAPUR", "CHANDEL", "CHANDRAPUR", "CHHATARPUR", "CHHINDWARA", "CHIKBALLAPUR", "CHIKMAGALUR",
        "CHIRANG", "CHITRADURGA", "CHITRAKOOT", "CHITTOOR", "CHITTORGARH", "CHURACHANDPUR", "CHURU", "COIMBATORE",
        "CUDDALORE", "CUDDAPAH", "CUTTACK", "DADRA AND NAGAR HAVELI", "DAHOD", "DAKSHIN DINAJPUR", "DAKSHINA KANNADA",
        "DAMAN", "DAMOH", "DANTEWADA", "DARBHANGA", "DARJEELING", "DARRANG", "DATIA", "DAUSA", "DAVANGERE",
        "DEHRADUN", "DEOGHAR", "DEORIA", "DEWAS", "DHALAI", "DHAMTARI", "DHANBAD", "DHAR", "DHARAMSALA", "DHARMAPURI",
        "DHARWAD", "DHEMAJI", "DHENKANAL", "DHOLPUR", "DHUBRI", "DHULE", "DIBRUGARH", "DIMA HASAO", "DIMAPUR",
        "DINDIGUL", "DINDORI", "DODA", "DUMKA", "DUNGARPUR", "DURG", "EAST CHAMPARAN", "EAST DELHI", "EAST GARO HILLS",
        "EAST GODAVARI", "EAST KHASI HILLS", "EAST SIKKIM", "EAST SINGHBUM", "ERNAKULAM", "ERODE", "ETAH", "ETAWAH",
        "FAIZABAD", "FARIDABAD", "FARIDKOT", "FARRUKHABAD", "FATEHABAD", "FATEHPUR", "FAZILKA", "FIROZABAD", "FIROZPUR",
        "GADAG", "GADCHIROLI", "GANDERBAL", "GANDHINAGAR", "GANGANAGAR", "GANGTOK", "GAUTAM BUDDHA NAGAR", "GAYA",
        "GHAZIABAD", "GHAZIPUR", "GIRIDIH", "GOALPARA", "GODDA", "GOLAGHAT", "GONDIA", "GOPALGANJ", "GORAKHPUR",
        "GULBARGA", "GUNA", "GUNTUR", "GURDASPUR", "GURGAON", "GWALIOR", "HAILAKANDI", "HAMIRPUR", "HANUMANGARH",
        "HAPUR", "HARDA", "HARDOI", "HARIDWAR", "HASSAN", "HATHRAS", "HAVERI", "HIDALGO", "HINGOLI", "HISAR",
        "HOOGHLY", "HOSHANGABAD", "HOSHIARPUR", "HOWRAH", "HYDERABAD", "IDUKKI", "IMPHAL EAST", "IMPHAL WEST",
        "INDORE", "JABALPUR", "JAGATSINGHAPUR", "JAIPUR", "JAISALMER", "JALANDHAR", "JALAUN", "JALGAON", "JALNA",
        "JALPAIGURI", "JAMMU", "JAMNAGAR", "JAMTARA", "JAMUI", "JANGAON", "JANJGIR-CHAMPA", "JASHPUR", "JAUNPUR",
        "JEHANABAD", "JHAJJAR", "JHALAWAR", "JHANSI", "JHARSUGUDA", "JHUNJHUNU", "JIND", "JODHPUR", "JORHAT",
        "JUNAGADH", "KACHCHH", "KADAPA", "KAILASHAHAR", "KAIMUR", "KAITHAL", "KAKINADA", "KALAHANDI", "KALIMPONG",
        "KALLAKURICHI", "KAMAREDDY", "KAMRUP", "KANCHIPURAM", "KANNAUJ", "KANPUR DEHAT", "KANPUR NAGAR", "KANYAKUMARI",
        "KAPURTHALA", "KARAIKAL", "KARAIKUDI", "KARBI ANGLONG", "KARGIL", "KARIMGANJ", "KARNAL", "KARUR", "KASARAGOD",
        "KATHUA", "KATIHAR", "KATNI", "KAUSHAMBI", "KENDRAPARA", "KENDUJHAR", "KHAGARIA", "KHAMMAM", "KHANDWA",
        "KHARGONE", "KHEDA", "KHERI", "KHORDHA", "KHOWAI", "KHUNTI", "KISHANGANJ", "KISHTWAR", "KOCHI", "KODAGU",
        "KODERMA", "KOHIMA", "KOKRAJHAR", "KOLAR", "KOLHAPUR", "KOLKATA", "KOLLAM", "KOPPAL", "KORAPUT", "KORIYA",
        "KOTA", "KOTTAYAM", "KOZHIKODE", "KRISHNA", "KRISHNAGIRI", "KULGAM", "KULLU", "KUPWARA", "KURNOOL", "KURUKSHETRA",
        "KUSHINAGAR", "KUTCH", "LAKHIMPUR", "LAKHISARAI", "LAKSHADWEEP", "LALITPUR", "LATEHAR", "LATUR", "LAWNGTLAI",
        "LEH", "LOHARDAGA", "LOHIT", "LOWER DIBANG VALLEY", "LUCKNOW", "LUDHIANA", "LUNGLEI", "MADHEPURA", "MADHUBANI",
        "MADURAI", "MAHARAJGANJ", "MAHASAMUND", "MAHBUBNAGAR", "MAHENDRAGARH", "MAHESANA", "MAHRAJGANJ", "MAINPURI",
        "MALAPPURAM", "MALDA", "MALEGAON", "MALKANGIRI", "MALOUT", "MANDI", "MANDLA", "MANDSAUR", "MANDYA", "MANGALORE",
        "MANGALURU", "MANIPUR", "MATHURA", "MATHURAPUR", "MATHURA", "MAVELIKARA", "MAWAL", "MAZGAON", "MEDINIPUR",
        "MEERUT", "MEHSANA", "MIRZAPUR", "MISHRAL", "MOGA", "MOKOKCHUNG", "MON", "MORADABAD", "MORENA", "MUKTSAR",
        "MUMBAI", "MUNGER", "MURSHIDABAD", "MUZAFFARNAGAR", "MUZAFFARPUR", "MYSORE", "NABARANGPUR", "NADIA", "NAGAON",
        "NAGAPATTINAM", "NAGAR", "NAGARKURNOOL", "NAGPUR", "NAINITAL", "NALANDA", "NALBARI", "NAMAKKAL", "NAMCHI",
        "NANDED", "NANDURBAR", "NARASARAOPET", "NARSINGHPUR", "NASHIK", "NAVI MUMBAI", "NAVSARI", "NAWADA", "NAWANSHAHR",
        "NAYAGARH", "NEEMUCH", "NELLORE", "NEW DELHI", "NICOBARS", "NILGIRIS", "NIZAMABAD", "NONEY", "NORTH GOA",
        "NORTH TRIPURA", "NUAPADA", "ONGOLE", "OSMANABAD", "PALAKKAD", "PALAMU", "PALI", "PALWAL", "PANCHKULA", "PANCHMAHAL",
        "PANIPAT", "PAPUM PARE", "PARBHANI", "PASCHIM MEDINIPUR", "PASHCHIM CHAMPARAN", "PATHANAMTHITTA", "PATHANKOT", "PATIALA",
        "PATNA", "PAURI", "PERAMBALUR", "PHEK", "PHULBANI", "PILIBHIT", "PITHORAGARH", "PONDICHERRY", "POONCH", "PORBANDAR",
        "PRATAPGARH", "PRAYAGRAJ", "PUDUKKOTTAI", "PULWAMA", "PUNE", "PURI", "PURNIA", "PURULIA", "RAE BARELI", "RAICHUR",
        "RAIGAD", "RAIGARH", "RAIPUR", "RAISEN", "RAJASTHAN", "RAJAURI", "RAJGARH", "RAJKOT", "RAJNANDGAON", "RAJSAMAND",
        "RAMANAGARA", "RAMANATHAPURAM", "RAMBAN", "RAMGARH", "RAMPUR", "RANCHI", "RANGA REDDY", "RATNAGIRI", "RATLAM",
        "RAUPLA", "REASI", "REWA", "REWARI", "RI BHOI", "ROHTAK", "ROHTAS", "RUDRAPRAYAG", "RUPNAGAR", "SABARKANTHA",
        "SAGAR", "Saharanpur", "Saharsa", "SAHIBGANJ", "SALEM", "SAMASTIPUR", "SAMBALPUR", "SAMBHAL", "SANGAREDDY",
        "SANGRUR", "SANT KABEER NAGAR", "SANT RAVIDAS NAGAR", "SARAN", "SATARA", "SATNA", "SAWAI MADHOPUR", "SEHORE",
        "SEONI", "SHAHDARA", "SHAHDOL", "SHAHJAHANPUR", "SHAJAPUR", "SHEIKHPURA", "SHEOHAR", "SHEOPUR", "SHILLONG",
        "SHIMLA", "SHIMOGA", "SHIVPURI", "SHOPIAN", "SHRAVASTI", "SIANG", "SIDDHARTHNAGAR", "SIDHI", "SIDDIPET",
        "SIKAR", "SIKAR", "SIMDEGA", "SINDHUDURG", "SINGRAULI", "SIRMAUR", "SIRONJ", "SIRSA", "SITAMARHI", "SITAPUR",
        "SIVAGANGA", "SIWAN", "SOLAN", "SOLAPUR", "SONBHADRA", "SONEPAT", "SONITPUR", "SOUTH DELHI", "SOUTH GOA",
        "SOUTH TRIPURA", "SRI GANGANAGAR", "SRIKAKULAM", "SRINAGAR", "SUBARNAPUR", "SULTANPUR", "SUNDARGARH", "SUPAUL",
        "SURAJPUR", "SURAT", "SURENDRANAGAR", "SURYAPET", "TARN TARAN", "TEHRI GARHWAL", "THANE", "THANJAVUR", "THENI",
        "THIRUVALLUR", "THIRUVANANTHAPURAM", "THOOTHUKUDI", "THRISSUR", "TIKAMGARH", "TINSUKIA", "TIRAP", "TIRUCHIRAPPALLI",
        "TIRUNELVELI", "TIRUPPUR", "TIRUVANNAMALAI", "TONK", "TRIPURA", "TUMKUR", "TUTICORIN", "UDAIPUR", "UDALGURI",
        "UDAM SINGH NAGAR", "UDHAM SINGH NAGAR", "UDHAMPUR", "UDUPI", "UJJAIN", "UKHRUL", "UMARIA", "UNA", "UNNAO",
        "UPPALA", "UPPER SIANG", "UPPER SUBANSIRI", "UTTARA KANNADA", "UTTARAKASHI", "VADODARA", "VAISHALI", "VALSAD",
        "VARANASI", "VELLER", "VELLORE", "VIDISHA", "VILUPPURAM", "VIRUDHUNAGAR", "VISAKHAPATNAM", "VIZIANAGARAM",
        "WARANGAL", "WARDHA", "WASHIM", "WAYANAD", "WEST CHAMPARAN", "WEST DELHI", "WEST GARO HILLS", "WEST GODAVARI",
        "WEST KHASI HILLS", "WEST SIKKIM", "WEST SINGHBUM", "WOKHA", "YADGIR", "YAMUNANAGAR", "YANAM", "YAVATMAL",
        "ZUNHEBOTO"
    ];
    var crops = [
        "Rice", "Wheat", "Maize", "Bajra", "Barley", "Jowar", "Ragi", "Gram", "Arhar/Tur", "Moong", "Urad",
        "Lentil", "Sugarcane", "Groundnut", "Soybean", "Mustard", "Sesame", "Sunflower", "Cotton", "Castor",
        "Linseed", "Safflower", "Peas", "Potato", "Tomato", "Onion", "Brinjal", "Cabbage", "Cauliflower",
        "Chili", "Garlic", "Okra", "Spinach", "Coriander", "Turmeric", "Ginger", "Banana", "Mango", "Papaya",
        "Guava", "Apple", "Grapes", "Pomegranate", "Litchi", "Orange", "Lemon", "Watermelon", "Muskmelon",
        "Coconut", "Arecanut", "Cashew", "Coffee", "Tea", "Rubber", "Cardamom", "Pepper", "Clove", "Cinnamon",
        "Jute", "Tobacco", "Sugar beet", "Sorghum", "Millet", "Horse gram", "Black gram", "Green gram", "Kidney beans"
    ];

    // Apply autocomplete
    $("#state_name").autocomplete({
        source: state_names
    });

    $("#district_name").autocomplete({
        source: district_names
    });

    $("#crop").autocomplete({
        source: crops
    });
});

document.getElementById('submitButton').addEventListener('click', function () {
    const formData = new FormData(document.getElementById('fertiForm'));
    const resultDiv = document.getElementById('result');
    
    // Get CSRF token from the hidden form field
    const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;

    fetch('/crop-yield/', {
        method: 'POST',
        headers: {
            'X-CSRFToken': csrfToken, // Ensure CSRF token is included
        },
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            console.log("Response Data:", data);

            // Update the result div with the prediction result
            resultDiv.innerHTML = `<p><strong>Estimated Production:</strong> ${data.recommended_production.toFixed(2)} units</p>`;
            resultDiv.style.color = "green"; // Styling feedback
        })
        .catch(error => {
            console.error('Error:', error);
            resultDiv.innerHTML = '<p style="color:red;">An error occurred. Please try again.</p>';
        });
});
