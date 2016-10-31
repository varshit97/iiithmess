/**
 * Main.js
 * Required for getting the webapp working.
 * Contains all code except for the menus, those are stored in menus.json.
 * @author Battu Varshit
 */
// Get date
var d = new Date();
// Array for names of days
var weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// Today
var today = weekday[d.getDay()];
// Menus (the JSON is loaded via AJAX)
var menus;
// Get the menus from menus.json with an AJAX request
$.ajax({
    url: 'js/menus.json',
    dataType: 'json',
    success: function(data) {
        // Set menus to data retrieved from menus.json
        menus = data;
    },
    error: function (xhr, ajaxOptions, thrownError) {
        // Notify the user that something went wrong
        alert('Error in loading menus: ' + thrownError);
    }
});
// Number of the current Mess
var messNum;
/**
 * showMenuByMess()
 * Shows mess menu by Mess mumber
 * @param {number} number of the mess menu to show 
 */
function showMenuByMess(messNumber) {
    // Clear table
    $('#myTable').html('');
    // Clear days in table
    daysInTable = [];
    // Set mess menu name
    $('#messyMess').text(getMessName(messNum));
    // Set number of current mess menu
    messNum = messNumber;
    // Show today's menu
    showMenuByDay(d.getDay());
}
// Days that are in the table, used to prevent duplicate days
var daysInTable = new Array(7);
/**
 * showMenuByDay()
 * Shows mess menu by day
 * @param {number} day Day to show mess menu from
 */
function showMenuByDay(day) {
    // Set day
    $('#day').text(weekday[day]);
    // Check if day isn't added yet
    if (daysInTable.indexOf(weekday[day]) < 0 && typeof messNum != 'undefined') {
    // Get mess menu name
    messMenu = menus[getMessName(messNum)];
    // Add row in table, used to show menu data
    var row = $('<tr></tr>').appendTo('#myTable');;
    // Append row with table cells that contain data
    row.append('<td>' + weekday[day] + '</td>');
    row.append('<td>' + messMenu[weekday[day]]['Breakfast'] + '</td>');
    row.append('<td>' + messMenu[weekday[day]]['Lunch'] + '</td>');
    row.append('<td>' + messMenu[weekday[day]]['Dinner'] + '</td>');
    row.append('<td>' + messMenu[weekday[day]]['Snacks'] + '</td>');
    // Add current day to daysInTable
    daysInTable[day] = weekday[day];
} else if (typeof messNum == 'undefined') {
    // If messNum is undefined, the user hasn't selected a mess menu. Tell the user to do so.
    alert('Please select a Mess first');
}
}
/**
 * getMessName()
 * Helper method. Gets mess menu name from mess menu number
 * @param {number} messNumber Number of the mess menu
 * @return {string} The name of the mess menu
 */
function getMessName(messNumber) {
    // Menu names
    var menuNames = ['southMessMenu', 'yukthaarMessMenu', 'kadambVegMess', 'northMessMenu'];
    // Return menu name from menuNames array
    return menuNames[messNumber - 1];
}