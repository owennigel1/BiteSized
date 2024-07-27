import replicate
import json
import random

# Define the path to the JSON file
file_path = 'backend/web_scrapping/filteredData.json'

# Initialize an empty list to store the photo_href values
result = {}

#make a funny prompt generator
def prompt_generator(name, restaurant_data):
    celebrity_names = ["Lebron James", "Deddy Corbuzier", "Michael Jordan", "Jennie Blackpink", "Taylor Swift", "Harry Potter"]
    funny_actions = ["surprised", "scared", "dancing", "jumping", "screaming", "excited", "amazed"]
    prompt = random.choice(celebrity_names) + ' eat ' + name + ' ' + restaurant_data["cuisine"] + ' ' + random.choice(funny_actions) + ' Indonesia '
    return prompt

# Read and parse the JSON file
with open(file_path, 'r') as file:
    data = json.load(file)
    count=0
    for name, restaurant_data in data.items():
        if count>11: #limiting number of AI video being created to 12 for budget cost-saving purposes (one API call costs $0.24)
            break
        count+=1
        prompt = prompt_generator(name, restaurant_data)
        print(prompt)
        output = replicate.run(
            "stability-ai/stable-diffusion:ac732df83cea7fff18b8472768c88ad041fa750ff7682a21affe81863cbe77e4",
            input={
                "width": 576,
                "height": 1024,
                "prompt": prompt,
                "scheduler": "K_EULER",
                "num_outputs": 1,
                "guidance_scale": 7.5,
                "num_inference_steps": 50
            }
        )
        result[name]=output


# Convert the results dictionary into a JSON file
output_file_path = 'backend/ai_videos_link.json'
with open(output_file_path, 'w') as json_file:
    json.dump(result, json_file, indent=4)

# Print confirmation message
print(f"Results saved to {output_file_path}")