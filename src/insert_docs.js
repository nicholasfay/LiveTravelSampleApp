const mongoose = require('mongoose');

//DB setup
// mongoose.connect('mongodb://localhost:27017/auth', function (err, db) {
//     if (err) throw err;
//     var o = [{
//         "image-preview": "https://a0.muscache.com/im/pictures/c886d45a-57be-4a72-912b-bbae26b4c0ed.jpg?aki_policy=small",
//         "image-left": "https://a0.muscache.com/im/pictures/c886d45a-57be-4a72-912b-bbae26b4c0ed.jpg?aki_policy=x_medium",
//         "image-middle": "https://a0.muscache.com/im/pictures/c886d45a-57be-4a72-912b-bbae26b4c0ed.jpg?aki_policy=x_medium",
//         "image-right": "https://a0.muscache.com/im/pictures/37ea7788-0114-4fee-9332-b1aa8b06fba8.jpg?aki_policy=x_medium",
//         "name": "Sunset Studio Hotel",
//         "location": "El Monte, California",
//         "rating": "9.3",
//         "numVotes": "321",
//         "description": "The studio is in a quiet, suburban neighborhood walking distance from many local restaurants and markets. Because it's near the freeway, it's also an easy drive to most theme parks and Santa Monica.",
//         "qualities": [
//             "Wifi",
//             "TV",
//             "Bathroom Essentials",
//             "Bathroom Comfort",
//             "Breakfast",
//             "Check in 11AM",
//             "Washer and Dryer",
//             "Room-darkening Shades"
//         ],
//         "recommendations": [
//             {
//                 "user": 23421653,
//                 "userImage": "https://a0.muscache.com/im/pictures/user/565d6446-6c9d-484a-99c7-497ae19da58d.jpg?aki_policy=profile_x_medium",
//                 "comment": "Space was great. A good location right by many food places. Inside looks exactly in the pictures great area in general! Would love to go again.",
//                 "date": "2015/09/02",
//                 "rating": 9.1
//             },
//             {
//                 "user": 2356457,
//                 "userImage": "https://a0.muscache.com/im/pictures/ff51f493-5e90-4985-be73-b3db557b0ad3.jpg?aki_policy=profile_x_medium",
//                 "comment": "This was a great location! We wanted to be in one place for our entire visit to LA and Disneyland. We didn’t drive more than 30 mins to get to anywhere we wanted to go. David’s place was as I expected it based on the photos and description. I would definitely stay here again.",
//                 "date": "2017/03/05",
//                 "rating": 8.1
//             },
//             {
//                 "user": 23164587,
//                 "userImage": "https://a0.muscache.com/im/users/36518982/profile_pic/1437872508/original.jpg?aki_policy=profile_x_medium",
//                 "comment": "David's place is in a humble neighborhood, we felt very safe there. There is plenty of parking and the place was very clean. We stayed during a time of the year where it was not too hot, but even if it does get hot I would imagine that the AC in the room is decent. We would definitely stay here again. Thanks David!",
//                 "date": "2014/03/02",
//                 "rating": 9.8
//             },
//             {
//                 "user": 45756634,
//                 "userImage": "https://a0.muscache.com/im/pictures/user/565d6446-6c9d-484a-99c7-497ae19da58d.jpg?aki_policy=profile_x_medium",
//                 "comment": "Great place to stay for visiting LA. Comfortable and you can get there in 30min-1h travel from places such as Santa Monica.",
//                 "date": "2018/01/01",
//                 "rating": 7.9
//             },
//         ],
//         "rooms": [
//             {
//                 "availability": "free"
//             },
//             {
//                 "availability": "not free"
//             },
//             {
//                 "availability": "free"
//             }
//         ]

