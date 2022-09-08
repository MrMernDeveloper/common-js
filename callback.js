function greeting(greetingHandler,name) {
    greetingHandler(name);
}


function greetMorning(name) {
    console.log('good morning', name)
}

function greetEvening(name) {
    console.log('good evening', name)
}
function greetNight(name) {
    console.log('good night', name)
}

greeting(greetMorning,'tom hanks')
greeting(greetMorning,'tom Brady')
greeting(greetMorning,'tom Crush')
greeting(greetEvening,'tom salman')
greeting(greetEvening,'tom solaiman')
greeting(greetNight,'tom kazi')