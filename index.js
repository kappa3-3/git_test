// You have been asked to help study the population of birds migrating across the continent. Each type of bird you are interested in will be identified by an integer value. Each time a particular kind of bird is spotted, its id number will be added to your array of sightings. You would like to be able to find out which type of bird is most common given a list of sightings. Your task is to print the type number of that bird and if two or more types of birds are equally common, choose the type with the smallest ID number.
// For example, assume your bird sightings are of types . There are two each of types  and , and one sighting of type . Pick the lower of the two types seen twice: type .
//Complete the migratoryBirds function in the editor below. It should return the lowest type number of the most frequently sighted bird.
//migratoryBirds has the following parameter(s):
//arr: an array of integers representing types of birds sighted


function randomArrayCreator() {
    var randomLength =  Math.floor(Math.random() * 30) + 1;
    let randomArray = [];
    for(let i = 1; i <= randomLength; i++) {

    const randomArrayNumber = Math.floor(Math.random() * 5) + 1;
    randomArray.push(randomArrayNumber);

    }
    return randomArray;
}
function migratoryBirds(callback) {
    const sortedArray = callback().sort();
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
    const max = Math.max(...counter);
    const index = counter.indexOf(max);
    const number = index + 1;
    console.log(number, sortedArray);
}
migratoryBirds(randomArrayCreator);