//     },
//     {
//         "image-preview": "https://a0.muscache.com/im/pictures/9c622bf9-e82a-4614-9d08-336617d12450.jpg?aki_policy=small",
//         "image-left": "",
//         "image-middle": "",
//         "image-right": "",
//         "name": "Logan Square Resort",
//         "location": "Chicago, Illinois",
//         "rating": "8.5",
//         "numVotes": "845",
//         "description": "Stroll along the Bloomingdale Trail minutes away from this renovated and designer space featuring an open-concept kitchen with snack bar, plush furnishings, and a blend of contemporary and mid-century modern decor. Enjoy privacy and a central locale.",
//         "qualities": [],
//         "recommendations": [],
//         "rooms": []
//     },
//     {
//         "image-preview": "https://a0.muscache.com/im/pictures/15273266/24e0c106_original.jpg?aki_policy=small",
//         "image-left": "",
//         "image-middle": "",
//         "image-right": "",
//         "name": "I Sette Coni",
//         "location": "Ostuni, Brindisi, Italy",
//         "rating": "8.7",
//         "numVotes": "247",
//         "description": "It's the perfect place if you like nature. You can stay under an olive tree reading a good book, you can have a walk in the small country streets or go to the nearest beaches. You can even easily visit any of the sights in Apulia such as the caves of Castellana, the trulli of Alberobello, the baroque cities of Lecce and Martina Franca, the excavations of Egnazia, the zoosafari of Fasano, Castel del Monte with Frederick's castle, Grottaglie famous for its ceramics, Taranto, Brindisi and Lecce museums.",
//         "qualities": [],
//         "recommendations": [],
//         "rooms": []
//     },
//     {
//         "image-preview": "https://a0.muscache.com/im/pictures/52149945/33130c63_original.jpg?aki_policy=small",
//         "image-left": "",
//         "image-middle": "",
//         "image-right": "",
//         "name": "Pristine Valley Edge",
//         "location": "Melbourne, Australia",
//         "rating": "9.5",
//         "numVotes": "1,878",
//         "description": "Selected as one of Airbnb's top picks, Sunrise house has been delighting its guests and celebrities from all over. In such a tranquil setting, often with a gentle breeze blowing, our guests are soothed into sitting back, relaxing and marveling.",
//         "qualities": [],
//         "recommendations": [],
//         "rooms": []
//     },
//     {
//         "image-preview": "https://a0.muscache.com/im/pictures/174f36a7-8186-4db4-aaa2-11b6f6b11832.jpg?aki_policy=small",
//         "image-left": "",
//         "image-middle": "",
//         "image-right": "",
//         "name": "Hideout Bali",
//         "location": "Bali, Indonesia",
//         "rating": "7.5",
//         "numVotes": "675",
//         "description": "Hideout is a unique eco stay for adventurous travelers hidden in mountains of Gunung Agung volcano - far from the city life. All-bamboo house is situated at beautiful riverside among rice fields. Get off the grid and experience authentic life of Balinese village.",
//         "qualities": [],
//         "recommendations": [],
//         "rooms": []
//     }]

//     db.collection('hotels').insertMany(o, function (err, res) {
//         if (err) throw err;
//         console.log("Number of documents inserted: " + res.insertedCount)
//         db.close();
//     })
// });

