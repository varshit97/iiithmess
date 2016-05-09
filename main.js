var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var today = weekday[d.getDay()];

var yukthaarMessMenu = {};
yukthaarMessMenu[weekday[1]] = {
  "Breakfast" : "Ragi, Idly-Sambar",

"Lunch" : "Moong Dal, Lauki",

"Dinner" : "Masoor Dal,\
Paneer Masala,\
Bhendi",

"Snacks" : "Sabudana\
khichdi,\
Lemon Juice"
};

yukthaarMessMenu[weekday[2]] = {
  "Breakfast" : "Rajgira,\
DaliyaUpma\
Ragi,",

"Lunch" : "NamkeenMethi\
Roti, Tooardal,\
Aloo Korma",

"Dinner" : "Moongdal,\
Karela,\
Sweet Daliya",

"Snacks" : "BhelPuri,\
Lemon Juice"
};

yukthaarMessMenu[weekday[3]] = {
  "Breakfast" : "Ragi,\
Poha",

"Lunch" : "Veg Pulav,\
Choley,\
Cabbage",

"Dinner" : "Masoor Dal,\
Aloo Palak",

"Snacks" : "Sweet corn,\
Lemon Juice"
};

yukthaarMessMenu[weekday[4]] = {
  "Breakfast" : "Rajgira,\
Vegetable\
Idly,Samdar",

"Lunch" : "Rawa Ladoo\
Jowar Roti,\
Mix Dal,\
Baingan\
Bharta",

"Dinner" : "Tomato Rice,\
Lobiya,\
French Beans",

"Snacks" : "Murmura, Lemon\
Juice"
};

yukthaarMessMenu[weekday[5]] = {
  "Breakfast" : "Ragi,\
Upma",

"Lunch" : "Lemon Rice,\
PalakPaneer,\
Masoor Dal",

"Dinner" : "Moongdal\
Tinda(tamse),\
Kandagatta\
(Telugu)",

"Snacks" : "Boiled Peanuts"
};

yukthaarMessMenu[weekday[6]] = {
  "Breakfast" : "Rajgira,\
Vegetable Poha",

"Lunch" : "Jowar Roti,\
Whole Chana\
Dal ,\
Aloo+Shimla\
Mirch",

"Dinner" : "MPalak Tooar Dal,\
Aloo Mutter",

"Snacks" : "Sabudana khichdi, Lemon\
Juice"
};

yukthaarMessMenu[weekday[0]] = {
  "Breakfast" : "Ragi, Semiya\
(Lemon)",

"Lunch" : "PudinaRice,\
Mix Veg, Rajma,\
Sweet Rice/Mango\
Juice*",

"Dinner" : "Tooar Dal, Snake\
guard+ Moongdal",

"Snacks" : "Lobiya Boiled"
};


var southMessMenu = {};
southMessMenu[weekday[1]] = {
  "Breakfast" : "1. Kancheepuram Idly  \
 2. Upma + Sev \
 3. Chutney \
 4. Sambar \
 5. Karam podi + Ghee",

"Lunch" : "1. Lemon rava/rice pulihora \
 2. Roti \
 3. Dondakaya fry \
 4. Tomato Dal \
 5. Sambar \
 6. Beerakaya Chutney ",

 "Dinner" : "1. Soup + Manchurian  \
  2. Roti \
  3. Beerakaya curry \
  4. Tomato Dal \
  5. Sambar \
  6. Karam  Podi ",

  "Snacks" : "Onion Pakoda"};

southMessMenu[weekday[2]] = {
  "Breakfast" : " 1. Wada \
   2. Pongal \
   3. Chutney \
   4. Sambar ",

  "Lunch" : "1.  Rava kesari \
  2.  Roti \
  3.  Kakarakaya masala \
  4. Palak Dal \
  5. Tomato Chaaru \
  6. Karivepaku Podi ",

  "Dinner" : "1. Chapati \
  2. Paneer Curry \
  3. Beans­Carrot Curry \
  4. Dosakaya Dal  \
5. Rasam \
6. Pudina Chutney ",

"Snacks" : "Mix sprouts guggillu"};

