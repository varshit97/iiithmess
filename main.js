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

document.getElementById("South").addEventListener('click',showMenu(1));
document.getElementById("Yukthaar").addEventListener('click',showMenu(2));

function showMenu(messNumber){
  document.getElementById('bye').innerHTML = "after" + messNumber;
  if(messNumber==1)
  {
    document.getElementById('Day').innerHTML = today;
    document.getElementById('Breakfast').innerHTML = southMessMenu[today]["Breakfast"];
    document.getElementById('Lunch').innerHTML = southMessMenu[today]["Lunch"];
    document.getElementById('Dinner').innerHTML = southMessMenu[today]["Dinner"];
    document.getElementById('Snacks').innerHTML = southMessMenu[today]["Snacks"];
  }
}

var southMessMenu = {};
southMessMenu[weekday[1]] = {"Breakfast" : "1. Kancheepuram Idly  \
 2. Upma + Sev \
 3. Chutney \
 4. Sambar \
 5. Karam podi + Ghee"};
southMessMenu[weekday[1]] = {"Lunch" : " 1. Lemon rava/rice pulihora \
 2. Roti \
 3. Dondakaya fry \
 4. Tomato Dal \
 5. Sambar \
 6. Beerakaya Chutney "};
southMessMenu[weekday[1]] = {"Dinner" : "1. Soup + Manchurian  \
2. Roti \
3. Beerakaya curry \
4. Tomato Dal \
5. Sambar \
6. Karam  Podi "};
southMessMenu[weekday[1]] = {"Snacks" : "Onion Pakoda"};

southMessMenu[weekday[2]] = {"Breakfast" : " 1. Wada \
 2. Pongal \
 3. Chutney \
 4. Sambar "};
southMessMenu[weekday[2]] = {"Lunch" : "1.  Rava kesari \
2.  Roti \
3.  Kakarakaya masala \
4. Palak Dal \
5. Tomato Chaaru \
6. Karivepaku Podi "};
southMessMenu[weekday[2]] = {"Dinner" : "1. Chapati \
2. Paneer Curry \
3. Beans­Carrot Curry \
4. Dosakaya Dal  \
5. Rasam \
6. Pudina Chutney "};
southMessMenu[weekday[2]]= {"Snacks" : "Mix sprouts guggillu"};

southMessMenu[weekday[3]] = {"Breakfast" : " 1. Pullattu / Uttapam \
 2. Poha \
 3. Chutney \
 4. Sambar "};
southMessMenu[weekday[3]] = {"Lunch" : "1. Veg Pulav \
2.  Mirchi ka salan \
3. Brinjal Curry \
4. Mudda Pappu \
Rasam, Gongura Pickle "};
southMessMenu[weekday[3]] = {"Dinner" : "1. Aloo 65 \
2. Roti \
3. Dahi vada \
4. Leafy Vegetable Dal \
5. Rasam \
6. Chukkakura/Kandi Pickle "};
southMessMenu[weekday[3]]= {"Snacks" : "Saggubiyyam Punugulu(12)"};

southMessMenu[weekday[4]] = {"Breakfast" : " 1. Punugulu \
 2. Idli \
 3. Chutney \
 4. Sambar "};
southMessMenu[weekday[4]] = {"Lunch" : "1. Fried Rice, + Corn/Veg Soup, \
2. Roti \
3. Meal maker curry \
4. Dosakaya Dal \
5. Sambar \
6. Raita, Onions \
7. Pandu Mirapakaya Pickle "};
southMessMenu[weekday[4]] = {"Dinner" : "1. Dosa \
2. Aloo and Chutney \
3. Jamun \
5. Sambar \
6. Tomato chutney "};
southMessMenu[weekday[4]]= {"Snacks" : "Masala Corn"};

southMessMenu[weekday[5]] = {"Breakfast" : " 1. Pesarattu \
 2. Upma \
 3. Chutney \
 4. Sambar "};
southMessMenu[weekday[5]] = {"Lunch" : " 1. Veg Dum Biryani \
 2. Green peas masala \
 3. Thotakura Dal \
 4. Kobbari Charu \
 5. Raita, Onions \
 6. Dosakaya Mukkala Chutney"};
southMessMenu[weekday[5]] = {"Dinner" : "1. Bisibele bath with boondi  \
2. Bobbatlu / Jilebi \
3. Capsicum curry \
4. Majjiga pulusu \
5.  Karam Chitlu Podum"};
southMessMenu[weekday[5]]= {"Snacks" : "Aloo / Mirchi Bajji"};

southMessMenu[weekday[6]] = {"Breakfast" : " 1. Mysore Bonda \
 2. Semiya Upma \
 3. Chutney \
 4. Allam Chutney "};
southMessMenu[weekday[6]] = {"Lunch" : " 1. Coconut Rice \
 2. Roti, Kofta \
 3.  Beetroot Curry \
 4. Beerakaya/Dosakaya dal, \
 5. Pacchi pulusu \
 6. Mango pickle "};
southMessMenu[weekday[6]] = {"Dinner" : "1. Poori,Aloo kurma, \
2. Goruchikkudu kobbari curry \
3.Tomato Dal \
4. Sambar \
5. Gongura chutney "};
southMessMenu[weekday[6]]= {"Snacks" : "Chuduva"};

southMessMenu[weekday[0]] = {"Breakfast" : "1. Ulli Karam Dosa \
2. Uggani \
3. Chutney \
4. Sambar "};
southMessMenu[weekday[0]] = {"Lunch" : " 1. Custard salad \
 2. Veg Dum Biryani  \
 3. Raita, Onions \
 4. Baingan Masala \
 5. Tomato Curry \
 6. Sambar \
 7. Nimmakaya Pickle "};
southMessMenu[weekday[0]] = {"Dinner" : "1. Bendakaya fry \
2. Roti + Aloo Curry   \
3. Methi Dal \
4. Pappu Charu \
5. Daddojanam \
6. Kobbari Chutney "};
southMesssouthMessMenu[weekday[0]]= {"Snacks" : "Sarva Pindi"};
