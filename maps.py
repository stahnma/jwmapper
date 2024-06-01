import os
from locationsharinglib import Service

# Your google cookies.
# I've used the cookies.txt local extension in Chrome to export my cookies
cookies_file = './cookies.txt'

# The email of the Google account you use to sign in to Google Maps
#  not the person you're trying to locate
google_email = os.environ['GOOGLE_EMAIL']

# Create the service
service = Service(cookies_file=cookies_file, authenticating_account=google_email)

for person in service.get_all_people():
    print(person.full_name  + " is approximately at " + person.address)
    lat = person.latitude
    lon = person.longitude
    print("https://www.google.com/maps?q=" + str(lat) + "," + str(lon))
