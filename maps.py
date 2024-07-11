
import re
from locationsharinglib import Service

# Replace 'path/to/cookies.txt' with the actual path to your cookies.txt file
cookies_file = '/var/lib/burrito/maps/cookies.txt'
google_email = 'mastahnke@gmail.com'

# Create the service
service = Service(cookies_file=cookies_file, authenticating_account=google_email)

for person in service.get_all_people():
    # Exclude anybody not matching james
    if re.search(r'james', person.full_name, re.IGNORECASE):
        print(person.full_name  + " is approximately at " + person.address)
        lat = person.latitude
        lon = person.longitude
        print("https://www.google.com/maps?q=" + str(lat) + "," + str(lon))
