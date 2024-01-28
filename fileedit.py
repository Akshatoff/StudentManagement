import json

# Path to the JSON file
json_file_path = "./data.json"



# Data to add to the JSON file

num = int(input("How many students do you want to add"))
new_data_list = []

while num > 0:
    name = input("Enter the name of the student")
    age = int(input("Enter the age of the student"))
    grade = int(input("Enter the class of the student"))

    new_data = {
        "name": name,
        "age": age,
        "class": grade
    }

    new_data_list.append(new_data)
    num = num - 1

try:
    # Read the existing data from the JSON file
    with open(json_file_path, 'r') as file:
        existing_data = json.load(file)

    # Append the new data to the existing list
    existing_data["student"].extend(new_data_list)

    # Write the updated data back to the JSON file
    with open(json_file_path, 'w') as file:
        json.dump(existing_data, file, indent=2)

    print("Data added successfully.")

except FileNotFoundError:
    print(f"Error: File '{json_file_path}' not found.")

except json.JSONDecodeError:
    print(f"Error: Invalid JSON format in '{json_file_path}'.")

except Exception as e:
    print(f"Error: {str(e)}")