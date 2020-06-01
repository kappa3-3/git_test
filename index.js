// You have been asked to help study the population of birds migrating across the continent. Each type of bird you are interested in will be identified by an integer value. Each time a particular kind of bird is spotted, its id number will be added to your array of sightings. You would like to be able to find out which type of bird is most common given a list of sightings. Your task is to print the type number of that bird and if two or more types of birds are equally common, choose the type with the smallest ID number.
// For example, assume your bird sightings are of types . There are two each of types  and , and one sighting of type . Pick the lower of the two types seen twice: type .
//Complete the migratoryBirds function in the editor below. It should return the lowest type number of the most frequently sighted bird.
//migratoryBirds has the following parameter(s):
//arr: an array of integers representing types of birds sighted

function migratoryBirds(arr, randomArray) {
    const sortedArray = arr.sort();
    let duplicatedItems = [];
    let counter = [0, 0, 0, 0, 0];
    for (let i = 0; i < sortedArray.length; i++){
        
        switch(sortedArray[i]){
            case 1: counter[0] += 1;
                break;
            case 2: counter[1] +=1;
                break;
            case 3: counter[2] +=1;
                break;
            case 4: counter[3] +=1;
                break;
            case 5: counter[4] +=1;
                break;
            default: false;
        }      
    }

    function randomArrayCreator(randomLength) {
        let randomArray = [];
        for(let i =0; i <= randomLength; i++) {
            Math.floor(Math.random * 5) + 1;
        }
        

        const randomArray = Math.floor(Math.random * 5) + 1;
    }

    const max = Math.max(...counter);
    const index = counter.indexOf(max);
    const number = index + 1;

    
    console.log(number);

}
  
const arr1 = [5,3,2,2,4,4,1];
const arr0 = [3,3,2,2,1,5,3,4]; // length = 7 // index = [0, 1, 2, 3, 4, 5, 6]
const arr2 = [1,2,1,4,5,2,1,4];
const arr3 = [4,4,4,4,3,3,3,3,2,2,2,1,1,1,1,4];
migratoryBirds(arr0);
migratoryBirds(arr1);
migratoryBirds(arr2);
migratoryBirds(arr3);
