// C:\Users\simon\Documents\Programming_Challenge\1_JAVASCRIPT

/*
DESCRIPTION:
  The goal of this project is to create a choose your own adventure using
  the Inquirer.js module. It will be created in the command line.
PREREQUISITES:
  - Node.js installed & added to PATH (includes npm)
  - Inquirer.js installed (npm install inquirer)
*/

const inq = require('inquirer');

const gamePrompts = [
  [{ // [0]['ans']
    type: 'input',
    name: 'ans',
    message: `What is your Hero's name?`
  }],
  [{ // [1]['ans']
    type: 'list',
    name: 'ans',
    message: 'Choose a title: ',
    choices: ['The Mighty', 'The Wise', 'The Beautiful', 'The Dark', 'The Brave']
  }],
  [{ // [2]['ans']
    type: 'list',
    name: 'ans',
    message: 'Where to?',
    choices: ['Forest', 'Castle', 'Cave', 'Town']
  }],
  [ // [3]
    [{ // [3][0] Forest
      type: 'list',
      name: 'ans',
      message: 'What to do?',
      choices: ['Rest', 'Make Fire', 'Explore']
    }],
    [{ // [3][1] Castle
      type: 'list',
      name: 'ans',
      message: 'How do you respond?',
      choices: ['Violently', 'Agreeably']
    }],
    [{ // [3][2] Cave
      type: 'list',
      name: 'ans',
      message: 'What to do?',
      choices: ['Hide', 'Attack', 'Talk', 'Run']
    }],
    [{ // [3][3] Town
      type: 'list',
      name: 'ans',
      message: 'Where to?',
      choices: ['Inn', 'Farm', 'Leave']
    }]
  ],
  [ // [4]
    [ // [4][0] Forest
      [{ // [4][0][0] Rest (Alive: Mighty, Dark, Brave)
        type: 'list',
        name: 'ans',
        message: 'What is the password?',
        choices: ['Darkness', 'Silence', 'Death']
      }],
      [{ // [4][0][1] Make Fire (Alive: ALL)
        type: 'list',
        name: 'ans',
        message: 'What do you tell him?',
        choices: ['The truth', 'A lie']
      }],
      [{ // [4][0][2] Explore (Alive: Wise, Dark, Brave)
        type: 'list',
        name: 'ans',
        message: 'What to do?',
        choices: ['Make Sacrifice', 'Retreat', 'Fight']
      }]
    ],
    [ // [4][1] Castle
      [{ // [4][1][0] Violently (Alive: Mighty, Brave, Dark)
        type: 'list',
        name: 'ans',
        message: 'Choose your weapon:',
        choices: ['Shield of Power', 'Sword of Gallantry', 'Weapon? Who needs those?']
      }],
      [{ // [4][1][1] Agreeably (Alive: Wise, Beautiful)
        type: 'list',
        name: 'ans',
        message: 'You explain it to them in a manner that is: ',
        choices: ['Calm and collected', 'Excited']
      }]
    ],
    [ // [4][2] Cave
      [{ // [4][2][0] Hide (Alive: Wise, Dark)
        type: 'list',
        name: 'ans',
        message: 'What spell do you cast?',
        choices: ['Excelsio!', 'Purgatorio!']
      }],
      [{ // [4][2][1] Attack (Alive: Mighty, Brave, Dark)
        type: 'list',
        name: 'ans',
        message: 'What do you do?',
        choices: ['Crush bridge!', 'Make your stand!', 'Jump into the depths!']
      }],
      [{ // [4][2][2] Talk (Alive: Wise, Beautiful)
        type: 'list',
        name: 'ans',
        message: 'Where do you turn?',
        choices: ['Right', 'Left']
      }],
      [{ // [4][2][3] Retreat (Alive: Dark, Wise)
        type: 'list',
        name: 'ans',
        message: 'Reflect on: ',
        choices: ['The Journey', 'The Ending']
      }]
    ],
    [ // [4][3] Town
      [{ // [4][3][0] Inn (Alive: Mighty, Beautiful)
        type: 'list',
        name: 'ans',
        message: 'What to you order?',
        choices: ['Beer', 'Rum']
      }],
      [{ // [4][3][1] Farm (Alive: Beautiful, Brave, Mighty)
        type: 'list',
        name: 'ans',
        message: 'Choose a pet:',
        choices: ['Sheep', 'Dog', 'Wolf']
      }],
      [{ // [4][3][2] Leave (Alive: Wise, Dark)
        type: 'list',
        name: 'ans',
        message: 'What to do?',
        choices: ['Confront', 'Run']
      }]
    ]
  ],
  [{ // [5]['ans'] Death
    type: 'list',
    name: 'ans',
    message: 'Where to?',
    choices: ['Heaven', 'Hell']
  }]
]

