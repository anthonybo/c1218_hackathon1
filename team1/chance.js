var chance = ['Advance to GO (collect $200)', 'Bank error in your favor. Collect $200',
    'Doctor\'s fees. {fee} Pay $50.', 'From sale of stock you get $50.', 'Get Out of Jail Free.',
    'Go to Jail. Go directly to jail. Do not pass Go, Do not collect $200. ',
    'Grand Opera Night. Collect $50 from every player for opening night seats.',
    'Holiday {Xmas} Fund matures. Receive {Collect} $100.', 'Income tax refund. Collect $20.',
     'Life insurance matures – Collect $100', 'Hospital Fees. Pay $50.', 'School fees. Pay $50.',
    'Receive $25 consultancy fee.', 'You are assessed for street repairs: Pay $40 per house and $115 per hotel you own.',
    'You have won second prize in a beauty contest. Collect $10.', 'You inherit $100.'];

var community = ['Advance to "Go". (Collect $200)', 'Advance to Illinois Ave. {Avenue}. If you pass Go, collect $200.',
     'Advance to St. Charles Place. If you pass Go, collect $200.',
    'Advance token to nearest Utility. If unowned, you may buy it from the Bank. If owned, throw dice and pay owner a total 10 times the amount thrown',
    'Advance token to the nearest Railroad and pay owner twice the rental to which he/she {he} is otherwise entitled. If Railroad is unowned, you may buy it from the Bank.',
    'Bank pays you dividend of $50.', 'Get out of Jail Free.', 'Go Back Three {3} Spaces.',
     'Go to Jail. Go directly to Jail. Do not pass GO, do not collect $200.',
    'Make general repairs on all your property: For each house pay $25, For each hotel {pay} $100.', 'Pay poor tax of $15',
    'Take a trip to Reading Railroad. If you pass Go, collect $200.',
    'Take a walk on the Boardwalk. Advance token to Boardwalk.',
    'You have been elected Chairman of the Board. Pay each player $50.',
    'Your building {and} loan matures. Receive {Collect} $150', 'You have won a crossword competition. Collect $100.'];

var chance = chance[math.floor(math.random() * chance.length)];

var  community= community[math.floor(math.random() * community.length)];

var getRandomChance = function() {
    return chance = chance[math.floor(math.random() * chance.length)];
    if (chance === 'Get Out of Jail Free.'){
        
    }else {

    }
};

var getRandomComm = function () {
    return community= community[math.floor(math.random() * community.length)];
    if ( community === 'Get Out of Jail Free.') {

    }else {

    }
};