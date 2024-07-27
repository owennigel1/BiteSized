import replicate
import json

# Define the path to the JSON file
file_path = 'backend/web_scrapping/filteredData.json'

# Initialize an empty list to store the photo_href values
result = {}

# Read and parse the JSON file
with open(file_path, 'r') as file:
    data = json.load(file)
    count=0
    for name, restaurant_data in data.items():
        if count>2: #limiting number of AI video being created to 12 for budget cost-saving purposes (one API call costs $0.24)
            break
        count+=1
        if 'photo_href' in restaurant_data:
            output = replicate.run(
                "ali-vilab/i2vgen-xl:5821a338d00033abaaba89080a17eb8783d9a17ed710a6b4246a18e0900ccad4",
                input={
                    "image": restaurant_data['photo_href'],
                    "prompt": "advertisement food attractive for buyers",
                    "max_frames": 16,
                    "guidance_scale": 9,
                    "num_inference_steps": 50
                }
            )
            result[name]=output
            break


# Convert the results dictionary into a JSON file
output_file_path = 'backend/ai_videos_link.json'
with open(output_file_path, 'w') as json_file:
    json.dump(result, json_file, indent=4)

# Print confirmation message
print(f"Results saved to {output_file_path}")