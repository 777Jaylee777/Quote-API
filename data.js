const quotes = [
  {
    quote: 'We build our computer (systems) the way we build our cities: over time, without a plan, on top of ruins.',
    person: 'Ellen Ullman'
  },
  {
    quote: 'The best thing about a boolean is even if you are wrong, you are only off by a bit.',
    person: 'Anonymous'
  },
  {
    quote: `If it's a good idea, go ahead and do it. It's much easier to apologize than it is to get permission.`,
    person: 'Grace Hopper'
  },
  {
    quote: 'The city\'s central computer told you?  R2D2, you know better than to trust a strange computer!',
    person: 'C-3PO'
  },
  {
    quote: 'I have always wished for my computer to be as easy to use as my telephone; my wish has come true because I can no longer figure out how to use my telephone.',
    person: 'Bjarne Stroustrup'
  },
  {
    quote: 'Understand well as I may, my comprehension can only be an infinitesimal fraction of all I want to understand.',
    person: 'Ada Lovelace'
  },
  {
    quote: 'Java is to JavaScript as ham is to hamster.',
    person: 'Jeremy Keith'
  },
  {
    quote: `The most dangerous phrase in the language is, "We've always done it this way."`,
    person: 'Grace Hopper'
  },
  {
    quote: 'As soon as we started programming, we found to our surprise that it wasn\'t as easy to get programs right as we had thought.  Debugging had to be discovered.  I can remember the exact instant when I realized that a large part of my life from then on was going to be spent in finding mistakes in my own programs.',
    person: 'Maurice Wilkes'
  },
  {
    quote: 'Learning to write programs stretches your mind, and helps you think better, creates a way of thinking about things that I think is helpful in all domains.',
    person: 'Bill Gates'
  },
  {
    quote: 'What one programmer can do in one month, two programmers can do in two months.',
    person: 'Fred Brooks'
  },
  {
    quote: 'The Internet? Is that thing still around?',
    person: 'Homer Simpson'
  },
  {
    quote: 'If you tell me precisely what it is a machine cannot do, then I can always make a machine which will do just that.',
    person: 'Jon von Neumann'
  },
  {
    quote: "The unexamined life is not worth living", 
    person: "Socrates"
  },
  {
    quote: "Whereof one cannot speak, thereof one must be silent", 
    person: "Ludwig Wittgenstein"
  },
  {
    quote: "Entities should not be multiplied unnecessarily", 
    person: "William of Ockham"
  },
  {
    quote: "The life of man (in a state of nature) is solitary, poor, nasty, brutish, and short", 
    person: "Thomas Hobbes"
  },
  {
    quote: "I think therefore I am (Cogito, ergo sum)", 
    person: "René Descartes"
  },
  {
    quote: "He who thinks great thoughts, often makes great errors", 
    person: "Martin Heidegger"
  },
  {
    quote: "We live in the best of all possible worlds", 
    person: "Gottfried Wilhelm Leibniz"
  },
  {
    quote: "What is rational is actual and what is actual is rational", 
    person: "G. W. F. Hegel"
  },
  {
    quote: "God is dead! He remains dead! And we have killed him.", 
    person: "Friedrich Nietzsche"
  },
  {
    quote: "There is but one truly serious philosophical problem, and that is suicide", 
    person: "Albert Camus"
  },
  {
    quote: "One cannot step twice in the same river", 
    person: "Heraclitus"
  },
  {
    quote: "The greatest happiness of the greatest number is the foundation of morals and legislation", 
    person: "Jeremy Bentham"
  },
  {
    quote: "To be is to be perceived (Esse est percipi)", 
    person: "Bishop George Berkeley"
  },
  {
    quote: "Happiness is not an ideal of reason but of imagination", 
    person: "Immanuel Kant"
  },
  {
    quote: "No man's knowledge here can go beyond his experience", 
    person: "John Locke"
  },
  {
    quote: "God is not willing to do everything, and thus take away our free will and that share of glory which belongs to us", 
    person: "Niccolo Machiavelli"
  },
  {
    quote: "Liberty consists in doing what one desires", 
    person: "John Stuart Mill"
  },
  {
    quote: "It is undesirable to believe a proposition when there is no ground whatever for supposing it true", 
    person: "Bertrand Russell"
  },
  {
    quote: "Even while they teach, men learn", 
    person: "Seneca the Younger"
  },
  {
    quote: "There is only one good, knowledge, and one evil, ignorance", 
    person: "Socrates"
  },
  {
    quote: "If God did not exist, it would be necessary to invent Him", 
    person: "Voltaire"
  },
  {
    quote: "This is patently absurd; but whoever wishes to become a philosopher must learn not to be frightened by absurdities", 
    person: "Bertrand Russell"
  },
  {
    quote: "One cannot conceive anything so strange and so implausible that it has not already been said by one philosopher or another", 
    person: "René Descartes"
  },
  {
    quote: "Leisure is the mother of philosophy", 
    person: "Thomas Hobbes"
  },
  {
    quote: "Philosophy is a battle against the bewitchment of our intelligence by means of language", 
    person: "Ludwig Wittgenstein"
  },
  {
    quote: "There is only one thing a philosopher can be relied upon to do, and that is to contradict other philosophers", 
    person: "William James"
  },
  {
    quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit", 
    person: "Aristotle" 
},
  {
    quote: "Only one man ever understood me, and he didn\'t understand me", 
    person: "G. W. F. Hegel" 
},
  {
    quote: "The mind is furnished with ideas by experience alone", 
    person: "John Locke" 
},
  {
    quote: "Life must be understood backward. But it must be lived forward", 
    person: "Søren Kierkegaard" 
},
  {
    quote: "Science is what you know. Philosophy is what you don't know", 
    person: "Bertrand Russell" 
},
  {
    quote: "Metaphysics is a dark ocean without shores or lighthouse, strewn with many a philosophic wreck", 
    person: "Immanuel Kant" 
},
  {
    quote: "Philosophy is at once the most sublime and the most trivial of human pursuits", 
    person: "William James" 
},
  {
    quote: "History is Philosophy teaching by examples", 
    person: "Thucydides" 
},
  {
    quote: "He who is unable to live in society, or who has no need because he is sufficient for himself, must be either a beast or a god", 
    person: "Aristotle" 
},
  {
    quote: "You can discover more about a person in an hour of play than in a year of conversation", 
    person: "Plato" 
},
  {
    quote: "Things alter for the worse spontaneously, if they be not altered for the better designedly", 
    person: "Francis Bacon" 
},
  {
    quote: "All that is necessary for the triumph of evil is that good men do nothing", 
    person: "Mistakenly attributed to Edmund Burke" 
},
  {
    quote: "Is man merely a mistake of God's? Or God merely a mistake of man's?", 
    person: "Friedrich Nietzsche" 
},
  {
    quote: "I would never die for my beliefs because I might be wrong", 
    person: "Bertrand Russell" 
},
  {
    quote: "Religion is the sign of the oppressed ... it is the opium of the people", 
    person: "Karl Marx" 
},
  {
    quote: "Happiness is the highest good", 
    person: "Aristotle" 
},
  {
    quote: "If men were born free, they would, so long as they remained free, form no conception of good and evil", 
    person: "Baruch Spinoza" 
},
  {
    quote: "The greater the difficulty, the more glory in surmounting it", 
    person: "Epicurus" 
},
  {
    quote: "Whatever is reasonable is true, and whatever is true is reasonable", 
    aperson: "G. W. F. Hegel" 
},
  {
    quote: "Morality is not the doctrine of how we may make ourselves happy, but of how we may make ourselves worthy of happiness", 
    person: "Immanuel Kant" 
},
  {
    quote: "Man is condemned to be free", 
    person: "Jean-Paul Sartre" 
},
  {
    quote: "It is one thing to show a man that he is in error, and another to put him in possession of truth", 
    person: "John Locke" 
},
  {
    quote: "I don\'t know why we are here, but I\'m pretty sure it is not in order to enjoy ourselves", 
    person: "Ludwig Wittgenstein" 
},
{
  quote: "That man is wisest who, like Socrates, realizes that his wisdom is worthless",
  person: "Plato"
},
{
  quote: "The only thing I know is that I know nothing",
  person: "Socrates"
},
{
  quote: "All is for the best in the best of all possible worlds",
  person: "Voltaire (in parody of Leibniz)"
},
{
  quote: "The function of prayer is not to influence God, but rather to change the nature of the one who prays",
  person: "Søren Kierkegaard"
},
{
  quote: "Man is born free, but is everywhere in chains",
  person: "Jean-Jacques Rousseau"
},
{
  quote: "Man will never be free until the last king is strangled with the entrails of the last priest",
  person: "Denis Diderot"
},
{
  quote: "If you would be a real seeker after truth, it is necessary that at least once in your life you doubt, as far as possible, all things",
  person: "René Descartes"
},
{
  quote: "Happiness lies in virtuous activity, and perfect happiness lies in the best activity, which is contemplative",
  person: "Aristotle"
},
{
  quote: "I fear not the man who has practiced 10,000 kicks once, but I fear the man who had practiced one kick 10,000 times.",
  person: "Bruce Lee"
},
{
  quote: "I can control my passions and emotions if I can understand their nature",
  person: "Spinoza"
},
{
  quote: "Philosophers have hitherto only interpreted the world in various ways; the point, however, is to change it",
  person: "Karl Marx"
},
{
  quote: "It is wrong always, everywhere and for everyone, to believe anything upon insufficient evidence",
  person: "W. K. Clifford"
},
{
  quote: "Virtue is nothing else than right reason",
  person: "Seneca the Younger"
},
{
  quote: "Freedom is secured not by the fulfilling of one's desires, but by the removal of desire",
  person: "Epictetus"
},
{
  quote: "In everything, there is a share of everything",
  person: "Anaxagoras"
},
{
  quote: "A little philosophy inclineth man's mind to atheism; but depth in philosophy bringeth men’s minds about to religion",
  person: "Sir Francis Bacon"
},
{
  quote: "The brave man is he who overcomes not only his enemies but his pleasures",
  person: "Democritus"
},
{
  quote: "Good and evil, reward and punishment, are the only motives to a rational creature",
  person: "John Locke"
},
{
  quote: "To do as one would be done by, and to love one's neighbor as oneself, constitute the ideal perfection of utilitarian morality",
  person: "John Stuart Mill"
},
{
  quote: "Everything that exists is born for no reason, carries on living through weakness, and dies by accident",
  person: "Jean-Paul Sartre"
},
{
  quote: "Man is the measure of all things",
  person: "Protagoras"
},
{
  quote: "We are too weak to discover the truth by reason alone",
  person: "St. Augustine"
},
{
  quote: "The mind is furnished with ideas by experience alone",
  person: "John Locke"
},
{
  quote: "You must be shapeless, formless, like water.",
  person: "Bruce Lee"
}
];

module.exports = {
  quotes
};
