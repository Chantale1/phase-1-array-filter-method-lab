// Code your solution here
function findMatching(Lewi ,Tom) {
    return Lewi.filter (
(potentialMatch) =>potentialMatch.toLowerCase() === Tom.toLowerCase ()

    )   
}
function fuzzyMatch(Lewi, testString) {
    return Lewi.filter(
    (potentialMatch) =>
    potentialMatch.toLowerCase().indexOf(testString.toLowerCase()) ===0
    
    ) 
}

function matchName(Lewi, TomName) {
    return Lewi.filter((record) => record.name === TomName );
    
}