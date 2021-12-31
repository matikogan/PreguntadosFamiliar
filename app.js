const quizData = [
   {
        question: 'Cuanto mide el obelisco?',
        a: '302 metros',
        b: '189,5 mentros',
        c: '24,7 metros',
        d: '67,5 metros',
        correct: 'd'
    }, {
        question: 'En que pais queda Punta Cana?',
        a: 'Mexico',
        b: 'Honduras',
        c: 'Rep Dominicana',
        d: 'Es un pais',
        correct: 'c'
    }, {
        question: 'Cuanto mide lucas?',
        a: '2,02m',
        b: '192cm',
        c: '1984mm',
        d: '1.9m',
        correct: 'd'
    }, {
        question: 'A que le tiene miedo teo?',
        a: 'Bichos',
        b: 'Fuegos artificiales',
        c: 'Payasos',
        d: 'Todas las anteriores',
        correct: 'a'
    },{
        question: 'Cuantas pelotas le han llegado entrar a wilson en la boca?',
        a: '1',
        b: '4',
        c: '3',
        d: '2',
        correct: 'c'
    }, {
        question: 'Cuantos seguidores tiene Messi en instagram?',
        a: '50 millones',
        b: '490 millones',
        c: '295 millones',
        d: '308 millones',
        correct: 'c'
    },{
        question: 'Con cuantos chicos de basket hablo cata?',
        a: '2',
        b: '5',
        c: '12',
        d: 'Ninguna, cata es una chica nuy cuidadosa',
        correct: 'd'
    }, {
        question: 'Cual fue la velocidad maxima de gonzalo jugando al basket?',
        a: '2km x hora',
        b: '0.7km x hora',
        c: '0.0002KM x hora',
        d: 'mas rapido que la luz',
        correct: 'c'
    },{
        question: 'A que le tiene miedo teo?',
        a: 'Bichos',
        b: 'Fuegos artificiales',
        c: 'Payasos',
        d: 'Todas las anteriores',
        correct: 'a'
    }, {
        question: 'A que equipo se fue de joda Licha Lopez',
        a: 'Boca',
        b: 'Sarmiento',
        c: 'Real Pilar',
        d: 'Racing',
        correct: 'b'
    }, {
        question: 'Cual es el nombre completo de Lole?',
        a: 'Sebastian Yoel Cohen',
        b: 'Sebastian Yosef Cohen',
        c: 'Ricardo Manuel Garcia',
        d: 'Lole',
        correct: 'a'
    }, {
        question: 'Cual es el unico deporte que Hutch no es TAN bueno',
        a: 'Pool',
        b: 'Waterpolo',
        c: 'Patinaje sobre hielo',
        d: 'Ski',
        correct: 'c'
    },{
        question: 'De que juega messi?',
        a: 'Delantero',
        b: 'Volantero',
        c: 'Arquero',
        d: 'Todas las anteriores',
        correct: 'b'
    },{
        question: 'Cuanta plata le debe LK a more en misiones?',
        a: 'Entre 25 y 50',
        b: 'Entre 100 y 200',
        c: '5',
        d: 'Entre 25k y 50k',
        correct: 'c'
    }, {
        question: 'Cuantos tenedores le faltan a Pipe para terminarse el plato?',
        a: '2',
        b: '4',
        c: '7',
        d: 'Todas las anteriores',
        correct: 'b'
    }, {
        question: 'En que coinciden Rossi y Rafa a la hora de comer ensalada?',
        a: 'Comen todo',
        b: 'Los huevos bien todos',
        c: 'Que no tenga aceto',
        d: 'Mucha lechuga',
        correct: 'c',
    }, {
        question: 'Que integrantes de la flia son federades en Volleyball',
        a: 'More y Teo',
        b: 'Chachu y Lari',
        c: 'Cata y Camila',
        d: 'Julieta y Oli',
        correct: 'b'
    }, {
        question: 'Que personaje de Shrek dice la siguiente frase:"Gracias, muchisimas gracias, doy clases los jueves, no cobro mucho"',
        a: 'Fiona',
        b: 'Shrek',
        c: 'Lord Farkuad',
        d: 'Encantador',
        correct: 'c'
    },{
        question: 'De que famosa tienen las mellis una fanpage',
        a: 'Emi Mernes',
        b: 'Adison Raee',
        c: 'Selena Gomez',
        d: 'Charlie Damelio',
        correct: 'd'
    }, {
        question: 'Cuantos perros sumamos entre todas las flias concurrentes?',
        a: '10',
        b: '15',
        c: '28',
        d: '4',
        correct: 'a'
    }, {
        question: 'Cual fue el primer video de youtube que llego al millon de views?',
        a: 'Joga bonito Ronaldinho',
        b: 'Los huevos cubanos',
        c: 'Baby Shark',
        d: 'Despacito',
        correct: 'a'
    }, {
        question: 'Cual es el jugador mas lindo del mundo?',
        a: 'Prato',
        b: 'Pillud',
        c: 'Beckham',
        d: 'Teofilo Gutierrez',
        correct: 'b'
    }, {
        question: 'Nombre completo del zeide:',
        a: 'Segismundo Noe Garternstern',
        b: 'Sergio Garternstern',
        c: 'Santiego Do Nacimiento De Sousa Gartenstern',
        d: 'Zeide Gartenstern',
        correct: 'a'
    }, {
        question: 'Que premio recibio Rafael Cohen durante la cuarentena?',
        a: 'Concurso de Ingles',
        b: 'Concurso de Poemas',
        c: 'Concurso de Tenis',
        d: 'Concurso de fotografia',
        correct: 'd'
    },
]


const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const nextBtn = document.getElementById('nextBtn')


let currentQuiz = 0;
let score = 0;

loadQuiz();


function loadQuiz(){
    deseclectAnswers();

    const currentQuizData = quizData [currentQuiz];

    questionEl.innerHTML = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;


    
}

function getSelected() {
        
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deseclectAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false
    });
}


nextBtn.addEventListener('click', () => {

    //Chequear para ver la respuesta
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length) {
        loadQuiz();
        } else {
        quiz.innerHTML = `
        <div class=results> 
        <h2>Respondiste bien ${score}/${quizData.length} preguntas.</h2>
        </div>
        `
    }
   }    
});