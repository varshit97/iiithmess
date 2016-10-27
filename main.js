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
"Breakfast" : "Ragi\nIdly-Sambar\nKaram podi",

"Lunch" : "Masoor Dal\nLauki\nKadi\nVegetable pickle",

"Dinner" : "Mix veg\nMoong Dal",

"Snacks" : "Sabudana khichdi\nCurd"
};

yukthaarMessMenu[weekday[2]] = {
"Breakfast" : "Rajgira\nVegetable Upma\nBadam milk,",

"Lunch" : "Veg Pulao\nColey\nCabbage\nTill Chutney",

"Dinner" : "Mix dal\nKarela\nGroundnut chutney",

"Snacks" : "Sweet corn"
};

yukthaarMessMenu[weekday[3]] = {
"Breakfast" : "Ragi\nPoha\nSprout masala",

"Lunch" : "Capsicum\nTooar dal\nPaneer masala",

"Dinner" : "Lobhiya\nLauki\nTomato Rice\nSuji Halwa",

"Snacks" : "Boiled peanut\nLemon Juice"
};

yukthaarMessMenu[weekday[4]] = {
"Breakfast" : "Rajgira\nRagi Idly-sambar\nSweet Lassi",

"Lunch" : "Tooar dal\nBajra Roti\nMix Veg\nGroundnut chutney",

"Dinner" : "Turai\nMoong dal\nPoolihara",

"Snacks" : "Murmura\nLButter milk"
};

yukthaarMessMenu[weekday[5]] = {
"Breakfast" : "Daliya Upma\nSprout Masala\nRagi",

"Lunch" : "Rajma\nAloo Gobi\nSweet Daliya/Lauki Halwa\nGongura pickle",

"Dinner" : "Tooar dal\nKandagadda",

"Snacks" : "Sabudana khichdi\nCurd"
};

yukthaarMessMenu[weekday[6]] = {
"Breakfast" : "Rajgira\nVegetable Poha\nBadam milk",

"Lunch" : "Lobiya\nCabbage\nCurd Rice\nCurryleaf chutney",

"Dinner" : "Paneer masala\nKarela\nMoong dal",

"Snacks" : "Chivda\nLemon Juice"
};

