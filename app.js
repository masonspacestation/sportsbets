console.log("Are you ready for some sportsball?")

let bank = 100

const players = [
  {
    name: "D'Marcus Williums",
    teamNumber: 0,
    emoji: '🏃‍♂️',
    skill: 10
  },
  {
    name: "Tyroil Smoochie-Wallace",
    teamNumber: 0,
    emoji: '🤾‍♂️',
    skill: 30
  },
  {
    name: "Jackmerius Tacktheratrix",
    teamNumber: 0,
    emoji: '🏇',
    skill: 88
  },
  {
    name: "Javaris Jamar Javarison-Lamar",
    teamNumber: 0,
    emoji: '🏌️‍♀️',
    skill: 15
  },
  {
    name: "D'Pez Poopsie",
    teamNumber: 0,
    emoji: '🏋️‍♂️',
    skill: 77
  },
  {
    name: "D'Jasper Probincrux III",
    teamNumber: 0,
    emoji: '🏌️‍♂️',
    skill: 21
  },
  {
    name: "Leoz Maxwell Jilliumz",
    teamNumber: 0,
    emoji: '🤾',
    skill: 5
  },
  {
    name: "Hingle McCringleberry",
    teamNumber: 0,
    emoji: '🏂',
    skill: 99
  },
  {
    name: "L'Carpetron Dookmarriot",
    teamNumber: 0,
    emoji: '🧘‍♀️',
    skill: 50
  },
  {
    name: "Xmus Jaxon Flaxon-Waxon",
    teamNumber: 0,
    emoji: '🚶‍♀️',
    skill: 1
  },
  {
    name: "Saggitariutt Jefferspin",
    teamNumber: 0,
    emoji: '🏋️‍♀️',
    skill: 61
  },
  {
    name: "Quatro Quatro",
    teamNumber: 0,
    emoji: '🤺',
    skill: 34
  },
  {
    name: "X-Wing @Aliciousness",
    teamNumber: 0,
    emoji: '🏄',
    skill: 71
  },
  {
    name: "Bisquiteen Trisket",
    teamNumber: 0,
    emoji: '🧜‍♂️',
    skill: 76
  },
  {
    name: "Scoish Velociraptor Maloish",
    teamNumber: 0,
    emoji: '🤸',
    skill: 47
  },
  {
    name: "Donkey Teeth",
    teamNumber: 0,
    emoji: '⛹️‍♀️',
    skill: 23
  },
  {
    name: "T.J. A.J. R.J. Backslashinfourth V",
    teamNumber: 0,
    emoji: '🕴️',
    skill: 58
  },
  {
    name: "Firstname Lastname",
    teamNumber: 0,
    emoji: '💃',
    skill: 99
  },
  {
    name: "Dan Smith",
    teamNumber: 0,
    emoji: '🧍‍♂️',
    skill: 3
  },
  {
    name: "Tiger",
    teamNumber: 0,
    emoji: '🐅',
    skill: 100
  },
]

//this was an attempt to create new objects, or a new array
// 
//  let team1 = {
//   name: '',
//   teamNumber: 1,
//   emoji: '',
//   skill: 0
// }

// let team2 = {
//   name: '',
//   teamNumber: 2,
//   emoji: '',
//   skill: 0
// }



// players.forEach((player) => {
//   return player.teamNumber == 1,
//     team1 += player
// let team2 = []
// players.forEach((player) => {
//   return player.teamNumber == 2,
//     team2 += player.name
// })

function draftTeams() {
  console.log("Drafting Teams")

  players.forEach((player) => {

    let randomNumber = Math.floor(Math.random() * 10)

    if (randomNumber >= 5) {
      player.teamNumber = 2

    } else {
      player.teamNumber = 1

    }
  })

  drawTeam1()
  drawTeam2()
}


// done the new way — activates drawAll()
function drawTeam1() {
  let team1Roster = players.filter((player) => {
    return player.teamNumber == 1
  })
  drawAll(team1Roster)
  addTeam1Skills(team1Roster)
  let team1skillelm = addTeam1Skills()
}


// done the old way — all-inclusive function
function drawTeam2() {
  let team2Roster = ''
  let team2skills = 0

  for (let i = 0; i < players.length; i++) {
    let player = players[i]

    if (player.teamNumber == 2) {
      team2Roster += player.emoji
      console.log('1');
      team2skills += player.skill
      console.log('2');
    }
  }
  console.log(team2Roster)

  let team2RosterElm = document.getElementById("team-2-roster")
  team2RosterElm.innerText = team2Roster
  addTeam2Skills(team2skills)
}



function addTeam1Skills(team) {
  let team1Skills = team.filter((player) => {
    console.log(player.skill, 'team1skill')
    return player.skill
  })
  team1Skills += player.skill
  console.log('🏆', team1Skills)
  // let player = players[i]

  // if (player.teamNumber == 1) {
  //   team1Skills += player.skill
  //   console.log(team1Skills);
  // }
  // }
}

function addTeam2Skills(team) {
  console.log('team2skills!:', team)
  // let team2Skills = 0
  // for (let i = 0; i < players.length; i++) {
  //   let player = players[i]

  //   if (player.teamNumber == 2) {
  //     team2Skills += player.skill
  //     console.log(team2Skills);
  //   }
  // }
}
// let team1Points = 0,
// let playerPoints = players.filter((player) => {
//   return player.teamNumber
//   team1Points += playerPoints
// })

function drawAll(team) {
  // drawAll() currently only used for team1
  let team1HTML = ''

  team.filter((player) => {
    console.log('💿', player.name, player.teamNumber, player.skill)
    team1HTML += `<span title="${player.name}">${player.emoji}</span>`
  })

  // return team1HTML
  let team1Roster = document.getElementById("team-1-roster")
  team1Roster.innerHTML = team1HTML
}

function team1CombinedSkill() {
  let team1CombinedSkillElm = 0

  let team1CombinedSkill = players.filter((player) => {
    player.teamNumber == 1
    return team1CombinedSkillElm
    // team1CombinedSkillElm += 
  })

  console.log(team1CombinedSkill);
  console.log(team1CombinedSkillElm);

}

function team2CombinedSkill() {
  let team2CS = players.filter((player) => player.teamNumber == 2)

}

function betTeam1(amount) {
  console.log("placed bet for 1", amount)


}

draftTeams()