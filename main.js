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
"Breakfast" : "Kancheepuram Idly\nUpma + Sev\nChutney\nSambar\nKaram podi + Ghee",

"Lunch" : "Lemon rava/rice pulihora\nRoti\nDondakaya fry\nTomato Dal\nSambar\nBeerakaya Chutney",

"Dinner" : "Soup + Manchurian\nRoti\nBeerakaya curry\nTomato Dal\nSambar\nKaram Podi",

"Snacks" : "Onion Pakoda"};

southMessMenu[weekday[2]] = {
"Breakfast" : "Wada\nPongal\nChutney\nSambar ",

"Lunch" : "Rava kesari\nRoti\nKakarakaya masala\nPalak Dal\nTomato Chaaru\nKarivepaku Podi",

"Dinner" : "Chapati\nPaneer Curry\nBeans­Carrot Curry\nDosakaya Dal\nRasam\nPudina Chutney",

"Snacks" : "Mix sprouts guggillu"};

southMessMenu[weekday[3]] = {
"Breakfast" : "Pullattu / Uttapam\nPoha\nChutney\nSambar",

"Lunch" : "Veg Pulav\nMirchi ka salan\nBrinjal Curry\nMudda Pappu\nRasam\nGongura Pickle",

"Dinner" : "Aloo 65\nRoti\nDahi vada\nLeafy Vegetable Dal\nRasam\nChukkakura/Kandi Pickle",

"Snacks" : "Saggubiyyam Punugulu(12)"};

southMessMenu[weekday[4]] = {
"Breakfast" : "Punugulu\nIdli\nChutney\nSambar",

"Lunch" : "Fried Rice, + Corn/Veg Soup\nRoti\nMeal maker curry\nDosakaya Dal\nSambar\nRaita, Onions\nPandu Mirapakaya Pickle",

"Dinner" : "Dosa\nAloo and Chutney\nJamun\nSambar\nTomato chutney",

"Snacks" : "Masala Corn"};

southMessMenu[weekday[5]] = {
"Breakfast" : "Pesarattu\nUpma\nChutney\nSambar",

"Lunch" : "Veg Dum Biryani\nGreen peas masala\nThotakura Dal\nKobbari Charu\nRaita, Onions\nDosakaya Mukkala Chutney",

"Dinner" : "Bisibele bath with boondi\nBobbatlu / Jilebi\nCapsicum curry\nMajjiga pulusu\nKaram Chitlu Podum",

"Snacks" : "Aloo / Mirchi Bajji"};

southMessMenu[weekday[6]] = {
"Breakfast" : "Mysore Bonda\nSemiya Upma\nChutney\nAllam Chutney",

"Lunch" : "Coconut Rice\nRoti, Kofta\nBeetroot Curry\nBeerakaya/Dosakaya dal\nPacchi pulusu\nMango pickle",

"Dinner" : "Poori,Aloo kurma\nGoruchikkudu kobbari curry\nTomato Dal\nSambar\nGongura chutney",

"Snacks" : "Chuduva"};

southMessMenu[weekday[0]] = {
"Breakfast" : "Ulli Karam Dosa\nUggani\nChutney\nSambar ",

"Lunch" : "Custard salad\nVeg Dum Biryani\nRaita, Onions\nBaingan Masala\nTomato Curry\nSambar\nNimmakaya Pickle",

"Dinner" : "Bendakaya fry\nRoti + Aloo Curry\nMethi Dal\nPappu Charu\nDaddojanam\nKobbari Chutney",

"Snacks" : "Sarva Pindi"};

var messNum;

function showMenuByMess(messNumber){
  messNum = messNumber;
  if(messNumber==1)
  {
    document.getElementById('messyMess').innerHTML = "South";
    document.getElementById('Day').innerHTML = today;
    document.getElementById('Breakfast').innerHTML = southMessMenu[today]["Breakfast"];
    document.getElementById('Lunch').innerHTML = southMessMenu[today]["Lunch"];
    document.getElementById('Dinner').innerHTML = southMessMenu[today]["Dinner"];
    document.getElementById('Snacks').innerHTML = southMessMenu[today]["Snacks"];
  }
  if(messNumber==2)
  {
    document.getElementById('messyMess').innerHTML = "Yukthaar";
    document.getElementById('Day').innerHTML = today;
    document.getElementById('Breakfast').innerHTML = yukthaarMessMenu[today]["Breakfast"];
    document.getElementById('Lunch').innerHTML = yukthaarMessMenu[today]["Lunch"];
    document.getElementById('Dinner').innerHTML = yukthaarMessMenu[today]["Dinner"];
    document.getElementById('Snacks').innerHTML = yukthaarMessMenu[today]["Snacks"];
  }
}

function showMenuByDay(day){
  document.getElementById('day').innerHTML = weekday[day];
  var rowsCount = document.getElementById('myTable').rows.length;
  if(weekday[day] != today)
  {
    var table = document.getElementById("myTable");
    var row = table.insertRow(rowsCount);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    if(messNum == 1)
    {
      cell1.innerHTML = weekday[day];
      cell2.innerHTML = southMessMenu[weekday[day]]["Breakfast"];
      cell3.innerHTML = southMessMenu[weekday[day]]["Lunch"];
      cell4.innerHTML = southMessMenu[weekday[day]]["Dinner"];
      cell5.innerHTML = southMessMenu[weekday[day]]["Snacks"];
    }
    if(messNum == 2)
    {
      cell1.innerHTML = weekday[day];
      cell2.innerHTML = yukthaarMessMenu[weekday[day]]["Breakfast"];
      cell3.innerHTML = yukthaarMessMenu[weekday[day]]["Lunch"];
      cell4.innerHTML = yukthaarMessMenu[weekday[day]]["Dinner"];
      cell5.innerHTML = yukthaarMessMenu[weekday[day]]["Snacks"];
    }
  }
}
