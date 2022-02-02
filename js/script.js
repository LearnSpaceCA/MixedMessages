let mixedMessages = {
    birth: [
        '“The best of all things is something entirely outside your grasp: not to be born, not to be, to be nothing. But the second best thing for you is to die soon.” Friedrich Nietzsche',
        '“The death of dogma is the birth of morality.” Immanuel Kant',
        '“The nature of finite things as such is to have the seed of passing away as their essential being: the hour of their birth is the hour of their death.” G. W. Friedrich Hegel',
        '“Every man is born as many men and dies as a single one.” Martin Heidegger',
        '“The will of the individual is dwarfed by the will of the species - for every suicide, there are thousands of unwilling births.” Arthur Schopenhauer',
        '“The beginning is the most important part of the work.” Plato',
        '“It was like the beginning of life and laughter. It was the real meaning of the sun” Charles Bukowski',
        '“I opened myself to the gentle indifference of the world.” Albert Camus',
        '“New Beginnings are often disguised as painful endings.” Lao Tzu',
        '“All things were ready for us at our birth; it is we that have made everything difficult for ourselves, through our disdain for what is easy.” Seneca'
        ],
    life: [
        '“No one can construct for you the bridge upon which precisely you must cross the stream of life, no one but you yourself alone.” Friedrich Nietzsche',
        '“The busier we are, the more acutely we feel that we live, the more conscious we are of life.” Immanuel Kant',
        '“The valor that struggles is better than the weakness that endures.” G. W. Friedrich Hegel',
        '“If I take death into my life, I will free myself from the anxiety of death and the pettiness of life - and only then will I be free to become myself. ” Martin Heidegger',
        '“We can regard our life as a uselessly disturbing episode in the blissful repose of nothingness.” Arthur Schopenhauer',
        '“I am the wisest man alive, for I know one thing, and that is that I know nothing.” Plato',
        '“Life\'s as kind as you let it be.” Charles Bukowski',
        '”You will never live if you are looking for the meaning of life.” Albert Camus',
        '“Life is a series of natural and spontaneous changes. Don\'t resist them; that only creates sorrow. Let reality be reality.“ Lao Tzu',
        '“Life is like a play: it\'s not the length, but the excellence of the acting that matters.” Seneca'
    ],
    death: [
        '“To die proudly when it is no longer possible to live proudly.” Friedrich Nietzsche',
        '“If the truth shall kill them, let them die.” Immanuel Kant',
        '"It is solely by risking life that freedom is obtained" G. W. Friedrich Hegel',
        '“As soon as we are born, we are old enough to die.” Martin Heidegger',
        '“After your death, you will be what you were before your birth.” Arthur Schopenhauer',
        '“No one knows whether death may not be the greatest good that can happen to man.” Plato',
        '”Most people\'s deaths are a sham. There\'s nothing left to die.” Charles Bukowski',
        '“Since we\'re all going to die, it\'s obvious that when and how don\'t matter.” Albert Camus',
        '“Death never takes the wise man by surprise; He is always ready to go.” Jean de La Fontaine',
        '“Loss is not as bad as wanting more.” Lao Tzu',
        '“It is uncertain where Death will await you; there expect it everywhere.” Seneca'
    ],
    show() {
        let birthMessage = this.birth[Math.floor(Math.random() * Object.keys(this.birth).length)];
        let lifeMessage = this.life[Math.floor(Math.random() * Object.keys(this.life).length)];
        let deathMessage = this.death[Math.floor(Math.random() * Object.keys(this.death).length)];
        if (!deathMessage || !lifeMessage || !birthMessage) {
            return 'Quote missing in a category. Please fill it.';
        } else {
            let messageRabndom = "<p><strong>Birth: </strong>" + birthMessage + "</p>" + "<p><strong>Life: </strong>" + lifeMessage + "</p>" + "<p><strong>Death: </strong>" + deathMessage + "</p>";
            return messageRabndom;
        }
        
    }
}

// show the quote on opening the page
document.getElementById("quote").innerHTML = mixedMessages.show();

// button click change quote
document.getElementById("quoteButton").addEventListener("click", function() {
    document.getElementById("quote").innerHTML = mixedMessages.show();
}   );  // end of button click