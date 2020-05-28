class Bob {
    response(argument) {
        switch (argument) {
        case 'question': console.log('Sure');
        break;
        case 'yell': console.log('Whoa, chill out!');
        break;
        case 'yellQuestion': console.log("Calm down, I know what I'm doing");
        break;
        case '': console.log('Fine. Be that way!');
        break;
        default: console.log('Whatever.');
        } 
        }
    };

/*Bob is a lackadaisical teenager. In conversation, his responses are very limited.

Bob answers 'Sure.' if you ask him a question.

He answers 'Whoa, chill out!' if you yell at him.

He retorts 'Calm down, I know what I'm doing!' if you yell a question at him.

He says 'Fine. Be that way!' if you address him without actually saying anything.

He answers 'Whatever.' to anything else.*\