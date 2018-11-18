# -*- coding: utf-8 -*-

from elasticsearch import Elasticsearch
from elasticsearch.helpers import bulk
import json

def set_data(input_file, index_name, doc_type_name):
    for line in open(input_file):
        print(line)
        yield {
            "_index": index_name,
            "_type" : doc_type_name,
            "_source" : line
        }

def load(es, input_file, index_name, doc_type_name):
    success, _ = bulk(es, set_data(input_file, index_name, doc_type_name))

def write_input(out_file, cat):
    f = open(out_file, "a+")
    o = []
    if cat == 'hotel':
        h1 = {
            "image-preview": "https://a0.muscache.com/im/pictures/c886d45a-57be-4a72-912b-bbae26b4c0ed.jpg?aki_policy=small",
            "image-left": "https://a0.muscache.com/im/pictures/c886d45a-57be-4a72-912b-bbae26b4c0ed.jpg?aki_policy=x_medium",
            "image-middle": "https://a0.muscache.com/im/pictures/c886d45a-57be-4a72-912b-bbae26b4c0ed.jpg?aki_policy=x_medium",
            "image-right": "https://a0.muscache.com/im/pictures/37ea7788-0114-4fee-9332-b1aa8b06fba8.jpg?aki_policy=x_medium",
            "name": "Sunset Studio Hotel",
            "location": "El Monte, California",
            "rating": "9.3",
            "numVotes": "321",
            "description": "The studio is in a quiet, suburban neighborhood walking distance from many local restaurants and markets. Because it's near the freeway, it's also an easy drive to most theme parks and Santa Monica.",
            "qualities": [
                "Wifi",
                "TV",
                "Bathroom Essentials",
                "Bathroom Comfort",
                "Breakfast",
                "Check in 11AM",
                "Washer and Dryer",
                "Room-darkening Shades"
            ],
            "recommendations": [
                {
                    "user": 23421653,
                    "userImage": "https://a0.muscache.com/im/pictures/user/565d6446-6c9d-484a-99c7-497ae19da58d.jpg?aki_policy=profile_x_medium",
                    "comment": "Space was great. A good location right by many food places. Inside looks exactly in the pictures great area in general! Would love to go again.",
                    "date": "2015/09/02",
                    "rating": 9.1
                },
                {
                    "user": 2356457,
                    "userImage": "https://a0.muscache.com/im/pictures/ff51f493-5e90-4985-be73-b3db557b0ad3.jpg?aki_policy=profile_x_medium",
                    "comment": "This was a great location! We wanted to be in one place for our entire visit to LA and Disneyland. We didn’t drive more than 30 mins to get to anywhere we wanted to go. David’s place was as I expected it based on the photos and description. I would definitely stay here again.",
                    "date": "2017/03/05",
                    "rating": 8.1
                },
                {
                    "user": 23164587,
                    "userImage": "https://a0.muscache.com/im/users/36518982/profile_pic/1437872508/original.jpg?aki_policy=profile_x_medium",
                    "comment": "David's place is in a humble neighborhood, we felt very safe there. There is plenty of parking and the place was very clean. We stayed during a time of the year where it was not too hot, but even if it does get hot I would imagine that the AC in the room is decent. We would definitely stay here again. Thanks David!",
                    "date": "2014/03/02",
                    "rating": 9.8
                },
                {
                    "user": 45756634,
                    "userImage": "https://a0.muscache.com/im/pictures/user/565d6446-6c9d-484a-99c7-497ae19da58d.jpg?aki_policy=profile_x_medium",
                    "comment": "Great place to stay for visiting LA. Comfortable and you can get there in 30min-1h travel from places such as Santa Monica.",
                    "date": "2018/01/01",
                    "rating": 7.9
                },
            ],
            "rooms": [
                {
                    "availability": "free"
                },
                {
                    "availability": "not free"
                },
                {
                    "availability": "free"
                }
            ]
 
        }
        h2 = {
            "image-preview": "https://a0.muscache.com/im/pictures/9c622bf9-e82a-4614-9d08-336617d12450.jpg?aki_policy=small",
            "image-left": "",
            "image-middle": "",
            "image-right": "",
            "name": "Logan Square Resort",
            "location": "Chicago, Illinois",
            "rating": "8.5",
            "numVotes": "845",
            "description": "Stroll along the Bloomingdale Trail minutes away from this renovated and designer space featuring an open-concept kitchen with snack bar, plush furnishings, and a blend of contemporary and mid-century modern decor. Enjoy privacy and a central locale.",
            "qualities": [],
            "recommendations": [],
            "rooms": []
        }
        h3 = {
            "image-preview": "https://a0.muscache.com/im/pictures/15273266/24e0c106_original.jpg?aki_policy=small",
            "image-left": "",
            "image-middle": "",
            "image-right": "",
            "name": "I Sette Coni",
            "location": "Ostuni, Brindisi, Italy",
            "rating": "8.7",
            "numVotes": "247",
            "description": "It's the perfect place if you like nature. You can stay under an olive tree reading a good book, you can have a walk in the small country streets or go to the nearest beaches. You can even easily visit any of the sights in Apulia such as the caves of Castellana, the trulli of Alberobello, the baroque cities of Lecce and Martina Franca, the excavations of Egnazia, the zoosafari of Fasano, Castel del Monte with Frederick's castle, Grottaglie famous for its ceramics, Taranto, Brindisi and Lecce museums.",
            "qualities": [],
            "recommendations": [],
            "rooms": []
        }
        h4 = {
            "image-preview": "https://a0.muscache.com/im/pictures/52149945/33130c63_original.jpg?aki_policy=small",
            "image-left": "",
            "image-middle": "",
            "image-right": "",
            "name": "Pristine Valley Edge",
            "location": "Melbourne, Australia",
            "rating": "9.5",
            "numVotes": "1,878",
            "description": "Selected as one of Airbnb's top picks, Sunrise house has been delighting its guests and celebrities from all over. In such a tranquil setting, often with a gentle breeze blowing, our guests are soothed into sitting back, relaxing and marveling.",
            "qualities": [],
            "recommendations": [],
            "rooms": []
        }
        h5 = {
            "image-preview": "https://a0.muscache.com/im/pictures/174f36a7-8186-4db4-aaa2-11b6f6b11832.jpg?aki_policy=small",
            "image-left": "",
            "image-middle": "",
            "image-right": "",
            "name": "Hideout Bali",
            "location": "Bali, Indonesia",
            "rating": "7.5",
            "numVotes": "675",
            "description": "Hideout is a unique eco stay for adventurous travelers hidden in mountains of Gunung Agung volcano - far from the city life. All-bamboo house is situated at beautiful riverside among rice fields. Get off the grid and experience authentic life of Balinese village.",
            "qualities": [],
            "recommendations": [],
            "rooms": []
        }
        o.append(h1)
        o.append(h2)
        o.append(h3)
        o.append(h4)
        o.append(h5)

        for item in o:
            json.dump(item, f)
            f.write('\n')

    elif cat == 'experience':
        restaurant
    elif cat == 'restaurant':
        res
    else:
        return "Not supported"

if __name__ == '__main__':
    es = Elasticsearch(hosts=["127.0.0.1:9200"], timeout=5000)

    write_input('hotel_load.txt', 'hotel')
    # write_input('experience_load.txt', 'experience')
    # write_input('restaurant_load.txt', 'restaurant')

    load(es, 'hotel_load.txt', 'hotels', 'hotel')
    # load(es, 'experience_load.txt', 'experiences', 'experience')
    # load(es, 'restaurant_load.txt', 'restaurants', 'restaurant')