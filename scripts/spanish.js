const questions = {
    'Actual' : 'Current',
    'Afan' : 'Eagerness',
    'Afilado' : 'Sharp',
    'Agrio' : 'Bitter',
    'Agobiado' : 'Bothered',
    'Agotado' : 'Exhausted',
    'Agudo' : 'Sharp',
    'Alentador' : 'Encouraging',
    'Amargo' : 'Bitter',
    'Angustia' : 'Heartbreak',
    'Ansioso' : 'Anxious',
    'Apacible' :  'Gentle', 
    'Apestoso' :  'Smelly',
    'Asado' : 'Roasted',
    'Asombrado' : 'Amazed',
    'Astucia' : 'Cunning',
    'Aterrador' : 'Frightening',
    'Baboso' : 'Moronic',
    'Blando' : 'Soft',
    'Bondad' : 'Goodness',
    'Bronceado' : 'Tanned',
    'Cabezon' : 'Obstinate',
    'Colgantes' : 'Hanging',
    'Comestible' : 'Edible',
    'Comica' : 'Funny',
    'Confundido' : 'Confused',
    'Convincente' : 'Convincing',
    'Corriente' : 'Running',
    'Cortante' :  'Sharp',
    'Cotidiano' : 'Daily',
    'Crudo' : 'Raw',
    'Cuadrado' : 'Square',
    'Chiflado' : 'Off ones head',
    'Dependiente' : 'Dependent',
    'Deprimido' : 'Depressed',
    'Desafiante' : 'Defiant',
    'Desazón' : 'Discomfort',
    'Desconcertado' : 'Perplexed',
    'Descortes' : 'Discourteous',
    'Desechado' : 'Disposed',
    'Despiadado' : 'Merciless',
    'Desprevenida' : 'Unprepared',
    'Embarazada' : 'Pregnant',
    'Empapada' : 'Soaked',
    'Enojado' : 'Cross',
    'Enredado' : 'Tangled',
    'Escasez' : 'Shortage',
    'Estrecho' : 'Narrow',
    'Angosto' : 'Narrow',
    'Esponjoso' : 'Spongy',
    'Evitable' : 'Avoidable',
    'Expectativas' : 'Expectations',
    'Fatigado' : 'Weary',
    'Feroz' : 'Fierce',
    'Flaco' : 'Skinny',
    'Flexible' : 'Flexible',
    'Flojo' : 'Feeble or Limp', 
    'Fragil' : 'Fragile', 
    'Fresco' : 'Cool', 
    'Frito' : 'Fried',
    'Frustrado' : 'Frustrated',
    'Grave' : 'Severe',
    'Grueso' : 'Thick',
    'Helado' : 'Frozen',
    'Hervido' : 'Boiled',
    'Hinchado' : 'Swollen',
    'Humedo' : 'Humid',
    'Incapaz' : 'Incapable',
    'Inolvidable' : 'Unforgettable',
    'Insolencia' : 'Insolence',
    'Jaleo' : 'Racket',
    'Ladeado' : 'Lopsided',
    'Lastima' : 'Pity',
    'Liso' : 'Smooth',
    'Llamativo' : 'Flamboyant',
    'Llano' : 'Flat',
    'Maduro' : 'Mature',
    'Mudo' : 'Dumb',
    'Oloroso' : 'Smelly',
    'Oxidada' : 'Rusty',
    'Pasmado' : 'Stunned',
    'Pavoroso' : 'Dreadful',
    'Penoso' : 'Awful',
    'Perezoso' : 'Lazy',
    'Picante' : 'Spicy',
    'Promedio' : 'Average',
    'Provechoso' : 'Rewarding',
    'Podrido' : 'Rotten',
    'Quebrado' : 'Broken',
    'Quemado' : 'Burnt',
    'Quieto' : 'Quiet',
    'Recelo' : 'Distrust',
    'Redondo' : 'Round',
    'Rencorosos' : 'Spiteful',
    'Reparable' : 'Repairable',
    'Resentido' : 'Resentful',
    'Ruidoso' : 'Loud',
    'Sabio' : 'Wise',
    'Sabroso' : 'Tasty',
    'Salado' : 'Salty',
    'Salvaje' : 'Wild',
    'Sedoso' : 'Silky',
    'Sordo' : 'Deaf',
    'Ironia' : 'Irony',
    'Sorprendente' : 'Surprising',
    'Sospechoso' : 'Suspicious',
    'Suelto' : 'Loose',
    'Tibio' : 'Warm',
    'Tieso' : 'Tense',
    'Trastorno' : 'Upset',
    'Turbado' : 'Troubled',
    'Usado' : 'Used',
    'Vacilacion' : 'Hesitation',
    'Venenoso' : 'Poisonous',
    'Vergonzoso' : 'Embarrassed',
    'Afrontar' : 'To face, oppose',
    'Alabar' : 'To praise',
    'Aranar' : 'To claw',
    'Rascar' : 'To scratch',
    'Rayar' : 'To scrape',
    'Aportar' : 'To contribute',
    'Apretar' : 'To squeeze, hug, tighten',
    'Captar' : 'To capture',
    'Cepillar' : 'To brush',
    'Compadecer' : 'To pity',
    'Derramar' : 'To spill, pour',
    'Derretir' : 'To melt',
    'Derribar' : 'To overthrow, bring down',
    'Derrumbar' : 'To overthrow',
    'Desahogar' : 'To vent, relieve',
    'Deslumbrar' : 'To dazzle',
    'Despreciar' : 'To despise, scorn',
    'Desvelar' : 'To reveal',
    'Ejercer' : 'To exercise, exert',
    'Enfrentar' : 'To face, confront',
    'Ladear' : 'To tip, lean, incline',
    'Masticar' : 'To chew',
    'Menospreciar' : 'To belittle',
    'Morder' : 'To bite',
    'Parpadear' : 'To blink, flicker',
    'Pisar' : 'To step, tread',
    'Promover' : 'To assist, advance, stir, foster',
    'Rasgar' : 'To tear, rip',
    'Raspar' : 'To scrape',
    'Refunfunar' : 'To grumble',
    'Relucir' : 'To shine',
    'Rodar' : 'To roll',
    'Sobresalir' : 'To excel, protrude',
    'Solventar' : 'To resolve, settle',
    'Tender' : 'To tend',
    'Ubicar' : 'To locate',
    'Arrepentirse' : 'To be sorry, repent',
    'Advertir' : 'To warn, admonish',
    'Amenazar' : 'To threaten',
    'Esquivar' : 'To dodge, sidestep',
    'Martirizar' : 'To torment',
    'Reganar' : 'To quarrel, complain',
    'Repartir' : 'To distribute, handout',
    'Redactar' : 'To write, draw up',
    'Estropear' : 'To spoil, damage, ruin',
    'Ladrar' : 'To bark',
    'Arrugar' : 'To wrinkle, crease',
    'Arrebatar' : 'To snatch, grab',
    'Hojear' : 'Leaf through, skim-through',
    'Apartar' : 'To separate, divide',
    'Agarrar' : 'To grab',

    };
    
    const questionBank = Object.keys(questions)
    const questionAnswer = Object.values(questions)
    
    
    let questionWord = document.getElementById('question');
    let answerWord = document.getElementById('answer');
    let revealAnswer = document.getElementById('button1');
    let answerArray = [];
    let standbyWord = [];
    let savedWords = [];
    let line = ' - ';
    let space = ' ';
    let wordStorage = [];


    function test() {
        if (document.getElementById('toggle').innerHTML === "English to Spanish") {
          let randomSort = Math.floor(Math.random() * questionAnswer.length);
          questionWord.innerHTML = questionAnswer[randomSort];
          answerArray.push(questionBank[randomSort]);
          answerWord.style.display = 'none';
          standbyWord.push(space + questionAnswer[randomSort] + line + questionBank[randomSort]);
          document.getElementById('wordNumber').innerHTML = randomSort + 1;
        } else {
          let randomSort = Math.floor(Math.random() * questionBank.length);
          questionWord.innerHTML = questionBank[randomSort];
          answerArray.push(questionAnswer[randomSort]);
          answerWord.style.display = 'none';
          standbyWord.push(space + questionBank[randomSort] + line + questionAnswer[randomSort]);
          document.getElementById('wordNumber').innerHTML = randomSort + 1;
        }
    };
   
    function reveal(){
      answerWord.innerHTML = answerArray.pop();
      answerWord.style.display = 'inline-block';
    };

    function toggle(){
      let x = document.getElementById('toggle');
      if (x.innerHTML === "English to Spanish") {
        x.innerHTML = "Spanish to English"
      } else if (x.innerHTML === "Spanish to English") {
        x.innerHTML = "English to Spanish";
      };
    };

    function toggleOrder(){
      let x = document.getElementById('toggleOrder');
      if (x.innerHTML === "Random Order") {
        x.innerHTML = "Number Order"
      } else if (x.innerHTML === "Number Order") {
        x.innerHTML = "Random Order";
      };
    };

    
    function saveWord(){
      savedWords.push(standbyWord[standbyWord.length - 1]);
      document.getElementById('savedWordCount').innerHTML = savedWords.length;
      document.getElementById('listWord').innerHTML = "<li>" + savedWords.join("</li><li>") + "</li>";
      
      localStorage.setItem('savedWords', savedWords)
  
      
    }
  
  
    function clearAll(){
      localStorage.clear()
      location.reload()
    }