// mongoose.connect('mongodb://localhost:27017/auth', function (err, db) {
//     if (err) throw err;
//     var o = [
//         {
//             "image-preview": "https://a0.muscache.com/im/pictures/ae6c9abe-19c3-4966-96c4-0b730632e3ab.jpg?aki_policy=large",
//             "image-left": "https://a0.muscache.com/im/pictures/ae6c9abe-19c3-4966-96c4-0b730632e3ab.jpg?aki_policy=large",
//             "image-middle": "",
//             "image-right": "",
//             "name": "#1 HOLLYWOOD SIGN TOUR - BEST IN LA!",
//             "location": "Los Angeles",
//             "rating": "4.98",
//             "numVotes": "2395",
//             "description": "We'll walk to the TOP of the HOLLYWOOD SIGN while we entertain you with fun stories about the most famous sign in the world, the City of Angels, and its celebrity residents throughout history! We'll show you how to take once in a lifetime photos in the absolute best locations throughout Griffith Park including a stunning panorama from above with the sign in the background and Los Angeles below.",
//             "recommendations": [
//                 {
//                     "user": 122786786,
//                     "userImage": "https://a0.muscache.com/im/pictures/61eb8b32-db77-48a5-8f6e-14e10ffe6fcb.jpg?aki_policy=profile_x_medium",
//                     "comment": "Tom was our guide and I am so glad I went with this tour vs going alone. Tom brought us water, apples and granola bars which was really nice. The granola bars were really good! He was warm and welcoming and told us stories along the walk. I would definitely reccomend!",
//                     "date": "2018/11/17",
//                     "rating": 4.8
//                 },
//                 {
//                     "user": 427886786,
//                     "userImage": "https://a0.muscache.com/im/pictures/ddf718f9-5e9e-495d-8f1c-0e446b5a22f8.jpg?aki_policy=profile_x_medium",
//                     "comment": "What a fantastic only in LA experience. Really, nothing beats a glorious sunny morning hike - add in fabulous vistas & fun companions - win, win. Our guides were incredibly accommodating - showing up with water, snacks, sunblock & hats - prepping us for a fun adventure. Their smart & witty banter & valuable local intel made for a super entertaining walk. Highly recommended this experience - it will make your visit to LA very memorable.",
//                     "date": "2018/11/16",
//                     "rating": 4.7
//                 },
//                 {
//                     "user": 105378,
//                     "userImage": "https://a0.muscache.com/im/pictures/user/379924e1-d9e3-4538-8092-60a458a25f32.jpg?aki_policy=profile_x_medium",
//                     "comment": "First time to Cali and it was an amazing experience! Must do! Very informative and lots of laughs (: enjoyed our hiking group! It’s crazy how far people actually travel to come to Hollywood!",
//                     "date": "2018/11/15",
//                     "rating": 5.0
//                 },
//                 {
//                     "user": 104534542,
//                     "userImage": "https://a0.muscache.com/im/pictures/user/a7bfe672-332a-4b96-b360-a4e300a62049.jpg?aki_policy=profile_x_medium",
//                     "comment": "Tom is incredibly knowledgeable about the history behind the Hollywood sign, and shares many stories about it. He also knows exactly where to stop for pictures, and the perfect angles to get them. While you could walk up on your own, the group experience is well worth it.",
//                     "date": "2018/11/14",
//                     "rating": 4.9
//                 },
//             ],
//             "provided": [
//                 "Water and Beverages",
//                 "Photo Ops",
//                 "Picnic Area",
//                 "Campfire"
//             ],
//             "bring": [
//                 "Camera",
//                 "Please wear long pants",
//                 "Hiking boots or sneakers",
//                 "NO down/fluffy jackets"
//             ]
//         },
//         {
//             "image-preview": "https://a0.muscache.com/im/pictures/a7e59c75-a34d-4964-81e4-894e9b6afa66.jpg?aki_policy=large",
//             "image-left": "",
//             "image-middle": "",
//             "image-right": "",
//             "name": "Wolf Encounter",
//             "location": "Anacortes, WA",
//             "rating": "4.96",
//             "numVotes": "1500",
//             "description": "Meet one of the largest wolf packs in the Pacific Northwest! Just 1.5 hours North of Seattle, our wildlife refuge is nestled in 10 forested acres. We will introduce you to our mission and history with wolves. Then, meet our wolf ambassadors, Max and Kakoa, who will escort us through sun-dappled trails. Old-growth trees tower overhead; the wolves lead us up a moderate hiking path while our guide talks about wolves' habitat, behavior, & the myths and misconceptions surrounding this apex predator. At the top of the trail, we will pause for photos and rest with the wolves. When we return to the refuge, you will see a few more beautiful animals, including cougars, foxes and more of our wolf pack! You will be able to touch, photograph and even howl with wolves in this once-in-a-lifetime setting!",
//             "recommendations": [],
//             "provided": [
//             ],
//             "bring": [
//             ]
//         },
//         {
//             "image-preview": "https://a0.muscache.com/im/pictures/aa08e89f-3eea-43a7-a2af-0a8c37453e1c.jpg?aki_policy=large",
//             "image-left": "",
//             "image-middle": "",
//             "image-right": "",
//             "name": "Exploring Sicily's Mount Etna Volcano",
//             "location": "Sicily, Italy",
//             "rating": "4.96",
//             "numVotes": "247",
//             "description": "The tour starts with an easy trek on one of the most beautiful routes of “Parco dell’Etna”, where you will discover the colors and natural beauties of Europe's most active volcano (AWAY FROM CROWDED TOURIST AREAS). You will enjoy the spectacular lunar landscapes that Etna offers, between ancient and new lava flows, across pine, chestnuts and birch forests. Total roundtrip duration of this segment about 2-3 hours, difficulty and distance available to change by arrangement with the guide (maximum altitude: 2200 meters).",
//             "recommendations": [],
//             "provided": [
//             ],
//             "bring": [
//             ]
//         },
//         {
//             "image-preview": "https://a0.muscache.com/im/pictures/e7a3c75e-658f-48f9-b62c-7f63e98385a3.jpg?aki_policy=large",
//             "image-left": "",
//             "image-middle": "",
//             "image-right": "",
//             "name": "Buenos Aires Like a Local",
//             "location": "Palermos Soho",
//             "rating": "4.89",
//             "numVotes": "354",
//             "description": "You will discover the \"El Rosedal\" of Palermo and \"Los lagos del Golf\" with beautiful parks and landscapes. Then we will cross the Planetarium and continue towards \"Costanera Norte\", where we will have a great view of the \"La Plata River\" and the classic waterfront to eat choripan. Then we will continue pedalling till the \"Park of Memory\", it was built in order to remember the victims of state terrorism. It is a place that inspires peace and has a very nice view of the \"Río de la Plata\". followed by \"Ciudad Universitaria\".",
//             "recommendations": [],
//             "provided": [
//             ],
//             "bring": [
//             ]
//         },
//         {
//             "image-preview": "https://a0.muscache.com/im/pictures/55c7aa1a-2d34-4c3d-b439-66b03ceb81d2.jpg?aki_policy=large",
//             "image-left": "",
//             "image-middle": "",
//             "image-right": "",
//             "name": "Hike Runyon Canyon with a rescue dog",
//             "location": "Los Angeles, California",
//             "rating": "4.95",
//             "numVotes": "998",
//             "description": "We'll set off from West Hollywood and hike up Runyon Canyon with new friends: a jovial pack of rescue dogs. Along with exercising and socializing these dogs, you'll help us take photos of them to publicize their cases. As we hike, we'll photograph the pack in Hollywood-centric locations. Your photos will be used to help bring in donations for the pups' care and generate adoption interest. Along the way we will have great views, including of the Hollywood sign, and perhaps a celebrity sighting! Note that your payment for this Experience is a donation to the Animal Welfare Non-Profit, helping pay for the care of the very dogs you will be walking! ",
//             "recommendations": [],
//             "provided": [
//             ],
//             "bring": [
//             ]
//         }]

