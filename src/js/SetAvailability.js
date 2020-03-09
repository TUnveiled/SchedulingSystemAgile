
function testClick(){
    document.getElementById("Here").innerText="You are not totally worthless just mostly";

}
function AddTime(param){
    console.log(param);
for(let i=0;i<100;i++)
{
    document.getElementById(param).innerHTML+="<br><label>From:</label><br><input type='time'><br><label>To:</label><br><input type='time'><br>";
}


}

$('#mySchedule').weekly_schedule();

$('#mySchedule').weekly_schedule({

    // Days displayed
    days: ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],

    // Hours displyed
    hours: "7:00AM-10:00PM",

    // Font used in the component
    fontFamily: "Montserrat",

    // Font colot used in the component
    fontColor: "black",

    // Font weight used in the component
    fontWeight: "100",

    // Font size used in the component
    fontSize: "0.8em",

    // Background color when hovered
    hoverColor: "#727bad",

    // Background color when selected
    selectionColor: "#9aa7ee",

    // Background color of headers
    headerBackgroundColor: "transparent"

});
$('#mySchedule').weekly_schedule({


    // handler called after selection
    onSelected: function(){},

    // handler called after removal
    onRemoved: function(){}

});
$('.schedule').on('selectionmade', function() {
    console.log("Selection Made");
}).on('selectionremoved', function() {
    console.log("Selection Removed");
});

$('#mySchedule').weekly_schedule("getSelectedHour");
