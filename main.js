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
"Breakfast" : "Ragi\nIdly-Sambar",

"Lunch" : "Moong Dal\nLauki",

"Dinner" : "Masoor Dal\nPaneer Masala\nBhendi",

"Snacks" : "Sabudana\nkhichdi\nLemon Juice"
};

yukthaarMessMenu[weekday[2]] = {
"Breakfast" : "Rajgira\nDaliyaUpma\nRagi,",

"Lunch" : "NamkeenMethi\nRoti, Tooardal\nAloo Korma",

"Dinner" : "Moongdal\nKarela\nSweet Daliya",

"Snacks" : "BhelPuri\nLemon Juice"
};

yukthaarMessMenu[weekday[3]] = {
"Breakfast" : "Ragi\nPoha",

"Lunch" : "Veg Pulav\nCholey\nCabbage",

"Dinner" : "Masoor Dal\nAloo Palak",

"Snacks" : "Sweet corn\nLemon Juice"
};

yukthaarMessMenu[weekday[4]] = {
"Breakfast" : "Rajgira\nVegetable Idly\nSamdar",

"Lunch" : "Rawa Ladoo\nJowar Roti\nMix Dal\nBaingan\nBharta",

"Dinner" : "Tomato Rice\nLobiya\nFrench Beans",

"Snacks" : "Murmura\nLemon\nJuice"
};

yukthaarMessMenu[weekday[5]] = {
"Breakfast" : "Ragi\nUpma",

"Lunch" : "Lemon Rice\nPalakPaneer\nMasoor Dal",

"Dinner" : "Moongdal\nTinda(tamse)\nKandagatta(Telugu)",

"Snacks" : "Boiled Peanuts"
};

yukthaarMessMenu[weekday[6]] = {
"Breakfast" : "Rajgira\nVegetable Poha",

"Lunch" : "Jowar Roti\nWhole Chana\nDal\nAloo+Shimla\nMirch",

"Dinner" : "MPalak Tooar Dal\nAloo Mutter",

"Snacks" : "Sabudana khichdi\nLemon Juice"
};

yukthaarMessMenu[weekday[0]] = {
"Breakfast" : "Ragi\nSemiya (Lemon)",

"Lunch" : "PudinaRice\nMix Veg\nRajma\nSweet Rice\nMango Juice",

"Dinner" : "Tooar Dal\nSnake gourd+Moongdal",

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

var messNum = null;

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

var inTable = new Array(7);

function isInArray(value, array) {
  return array.indexOf(value) > -1;
}

function showMenuByDay(day){
  document.getElementById('day').innerHTML = weekday[day];
  var rowsCount = document.getElementById('myTable').rows.length;
  if(weekday[day] != today && !isInArray(weekday[day], inTable))
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
    inTable[day] = weekday[day];
  }
}