//     db.collection('experiences').insertMany(o, function (err, res) {
//         if (err) throw err;
//         console.log("Number of documents inserted: " + res.insertedCount)
//         db.close();
//     })
// });

mongoose.connect('mongodb://localhost:27017/auth', function (err, db) {
    if (err) throw err;
    var o = [
        {
            "image-preview": "https://a0.muscache.com/im/pictures/2d97e4a5-24b4-43cc-8885-dd340981cd67.jpg?aki_policy=large",
            "image-left": "https://a0.muscache.com/im/pictures/2d97e4a5-24b4-43cc-8885-dd340981cd67.jpg?aki_policy=large",
            "image-middle": "https://a0.muscache.com/im/pictures/732d07c5-5f72-44df-bf34-5e24772efe59.jpg?aki_policy=x_large",
            "image-right": "https://a0.muscache.com/im/pictures/32664004-8064-46f6-acaf-ae8f07594843.jpg?aki_policy=x_large",
            "name": "Eataly NYC Flatiron",
            "location": "Manhattan, NY",
            "rating": "9.2",
            "numVotes": "376",
            "description": "This is a world Italian market started renowned Chef Mario Batali. Shop for fresh meet fish, pasta and other rare Italian gods and bring back to the apartkemt. Or you can pull up a chair to any one of the bars or restaturants within the market and let the professionals do the cooking for you!",
            "recommendations": [
                {
                    "user": 742867876,
                    "userImage": "https://a0.muscache.com/im/pictures/user/4003704c-ef59-4e97-96bd-963a8aa482cf.jpg?aki_policy=profile_small",
                    "comment": "An Italian indoor marker with tons of restaurants and foods",
                    "date": "2018/11/17",
                    "rating": 9.9
                },
                {
                    "user": 13548376,
                    "userImage": "https://a0.muscache.com/im/pictures/user/0c8f3ca4-7f53-456f-af95-645a9dd8e8ad.jpg?aki_policy=profile_small",
                    "comment": "Italian marketplace comprising a variety of restaurants, food and beverage counters, bakery, retail items, and a cooking school.",
                    "date": "2018/11/16",
                    "rating": 9.7
                },
                {
                    "user": 43864287,
                    "userImage": "https://a0.muscache.com/im/pictures/user/7e36fb54-616e-45d1-891d-eafc9ff4155c.jpg?aki_policy=profile_small",
                    "comment": "So this is a bit of a mix between restaurant and high-end supermarket. The building has several Italian restaurants specialised in different food types (think fish, steak, pasta, etc.) But the main attraction is the rooftop restaurant and bar which is great during the summer. Try the Aperol Spritz!",
                    "date": "2018/11/15",
                    "rating": 9.5
                },
                {
                    "user": 12788764,
                    "userImage": "https://a0.muscache.com/im/pictures/user/c404837c-c50d-4d28-8e5f-369921ee7ca5.jpg?aki_policy=profile_small",
                    "comment": "Big market with all imported Italian food and drink. There's a great and not-too-expensive restaurant in the back on the first floor (pasta!) and a rooftop bar and restaurant.",
                    "date": "2018/11/14",
                    "rating": 9.6
                },
            ]
        },
        {
            "image-preview": "https://a0.muscache.com/im/pictures/a9ca5bfb-d001-4d49-a782-2edd768b0148.jpg?aki_policy=large",
            "image-left": "",
            "image-middle": "",
            "image-right": "",
            "name": "L&E Oyster Bar",
            "location": "Los Angeles, CA",
            "rating": "8.7",
            "numVotes": "1547",
            "description": "Chef Spencer Bezaire’s seasonal, seafood driven menu has been a local favorite since L&E opened in 2012. His close relationships with oyster farmers from the East and West coasts means guests can enjoy the freshest, most coveted oysters in Los Angeles anytime of the year, both upstairs at the bar or downstairs in the restaurant. The wine program is on point, too — because what better to pair with oysters?",
            "recommendations": [],
        },
        {
            "image-preview": "https://a0.muscache.com/im/pictures/497a262d-bccd-4bda-a6be-4224fa11c44b.jpg?aki_policy=large",
            "image-left": "",
            "image-middle": "",
            "image-right": "",
            "name": "The Red Hen",
            "location": "Washington D.C.",
            "rating": "9.5",
            "numVotes": "210",
            "description": "This trattoria is a favorite amongst locals for good reason. The food, from chef Michael Friedman, is ever-consistent and always crave-worthy — particularly the pastas. The modern, rustic space is alluring yet cozy. And then there's the bar, which stays crowded due to its compelling wine list and nice cocktails. The Red Hen is a steadfast neighborhood joint, always deserving of a visit.",
            "recommendations": [],
        },
        {
            "image-preview": "https://a0.muscache.com/im/pictures/96e0336f-222f-40db-9979-db8842424e89.jpg?aki_policy=large",
            "image-left": "",
            "image-middle": "",
            "image-right": "",
            "name": "Volunteer Park Cafe",
            "location": "Seattle, WA",
            "rating": "9.2",
            "numVotes": "154",
            "description": "Opened in 2007 and located among the elegant homes of Seattle’s North Capitol Hill, Volunteer Park Cafe (VPC) is chef Ericka Burke’s quintessential neighborhood-meeting place. There are mismatched vintage chairs, throw pillows tossed along banquettes, and a communal table running the length of the inviting sunlit room. The food is home-style goodness — house-made pastries (savory and sweet), and a selection of fresh salads, soups, and sandwiches. As the lights dim and the candles are lit, table service begins and rustic pizzas make their way around the dining room, alongside ever-changing seasonal offerings like braised beef brisket with creamy polenta and greens, pan-seared halibut, or the heavenly pot pie. VPC also offers a generous selection of boutique wines by the glass and bottles of wine can be enjoyed at the cafe or taken to go.",
            "recommendations": [],
        },
        {
            "image-preview": "https://a0.muscache.com/im/pictures/43f11ec7-3f56-4e1f-9ed9-7b479fc620f3.jpg?aki_policy=large",
            "image-left": "",
            "image-middle": "",
            "image-right": "",
            "name": "Launderette",
            "location": "Austin, TX",
            "rating": "9.8",
            "numVotes": "1478",
            "description": "Chefs Rene Ortiz and Laura Sawicki are the inimitable team behind Launderette, an East Austin café located in a converted laundromat in Holly. Throughout weekend brunch, weekday lunch and dinner seven days a week, Ortiz delivers on savory dishes, utilizing a loosely Mediterranean flavor palette, while Sawicki covers all things sweet — from morning zucchini bread to seasonal ice creams and sorbets later on.",
            "recommendations": [],
        }]

    db.collection('restaurants').insertMany(o, function (err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount)
        db.close();
    })
});