yukthaarMessMenu[weekday[0]] = {
"Breakfast" : "Ragi\nSemiya (Lemon)",

"Lunch" : "Whole Chana dal\nPumpkin\nJowar Roti\nSweet Pongal/Rice\nTomato Chutney",

"Dinner" : "Tooar Dal\nGawar phali\nMasal Khichdi",

"Snacks" : "Masala Corn"
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


var kadambVegMess = {};
kadambVegMess[weekday[0]] = {
"Breakfast" : "PESARATTU, GINGER CHUTNEY, PALLI CHUTNEY, VEG SANDWICH, JAM, BREAD, BUTTER, GREEN CHUTNEY",

"Lunch" : "BEETROOT PORIAL, CHOLEY MASALA, VEG BIRIANI, BOONDI RAITA, SWEET, PEANUT SALAD",

"Dinner" : "GOBI / VEG MANCHURIA/AL LO FRY, VEG KORMA, MANCHOW SOUP",

"Snacks" : "NOODLES WITH VEGETABLES(TO BE SERVED HOT)/DAHI WADA LEMON JUICE"
};

kadambVegMess[weekday[1]] = {
"Breakfast" : "UTAPAM, CHUTNEY, SAMBAR, CORNFLAKES, SPROUTS BANANA",

"Lunch" : "GATTE KA SABZI / ALOO MATAR, BAINGAN FRY, MOONG DAL, SALAD (VEGETABLE SEPARATE)",

"Dinner" : "ALOO MATAR/MOGAR KI SABZI, PALAK DAL LAKI KI SABZI, RASAM",

"Snacks" : "ALOO BUN JEERA BUTTER MILK"
};

kadambVegMess[weekday[2]] = {
"Breakfast" : "ALOO PARATHA, KHATTA MEETHA CHUTNEY, RAITA, SEMIYA UPMA, CHUTNE",

"Lunch" : "VEG KOFTA, MIXED VEG CURRY, LEMON RICE, DAL TADKA",

"Dinner" : "ALOO MASALA PLAIN, ONION DOSA, CHUTNEY SAMBAR, VEG POLAV, RAITA",

"Snacks" : "SABUDANA WADA, GREEN CHUTNEY, LEMON JUICE"
};

kadambVegMess[weekday[3]] = {
"Breakfast" : "KANCHI PURAM IDLY, CHUTNEY, SAMBAR, KHARAMPODI, GHEE",

"Lunch" : "DAHI KADI, ALOO METHI, KALI MASOOR DAL, PEANUT SALAD",

"Dinner" : "TANDOORI ROTI/ BUTTER NAAN, SHAHI PANEER, BLAKCHANA WITH PUMPKIN, TOMATO SOUP, BREAD CRUMBS, PAPAD MASAL ROASTED",

"Snacks" : "FRIED IDLY UPMA, PUDINA BUTTER MILK"
};

kadambVegMess[weekday[4]] = {
"Breakfast" : "DOSA, COCONUT CHUTNEY, SAMBAR, DALIA KHICHDI",

"Lunch" : "VEG DAM BIRIANI, MIRCHI KA SALAN / BAGARA BAIGAN, RAITA, LAUKI KI SABZI, SALAD(VEGETABLE SEPARATE)",

"Dinner" : "OIL CHAPATI, MASALA CABBAGE, DAL MAKHANI, ARBI/SURAN KI SABZI, ANDHRA",

"Snacks" : "PAV BHAJI LEMON JUICE"
};

kadambVegMess[weekday[5]] = {
"Breakfast" : "RAWA UPMA, CHUTNEY, PARATHA, ALOO KI SABZI,",

"Lunch" : "BHENDI MASALA, RAJMAH, JEERA/FRIED RICE, VEGETABLE RAITA",

"Dinner" : "TANDOORI ROTI/ NAAN, PANEER PALAK, DRY KARELA KI SABZI, SWEET CORN SOUP",

"Snacks" : "VEG SANDWICH TOMATO SAUCE PLAIN BUTTER MILK"
};

kadambVegMess[weekday[6]] = {
"Breakfast" : "PANEER PARATHA, RAITA, KHATTA MEETHA CHAUTNEY,COCON UT CHUTNEY, CORNFLAKES, BANANA",

"Lunch" : "MIXED VEG PORIAL, ALOO DO PYAAZA, TOMATO RICE / POOLIHARA, SALAD (VEGETABLE SEPARATE)",

"Dinner" : "BHENDI MASALA, DAL FRY, FRIED RICE, BLACK PEPPER RASAM DUM ALOO",

"Snacks" : "CHOLEY CHAT, LEMON JUICE"
};

var northMessMenu = {};
northMessMenu[weekday[1]] = {
"Breakfast" : "Poori\nAlu Sabji\nBread Pakoda\nCornflakes\nFruits\nBread Butter Jam Milk\nTea",

"Lunch" : "Rajama\nChana Dal\nMethi Aalu\nWhite Rice\nTomato Rice\nRoti\nDahi\nButter Milk\nAalu Tikki\nSalad\nLimboo Pani",

"Dinner" : "Shahi Paneer\nLauki Sabji\nTuver Dal\nTandori Roti\nDahi\nWhite Rice\nPudina Rice\nSweet",

"Snacks" : "poha"
};

northMessMenu[weekday[2]] = {
"Breakfast" : "Veg Cutlet\nVeg Macroni\nCornflakes,\nFruits,\nBread Butter Jam Milk,\nTea",

"Lunch" : "Dal Makhani,\nAalu Mutter,\nTurai Sabji,\nWhite Rice,\nLemon Rice,\nRoti,\nDahi,\nButter Milk,\nSalad,\nLimbo Pani,\nAachar",

"Dinner" : "Aalu Paratha,\nMix Veg Sabji,\nDahi,\nButter Milk,\nTuver Dal,\nWhite Rice,\nFried Rice,\nJalebi,\nGreen & Sweet Chatani",

"Snacks" : "chole chaat"
};

northMessMenu[weekday[3]] = {
"Breakfast" : "Paneer Masala Dosa,\nMayonise Sandwich,\nCornflakes,\nFruits,\nBread Butter Jam,\nMilk,\nTea",

"Lunch" : "Baingan Masala,\nAalu Cabbage,\nVeg Biryani,\nWhite Rice,\nMasoor Dal,\nRoti,\nDahi,\nVeg Raita,\nSalad,\nAachar,\nPapad,\nFruit custard",

"Dinner" : "Mutter Paneer,\nGobi-Aalu,\nMasoor Dal,\nWhite rice,\nJeera Rice,\nRumali Roti,\nRoti,\nDahi,\nButter Milk,\nSalad,\nAachar,\nPapad",

"Snacks" : "mix pakoda"
};

northMessMenu[weekday[4]] = {
"Breakfast" : "Dhokla,\nVada Pav,\nCornflakes,\nFruits,\nBread Butter Jam Milk,\nTea",

"Lunch" : "Chole,\nAalu sabji Dry,\nMassor Dal,\nPuri,\nPalak Puri,\nWhite Rice,\nJeera Rice,\nDahi,\nButter Milk,\nMimbu Pani,\nSalad,\nPapad",

"Dinner" : "Aalu Gobi,\nTuver Dal,\nManchurian,\nRoti,\nDahi,\nButter Milk,\nWhite Rice,\nTomato Rice,\nSweet Boondi,\nSalad,\nAachar",

"Snacks" : "Samosa"
};

northMessMenu[weekday[5]] = {
"Breakfast" : "Noodles,\nIdli Samabar Chutney,\nCornflakes,\nFruits,\nBread Butter Jam,\nMilk,\nTea",

"Lunch" : "Bhindi Fry,\nDum Aalu,\nTuver Dal,\nWhite Rice,\nFried Rice,\nRoti,\nDahi,\nPujabi Lassi,\nDahi Vada,\nSalad,\nLimboo Pani",

"Dinner" : "Palak Paneer,\nAalu Gobi,\nChana Dal,\nWhite Rice,\nRoti,\nDahi,\nPudina Rice,\nSalad,\nAachar",

"Snacks" : "bhel puri"
};

northMessMenu[weekday[6]] = {
"Breakfast" : "Gobi or Aalu Paratha,\nDahi,\nGreen Chutney,\nVeg Sandwich,\nCornflakes,\nFruits,\nBread Butter Jam Milk,\nTea",

"Lunch" : "Soya bean(gravy),\nAaluGobi,\nTuver Dal,\nAalu fry,\nWhite Rice,\nDhaniya Rice,\nRoti,\nDahi,\nRaita,\nSalad,\nLimboo pani,\nAachar",

"Dinner" : "Chole Batur,\nWhite Rice,\nPulav,\nGluab Jamun,\nDahi,\nButter Milk,\nSalad,\nAachar,\nPapad",

"Snacks" : "pav bhaji"
};

northMessMenu[weekday[0]] = {
"Breakfast" : "Samosa,\nTomato Sauce,\nPoha,\nCornflakes,\nFruits,\nBread Butter Jam Milk,\nTea",

"Lunch" : "Aalu Palak,\nVeg. Kofta,\nBhindi,\nTuver Dal,\nWhite Rice,\nPudina Rice,\nRotim,\nDahi,\nBundi Raita,\nSalad,\nLimboo Pani,\nAachar,\nSooji Halwa",

"Dinner" : "Aalu Shimala Mirch,\nPaneer Dry,\nTuver Dal,\nWhite Rice,\nLemon Rice,\nParotha,\nDahi,\nSalad",

"Snacks" : "veg cutlet"
};


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
  if(messNumber==3)
  {
    document.getElementById('messyMess').innerHTML = "NBH VEG";
    document.getElementById('Day').innerHTML = today;
    document.getElementById('Breakfast').innerHTML = kadambVegMess[today]["Breakfast"];
    document.getElementById('Lunch').innerHTML = kadambVegMess[today]["Lunch"];
    document.getElementById('Dinner').innerHTML = kadambVegMess[today]["Dinner"];
    document.getElementById('Snacks').innerHTML = kadambVegMess[today]["Snacks"];
  }
  if(messNumber==4)
  {
    document.getElementById('messyMess').innerHTML = "North";
    document.getElementById('Day').innerHTML = today;
    document.getElementById('Breakfast').innerHTML = northMessMenu[today]["Breakfast"];
    document.getElementById('Lunch').innerHTML = northMessMenu[today]["Lunch"];
    document.getElementById('Dinner').innerHTML = northMessMenu[today]["Dinner"];
    document.getElementById('Snacks').innerHTML = northMessMenu[today]["Snacks"];
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
    if(messNum == 3)
    {
      cell1.innerHTML = weekday[day];
      cell2.innerHTML = kadambVegMess[weekday[day]]["Breakfast"];
      cell3.innerHTML = kadambVegMess[weekday[day]]["Lunch"];
      cell4.innerHTML = kadambVegMess[weekday[day]]["Dinner"];
      cell5.innerHTML = kadambVegMess[weekday[day]]["Snacks"];
    }
    if(messNum == 4)
    {
      cell1.innerHTML = weekday[day];
      cell2.innerHTML = northMessMenu[weekday[day]]["Breakfast"];
      cell3.innerHTML = northMessMenu[weekday[day]]["Lunch"];
      cell4.innerHTML = northMessMenu[weekday[day]]["Dinner"];
      cell5.innerHTML = northMessMenu[weekday[day]]["Snacks"];
    }
    inTable[day] = weekday[day];
  }
}
