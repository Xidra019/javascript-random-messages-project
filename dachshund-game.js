const dachshunds = 
[   "Your adventurous spirit will lead you to new, unexplored corners of the couch. But beware—your determination to dig under the cushions will uncover a long-lost squeaky toy. It’s a good day to chase your tail, but don’t be surprised if you catch it!",
    "Your love for comfort will have you wrapped up in your favorite blanket, dreaming of bacon treats. Be careful not to get too cozy, though—you might miss out on the surprise belly rubs coming your way.",
    "You’ll be barking at everything today, from the mailman to that suspicious-looking leaf blowing in the wind. Your dual personality will have you feeling both brave and skittish—don’t worry, it’s just your dachshund charm working overtime!",
    "Today’s all about feelings, and you’ll be feeling extra snuggly. Expect to curl up in someone’s lap and demand attention. Your soulful eyes will be impossible to resist, so prepare for a day full of head pats and ear scratches",
    "You’ll be obsessively organizing your toys today, only to scatter them all over the floor again. Your meticulous nature will have you sniffing every inch of the house—because you never know when someone might drop a crumb",
    "Balance is key today, which means alternating between nap time and playtime. You’ll be torn between chewing your favorite toy and giving those puppy eyes for some extra treats. Remember, there’s no harm in doing both!",
    "Your intensity will shine through today as you focus on digging the perfect hole in the backyard—or the couch! You’ll be extra protective of your favorite human, so be prepared to bark at anyone who dares to approach them.",
    "Your wanderlust is kicking in, and you’ll be eager to explore beyond the backyard. A walk will turn into an adventure—just remember, the world is big, but you’ve got tiny legs. Don’t hesitate to take a rest in the shade (or on someone’s lap).",
    "You’re feeling extra ambitious today—nothing can stop you from reaching the top of the couch (or the top of your human’s priority list). Your persistence will pay off, especially when you’re rewarded with an extra snack.",
    "You’re in an eccentric mood, and today’s all about surprises. You might suddenly decide to zoom around the house for no reason at all, or try to befriend the vacuum cleaner. Your unpredictability is what makes you so lovable.",
    "You’re in a dreamy state of mind today, perfect for long naps in the sun. Your sensitivity will have you tuning into your human’s emotions—when they’re happy, you’re happy. Just watch out for those sneaky bath times; they could interrupt your day of bliss!"
];

const dachshundcolor = ["Wild-Boar", "Blonde", "Red", "Black", "Chocolate", "Cream", "Dapple", "Piebald", "Isabella", "Blue", "Fawn"]

const dachshundsize = 
[ "Dwarf", "Standard", "Big boy Woezel", "mini-dwarf", "Charlie like", "Sausage", "Wiener", "Hotdog"]

const dachshundcoat = ["Shorthaired", "Longhaired", "Wirehaired"]

// Functions //
function getRandomDachshund() {

    const randomIndex = Math.floor(Math.random() * dachshunds.length);

    return dachshunds [randomIndex];
}


//Random Dachshund Size

function getRandomDachshundSize() {
    const randomIndex = Math.floor(Math.random() * dachshundsize.length);

    return dachshundsize[randomIndex];
}

//Random Dachshund Color

function getRandomDachshundColor() {
    const randomIndex = Math.floor(Math.random() * dachshundcolor.length);

    return dachshundcolor[randomIndex];
}


//Random Dachshund Coat

function getRandomDachshundCoat() {
    const randomIndex = Math.floor(Math.random() * dachshundcoat.length);

    return dachshundcoat[randomIndex];
}



function getDachshundMessage() {
    const randomCoat = getRandomDachshundCoat();
    const randomColor = getRandomDachshundColor();
    const randomSize = getRandomDachshundSize();
    const randomValue = getRandomDachshund();

    return `The holy Charchar thinks that you are a ${randomColor} colored ${randomSize} ${randomCoat} Dachshund! Your message for today: ${randomValue}`;
}
// Output //
