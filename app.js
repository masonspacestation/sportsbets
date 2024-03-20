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




function draftTeams() {
  console.log("Drafting Teams")

  players.forEach((player) => {
    // console.log(player.emoji)

    let randomNumber = Math.floor(Math.random() * 10)
    // console.log("🐟", randomNumber)

    if (randomNumber >= 5) {
      player.teamNumber = 2
      // console.log(player.name, player.teamNumber)
    } else {
      player.teamNumber = 1
      // console.log(player.name, player.teamNumber)
      // drawTeam1()

    }
  })
  drawTeam1()
  drawTeam2()
}

let team1Players = players.filter((player) => {
  return player.teamNumber == 1
})

// done the new way
function drawTeam1() {
  let team1Players = players.filter((player) => {
    return player.teamNumber == 1
  })
  drawAll(team1Players)
}

function drawAll(team) {
  let team1HTML = ''

  team.forEach((player) => {
    console.log('💿', player.name, player.teamNumber)
    team1HTML += `<span>${player.emoji}</span>`
  })

  // return team1HTML
  let team1Roster = document.getElementById("team-1-roster")
  team1Roster.innerHTML = team1HTML
}

// done the old way
function drawTeam2() {
  let team2Roster = ''
  for (let i = 0; i < players.length; i++) {
    let player = players[i]

    if (player.teamNumber == 2) {
      team2Roster += player.emoji
    }
  }
  console.log(team2Roster)

  let team2RosterElm = document.getElementById("team-2-roster")
  team2RosterElm.innerText = team2Roster
}

function betTeam1(amount) {
  console.log("placed bet for 1", amount)


}


draftTeams()