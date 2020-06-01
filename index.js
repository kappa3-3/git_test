// You have been asked to help study the population of birds migrating across the continent. Each type of bird you are interested in will be identified by an integer value. Each time a particular kind of bird is spotted, its id number will be added to your array of sightings. You would like to be able to find out which type of bird is most common given a list of sightings. Your task is to print the type number of that bird and if two or more types of birds are equally common, choose the type with the smallest ID number.
// For example, assume your bird sightings are of types . There are two each of types  and , and one sighting of type . Pick the lower of the two types seen twice: type .
//Complete the migratoryBirds function in the editor below. It should return the lowest type number of the most frequently sighted bird.
//migratoryBirds has the following parameter(s):
//arr: an array of integers representing types of birds sighted

function migratoryBirds(arr) {
    const sortedArray = arr.sort();
    let duplicatedItems = [];
    for( let i = 0; i < sortedArray.length - 1; i++){
        
        if (sortedArray[i] === sortedArray[i+1]) {
            duplicatedItems.push(sortedArray[i]);
        }
      
    }
    console.log(duplicatedItems)
    for ( let j = 0; j < duplicatedItems.length; j++){
        if (duplicatedItems.indexOf(duplicatedItems[j])!== j ){
            console.log(duplicatedItems[j])
        }

    }
}
  

const arr = [3,3,2,2,1,5,3,4]; // length = 7 // index = [0, 1, 2, 3, 4, 5, 6]
migratoryBirds(arr);