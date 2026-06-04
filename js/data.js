/* ============================================================
   Dense Berries — site data
   IMG: image-role → optimized file. VILLAS: the four homes.
   Villa #1 (Dense Berries) is the real Airbnb listing; #2–4 are
   placeholders that reuse the same photography until updated.
   ============================================================ */

const IMG = {
  ext1:'images/web/ext1.jpg',   ext2:'images/web/ext2.jpg',   ext3:'images/web/ext3.jpg',   brand:'images/web/brand.jpg',
  pool:'images/web/pool.jpg',   pool2:'images/web/pool2.jpg', terrace:'images/web/terrace.jpg', terrace2:'images/web/terrace2.jpg',
  living:'images/web/living.jpg', living2:'images/web/living2.jpg', corridor:'images/web/corridor.jpg', corridor2:'images/web/corridor2.jpg',
  dining:'images/web/dining.jpg', bed1:'images/web/bed1.jpg', bed2:'images/web/bed2.jpg', bed3:'images/web/bed3.jpg', bed4:'images/web/bed4.jpg',
  bath1:'images/web/bath1.jpg', bath2:'images/web/bath2.jpg', bathblue:'images/web/bathblue.jpg', bathblue2:'images/web/bathblue2.jpg',
  kitchen:'images/web/kitchen.jpg', kitchen2:'images/web/kitchen2.jpg', mural:'images/web/mural.jpg', pergola:'images/web/pergola.jpg', work:'images/web/work.jpg'
};

const STD_AMENITIES = ["Private swimming pool","4 bedrooms · king beds","Fully-equipped kitchen","24-hour daily housekeeping","High-speed Wi-Fi & Ethernet","Air-conditioning & ceiling fans","Free parking on premises","Private fully-fenced garden & patio","Outdoor dining & sun loungers","Pets allowed"];