southMessMenu[weekday[3]] = {
  "Breakfast" : " 1. Pullattu / Uttapam \
 2. Poha \
 3. Chutney \
 4. Sambar ",

"Lunch" : "1. Veg Pulav \
2.  Mirchi ka salan \
3. Brinjal Curry \
4. Mudda Pappu \
Rasam, Gongura Pickle ",

"Dinner" : "1. Aloo 65 \
2. Roti \
3. Dahi vada \
4. Leafy Vegetable Dal \
5. Rasam \
6. Chukkakura/Kandi Pickle ",

"Snacks" : "Saggubiyyam Punugulu(12)"};

southMessMenu[weekday[4]] = {
  "Breakfast" : " 1. Punugulu \
 2. Idli \
 3. Chutney \
 4. Sambar ",

"Lunch" : "1. Fried Rice, + Corn/Veg Soup, \
2. Roti \
3. Meal maker curry \
4. Dosakaya Dal \
5. Sambar \
6. Raita, Onions \
7. Pandu Mirapakaya Pickle ",

"Dinner" : "1. Dosa \
2. Aloo and Chutney \
3. Jamun \
5. Sambar \
6. Tomato chutney ",

"Snacks" : "Masala Corn"};

southMessMenu[weekday[5]] = {
  "Breakfast" : " 1. Pesarattu \
 2. Upma \
 3. Chutney \
 4. Sambar ",

"Lunch" : " 1. Veg Dum Biryani \
 2. Green peas masala \
 3. Thotakura Dal \
 4. Kobbari Charu \
 5. Raita, Onions \
 6. Dosakaya Mukkala Chutney",

"Dinner" : "1. Bisibele bath with boondi  \
2. Bobbatlu / Jilebi \
3. Capsicum curry \
4. Majjiga pulusu \
5.  Karam Chitlu Podum",

"Snacks" : "Aloo / Mirchi Bajji"};

southMessMenu[weekday[6]] = {
  "Breakfast" : " 1. Mysore Bonda \
 2. Semiya Upma \
 3. Chutney \
 4. Allam Chutney ",

"Lunch" : " 1. Coconut Rice \
 2. Roti, Kofta \
 3.  Beetroot Curry \
 4. Beerakaya/Dosakaya dal, \
 5. Pacchi pulusu \
 6. Mango pickle ",

"Dinner" : "1. Poori,Aloo kurma, \
2. Goruchikkudu kobbari curry \
3.Tomato Dal \
4. Sambar \
5. Gongura chutney ",

"Snacks" : "Chuduva"};

southMessMenu[weekday[0]] = {
  "Breakfast" : "1. Ulli Karam Dosa \
2. Uggani \
3. Chutney \
4. Sambar ",

"Lunch" : " 1. Custard salad \
 2. Veg Dum Biryani  \
 3. Raita, Onions \
 4. Baingan Masala \
 5. Tomato Curry \
 6. Sambar \
 7. Nimmakaya Pickle ",

"Dinner" : "1. Bendakaya fry \
2. Roti + Aloo Curry   \
3. Methi Dal \
4. Pappu Charu \
5. Daddojanam \
6. Kobbari Chutney ",

"Snacks" : "Sarva Pindi"};

function showMenu(messNumber){
  if(messNumber==1)
  {
    document.getElementById('Day').innerHTML = today;
    document.getElementById('Breakfast').innerHTML = southMessMenu[today]["Breakfast"];
    document.getElementById('Lunch').innerHTML = southMessMenu[today]["Lunch"];
    document.getElementById('Dinner').innerHTML = southMessMenu[today]["Dinner"];
    document.getElementById('Snacks').innerHTML = southMessMenu[today]["Snacks"];
  }
  if(messNumber==2)
  {
    document.getElementById('Day').innerHTML = today;
    document.getElementById('Breakfast').innerHTML = yukthaarMessMenu[today]["Breakfast"];
    document.getElementById('Lunch').innerHTML = yukthaarMessMenu[today]["Lunch"];
    document.getElementById('Dinner').innerHTML = yukthaarMessMenu[today]["Dinner"];
    document.getElementById('Snacks').innerHTML = yukthaarMessMenu[today]["Snacks"];
  }
}
