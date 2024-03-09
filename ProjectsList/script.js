document.body.addEventListener('keyup', (event) => 
    {
        playSound( event.code.toLowerCase() );
    });

document.querySelector('.composer button').addEventListener('click', () =>
{
    let songChosen = document.querySelector('#input').value; 

    if(songChosen !== '')
    {
        let arrayWithSoundKeys = songChosen.split('');
        playSoundComposition(songChosen);
    }
});

function playSound(sound)
{
    let pressedKey = document.querySelector(`#s_${sound}`);
    let findElementInDiv = document.querySelector(`div[data-key="${sound}"]`)

    if(pressedKey)
    {
        pressedKey.currentTime = 0;
        pressedKey.play();
    }

    if(findElementInDiv)
    {
        findElementInDiv.classList.add('active');

        setTimeout(() => {
            findElementInDiv.classList.remove('active');
        }, 275);
    }
}

function playSoundComposition(sounds)
{
    let delay = 0;
    for(let soundKey of sounds)
    {
        setTimeout(() => {
            playSound(`key${soundKey}`);
        }, delay);

        delay += 300;
    }
}