const VILLAS = [
 { slug:"dense-berries", name:"Dense Berries", area:"Mandrem", region:"North Goa", sample:false,
   airbnb:"https://www.airbnb.co.uk/rooms/1579112986124506306",
   coords:[15.6613, 73.7090],
   title:"Serene Portuguese Boho Villa · Private Pool · 4BHK",
   entire:"Entire home in Mandrem, India",
   tag:"A serene, brand-new Portuguese-boho standalone villa with a private pool — the flagship of the collection.",
   price:"Rates on request", beds:4, guests:8, baths:"4", pool:"Private",
   rating:5.0, reviews:1,
   host:{name:"Anika", months:"5 months hosting"}, coHost:"Sanyam",
   hero:"ext1",
   highlight:{title:"Dive right in", text:"This is one of the few places in the area with a private pool."},
   story:"A serene, brand-new Portuguese-style boho villa designed for slow living and effortless luxury. Bathed in whites, where light, arches and natural textures shape a calm living space — a warm family home away from home. Step outside to your private pool for peaceful mornings and golden sunsets. Perfect for couples, families or friends seeking privacy, calm and refined comfort in a truly beautiful space.",
   notes:"We built our villa with love and care, paying attention to every detail to create a warm and peaceful home. We are happy to host families, couples and guests travelling with children or friends who value tranquility and mutual respect. To maintain a pleasant and quiet atmosphere, our home is not suitable for parties or noisy events.",
   gallery:[["terrace2","Private pool & sundeck"],["living","Living room"],["bed1","Bedroom · king bed"],["bathblue","Azulejo bathroom"],["terrace","Covered verandah"],["dining","Dining room"]],
   sleeping:[["Bedroom 1","1 king bed"],["Bedroom 2","1 king bed"],["Bedroom 3","1 king bed"],["Bedroom 4","1 king bed"]],
   amenities:STD_AMENITIES,
   amenityGroups:{
     "Bathroom":["Hairdryer","Cleaning products","Shampoo","Conditioner","Body soap","Outdoor shower","Hot water"],
     "Bedroom and laundry":["Washing machine","Essentials","Hangers","Bed linen","Extra pillows and blankets","Iron","Clothes drying rack","Wardrobe & chest of drawers"],
     "Entertainment":["Ethernet connection","Sound system","Books and reading material"],
     "Heating and cooling":["Air conditioning","Ceiling fan"],
     "Home safety":["Exterior security cameras on property","Fire extinguisher","First aid kit"],
     "Internet and office":["Wifi","Dedicated workspace"],
     "Kitchen and dining":["Kitchen","Fridge","Microwave","Cooking basics","Crockery and cutlery","Mini fridge","Freezer","Cooker","Kettle","Coffee maker","Wine glasses","Toaster","Blender","Dining table","Coffee"],
     "Location features":["Private entrance","Launderette nearby"],
     "Outdoor":["Private patio or balcony","Private back garden – fully fenced","Outdoor furniture","Outdoor dining area","Sun loungers"],
     "Parking and facilities":["Free parking on premises","Free on-street parking","Pool"],
     "Services":["Pets allowed","Long-term stays allowed","Housekeeping available 24 hours","Host greets you"]
   },
   notIncluded:["TV","Free dryer","Smoke alarm","Carbon monoxide alarm","Heating"],
   houseRules:["Check-in after 2:00 pm","Checkout before 12:00 pm","8 guests maximum"],
   reviewsList:[{name:"Neville", date:"April 2026", text:"Great stay! We were 3 couples with some kids. Beds were comfortable. Host went out of her way to help us. Amenities were great. Pool was lovely. The helpers were also fantastic."}],
   locText:"Set in the laid-back village of Mandrem in North Goa — a short hop from Ashwem and Mandrem beaches, quiet and green, tucked behind its own fully-fenced garden for complete privacy." },

 { slug:"dense-vine", name:"Dense Vine", area:"Siolim", region:"North Goa", sample:true,
   coords:[15.6295, 73.7714],
   title:"Riverside Portuguese-Boho Villa · Private Pool · 4BHK",
   entire:"Entire home in Siolim, India",
   tag:"A serene Portuguese-boho villa with a private pool, wrapped in greenery near the Siolim–Chapora bend.",
   price:"Rates on request", beds:4, guests:8, baths:"4", pool:"Private",
   rating:4.92, reviews:18,
   host:{name:"Reuben", months:"2 years hosting"}, coHost:"Maria",
   hero:"ext3",
   highlight:{title:"Tucked by the river", text:"A shaded inner courtyard and long verandah, two minutes from the Chapora riverbank."},
   story:"A calm, vine-wrapped Portuguese-boho home set close to the Chapora river. Whitewashed walls and a shaded inner courtyard keep the house cool through the afternoon, while the long verandah is made for late, unhurried breakfasts. Four ensuite bedrooms open onto greenery, and the private pool catches the morning light — an intimate base for a family or a small group of friends.",
   notes:"We love hosting families and easy-going groups who value calm and the quiet rhythm of the river. To keep the neighbourhood peaceful, the home isn't suited to large parties or events.",
   gallery:[["terrace","Verandah"],["living2","Living room"],["bed2","Bedroom · king bed"],["bath2","Bathroom"],["pool2","Private pool"],["corridor2","Arched hall"]],
   sleeping:[["Bedroom 1","1 king bed"],["Bedroom 2","1 king bed"],["Bedroom 3","1 queen bed"],["Bedroom 4","2 single beds"]],
   amenities:["Private swimming pool","4 ensuite bedrooms","Riverside garden","Fully-equipped kitchen","Daily housekeeping","High-speed Wi-Fi & Ethernet","Air-conditioning & ceiling fans","Bicycles available","Outdoor dining & loungers","Pets allowed"],
   amenityGroups:{
     "Bathroom":["Hairdryer","Cleaning products","Shampoo","Conditioner","Body soap","Outdoor shower","Hot water"],
     "Bedroom and laundry":["Washing machine","Essentials","Hangers","Bed linen","Extra pillows and blankets","Iron","Clothes drying rack","Wardrobe & chest of drawers","Mosquito nets"],
     "Entertainment":["Sound system","Books and reading material","Board games"],
     "Heating and cooling":["Air conditioning","Ceiling fan"],
     "Home safety":["Exterior security cameras on property","Fire extinguisher","First aid kit","Smoke alarm"],
     "Internet and office":["Wifi","Ethernet connection","Dedicated workspace"],
     "Kitchen and dining":["Kitchen","Fridge","Microwave","Cooking basics","Crockery and cutlery","Freezer","Cooker","Kettle","Coffee maker","Toaster","Dining table"],
     "Location features":["Private entrance","Waterfront","Launderette nearby"],
     "Outdoor":["Private patio or balcony","Private garden – fully fenced","Outdoor furniture","Outdoor dining area","Sun loungers","Bicycles"],
     "Parking and facilities":["Free parking on premises","Free on-street parking","Private pool"],
     "Services":["Pets allowed","Long-term stays allowed","Daily housekeeping","Airport pickup on request","Host greets you"]
   },
   notIncluded:["TV","Heating"],
   houseRules:["Check-in after 2:00 pm","Checkout before 11:00 am","8 guests maximum","No parties or events"],
   reviewsList:[
     {name:"Aditi", date:"March 2026", text:"The riverside setting is magical — we had breakfast on the verandah every morning. Spotless home and the staff anticipated everything."},
     {name:"Tom", date:"January 2026", text:"Four big ensuite rooms, a lovely pool and total quiet. The bikes were a fun way to explore Siolim and Morjim."},
     {name:"Priya", date:"December 2025", text:"Reuben was a wonderful host. The courtyard stays cool all day. We'll definitely be back."}
   ],
   locText:"Siolim sits at the quiet end of North Goa, a short drive from Morjim and Ashwem beaches and the Chapora river — green, calm and well away from the crowds." },

 { slug:"dense-grove", name:"Dense Grove", area:"Moira", region:"North Goa", sample:true,
   coords:[15.5800, 73.8580],
   title:"Garden Portuguese-Boho Villa · Private Pool · 4BHK",
   entire:"Entire home in Moira, India",
   tag:"A serene Portuguese-boho villa with a private pool among the banyans of old Moira.",
   price:"Rates on request", beds:4, guests:8, baths:"4", pool:"Private",
   rating:4.88, reviews:11,
   host:{name:"Fatima", months:"3 years hosting"}, coHost:"Joseph",
   hero:"corridor2",
   highlight:{title:"Wrapped in green", text:"A mature garden of banyan and mango trees keeps the whole house in deep, cool shade."},
   story:"Built around a mature garden of banyan and mango, Dense Grove leans into shade and stillness. Wide eaves and deep verandahs look onto the heritage lanes of old Moira, while inside, lime-washed walls and high arches keep things serene through the heat of the day. The private pool catches the morning sun, and four ensuite bedrooms make it easy for a large family to spread out.",
   notes:"Moira is a quiet heritage village and we ask guests to help us keep it that way — the home is perfect for families and relaxed groups, but not for parties or events.",
   gallery:[["pool2","Private pool"],["bed3","Bedroom · king bed"],["bath1","Bathroom"],["kitchen","Kitchen"],["living","Living area"],["terrace","Verandah"]],
   sleeping:[["Bedroom 1","1 king bed"],["Bedroom 2","1 king bed"],["Bedroom 3","1 king bed"],["Bedroom 4","1 queen + 1 single bed"]],
   amenities:["Private swimming pool","4 ensuite bedrooms","Mature shaded garden","Chef's kitchen","Daily housekeeping","High-speed Wi-Fi & Ethernet","Air-conditioning & ceiling fans","Deep verandahs","Free parking on premises","Pets allowed"],
   amenityGroups:{
     "Bathroom":["Hairdryer","Cleaning products","Shampoo","Conditioner","Body soap","Hot water"],
     "Bedroom and laundry":["Washing machine","Essentials","Hangers","Bed linen","Extra pillows and blankets","Iron","Clothes drying rack","Wardrobe & chest of drawers"],
     "Entertainment":["Sound system","Books and reading material"],
     "Heating and cooling":["Air conditioning","Ceiling fan"],
     "Home safety":["Exterior security cameras on property","Fire extinguisher","First aid kit"],
     "Internet and office":["Wifi","Ethernet connection","Dedicated workspace"],
     "Kitchen and dining":["Kitchen","Fridge","Microwave","Cooking basics","Crockery and cutlery","Freezer","Cooker","Kettle","Coffee maker","Wine glasses","Toaster","Blender","Dining table"],
     "Location features":["Private entrance","Quiet heritage lane"],
     "Outdoor":["Private patio or balcony","Mature private garden","Outdoor furniture","Outdoor dining area","Sun loungers","Hammock"],
     "Parking and facilities":["Free parking on premises","Free on-street parking","Private pool"],
     "Services":["Pets allowed","Long-term stays allowed","Daily housekeeping","Private chef on request","Host greets you"]
   },
   notIncluded:["TV","Heating"],
   houseRules:["Check-in after 2:00 pm","Checkout before 11:00 am","8 guests maximum","No parties or events"],
   reviewsList:[
     {name:"Sandra", date:"February 2026", text:"The garden is something else — huge old trees and birdsong everywhere. Felt a world away while being minutes from Mapusa."},
     {name:"Karan", date:"November 2025", text:"Beautiful heritage-village location, deep verandahs and a great pool. Perfect for our extended family of eight."}
   ],
   locText:"Moira is one of North Goa's most beautiful heritage villages — known for its churches, grand old homes and quiet, tree-lined lanes, yet only a short drive from Mapusa and the northern beaches." },

 { slug:"dense-tide", name:"Dense Tide", area:"Palolem", region:"South Goa", sample:true,
   coords:[15.0100, 74.0233],
   title:"Coastal Portuguese-Boho Villa · Private Pool · 4BHK",
   entire:"Entire home in Palolem, India",
   tag:"A serene Portuguese-boho villa with a private pool, a short walk from the south's calmest beaches.",
   price:"Rates on request", beds:4, guests:8, baths:"4", pool:"Private",
   rating:4.95, reviews:23,
   host:{name:"Diya", months:"1 year hosting"}, coHost:"Sam",
   hero:"terrace2",
   highlight:{title:"Steps from the sand", text:"A short, shaded stroll to Palolem's calm, palm-fringed crescent of beach."},
   story:"The collection's southern outpost — lighter, breezier and built to catch the sea air. Bathed in whites with pops of coastal blue, Dense Tide sits a short walk from Palolem's gentle bay. Spend slow mornings by the private pool and evenings on the beach; four ensuite bedrooms and a relaxed open-plan living space keep a group comfortable and close.",
   notes:"Palolem is all about unwinding — we welcome couples, families and friends who want calm. The home isn't suitable for parties or noisy events.",
   gallery:[["pool2","Private pool"],["bed4","Bedroom · queen bed"],["bathblue2","Azulejo bathroom"],["bath2","Bathroom"],["terrace","Verandah"],["kitchen2","Coastal kitchen"]],
   sleeping:[["Bedroom 1","1 king bed"],["Bedroom 2","1 queen bed"],["Bedroom 3","1 queen bed"],["Bedroom 4","2 single beds"]],
   amenities:["Private swimming pool","4 ensuite bedrooms","2-minute walk to the beach","Coastal kitchen","Daily housekeeping","High-speed Wi-Fi & Ethernet","Air-conditioning & ceiling fans","Sun loungers","Outdoor shower","Pets allowed"],
   amenityGroups:{
     "Bathroom":["Hairdryer","Cleaning products","Shampoo","Conditioner","Body soap","Outdoor shower","Hot water"],
     "Bedroom and laundry":["Washing machine","Essentials","Hangers","Bed linen","Extra pillows and blankets","Iron","Clothes drying rack","Beach towels"],
     "Entertainment":["Sound system","Books and reading material","Beach games"],
     "Heating and cooling":["Air conditioning","Ceiling fan"],
     "Home safety":["Exterior security cameras on property","Fire extinguisher","First aid kit","Smoke alarm"],
     "Internet and office":["Wifi","Ethernet connection","Dedicated workspace"],
     "Kitchen and dining":["Kitchen","Fridge","Microwave","Cooking basics","Crockery and cutlery","Freezer","Cooker","Kettle","Coffee maker","Toaster","Blender","Dining table"],
     "Location features":["Private entrance","Near the ocean","Beach access – 2 min walk","Launderette nearby"],
     "Outdoor":["Private patio or balcony","Private fenced garden","Outdoor furniture","Outdoor dining area","Sun loungers","Hammock"],
     "Parking and facilities":["Free parking on premises","Free on-street parking","Private pool"],
     "Services":["Pets allowed","Long-term stays allowed","Daily housekeeping","Airport pickup on request","Host greets you"]
   },
   notIncluded:["TV","Heating"],
   houseRules:["Check-in after 2:00 pm","Checkout before 11:00 am","8 guests maximum","No parties or events"],
   reviewsList:[
     {name:"Megan", date:"April 2026", text:"Two minutes to Palolem beach and back to your own pool — couldn't ask for more. Bright, breezy and immaculate."},
     {name:"Rohan", date:"February 2026", text:"South Goa at its calmest. Diya's team looked after us beautifully and the coastal-blue bathrooms are gorgeous."},
     {name:"Lena", date:"January 2026", text:"Loved the airy rooms and the sea breeze through the house. Great spot for a relaxed group trip."}
   ],
   locText:"Palolem in South Goa is famous for its calm, palm-fringed bay — far quieter than the north and ideal for unwinding, with cafés, kayaks and long beach walks on the doorstep." }
];
