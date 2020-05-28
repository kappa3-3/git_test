class Person {
    constructor(order) {
        this.order = order;
    }
    response(order) {
        switch (order) {
        case 'question': console.log('Sure');
        break;
        case 'yell': console.log('Whoa, chill out!');
        break;
        case 'yellQuestion': console.log("Calm down, I know what I'm doing");
        break;
        case '': console.log('Fine. Be that way!');
        break;
        default: console.log('Whatever.');
        };
     }
    };

    const Bob = new Person;
    Bob.response('question');
    Bob.response('yell');
    Bob.response('yellQuestion');
    Bob.response('hvbekjh');
