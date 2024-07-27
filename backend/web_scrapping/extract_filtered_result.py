import os
import json
import re

def convert_string(input_string):
    # Convert the string to lowercase
    lower_string = input_string.lower()
    # Replace ' - ' with '-'
    hyphen_string = lower_string.replace(' - ', '-')
    # Remove special characters except hyphens and apostrophes
    cleaned_string = hyphen_string.replace("'",'')
    # Replace spaces with hyphens
    final_string = cleaned_string.replace(' ', '-')
    # Append '-delivery' to the end of the string
    result = final_string + '-delivery'
    return result

# Specify the folder containing the JSON files
folder_path = 'backend/web_scrapping/responses'

# Initialize an empty dictionary to store the results
results = {}

# Loop through each file in the folder
for filename in os.listdir(folder_path):
    if filename.endswith('.json'):
        # Construct the full file path
        file_path = os.path.join(folder_path, filename)
        
        try:
            # Open and read the JSON file
            with open(file_path, 'r') as file:
                data = json.load(file)
                
                # Print the keys of the JSON dictionary
                print(f"Keys in {filename}: {data.keys()}")
                
                # Check if 'merchant' key exists in the JSON data
                if 'merchant' in data:
                    name = data['merchant'].get('name', 'N/A')  # Provide a default value if 'name' is missing
                    photo_href = data['merchant'].get('photoHref', 'N/A')  # Provide a default value if 'photoHref' is missing
                    cuisine = data['merchant'].get('cuisine', 'N/A')
                    eta = data['merchant'].get('ETA', 'N/A')
                    distance_in_km = data['merchant'].get('distanceInKm', 'N/A')
                    rating = data['merchant'].get('rating','N/A')
                    id = data['merchant'].get('ID','N/A')
                    name_converted = convert_string(name)
                    buy_link = 'https://food.grab.com/id/en/restaurant/' + name_converted +'/'+ id + '?'
                    
                    
                    # Add the extracted information to the results dictionary
                    results[name] = {"photo_href": photo_href,
                                     "cuisine": cuisine,
                                     "eta": eta,
                                     "distance_in_km": distance_in_km,
                                     "rating": rating,
                                     "buy_link": buy_link
                    }
                else:
                    print(f"'merchant' key not found in file: {filename}")
        except json.JSONDecodeError:
            print(f"Error decoding JSON in file: {filename}")
        except Exception as e:
            print(f"An error occurred while processing file {filename}: {e}")

# Convert the results dictionary into a JSON file
output_file_path = 'backend/web_scrapping/filteredData.json'
with open(output_file_path, 'w') as json_file:
    json.dump(results, json_file, indent=4)

# Print confirmation message
print(f"Results saved to {output_file_path}")
