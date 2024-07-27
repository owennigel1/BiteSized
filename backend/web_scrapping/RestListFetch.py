import json

# Specify the path to your JSON file
json_file_path = 'backend/web_scrapping/resultJson.json'
output_file_path = 'backend/web_scrapping/combined_list.txt'

try:
    # Read the JSON content
    with open(json_file_path, 'r', encoding='utf-8') as json_file:
        data = json.load(json_file)

    # Extract data from "recommendedMerchants" and "restaurantList"
    recommended_merchants = data.get("props", {}).get("initialReduxState", {}).get("pageRestaurantsV2", {}).get("collections", {}).get("recommendedMerchants", {})
    restaurant_list = data.get("props", {}).get("initialReduxState", {}).get("pageRestaurantsV2", {}).get("collections", {}).get("restaurantList", {})

    # Combine both lists into a single list
    combined_list = {
        "getRecommendedMerchantsV2/countryCode=ID&latitude=-6.1767352&longitude=106.826504": recommended_merchants,
        "getRestaurantsV2/countryCode=ID&latlng=-6.1767352%2C106.826504": restaurant_list
    }

    # Print or process the combined list as needed
    print("Combined List:", combined_list)

    # Store the combined list in a text file
    with open(output_file_path, 'w', encoding='utf-8') as output_file:
        output_file.write(json.dumps(combined_list, indent=2))

    print(f"Combined list stored in '{output_file_path}'")

except json.JSONDecodeError as e:
    print(f"Error decoding JSON: {e}")

except FileNotFoundError:
    print(f"Error: File not found at path '{json_file_path}'")