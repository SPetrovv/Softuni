function wordTracker(input) {
    let wordsToSearch = input.shift().split(' ');
    let words = {};

    for (let word of wordsToSearch) {
        words[word] = 0;
    }

    for (let word of input) {
        if (Object.keys(words).includes(word)) {
            words[word] += 1;
        }
    }

    let sorted = Object.entries(words).sort((a, b) => b[1] - a[1]);

    for (let [key, value] of sorted) {
        console.log(`${key} - ${value}`);
    }
}

wordTracker([
    'this sentence',
    'In','this','sentence','you','have','to'
    ,'count','the','occurances','of','the'
    ,'words','this','and','sentence','because',
    'this','is','your','task'
    ]);