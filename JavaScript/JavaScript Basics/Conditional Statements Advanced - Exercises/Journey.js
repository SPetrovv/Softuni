function journey(input) {
    let budget = Number(input[0]);
    let season = input[1].toLowerCase();
    let destination = null;
    let spent = null;
    let place = null;
    
    if(budget <= 100)
    {
        destination = 'Bulgaria';
        if(season == 'summer')
        {
            spent = budget * 0.30;
            place = 'Camp';
        }
        else
        {
            spent = budget * 0.70;
            place = 'Hotel';
        }
    }
    else if(budget > 100 && budget <= 1000)
    {
        destination = 'Balkans';
        if(season == 'summer')
        {
            spent = budget * 0.40;
            place = 'Camp';
        }
        else
        {
            spent = budget * 0.80;
            place = 'Hotel';
        }
    }
    else if(budget > 1000)
    {
        destination = 'Europe';
        spent = budget * 0.90;
        place = 'Hotel';
    }
    
    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${spent.toFixed(2)}`);
}