var quest0 = gamePrompts[0];
var quest1 = gamePrompts[1];
var quest2 = gamePrompts[2];
var quest3;
var name;
var clss;
inq.prompt(quest0).then(ans0 => { //Q0

  name = ans0['ans'];

  inq.prompt(quest1).then(ans1 => { //Q1

    clss = ans1['ans'];

    console.log(`${name} ${clss} is born! Best of luck on your adventure!`);

    inq.prompt(quest2).then(ans2 => { //Q2

      var destination = ans2['ans'];

      switch (destination) {
        case 'Forest':
          console.log(`${name} ${clss} heads into the deep and dark forest.
After walking many hours, the sun starts to set. ${name} finds a place to camp.
${name} worries about what to do before the sun goes down.`);
          quest3 = gamePrompts[3][0];
          break;
        case 'Castle':
        console.log(`${name} ${clss} finds themselves outside a majestic castle.
It appears to be inhabited. A voice is heard from one of the watchtowers,
asking why ${name} is here.`);
        quest3 = gamePrompts[3][1];
          break;
        case 'Cave':
        console.log(`${name} ${clss} ventures into a damp cave. Light can be seen
from what appears to be a bandit hideout. Inately, ${name} ${clss} knows
what to do.`);
        quest3 = gamePrompts[3][2];
          break;
        case 'Town':
        console.log(`${name} ${clss} strolls into the nearest town, expecting to find
some lively townsfolk. As it happens, the streets are empty and quiet. To
the left a gravel road leads to a nearby farm. Further down the street ${name}
can hear noice from the village inn.`);
        quest3 = gamePrompts[3][3];
      }
      inq.prompt(quest3).then(ans3 => { //Q3

        var dec3 = ans3['ans'];
        var quest4;
        switch (dec3) {
          case 'Rest':
            switch (clss) {
              case 'The Mighty':
                console.log(`Laying down on the wet ground, ${name} ${clss} suffers
through a horribly cold night. Thankfully ${name} is not called "${clss}" for nothing.
As ${name} wakes up, a cryptic-looking bird asks for "the password". Whatever that means.`);
                quest4 = gamePrompts[4][0][0];
                break;
              case 'The Wise':
                console.log(`Laying down on the wet ground, ${name} ${clss} suffers
a horribly cold night. Although strong in younger years, ${name}'s body is unable
to stand the cold. Shivering uncontrollably, ${name} whithers away in the night before
inevitably dying.`);
                quest4 = gamePrompts[5];
                break;
              case 'The Beautiful':
                console.log(`Laying down on the wet ground, ${name} ${clss} suffers
a horribly cold night. Although pretty, ${name}'s skinny body is unable
to insulate from the unbearable cold. Shivering uncontrollably, ${name} whithers
away in the night before inevitably dying.`);
                quest4 = gamePrompts[5];
                break;
              case 'The Dark':
                console.log(`Laying down on the wet ground, ${name} ${clss} suffers
through a horribly cold night. Thankfully, ${name}'s thick robe protects against the cold.
As ${name} wakes up, a cryptic-looking bird asks for "the password". Whatever that means.`);
              quest4 = gamePrompts[4][0][0];
                break;
              case 'The Brave':
                console.log(`Laying down on the wet ground, ${name} ${clss} suffers
through a horribly cold night. Thankfully ${name} is not called "${clss}" for nothing.
It is going to take more than a cold night to take down a warrior, ${name} thinks.
As ${name} wakes up, a cryptic-looking bird asks for "the password". Whatever that means.`);
                quest4 = gamePrompts[4][0][0];
            }
            break;
          case 'Make Fire':
            switch (clss) {
              case 'The Mighty':
              case 'The Beautiful':
              case 'The Brave':
                console.log(`Collecting a few dead leaves and some sticks, ${name} ${clss}
is able to start a fire. After a couple of hours, a shadowy figure appears from
the woods, asking in a menacing tone what ${name} is doing burning in his forest.`);
                quest4 = gamePrompts[4][0][1];
                break;
              case 'The Wise':
              case 'The Dark':
                console.log(`Conjuring up an old fire spell, ${name} ${clss}
is able to ignite a fire. After a couple of hours, a shadowy figure appears from
the woods, asking in a menacing tone what ${name} is doing practicing magic in his forest.`);
                quest4 = gamePrompts[4][0][1];
            }
            break;
          case 'Explore':
            switch (clss) {
              case 'The Mighty':
              case 'The Beautiful':
                console.log(`${name} ${clss} ventures further into the forest,
hoping to find shelter. Exhausted from the walk and unable to see in the dark,
${name} trips and falls. The last thing ${name} feels is a heavy breathing on the
side of his neck. ${name} ${clss} died a silent death, lonely in the forest.`);
                quest4 = gamePrompts[5];
                break;
              case 'The Wise':
                console.log(`${name} ${clss} ventures further into the forest,
hoping to find shelter. Exhausted from the walk, ${name} trips and falls. Quickly
spawning a protective fire ward, ${name} stands in awe as a massive dark beast stands
before him.`);
              quest4 = gamePrompts[4][0][2];
                break;
              case 'The Dark':
                console.log(`${name} ${clss} ventures further into the forest,
hoping to find shelter. ${name} senses the presence of a magical creature and prepares
for battle. In the dark of the night ${name} ${clss} sees the contours of the
mythical Beast of Prethence!`)
                quest4 = gamePrompts[4][0][2];
                break;
              case 'The Brave':
                console.log(`${name} ${clss} ventures further into the forest,
hoping to find shelter. Exhausted from the walk, ${name} trips and falls. Quickly
rolling to the side, ${name} stands in awe as a massive dark beast stands
before him.`);
                quest4 = gamePrompts[4][0][2];
            }
            break;
          case 'Violently': // [4][1][0] Violently (Alive: Mighty, Brave, Dark)
            switch (clss) {
              case 'The Mighty':
                console.log(`${name} ${clss} tells the watchman that it is none
of his business. In response, the sounds of an alarm bell and the scrambling
of weapons are heard. ${name} ${clss} screams a war-cry of epic proportions
and storms the castle gate. Running towards the majestic structure, ${name}
reaches over the shoulder to grab a weapon.`);
                quest4 = gamePrompts[4][1][0];
                break;
              case 'The Wise':
                console.log(`${name}'s sarcastic response is met with a hail of
arrows. Before ${name} has time to respond, the arrows penetrate the skin.
The good intentions of ${name} ${clss} resulted in a painful and dragged out death.`);
                quest4 = gamePrompts[5];
                break;
              case 'The Beautiful':
                console.log(`${name}'s sassy response is met with a hail of
arrows. Before ${name} has time to respond, the arrows penetrate the skin.
The actual intentions of ${name} ${clss} were never known but ended in a painful
and dragged out death.`);
                quest4 = gamePrompts[5];
                break;
              case 'The Dark':
              console.log(`${name} tells the watchman that "${clss}" doesn't answer
to anyone but the Lord of the Underworld. In response, the sounds of an alarm bell
and the scrambling of weapons are heard. ${name} ${clss} calmly approaches the castle.
As ${name} reaches over the shoulder to grab a weapon, arrows whistle by.`);
              quest4 = gamePrompts[4][1][0];
                break;
              case 'The Brave':
                console.log(`${name} tells the watchman that "${clss}" doesn't answer
to anyone but the king. In response, the sounds of an alarm bell and the scrambling
of weapons are heard. ${name} ${clss} gets ready for battle and adopts a stern face.
zig-zaging between arrows, ${name} aims to climb the wall. Running towards the majestic
structure, ${name} reaches over the shoulder to grab a weapon.`);
                quest4 = gamePrompts[4][1][0];
            }
            break;
          case 'Agreeably': // [4][1][1] Agreeably (Alive: Wise, Beautiful)
            switch (clss) {
              case 'The Mighty':
              case 'The Dark':
              case 'The Brave':
                console.log(`${name} politely tells the watchman that he is a travelling
salesman here to sell some wares. Suspecting ${name} of lying to him, the watchman
quitely alerts a few guards. As "${clss}" enters the town, ${name} is unexpectedly
stabbed in the back by a scared guard. As ${name} bleeds out on the street, people
gather around to watch.`);
                quest4 = gamePrompts[5];
                break;
              case 'The Wise':
                console.log(`${name} politely tells the watchman that an old magi is
here to see the duke. Due to ${name}'s mild-mannered speech and innocent appearance,
the watchman opens the gate without question. As ${name} enters the castle, a guard asks
for an explanation again.`);
                quest4 = gamePrompts[4][1][1];
                break;
              case 'The Beautiful':
                console.log(`${name} politely tells the watchman that a young bard is
here to see the duke. Due to ${name}'s mild-mannered speech and innocent appearance,
the watchman opens the gate without question. As ${name} enters the castle, a guard asks
for an explanation again.`);
                quest4 = gamePrompts[4][1][1];
            }
            break;
          case 'Hide':
            switch (clss) { // [4][2][0] Hide (Alive: Wise, Dark)
              case 'The Mighty':
              case 'The Beautiful':
              case 'The Brave':
                console.log(`${name} ${clss} attempts to hide behind a rock, unfortunately
however, this is heard by the bandits. Consequently, they sneak up on and
strangle ${name}. It was a quick death, albeit lacking flair.`);
                quest4 = gamePrompts[5];
                break;
              case 'The Wise':
                console.log(`${name} ${clss} casts a dispersion spell, and
sneaks up on the bandit hideout. The screams of captives echoes in the cave. ${name}
prepares an unpleasant surprise for the bandits with a spell.`);
                quest4 = gamePrompts[4][2][0];
                break;
              case 'The Dark':
                console.log(`${name} ${clss} wears a dark robe, providing excellent cover as
${name} sneaks up on the bandit hideout. The screams of captives echoes in the cave. ${name}
prepares an unpleasant surprise for the bandits with a spell.`);
                quest4 = gamePrompts[4][2][0];
            }
            break;
          case 'Attack': // [4][2][1] Attack (Alive: Mighty, Brave, Dark)
            switch (clss) {
              case 'The Mighty':
                console.log(`${name} ${clss} screams and storms the bandit camp, taking
the bastards by surprise. After beating down a handful of them, "${clss}" is pushed onto an
old bridge above a massive cavern, surrounded.`);
                quest4 = gamePrompts[4][2][1];
                break;
              case 'The Wise':
              case 'The Beautiful':
                console.log(`${name} ${clss} makes a valient attempt at battling then
bandits, but is eventually overpowered. Head is cut clean of by a bandit, as "${clss}" takes a
last breath.`);
                quest4 = gamePrompts[5];
                break;
              case 'The Dark':
                console.log(`${name} ${clss} quietly approaches the bandit camp, taking
them by surprise. After draining the souls of a handful of their poor bodies, "${clss}" is
pushed onto an old bridge above a massive cavern, surrounded.`);
                quest4 = gamePrompts[4][2][1];
                break;
              case 'The Brave':
                console.log(`${name} ${clss} quietly approaches the bandit camp, taking
them by surprise. After cutting down a handful of them, "${clss}" is pushed onto an
old bridge above a massive cavern, surronded.`);
                quest4 = gamePrompts[4][2][1];
            }
            break;
          case 'Talk': // [4][2][2] Talk (Alive: Wise, Beautiful)
            switch (clss) {
              case 'The Mighty':
              case 'The Brave':
                console.log(`${name} ${clss} attempts to talk to the bandits, but they
are having none of it. As the situation escalates ${name} attacks and falls right into
the bandits bear trap, bleeding out in the hideout`);
                quest4 = gamePrompts[5];
                break;
              case 'The Wise':
              case 'The Beautiful':
                console.log(`Thinking ${name} is a lost and harmless soul, "${clss}"
is allowed to pass by the hideout undisturbed. Crossing an old bridge and going
deeper into the cave, ${name} faces a pair of crossroads.`);
                quest4 = gamePrompts[4][2][2];
                break;
              case 'The Dark':
                console.log(`${name} ${clss} attempts to talk to the bandits, giving
them time to escape. As "${clss}" enters the hideout, an anti-magic bromaldite dart is fired
from out of view and ${name} goes down in a painful symphony.`);
                quest4 = gamePrompts[5];
            }
            break;
          case 'Run': // [4][2][3] Run (Alive: Dark, Wise)
            switch (clss) {
              case 'The Mighty':
              case 'The Brave':
              case 'The Beautiful':
                console.log(`${name} ${clss} attempts to run out of the cave, but
it is dark and ${name} runs straight into a sharp stalactite, breaking the skull in
two pieces. There was no getting up.`);
                quest4 = gamePrompts[5];
                break;
              case 'The Dark':
              case 'The Wise':
                console.log(`${name} ${clss} runs out of the cave, startled but
in good spirits. As the light approaches, ${name} looks back on the adventure and reflects.`);
                quest4 = gamePrompts[4][2][3];
            }
            break;
          case 'Inn':
            switch (clss) { // [4][3][0] Inn (Alive: Mighty, Beautiful) order
              case 'The Mighty':
                console.log(`${name} ${clss} enters the inn and is immediately slammed
to the ground by a large, burly and drunk man with a mustache. "${clss}" slams
Mr. Mustache's head to the ground and stands up without hesitation, ready to get a drink.`);
                quest4 = gamePrompts[4][3][0];
                break;
              case 'The Wise':
              case 'The Brave':
              case 'The Dark':
                console.log(`${name} ${clss} enters the inn and is immediately slammed
to the ground by a large, burly and drunk man with a mustache. Mr. Mustache slams
${name}'s head to the ground and stands up. "${clss}" never saw the light of day
again.`);
                quest4 = gamePrompts[5];
                break;
              case 'The Beautiful':
                console.log(`${name} ${clss} enters the inn and narrowly avoids getting
slammed to the ground by a large, burly and drunk man with a mustache. Mr. Mustache
apologizes incoherently while "${clss}" orders a drink.`);
                quest4 = gamePrompts[4][3][0];
            }
            break;
          case 'Farm':
            switch (clss) { // [4][3][1] Farm (Alive: Beautiful, Brave, Mighty) pet
              case 'The Mighty':
              case 'The Beautiful':
              case 'The Brave':
                console.log(`${name} ${clss} sees some animals while walking towards
  the farm. There is a white sheep sneaking around, a dog loudly running around, and
  among the trees the face of a lone wolf can be seen.`);
                quest4 = gamePrompts[4][3][1];
                break;
              case 'The Wise':
                console.log(`${name} ${clss} walks straight into the farmhouse,
  expecting a warm reception, only to find "The Dark" - archenemy of ${name} - standing
  there with a cold gaze. The farmer and his family are nowhere to be found, but their
  souls have likely been drained. "The Dark" smiles and with a snap "${clss}" is disintegrated.`);
                quest4 = gamePrompts[5];
                break;
              case 'The Dark':
                console.log(`${name} ${clss} walks straight into the farmhouse,
expecting a warm reception, only to find "The Wise" - archenemy of ${name} - standing
there with a smile. The farmer and his family are nowhere to be found, but the
presence of their souls cannot be felt. Probably they ran away. "The Wise" smiles
and with a snap "${clss}" is evaporated in a beam of light.`);
                quest4 = gamePrompts[5];
            }
            break;
          case 'Leave':
            switch (clss) { // [4][3][2] Leave (Alive: Wise, Dark)  confront
              case 'The Mighty':
              case 'The Beautiful':
              case 'The Brave':
                console.log(`${name} ${clss} leave the town, only to find it surrounded
by an army of ghouls, and they are looking for flesh. As ${name} turns around,
a sharp pain in the side is felt. A lone ghoul has made his first bite. The
horde closes in on our hero. Such was the fate of ${name} ${clss}.`);
                quest4 = gamePrompts[5];
                break;
              case 'The Wise':
                console.log(`${name} ${clss} leave the town, only to find it surrounded
by an army of ghouls, and they are looking for flesh.`);
                quest4 = gamePrompts[4][3][2];
                break;
              case 'The Dark':
                console.log(`${name} ${clss} leave the town, only to find it surrounded
by an army of priest-warriors, looking to exterminate evil.`);
                quest4 = gamePrompts[4][3][2];
                break;
            }
        }
        inq.prompt(quest4).then(ans4 => {
          var choice4 = ans4['ans'];
            if (choice4 == 'Heaven') {
              console.log(`${name} ${clss} tried to go to heaven but on the way there
was horribly ambushed by a flock of birds and subsequently fell down into the depths of hell.`);

            } else if (choice4 == 'Hell') {
              console.log(`${name} ${clss} tried to go to hell but on the way there
was horribly ambushed by a group of earthworms and subsequently fled to heaven.`);
            } else {
              switch (choice4) { // (Alive: Mighty, Dark, Brave)
                case 'Darkness':
                  if (clss == 'The Dark') {
                    console.log(`The bird flies away. Suddenly a rumbling can be heard
in the distance. ${name} decides to investigate. In a clearing, a large crack has
opened in the earth. ${name} feels the stream of souls. The destructive power is awesome.
${name} The Dark feels invincible!

You have unlocked the achievement: "The Dark Meister"`);

                  } else {
                    console.log("Wrong Password. The bird takes you straight to hell.");
                  }
                  break;
                case 'Silence':
                  if (clss == 'The Mighty') {
                    console.log(`The bird flies away. Suddenly a rumbling can be heard
in the distance. ${name} decides to investigate. In a clearing, a large crack has
opened in the earth. ${name} appears to grow three-fold in size!

You have unlocked the achievement: "The Mighty Giant"`);

                  } else {
                    console.log("Wrong Password. The bird takes you straight to hell.");
                  }
                  break;
                case 'Death':
                  if (clss == 'The Brave') {
                    console.log(`The bird flies away. Suddenly a rumbling can be heard
in the distance. ${name} decides to investigate. In a clearing, a large crack has
opened in the earth. ${name} feels refreshed and becomes capable of superhuman feats!

You have unlocked the achievement: "The Superhuman"`);

                  } else {
                    console.log("Wrong Password. The bird takes you straight to hell.");
                  }
                  break;
                case 'The truth':
                  console.log(`${name} tells the shadowy figure that the burning is
a necessity for survival in the cold forest. Altough annoyed, the shadowy figure leaves
you alone.

You have unlocked the achievement: "The Traveller"`);
                  break;
                case 'A lie':
                  console.log(`${name} tells the shadowy figure that the burning is
summoning a protective forest spirit. The shadowy figure is not buying it. Straight to
hell with ${name} ${clss}, no takebacks.

You have unlocked the achievement: "The Liar"`);
                  break;
                case 'Make Sacrifice': // (Alive: Wise, Dark, Brave)
                  if (clss == 'The Dark') {
                    console.log(`${name} makes a shallow cut on the arm, leaving
a pool of blood on the forest ground. Immediately, the Beast of Prethence is tamed.
${name} and the new-found companion ride out of the forest, ready to reap the souls
of the unworthy!

You have unlocked the achievement: "The Dark Beast Master"`);

                  } else {
                    console.log(`Bad Move. The Dark Monster can maul a person to pieces before even getting a chance
to make a sacrifice. It deprives ${name} of the afterlife.`);
                  }
                  break;
                case 'Retreat':
                  if (clss == 'The Wise') {
                    console.log(`${name} has read about creatures like these before
and makes a strategic retreat, using the protective ward as a distraction. Soon
${name} is out of the forest, scared but alive.

You have unlocked the achievement: "The Wise Warden"`);

                  } else {
                    console.log(`Bad Move. The Dark Monster can maul a person to pieces before even getting a chance
to make a retreat. It deprives ${name} of the afterlife.`);
                  }
                  break;
                case 'Fight':
                  if (clss == 'The Brave') {
                    console.log(`${name} ${clss} acts quickly and effectively.
In a matter of seconds, the dark beast is being attacked from all sides in a
flurry of spinning attacks and stabs. As the beast dies, ${name} is filled with
the strength of a bear and the agility of a lion!

You have unlocked the achievement: "The Brave Hunter"`);

                  } else {
                    console.log(`Bad Move. The Dark Monster can maul a person to pieces before even getting a chance
to fight. It deprives ${name} of the afterlife.`);
                  }
                  break;
                case 'Shield of Power': // (Alive: Mighty, Brave, Dark)
                  if (clss == 'The Mighty') {
                    console.log(`The Shield of Power violently breaks through the
castle gates. The guards don't stand a chance. ${name} demands an audience with
the duke, which is immidiately granted. Nowadays the duke's head can be seen on a spike
outside ${name} Castle.

You have unlocked the achievement: "The Mighty Conquerer"`);

                  } else {
                    console.log(`Bad Choice. ${name} is unable to effectively use the Shield of Power
to fight. Arrow-related injuries eventually take the life of ${name}`);
                  }
                  break;
                case 'Sword of Gallantry':
                  if (clss == 'The Brave') {
                    console.log(`The Sword of Gallantry easily gets ${name} over the
castle walls. The guards don't stand a chance. ${name} demands an audience with
the duke, which is immidiately granted. The duke is pardoned in exchange for knighthood
for ${name}.

You have unlocked the achievement: "The Brave Knight"`);

                  } else {
                    console.log(`Bad Choice. ${name} is unable to effectively use the Sword of Gallantry
to fight. Arrow-related injuries eventually take the life of ${name}`);
                  }
                  break;
                case 'Weapon? Who needs those?':
                  if (clss == 'The Dark') {
                    console.log(`Arrows deflected, this Dark Warrior makes the
blood of the guards freeze. Practically walking through the walls, ${name} annihalates
ever soul in the whole castle. What a rush.

You have unlocked the achievement: "The Dark Butcher."`);

                  } else {
                    console.log(`Bad Choice. ${name} is unable to effectively use just hands
to fight. Arrow-related injuries eventually take the life of ${name}`);
                  }
                  break;
                case 'Calm and collected': // (Alive: Wise, Beautiful)
                  if (clss == 'The Wise') {
                    console.log(`The guard accepts the explanation and lets ${name}
go. The Wise is now free to roam the castle.

You have unlocked the achievement: "The Wise Trader"`);

                  } else {
                    console.log(`Guard doesn't believe ${name}. ${name} dies a
lonely death in the castle cellar.`);
                  }
                  break;
                case 'Excited':
                  if (clss == 'The Beautiful') {
                    console.log(`The guard accepts the explanation and lets ${name}
go. The Beautiful is now free to roam the castle. Eventually, ${name} gets a job
as a castle servant.

You have unlocked the achievement: "The Beautiful Servant"`);

                  } else {
                    console.log(`Guard doesn't believe ${name}. ${name} dies a
lonely death in the castle cellar.`);
                  }
                  break;
                case 'Excelsio!': // (Alive: Wise, Dark)
                  if (clss == 'The Wise') {
                    console.log(`Energy flows through the veins of "The Wise."
The power of goodness and loyalty materialize into a massive shining knight, killing
the bandits and saving the captives!

You have unlocked the achievement: "The Wise Summoner"`);

                  } else {
                    console.log(`${name} can't handle the destructive power of the
evil curse and perishes.`);
                  }
                  break;
                case 'Purgatorio!':
                  if (clss == 'The Dark') {
                    console.log(`Energy flows through the veins of "The Dark."
The power of evil and greed materialize into a massive dragon, killing
the bandits. ${name} saves the captives from the wrath of the dragon, and escape the cave.

You have unlocked the achievement: "The Dark Hero"`);

                  } else {
                    console.log(`${name} can't handle the destructive power of the
good spell and perishes.`);
                  }
                  break;
                case 'Crush bridge!': //  (Alive: Mighty, Brave, Dark)
                  if (clss == 'The Mighty') {
                    console.log(`With devastating force "The Mighty" shakes the
poor foundations of the old bridge. Finally, it cracks. The bandits fall to their death,
screaming as they go. Now, ${name} The Mighty is stuck in a cave with no food and
no way out. At least the captives are free to escape.

You have unlocked the achievement: "The Mighty Sacrifice"`);

                  } else {
                    console.log(`${name} tries desperately to crush the bridge,
but it won't budge. A few of the bandits are slain, but they keep coming. "${name}"
makes a final stand, but is struck by the blade and perishes.`);
                  }
                  break;
                case 'Make your stand!':
                  if (clss == 'The Brave') {
                    console.log(`Without hesitation, "The Brave" charges the
bandits, catching them off-guard. With new-found agility and strength, ${name}
defeats the bandits single-handedly. The captives are freed and grateful. When leaving
the cave, they thank ${name} for saving them by offering food and gold from their
local village.

You have unlocked the achievement: "The Brave Savior"`);

                  } else {
                    console.log(`A few of the bandits are slain, but they keep coming.
"${clss}" makes a final stand, but is struck by the blade and perishes.`);
                  }
                  break;
                case 'Jump into the depths!':
                  if (clss == 'The Dark') {
                    console.log(`The bandits can only watch on as "The Dark"
falls into the deep and seemingly endless cavern. A sigh of relief is heard from
one of the bandits. It's over.

No.

Out of the depths, the screams of a million cursed souls instantly cripple the
bandits and their captives. They feel an uncontrallable force draw them
towards the edge of the cavern. They jump. Every single one, bandit or captive.
From the depths, ${name} ${clss} emerges, with dark bony wings on the back, ready
to reap the souls of mankind.

You have unlocked the achievement: "The Dark Angel"`);

                  } else {
                    console.log(`The darkness absorbs ${name} before losing consciousness.
The bandits are taken completely by surprise. ${name} was never missed.`);
                  }
                  break;
                case 'Right': // wise, beautiful
                  if (clss == 'The Wise') {
                    console.log(`"The Wise" carefully considers the two options,
but eventually goes to the right. After walking for a long time, ${name} sees
daylight. Emerging into the world, ${name} reflects on the adventure and smiles.

You have unlocked the achievement: "The Wise Survivor"`);

                  } else {
                    console.log(`Turning right, ${name} enters a narrow path
that only seems to go deeper and deeper. Collapsing of exhaustion, death takes its
grip and "The Beautiful" perishes.`);
                  }
                  break;
                case 'Left':
                  if (clss == 'The Beautiful') {
                    console.log(`"The Beautiful" carefully considers the two options,
but eventually goes to the left. After walking for a long time, ${name} sees
daylight. Emerging into the world, ${name} reflects on the adventure and smiles.

You have unlocked the achievement: "The Beautiful Survivor"`);

                  } else {
                    console.log(`Turning left, ${name} enters a narrow path
that only seems to go deeper and deeper. Collapsing of exhaustion, death takes its
grip and "The Wise" perishes.`);
                  }
                  break;
                case 'The Journey': // Wise, Dark
                  if (clss == 'The Wise') {
                    console.log(`Looking back on past decisions, "The Wise" is
filled with a sense of determination, before humbly leaving the cave for good.

You have unlocked the achievement: "The Wise Introspector"`);

                  } else {
                    console.log(`"The Dark" thinks about the past journey, but
gets incredibly frustrated. Filled with a sense of prideful vindictiveness, ${name}
leads a miserable life before dying alone and unwanted.`);
                  }
                  break;
                case 'The Ending':
                  if (clss == 'The Dark') {
                    console.log(`Looking towards the future, "The Dark" is
filled with a sense of determination, before confidently leaving the cave for good.

You have unlocked the achievement: "The Dark Visionary"`);

                  } else {
                    console.log(`"The Wise" thinks about the future, but
gets incredibly frustrated. Filled with a sense of prideful vindictiveness, ${name}
leads a miserable life before dying alone and unwanted.`);
                  }
                  break;
                case 'Beer': // Mighty, Beautiful
                  if (clss == 'The Beautiful') {
                    console.log(`${name} orders a glass of beer. It turns out to be
pretty good. "The Beautiful" enjoys an otherwise pleasant evening at the inn,
socializing with the other patrons.

You have unlocked the achievement: "The Beautiful Socialite"`);

                  } else {
                    console.log(`"The Mighty" orders a beer, and is immidiately
laughed at by the other patrons. "You are too predictable ${name}," they say.
A man emerges from behind only to hand "The Mighty" an empty vial of poison.
${name}'s eyes get blurry. The poison slays "The Mighty" within minutes and the
mysterious patrons head towards the Cave.`);
                  }
                  break;
                case 'Rum':
                  if (clss == 'The Mighty') {
                    console.log(`${name} orders a glass of rum. It turns out to be
pretty good. "The Mighty" enjoys an otherwise pleasant evening at the inn,
drinking with the other patrons.

You have unlocked the achievement: "The Mighty Drinker"`);

                  } else {
                    console.log(`"The Beautiful" orders a beer, and is immidiately
laughed at by the other patrons. "You are too predictable ${name}," they say.
A man emerges from behind only to hand "The Beautiful" an empty vial of poison.
${name}'s eyes get blurry. The poison slays "The Beautiful" within minutes and the
mysterious patrons head towards the Cave.`);
                  }
                  break;
                case 'Sheep': // The Mighty, The Brave, The Beautiful
                  if (clss == 'The Beautiful') {
                    console.log(`${name} walks towards the sheep, hoping to
feel the pleasant sensation of wool. Upon reaching the sheep, a magical blast
emerges from the farmhouse. Time appears to slow down as the heroic sheep leaps in front
of "The Beautiful," shielding the blast. ${name} runs away and pleads to never eat
lamb ever again.

You have unlocked the achievement: "The Beautiful Vegan"`);

                  } else {
                    console.log(`Congrats. The pet sheep is a pet sheep. ${name}
leads an insignificant life as a farmer before eventually starving to death.`);
                  }
                  break;
                case 'Dog':
                  if (clss == 'The Brave') {
                    console.log(`${name} walks towards the dog, hoping to
feel the pleasant sensation of fur. Upon reaching the dog, a magical blast
emerges from the farmhouse. Time appears to slow down as the heroic dog leaps in front
of "The Brave," shielding the blast. ${name} tries desperately to save the dog,
but all seems lost.

But then.

An ancient rune appears on the forehead of the dog, the rune of Thor! This magical
dog grows to the size of a house, picks up our hero and marches back towards the
Town, only to find it surrounded by a pack of ghouls. The ghouls don't stand a chance,
and the Town is saved!

You have unlocked the achievement: "The Brave Rider"`);

                  } else {
                    console.log(`Congrats. The dog is a dog. ${name}
leads an insignificant life as a farmer before eventually starving to death.`);
                  }
                  break;
                case 'Wolf':
                  if (clss == 'The Mighty') {
                    console.log(`${name} walks towards the wolf, hoping to
feel the powerful sensation of the animal. Upon reaching the wolf, a magical blast
emerges from the farmhouse. Time appears to slow down as the heroic wolf leaps in front
of "The Mighty," shielding the blast. ${name} picks up the hurt wolf and runs into
the forest. ${name} lives together with a pack of wolves, learning their ways and
gradually turns less human and more animal.

You have unlocked the achievement: "The Mighty Werewolf"`);

                  } else {
                    console.log(`Congrats. The wolf is a wolf. It tears ${name}
into small bits and pieces before munching down on the body.`);
                  }
                  break;
                case 'Confront': // Dark, Wise
                  if (clss == 'The Dark') {
                    console.log(`${name} emerges from the shadows. The priest-warriors
start to conjure spells and put down healing wards. ${name} The Dark absorbs every
spell, painfully accepting their punishments. Then, in a single move, The Dark
converts the pain into a massive beam of red magic, annihalating the priest-warriors.
The warriors appear to have been lead by a certain Bishop of Cathwich.

You have unlocked the achievement: "The Dark Magi"`);

                  } else {
                    console.log(`"The Wise" tries to confront the ghouls, but they prove
too many, and ${name} perishes.`);
                  }
                  break;
                case 'Run':
                  if (clss == 'The Wise') {
                    console.log(`${name} runs away from the ghouls, and runs into
a group of priest-warriors lead by the Bishop of Cathwich. Together, they summon healing wards
and shoot magical spells towards the ghouls. The ghouls don't stand a chance, and retreat
back into the forest. The priests go back to the town church and request service
from the local minister, which is granted. Food is served and ${name} sleeps pleasantly.

You have unlocked the achievement: "The Wise Priest"`);

                  } else {
                    console.log(`"The Dark" tries to run from the priest-warriors, but they prove
too observant. ${name} gets hit with an unexpected stun spell and perishes.`);
                  }
                  break;
              }
            }
        })
      })
    })
  })
})




// // Q1
// var quest1 = gamePrompts[1];
// var clss;
// inq.prompt(quest1).then(ans1 => {
//   clss = ans1;
// });

// R1
