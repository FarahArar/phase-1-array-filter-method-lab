// Code your solution here

drivers=[
    {name:"driver1",hometown:"hometown1"},
    {name:"driver2",hometown:"hometown2"},
    {name:"driver3",hometown:"hometown3"},
       ]

function findMatching(drivers, name) {
        return drivers.filter(driver=>driver.toLowerCase()===name.toLowerCase());
}
      
function fuzzyMatch(drivers, letters) {
        return drivers.filter(driver=>driver.toLowerCase().startsWith(letters.toLowerCase()));
}
      
function matchName(drivers, name) {
        return drivers.filter(driver=>driver.name.toLowerCase()===name.toLowerCase());
}