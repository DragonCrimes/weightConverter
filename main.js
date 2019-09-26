document.querySelector('#output').style.visibility = 'hidden';

document.querySelector('#kgInput').addEventListener('input', function(e) {
    document.querySelector('#output').style.visibility = 'visible';
    let kg = e.target.value;
    document.querySelector('#gramsOutput').innerHTML = kg*1000;
    document.querySelector('#lbsOutput').innerHTML = kg*2.2046;
    document.querySelector('#ozOutput').innerHTML = kg*35.274;
});

