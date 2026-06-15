import type { HauntStory } from '../types';

/**
 * The 50 haunts of the Traitor's Tome (Betrayal at House on the Hill, 2010),
 * imported faithfully from the rulebook. Each ALL-CAPS heading on a haunt page
 * is split into its own `sections` entry; monster stat blocks go in `monsters`.
 *
 * Story/rules text is kept in the original English — translate later if needed.
 * Haunts 12, 31, 34, 43, 50 are resolved in the Secrets of Survival booklet and
 * only carry a short pointer here.
 */
export const TRAITOR_TOME: HauntStory[] = [
  {
    id: 1,
    title: 'The Mummy Walks',
    intro:
      'The wall slides away to reveal an ancient sarcophagus covered with glowing hieroglyphs. A raspy voice slides into your mind: "I lost my bride more years ago than you could comprehend... Now my love is reborn to me. Mortal hands shall not keep me from reuniting with her." Your friends must die so the lovers can be reunited.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer is still in the game but has turned traitor.\nPut the large circular Mummy token and a pentagonal item token (the Sarcophagus) in the room with you.\nYou lose the Girl card and any bonuses from it. Instead, put a small magenta monster token (the Girl) in any room on the same floor as the haunt reveal and at least 5 tiles away from the Mummy (or as far as possible).\nWhen an explorer enters the Girl token\'s room, that explorer takes the Girl card.\nIf you get the Girl, you can give the Girl token to the Mummy while in the same room; the Mummy then takes custody of the Girl.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'They\'re trying to banish the Mummy back to the land of the dead.',
      },
      {
        heading: 'You Win When',
        body: 'The Mummy has custody of the Girl, is carrying the Ring or the Holy Symbol, and returns with them to the room with the Sarcophagus. You also win when all the heroes are dead.\nIf neither the Ring nor the Holy Symbol is in play, the next time you discover an omen room, search the omen stack and draw either card, then shuffle that stack.',
      },
      {
        heading: 'The Mummy',
        body: 'If the Mummy rolls a 0 or 1 for movement, it can use a secret passage to move to any space in the house.\nThe Mummy can carry items and take custody of the Girl, but they don\'t affect its traits. You can transfer items and the Girl to the Mummy in the same space.',
      },
      {
        heading: 'The Mummy Must Do This During Its Turn',
        body: 'The Mummy must attack one explorer in the same room (if it can).',
      },
      {
        heading: 'Special Attack Rules',
        body: 'The Mummy makes Might attacks but inflicts Speed damage until its opponent\'s Speed is at its lowest number (this attack can\'t lower it to the skull). After that, the opponent takes Might damage until dead.\nWhen the Mummy defeats an opponent by 2 or more, it can steal an item (or take custody of the Girl) instead of inflicting damage.\nThe Mummy is immune to Speed attacks (Revolver, Dynamite).',
      },
      {
        heading: 'If You Win',
        body: 'The mummy picks up the wailing girl in its linen-clad arms and breathes into her mouth. "My priest, my love... we are together once more," croons the girl, "and soon the world will worship us..."',
      },
    ],
    monsters: [{ name: 'The Mummy', stats: 'Speed 3 · Might 8 · Sanity 5' }],
  },

  {
    id: 2,
    title: 'The Séance',
    intro:
      'A dread chill descends and mist rises from the floor. "I must rest... put my soul to rest... or die..." The spirit board you carry throbs with your heartbeat, and the mist coils into letters: KILL THEM ALL.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer is still in the game but has turned traitor.\nSet aside a small purple monster token (the Ghost), 1 triangular Knowledge Roll token, and 1 triangular Sanity Roll token.\nIf the Pentagram Chamber isn\'t in the house, search the room stack for it and put it next to a basement doorway at least 5 tiles away (or as far as possible), then shuffle.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'They are trying to summon the Ghost before you do. If they succeed, they gain control of it and a quest; if they fail, they try to destroy it.',
      },
      {
        heading: 'You Win When',
        body: 'All the heroes are dead, regardless of who summons the Ghost first.',
      },
      {
        heading: 'How to Summon the Ghost',
        body: 'You race the explorers to summon the Ghost by conducting a séance.\nWhile you have the Spirit Board, you can attempt a Knowledge roll or a Sanity roll of 5+. You can attempt only one such roll per turn. On a success, take the matching trait token. When you\'ve collected one Knowledge Roll and one Sanity Roll token, you summon the Ghost.\nIf you summon before the heroes, put the Ghost token next to your figure. If the heroes succeed first, they tell you what happens.',
      },
      {
        heading: 'If You Summon the Ghost First',
        body: 'Ghost\'s declaration (read aloud): "I will have my revenge against the living!"\nYou control the Ghost if you summon it first, or if the heroes summon it first but fail their quest. If your explorer dies, you still control the Ghost.\nThe Ghost must move toward a hero each turn, attacking if it can.\nAt the end of your first turn controlling it, the house begins collapsing (first the Attic, or any unoccupied upper room). After that, at the end of each explorer\'s turn, that explorer chooses a new room to collapse. Turn collapsed tiles face down; a room can\'t collapse unless adjacent to another collapsed room (doors not required). Occupied collapsing rooms kill everyone in them. Collapse upper → ground (start Grand Staircase) → basement (start Basement Landing).\nOnly the Ghost can move through collapsed rooms; it can also move through walls (not floors/ceilings).',
      },
      {
        heading: 'Special Attack Rules',
        body: 'No one can attack until the séance is complete. If the heroes control the Ghost, they explain their attack rules.\nThe Ghost makes Sanity attacks (mental damage). Only a hero with the Ring, or in the Pentagram Chamber, can attack it, using Sanity only.\nIf the Ghost attacks and rolls lower than a hero, it is not harmed.',
      },
      {
        heading: 'If You Win',
        body: 'The mists fill the house. You glide through them, silent as the ghost beside you. Now there are two spirits destined to haunt this place together. Forever.',
      },
    ],
    monsters: [{ name: 'The Ghost', stats: 'Speed 4 · Sanity 6' }],
  },

  {
    id: 3,
    title: 'Frog-Leg Stew',
    intro:
      'From the shadows, a voice entices you: "You\'ll help me, won\'t you, my plump little goose? Nasty people all over my house, and they\'ve stolen my darling book, too! Help me punish them, my sweetling!"',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer is still in the game but has turned traitor.\nSet aside a small red monster token (the Cat) and 4 small orange monster tokens (Frogs).\nPut the large circular Witch token in the Entrance Hall.\nPut one pentagonal item token (a Root) in each of the Conservatory, the Larder, and the Kitchen (now or when discovered; don\'t announce). You can\'t pick up Root tokens.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'They have the Witch\'s spellbook (the Book card). Get it from them — they might use it to overcome the Witch\'s invulnerability.',
      },
      {
        heading: 'You Win When',
        body: 'All the heroes are either dead or turned into Frogs.',
      },
      {
        heading: 'You Must Do This During Your Turn',
        body: 'When the first explorer is turned into a Frog, put the Cat token in the haunt-reveal room. It moves on the next monster turn toward the nearest Frog. If the Cat defeats a Frog with a Might attack in the same room, it eats the Frog (killing that hero). The Cat ignores carried Frogs.',
      },
      {
        heading: 'The Witch\'s Spells',
        body: 'The Witch casts one spell each monster turn (and, if you hold the Book, you may also cast either of the first two on each of your turns).\nSkin of Frog: On a hero in the same room. Both make Sanity rolls; if the Witch rolls higher, that hero becomes a Frog, drops all items, and has Might and Knowledge reduced to their lowest above-skull values. A Frog can\'t attack, draw cards, or discover rooms; another explorer can carry it like an item. Neither you nor the Witch can attack a Frog.\nBreath of Dragon: On any explorer in line of sight or the same room — 2 dice of physical damage that can\'t be resisted or reduced.\nWings of Raven: Move the Witch to any room (or move you instead if she\'s with you).',
      },
      {
        heading: 'Special Attack Rules',
        body: 'The Witch is invulnerable: she can\'t be attacked and can\'t attack normally, but casts one spell each turn. She can\'t pick up items.',
      },
      {
        heading: 'If You Win',
        body: '"One little froggy, two little froggies... go on, my poppet, feed your bad froggy friends to the nice kitty-witty. There\'s my precious gosling!"',
      },
    ],
    monsters: [
      { name: 'The Cat', stats: 'Speed 3 · Might 3 · Sanity 2' },
      { name: 'The Witch', stats: 'Speed 4 · Might 3 · Sanity 6' },
    ],
  },

  {
    id: 4,
    title: 'The Web of Destiny',
    intro:
      'A dark presence crawls inside your mind. You are yourself, yet you are also it — the spider. A plump mortal morsel already wriggles in your web. Others will try to stop the birth... unless you stop them first.',
    sections: [
      {
        heading: 'Right Now',
        body: 'With 5–6 players, your explorer turns traitor. With 3–4 players, your explorer has been eaten — drop all items and remove your figure.\nPut the large circular Spider token in the room with the explorer who has the Bite card.\nSet up the Turn/Damage track with a clip on 1 to track time.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'The haunt revealer is caught in a sticky web, infested with giant spider eggs, and can\'t move.',
      },
      {
        heading: 'You Win When',
        body: 'Either the Spider\'s eggs hatch (on turn 9) or all the heroes are dead.',
      },
      {
        heading: 'You Must Do This',
        body: 'At the end of each of your turns, advance the Turn/Damage track to the next number.',
      },
      {
        heading: 'The Spider Must Do This During Its Turn',
        body: 'The Spider must move toward an explorer who isn\'t the haunt revealer and attack if possible. Neither you nor the Spider can attack the revealer unless the eggs have been destroyed.\nThe Spider\'s traits change by turn: T1 Spd0/Mgt2/San5, T2 Spd1/Mgt2/San5, T3 Spd2/Mgt4/San5, T4 Spd4/Mgt4/San5, T5 Spd5/Mgt5/San5, T6 Spd6/Mgt7/San5, T7+ Spd6/Mgt8/San5.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'Once per Spider attack, you may reroll each die that comes up blank (only once).',
      },
      {
        heading: 'If You Win',
        body: '...your spawn feasts on the tasty, tasty humans.',
      },
    ],
    monsters: [{ name: 'The Spider', stats: 'Traits scale by turn (see table)' }],
  },

  {
    id: 5,
    title: 'I Was a Teenage Lycanthrope',
    intro:
      'Moonlight streams in. You stare up at the full moon. Your mind screams as it dies, even as your body howls with delight and newfound power.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer turns traitor. Put a small red monster token on your character card.\nYou are now a Werewolf. Drop all items; lose custody of the Girl/Madman (set cards aside, adjust traits, use tokens — they stay in the room).\nRaise any trait below its starting value to that value. Then increase your traits by 1 point per hero in the game (total points, not per trait).',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'You probably knew something, but you\'re now too wolfish to remember.',
      },
      {
        heading: 'You Win When',
        body: 'All the heroes are either dead or have changed into Werewolves.',
      },
      {
        heading: 'You Must Do This',
        body: 'At the beginning of each of your turns, gain 1 Might or 1 Speed. You can\'t raise a trait above the maximum on your card.',
      },
      {
        heading: 'The Dog',
        body: 'Put a small orange monster token in your room (the Dog, a monster you control). You don\'t need the Dog card.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'When you or the Dog defeats a hero, that hero takes damage normally. At the start of each of that hero\'s later turns, they roll Sanity 4+ to resist lycanthropy; on a fail they become a Werewolf and read this haunt.\nA Werewolf\'s traits can\'t be reduced to the skull except by the special item in Secrets of Survival; all other damage is halved (round up).\nNeither a Werewolf nor the Dog can carry items or use elevators.\nIf you win and another Werewolf killed a hero, that player also wins.',
      },
      {
        heading: 'If You Win',
        body: 'You glide out into the gardens, enjoying the soothing tang of blood. Tonight\'s hunt has only just begun.',
      },
    ],
    monsters: [{ name: 'Dog', stats: 'Speed 4 · Might 4 · Sanity 3' }],
  },

  {
    id: 6,
    title: 'The Floating Eye',
    intro:
      'Your masters are finally here. A giant, floating eye descends from the ship and hovers above you. It is time for your friends to bow before their new lords.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer turns traitor.\nWith 3–4 players set aside one small orange Alien token; with 5–6 players set aside two. Put the Alien token(s) in the haunt-reveal room, plus a pentagonal item token (the Spaceship).\nPut your figure on the Spaceship token. Your explorer is now out of the game (with all items and omens), awaiting transport.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'They\'re trying to keep you from abducting them and have a way to free themselves from the Aliens\' control.',
      },
      {
        heading: 'You Win When',
        body: 'All the heroes are either dead or on the Spaceship.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'Instead of a Might attack, an Alien can make a Sanity attack against each hero in its room (resolve separately). If a hero defeats the Alien, neither takes damage. If an Alien defeats a hero, that hero takes no damage but falls under control.\nA controlled hero moves on their turn toward the Spaceship (no rolls/room damage, no actions) and boards it at the start of their next turn there, leaving the game.\nHeroes can free each other; once freed, a hero is immune to mind control. Aliens can control someone only once.\nAliens are immune to Speed attacks. Stunned Aliens still keep control of heroes they defeated.',
      },
      {
        heading: 'If You Win',
        body: 'Your masters are pleased with your gift. Your friends will make excellent subjects for xenobiological experiments — and you may keep the eyes as souvenirs.',
      },
    ],
    monsters: [{ name: 'The Aliens', stats: 'Speed 4 · Might 6 · Sanity 6' }],
  },

  {
    id: 7,
    title: 'Carnivorous Ivy',
    intro:
      'You feel tendrils creeping up the mansion and through the windows. The vines must grow. What do plants need? Light, water... and fertilizer. Ah! Your friends!',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer turns traitor. If carrying the Book, drop it (you can\'t pick it up later).\nSet aside numbered pairs of small orange (Roots) and green (Tips) monster tokens equal to twice the players (max 10 pairs); each pair is a Creeper.\nPut one Root in each Creeper room available (Entrance Hall, Balcony, Bedroom, Chapel, Conservatory, Dining Room, Gardens, Grand Staircase, Graveyard, Master Bedroom, Patio, Tower), max one per room. Put a Tip in each room with a Root.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'They\'re making a special item (Secrets of Survival) that can destroy your vines.',
      },
      {
        heading: 'You Win When',
        body: 'All the heroes are dead, or the special item they made has been destroyed. To destroy it, steal it, then end your turn in the Chasm, Furnace Room, or Underground Lake.\nA Creeper grows by moving its Tip; the Root never leaves its room. If a Tip enters the Mystic Elevator, it won\'t function until the Tip leaves. Roots don\'t slow movement, but Tips do.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'Roots don\'t move and can\'t attack or be attacked; Tips can.\nIf a Tip defeats a hero in physical combat, the hero takes no damage but is grabbed and drops all items in that room; the Tip ends its movement.\nOther Tips can\'t attack a grabbed hero, but you can. A grabbing Tip moves 2 spaces toward its Root each turn (can\'t attack). At the start of a Creeper\'s turn, any grabbed hero at its Root is killed and mulched; remove that Creeper.\nThe Bell has no effect on grabbed heroes; the Spirit Board has no effect on Tips.',
      },
      {
        heading: 'If You Win',
        body: 'You watch the vines creep across the ceiling and the sheets. Soon you\'ll find more "friends" to feed your precious vines. You always did have a green thumb.',
      },
    ],
    monsters: [{ name: 'Creepers', stats: 'Speed 2 · Might 5 · Sanity 3' }],
  },

  {
    id: 8,
    title: 'Wail of the Banshee',
    intro:
      'Tattered silver robes swirl at the edge of your vision; something enters the room behind you and sighs. Death is nigh — but not for you. The spirit board protects you from your darling\'s deadly voice.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer turns traitor. Put the large circular Banshee token in your room and decide which way it faces (use the arrow).',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'They plan to silence the Banshee.',
      },
      {
        heading: 'You Win When',
        body: 'All the heroes are dead.',
      },
      {
        heading: 'The Banshee',
        body: 'The Banshee moves as many spaces as its Speed roll. Each time you move it, roll 2 dice:\n0: Put it in any room up to 8 tiles away (no passing through rooms).\n1: Choose its first room; then it always turns left if possible.\n2: Choose its first room; then it goes straight if possible (else random left/right).\n3: Choose its first room; then it always turns right if possible.\n4: You control its movement, but its wail can affect only one explorer once.\nIt "hugs" a wall when turning. It can\'t be affected by others\' movement and can\'t discover rooms. Entering certain rooms (Upper Landing, Collapsed Room, Gallery, special-token rooms) lets you move it to the corresponding room. It can\'t use the Mystic Elevator.',
      },
      {
        heading: 'The Wail',
        body: 'If the Banshee passes through or stops in a room with an explorer, it wails. Each explorer there rolls Sanity: 6+ take 1 die mental damage; 3–5 take 2 dice; 0–2 take 4 dice.\nYou are immune to the wail while you hold the Spirit Board.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'The Banshee can\'t be attacked.',
      },
      {
        heading: 'If You Win',
        body: 'The banshee\'s silver hair wraps around you as you stare into her ice-cold eyes. Now it is just the two of you and your love\'s haunting song. Together. Forever.',
      },
    ],
    monsters: [{ name: 'The Banshee', stats: 'Speed 8' }],
  },

  {
    id: 9,
    title: 'The Dance of Death',
    intro:
      'Every clock strikes midnight. A lone fiddler begins a haunting melody that calls you to dance. Your mind struggles and screams, then... why did you ever resist? The dance must go on forever.',
    sections: [
      {
        heading: 'Right Now',
        body: 'This haunt begins with no traitor — only heroes. Each hero has a chance of becoming a traitor on their turn. Do not read this haunt unless your explorer has turned traitor.\nRaise any of your traits below its starting value to that number.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'They\'re trying to stop the music.',
      },
      {
        heading: 'You Win When',
        body: 'The Holy Symbol has been destroyed. Steal it, then end your turn in the Chasm, Furnace Room, or Underground Lake.',
      },
      {
        heading: 'You Must Do This On Your Turn',
        body: 'Dance until your feet go numb. Each turn, roll Might: 3+ no effect; 0–2 you can\'t move this turn and lose 1 Might.\nUnlike the heroes, you don\'t need a Sanity roll at the start of each turn even without the Holy Symbol.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'You can\'t make Might attacks; you make Speed attacks instead. If you defeat a hero by 2+ with a Speed attack, you can steal an item instead of inflicting damage.',
      },
      {
        heading: 'If You Win',
        body: 'The music fills the ancient mansion. Dancers spin through the ballroom as the fiddler plays on — so joyous they would rather die than stop. And so they shall.',
      },
    ],
    monsters: [],
  },

  {
    id: 10,
    title: 'Family Gathering',
    intro:
      'The madman cocks his head: "Do you hear it? Under the floor, where I put them. My family." The floor cracks and two corpses heave into the light. He holds you in place: "Mama and Papa... they\'re looking to adopt."',
    sections: [
      {
        heading: 'Right Now',
        body: 'The Madman has killed your explorer — remove your figure and put a yellow monster token (the Madman) in its place. Drop all items.\nGet blue monster tokens (Zombies) equal to the number of players. Put each in an omen room, max one per room; leftovers go in any non-event room.\nSet up the Turn/Damage track with a clip at 0 to track damage.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'They\'re trying to trap all the Zombies in special rooms.',
      },
      {
        heading: 'You Win When',
        body: 'All the heroes are dead.',
      },
      {
        heading: 'Moving the Zombies',
        body: 'Move each Zombie as you choose until it has line of sight to a hero; then it must move toward the closest visible hero (you choose ties) and keeps pursuing until it loses sight. If a closer hero appears in sight at the start of its turn, it switches. A Zombie attacks as soon as it shares a room with a hero. If a Zombie is trapped, the heroes tell you what happens.',
      },
      {
        heading: 'The Madman',
        body: 'The Madman can take 5 points of physical damage before being killed (track with the clip). Damage doesn\'t affect his traits.',
      },
      {
        heading: 'If You Win',
        body: 'The family is cross with you — the new children you promised are all broken. You hear Mama crying beneath the floorboards. "Don\'t cry, Mama! I know where to find more."',
      },
    ],
    monsters: [
      { name: 'Zombies', stats: 'Speed 2 · Might 6 · Sanity 2 · Knowledge 3' },
      { name: 'The Madman', stats: 'Speed 3 · Might 5 · Sanity 5' },
    ],
  },

  {
    id: 11,
    title: 'Let Them In',
    intro:
      'The madman\'s garbled instructions fall into place. The mist outside the windows — things live there, and they want in. "At last! Throw wide the windows!" You obey.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer turns traitor. Lose any bonuses from the Madman card (set it aside); put a small yellow Madman token in your room.\nPut a small purple monster token face down in the Entrance Hall and in each room with an outside-facing window (Specters waiting outside). Don\'t place one where the window is false.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'If they complete an exorcism, they\'ll banish the Specters.',
      },
      {
        heading: 'You Win When',
        body: 'All the heroes are dead.',
      },
      {
        heading: 'How To Let the Specters In',
        body: 'You and the Madman open windows and the front door (Entrance Hall) to let Specters in. Opening one costs 1 space of movement. Once opened, flip the face-down Specter face up; it can move and attack that same turn. New outside-window rooms get a face-down Specter; remove it if its window becomes false. Face-down Specters don\'t affect heroes and aren\'t affected by the Bell or Spirit Board.',
      },
      {
        heading: 'The Madman Must Do This',
        body: 'On the monster turn, the Madman moves the shortest route to the closest face-down Specter and opens that window (or the front door). Once all are turned over, he explores for more outside-window rooms (ignoring room features, not stopping for symbols). Only after all Specters are inside can the Madman attack.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'Specters can attack and be attacked only with Sanity attacks. A hero with the Ring who defeats a Specter with a Sanity attack banishes it. The Madman can\'t attack heroes until all Specters are inside, but can defend himself.',
      },
      {
        heading: 'If You Win',
        body: 'Later, washing the blood off your hands, you realize what the things in the mist wanted. Good thing you let them in.',
      },
    ],
    monsters: [
      { name: 'Specters', stats: 'Speed 4 · Sanity 6' },
      { name: 'The Madman', stats: 'Speed 7 · Might 7 · Sanity 7' },
    ],
  },

  {
    id: 12,
    title: 'Fleshwalkers',
    intro:
      'This haunt has no traitor — just heroes. All work together to destroy their Evil Twins. If your hero is killed, you can still control your Evil Twin and kill other heroes.',
    sections: [
      {
        heading: 'Where to Find the Rules',
        body: 'The rest of the rules for this haunt are in the Secrets of Survival booklet.',
      },
    ],
    monsters: [],
  },

  {
    id: 13,
    title: 'Perchance to Dream',
    intro:
      'Your body has entered a very bad place — but one where you have a measure of control. Take a nap; it\'s such a nice bed... The eyes of your fleshy cage close, and your subconscious eyes open. Let the screaming begin.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Tip your figure over in its room — your body is asleep; you can\'t move or act. Drop all items. Set aside the Dog/Girl/Madman cards if held (adjust traits; you can\'t be killed by this — reduce to lowest above skull).\nPut small purple monster tokens (Nightmares) equal to the players into your sleeping body\'s room.\nSecretly count escape rooms (outside-window rooms + Conservatory, Entrance Hall, Gardens, Graveyard, Patio, Tower, Balcony). If fewer than the players, add such rooms from the stack until equal, then shuffle. Write the number down secretly. Set aside that many escape tokens.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'They\'re trying to wake your physical body.',
      },
      {
        heading: 'You Win When',
        body: 'A number of Nightmares escape equal to the number of escape rooms when the haunt was revealed. Then show the heroes your written number.',
      },
      {
        heading: 'How Nightmares Escape',
        body: 'A Nightmare in an escape room escapes using 1 space of movement. Once used, that room can\'t be used again (mark it with an escape token). New escape rooms can be used but don\'t raise the total needed. Whenever a Nightmare is killed or escapes, unleash another into your figure\'s room.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'Nightmares attack with Might but inflict mental damage. If a hero defeats a Nightmare, it\'s killed (not stunned); if defeated while attacking, it\'s stunned as normal.',
      },
      {
        heading: 'If You Win',
        body: 'You look into the eyes of your body from the outside. The fleshy cage recognizes its own subconscious and tries to scream, but the sound is muffled by living nightmares.',
      },
    ],
    monsters: [{ name: 'Nightmares', stats: 'Speed 5 · Might 4 · Sanity 4' }],
  },

  {
    id: 14,
    title: 'The Stars Are Right',
    intro:
      'You greet the zealous followers of your cult. You stamp and chant, praying that your sacrifices will be accepted tonight — that your dread god will appear and bathe in the blood of your friends.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer turns traitor.\nPut small purple monster tokens (Cultists) in the Pentagram Chamber equal to the number of other players.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'The only way they can stop you is by desecrating the Pentagram Chamber using cans of paint (Paint tokens) hidden through the house.',
      },
      {
        heading: 'You Win When',
        body: 'Either all the heroes are dead or you summon your god.',
      },
      {
        heading: 'How to Summon the God',
        body: 'Build up 13 sacrifice points by bringing sacrifices into the Pentagram Chamber: Explorer\'s corpse = 4; Girl/Madman/Dog = 2; any other tradable omen or item = 1. Sacrificed cards are removed from the game.\nYou can sacrifice the Girl/Madman/Dog while holding the card in the Chamber. You can\'t steal, carry, or sacrifice Paint tokens.\nCultists can carry items and corpses (no trait benefit), but not Paint tokens.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'A Cultist can steal an item from an explorer. If an explorer is killed, tip the figure over to mark the corpse. A Cultist (or you) can carry a corpse like an item, but uses 2 spaces of movement to enter a room while doing so.',
      },
      {
        heading: 'If You Win',
        body: 'The universe screams as a wound rips through time and space and your god is reborn. The world is laid bare before him, and all within it are his children, his blood... his sacrifices.',
      },
    ],
    monsters: [{ name: 'Cultists', stats: 'Speed 4 · Might 4 · Sanity 4' }],
  },

  {
    id: 15,
    title: 'Here There Be Dragons',
    intro:
      'You tap the fire-breathing dragon in a child\'s drawing. "I wish I had a dragon." The front doors burst open and an enormous dragon roars in, snorting fire! "Eat \'em, dragon! Eat them all!"',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer turns traitor.\nPut the large circular Dragon token in the Entrance Hall.\nPut a pentagonal item token (Shield) in the Chasm or Crypt and a different one (Antique Armor) in the Catacombs or Underground Lake (or whichever such room is discovered first).\nGet the Turn/Damage track and a clip (no number yet) to track damage.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'They\'re trying to slay the Dragon.',
      },
      {
        heading: 'You Win When',
        body: 'All the heroes are dead. The heroes\' damage to the Dragon is tracked; when it equals the number of players, the Dragon is killed. Damage doesn\'t affect its traits.\nThe Dragon is immune to Speed attacks; it can be damaged by a Sanity attack from an explorer using the Ring.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'The Dragon attacks twice per turn — once fire breathing, once biting (either order).\nFire Breathing: each explorer (including you) in or adjacent (through a door) to the Dragon rolls Speed. In the Dragon\'s room: 4+ no damage, 0–3 take 4 dice physical. Adjacent: 4+ no damage, 0–3 take 2 dice physical.\nBiting: a Might attack.\nToughness: whenever the Dragon is defeated, it takes 2 less damage.',
      },
      {
        heading: 'If You Win',
        body: 'You felt a little sick when the dragon took its first big bite and lit another friend up like a torch. Good thing this is all a dream.',
      },
    ],
    monsters: [{ name: 'The Dragon', stats: 'Speed 3 · Might 8 · Sanity 6' }],
  },

  {
    id: 16,
    title: 'The Phantom\'s Embrace',
    intro:
      'They tried to take the girl away from you — their biggest mistake. You summoned a phantom to guard her, hidden in the house. Soon your old "friends" won\'t be in any condition to boss you around again.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer turns traitor.\nThe explorer with the Girl loses her — set aside the Girl card and a magenta monster token, and adjust traits.\nSet aside a small purple monster token (the Phantom) and at least 20 distinctive tokens.\nSet up the Turn/Damage track with a clip at 0 to track time.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'They\'re trying to save the Girl and themselves.',
      },
      {
        heading: 'You Win When',
        body: 'Either you blow up the house before the Girl escapes, or all the heroes are dead.',
      },
      {
        heading: 'You Must Do This',
        body: 'At the end of each of your turns, advance the Turn/Damage track, then roll that many dice. The house blows up on: 3 players 8+, 4 players 7+, 5 players 6+, 6 players 5+.\nThe Phantom appears each time a basement room with an event/omen symbol is discovered — put the Phantom and Girl tokens there plus one distinctive token. A hero can attack it; if defeated, it\'s killed and the heroes gain the Girl, otherwise it escapes with her (set both aside) until the next such discovery. The Phantom never repeats a room until each basement room has a distinctive token.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'The Phantom doesn\'t attack, but it can defend itself. If it defends successfully, it flees. Heroes can\'t use a special attack to steal the Girl.',
      },
      {
        heading: 'If You Win',
        body: 'Tick, tock, tick, tock... BOOM!',
      },
    ],
    monsters: [{ name: 'The Phantom', stats: 'Might 6 · Sanity 5' }],
  },

  {
    id: 17,
    title: 'A Breath of Wind',
    intro:
      'Pained laughter tells you your companions have disturbed your old friend, the poltergeist. Their insensitivity is appalling. You\'ll just have to eliminate the disturbance...',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer turns traitor.\nPlace a small purple monster token (the Poltergeist) in the haunt-reveal room.\nSet up the Turn/Damage track with a clip at 4.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'They are attempting to exorcise the Poltergeist.',
      },
      {
        heading: 'You Win When',
        body: 'All the heroes are dead.',
      },
      {
        heading: 'Helping the Poltergeist',
        body: 'You help by attacking explorers or finding/stealing items for the Poltergeist. Unlike a normal monster, it can pick up, steal, trade, and drop any number of items (ignoring their effects).\nIt starts with Might 4. Each time it picks up an item, advance the track by 1. At the end of each monster turn, if it\'s in the Junk Room, Storeroom, Attic, Library, Wine Cellar, Research Laboratory, or Operating Laboratory, draw an item card for it and advance the track by 1. Each time it loses an item, lower the track by 1.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'The Poltergeist can make a separate Might attack against each hero it reaches each turn (once each). Its Might equals the current track value (max 8). It can steal an item (and add to its Might) if it would inflict 2+ damage. It isn\'t harmed if the hero wins.\nIt is immune to Might attacks and the Revolver. If Dynamite explodes in its room, it drops all items and is removed, but can re-form.',
      },
      {
        heading: 'Re-Forming the Poltergeist',
        body: 'At the start of each monster turn, the Poltergeist may re-form in any omen room of your choice — drop carried items, set the track to 3 (or 4 if it re-forms in the Junk Room) — then continue its turn.',
      },
      {
        heading: 'If You Win',
        body: 'The cloud of levitating objects spins in glee as the final intruder falls. At last all is peaceful, and you can sit for a quiet chat with your old friend...',
      },
    ],
    monsters: [{ name: 'The Poltergeist', stats: 'Speed 3 · Might X · Sanity 4' }],
  },

  {
    id: 18,
    title: 'United We Stand',
    intro:
      'The pain gives clarity. The flesh is weak, but it can be molded like wax. The more malleable the wax, the stronger you grow. Now all you need is more flesh. A lot more flesh.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer turns traitor.\nTake the Turn/Damage track and two clips: one along the top at 5 (your new Might), the other along the bottom at the number of explorers + 1 (your new Speed). Mental traits are unchanged.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'They want to melt your glorious flesh and escape through the front door. You can pull them back in with your strength.',
      },
      {
        heading: 'You Win When',
        body: 'You kill at least two heroes (absorbing them) and escape through the front door. Alternatively, you win if all but one of the heroes are dead.',
      },
      {
        heading: 'Special Movement Rule',
        body: 'Roll a number of dice equal to your Speed for movement each turn (always at least 1 space).',
      },
      {
        heading: 'Special Attack Rules',
        body: 'You take no damage from physical attacks. A hero with the Ring can attack you with Sanity; if defeated, they move you instead of dealing damage. Dynamite stuns you one turn.\nIf heroes escape, you can pull them back from the Entrance Hall, an outside-window room, or a room open to the outside: make a Might roll vs the strongest outside hero (who adds 1 per other outside hero). If higher, pull a hero of your choice into your room and attack normally; repeat until you fail.\nIf you kill a hero, absorb them: +1 Might, −1 Speed.',
      },
      {
        heading: 'If You Win',
        body: 'Flesh, glorious flesh! It swells over every muscle and pore, absorbing more and more victims. Will it stop? Can it stop? You don\'t care anymore. There is only flesh.',
      },
    ],
    monsters: [],
  },

  {
    id: 19,
    title: 'A Friend for the Ages',
    intro:
      'Three centuries ago a dear friend gave you the portrait that stores your ills, age, injuries — and your morality. It has warded you against all harm. But it is no longer safe; they want it. You must protect it at any cost.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer turns traitor.\nRaise any traits below their starting values to their starting values.\nThen, a number of times equal to the heroes in the game: find the trait that is least above its starting value (a trait at start counts as 0 above; choose among ties) and increase it by 1.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'They are trying to kill you by repainting your portrait.',
      },
      {
        heading: 'You Win When',
        body: 'You destroy at least three Paint tokens, or all the heroes are dead. Heroes place Paint tokens in the house; they can be carried/traded/stolen (not by the Dog), one per explorer. If you carry one on your turn, you can destroy it instead of attacking.',
      },
      {
        heading: 'You Can Do This',
        body: 'After moving on your turn, since it\'s your house, search the room-tile stack, choose one tile, and put it in any legal place, then shuffle.',
      },
      {
        heading: 'Your Portrait',
        body: 'You must not look upon your portrait. Whenever you enter or start your turn in the Gallery, roll Sanity 4+. On a fail, take 1 die of mental damage (ignores your immunity).',
      },
      {
        heading: 'Special Attack Rules',
        body: 'You can\'t be harmed by normal means; your traits can\'t be reduced by events, room features, or damage except where stated (the Gallery still hurts you). Acquiring/losing items changes traits normally (no damage if the Blood Dagger is stolen). An opponent can steal an item from you in physical combat.',
      },
      {
        heading: 'If You Win',
        body: 'They cannot harm you. Your portrait still protects you, as you have protected it. They all break against your limitless vitality. You shall endure... forever.',
      },
    ],
    monsters: [],
  },

  {
    id: 20,
    title: 'Ghost Bride',
    intro:
      'An apparition in white lace shimmers into view. "You\'ve left me alone these long years, but I waited. For our wedding." She glides toward a fellow explorer: "Once you are dead like me, we can be together... forever." You hate it when love is denied.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer turns traitor.\nPut a magenta monster token (the Ghost Bride) in your room (move it on the monster turn).\nShe chooses as groom the hero with the Ring (or the oldest male hero if that hero is female); announce the groom. If no male heroes, choose one at random from the box and put him in the Entrance Hall (he can\'t act but can be attacked).\nSet up the Turn/Damage track with a clip at 0.\nIf the Chapel isn\'t in the house, find it and place it as hard to reach as possible, then shuffle.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'They\'re trying to stop the wedding.',
      },
      {
        heading: 'You Win When',
        body: 'You get the Ghost Bride to marry her chosen groom.\nShe can move through walls (not floors/ceilings) and can\'t be damaged or stunned except by Sanity attacks from the Ring. If she attacks and is defeated, her traits aren\'t reduced.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'The Ghost Bride makes Sanity attacks (mental damage) against anyone but the groom. Against the groom she reduces his Might by mental damage: 1–2 → −1; 3–4 → −2; 5+ → −3.',
      },
      {
        heading: 'How to Get the Ghost Bride Married',
        body: 'Kill the chosen groom (he becomes a ghost under your control and drops all items, including the Ring). Put the groom and the Ghost Bride in the Chapel to start the wedding. At the end of each of your turns advance the track (starting at 1); the wedding completes on Turn 3.',
      },
      {
        heading: 'If You Win',
        body: 'Weddings always make you cry.',
      },
    ],
    monsters: [
      { name: 'Ghost Bride (3–4 players)', stats: 'Speed 4 · Sanity 6' },
      { name: 'Ghost Bride (5–6 players)', stats: 'Speed 5 · Sanity 7' },
    ],
  },

  {
    id: 21,
    title: 'House of the Living Dead',
    intro:
      'Something taps behind the wall. An ashen hand emerges, grasps your neck, and pulls you through. You die before you can scream. Blink. Sniff. "Mmmm, hungry." Must eat flesh. Kill. Eat. EAT!',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer is dead. Drop all items and replace your figure with the large circular Zombie Lord token.\nTake small red monster tokens (Zombies) equal to the players. Place them, in order, in: Crypt, Graveyard, Entrance Hall, Underground Lake, Gardens, Chapel, Conservatory, Pentagram Chamber (looping with extra tokens if more players than discovered rooms). Then put another Zombie in each room that has one.\nTake the Turn/Damage track and a clip for damage.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'They\'ll fight you. Avoid explorers with weapons if possible.',
      },
      {
        heading: 'You Win When',
        body: 'All the heroes are dead.',
      },
      {
        heading: 'Special Zombie Attack Rules',
        body: 'Defeating a Zombie with a Might-attack weapon kills it; Dynamite also kills it; any other attack stuns it. If a hero dies, they become a Zombie (same traits) and that player keeps moving it on their turn — if the traitor wins and that Zombie killed a hero, that player also wins. Zombies can\'t use the Mystic Elevator, but the Zombie Lord can.',
      },
      {
        heading: 'Special Zombie Lord Attack Rules',
        body: 'You control the Zombie Lord under normal monster rules (rolls for movement, no items, no exploring). It can be harmed only by an explorer carrying the Medallion; it takes damage instead of being stunned, and 7 points kills it. Damage doesn\'t reduce its traits.',
      },
      {
        heading: 'If You Win',
        body: 'Everyone is dead. Still hungry. Even a zombie\'s flesh is still flesh. You advance. "Mmmm, hungry." Must eat zombie flesh. Kill. Eat. EAT!',
      },
    ],
    monsters: [
      { name: 'Zombies', stats: 'Speed 2 · Might 5 · Sanity 2' },
      { name: 'Zombie Lord', stats: 'Speed 3 · Might 7 · Sanity 2' },
    ],
  },

  {
    id: 22,
    title: 'The Abyss Gazes Back',
    intro:
      'You kick another hole in the floor and discover what you sought: the Abyss. Flames. A portal to Hell. "Hang on, everyone! We\'re all goin\' to HELL!" A portion of the house crumbles into a burning lake of fire.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer turns traitor.\nChoose any unoccupied basement room with an omen or event symbol (or draw to the first legal basement room and place it). This is where the Abyss starts — tell everyone — then shuffle.\nSet up the Turn/Damage track with a clip at 0.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'They\'re trying to perform an exorcism to stop the house being sucked into the Abyss.',
      },
      {
        heading: 'You Win When',
        body: 'All the heroes are dead.',
      },
      {
        heading: 'You Must Do This On Your Turn',
        body: 'At the end of your first turn the house begins collapsing, starting with the Abyss room (turn tiles face down). You still collapse rooms (and can win) even if killed. At the end of each of your turns advance the track (starting at 1). If you draw an event card while in the basement, you may instead take the Secret Stairs or Secret Passage card from the event stack, then shuffle.',
      },
      {
        heading: 'Each Player Must Do This Every Turn',
        body: 'From Turn 2, at the end of each living hero\'s turn that player collapses part of the house (a room must be adjacent to a collapsed room; doors not required). Rate: Turn 2 one room each; Turn 3 roll 2 dice; Turn 4 roll 3 dice; Turn 5+ roll 4 dice. Collapse floor by floor upward. Entrance Hall/Foyer/Grand Staircase count separately. An explorer caught when the Abyss engulfs a room rolls Speed 4+ to jump to an adjacent uncollapsing room with a door, else is killed.',
      },
      {
        heading: 'If You Win',
        body: 'Hell welcomes you. As the flesh sears from your friends\' bones, you try to smile — but your own skin sloughs away in the all-consuming fire. See what impulsiveness gets you?',
      },
    ],
    monsters: [],
  },

  {
    id: 23,
    title: 'Tentacled Horror',
    intro:
      'Ropy lengths of muscled tissue flail into view, covered with clicking suckers. A rubbery length saws at your limb and reels you through the house. You scream one last time as the tentacles search for more victims.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer is dead. Remove your figure and drop all items.\nSet aside numbered pairs of orange (Arms) and green (Suckers) monster tokens equal to the players; each pair is a Tentacle. Put one Arm in any Tentacle room (Furnace Room, Conservatory, Organ Room, Underground Lake, Gardens, Chasm), adding rooms if needed. Put a Sucker in each room with an Arm.\nSet up the Turn/Damage track with a clip at 1 to track time.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'They\'re looking for the creature\'s Head to kill it. You must stop them.',
      },
      {
        heading: 'You Win When',
        body: 'All the heroes are dead.',
      },
      {
        heading: 'You Must Do This',
        body: 'At the end of each of your turns, advance the Turn/Damage track. The Tentacles grow stronger over time: T1–2 Spd2/Mgt4/San7, T3–4 Spd3/Mgt5/San7, T5–7 Spd3/Mgt7/San7, T8+ Spd4/Mgt8/San8. The creature\'s Head (Might 6) can attack heroes and takes no damage when defeated. If a Sucker enters the Mystic Elevator it won\'t function; Arms don\'t slow heroes, Suckers do.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'Arms don\'t move or attack/get attacked; Suckers can. A Sucker that defeats a hero grabs them (no damage; hero drops items) and ends its movement. A grabbing Sucker moves 2 spaces toward its Arm each turn (can\'t attack). A hero at the matching Arm at the start of a monster turn is eaten and killed (remove that Tentacle). A defeated Sucker is stunned, retreats, and drops its hero. The Bell has no effect on grabbed heroes; the Spirit Board has no effect on Suckers.',
      },
      {
        heading: 'If You Win',
        body: 'That which squats at the center of the house sucks the marrow from its victims and quivers joyfully. Already stronger, it sends its tentacles farther than ever before... out the front door.',
      },
    ],
    monsters: [
      { name: 'Suckers', stats: 'Traits scale by turn (see table)' },
      { name: 'Head', stats: 'Might 6' },
    ],
  },

  {
    id: 24,
    title: 'Fly Away Home',
    intro:
      'A shushing, sandpapery sound grows louder outside the windows. Countless glowing red eyes stare at you. Tears of blood fall from your eyes — this is what your life has been for: to let in your masters and give them your blood. You open the windows wide.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer is dead. Remove your figure.\nSet aside 24 small red monster tokens (Bats). Put 3 in the Tower or Attic and 3 in the Chasm or Catacombs (fewer Bats if those rooms aren\'t discovered).',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'They\'re trying to find a way to drive off the Bats.',
      },
      {
        heading: 'You Win When',
        body: 'All the heroes are dead.',
      },
      {
        heading: 'Each Hero Must Do This',
        body: 'At the beginning of their turn, a hero takes 1 point of physical damage for each Bat token on their character card.',
      },
      {
        heading: 'Bats Enter the House',
        body: 'During the monster turn, roll dice equal to the players and set aside that many Bats. Bats enter through the Tower, Chasm, Conservatory, Entrance Hall, Gardens, Graveyard, Patio, Balcony, and outside-window rooms (one per room unless more Bats than rooms). Entering counts as moving 1 space; Bats can keep moving. Max 24 Bats in the house at once.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'Bats don\'t attack normally — roll 1 die per Bat attacking a hero; on a 2 it latches on (put the token on that hero\'s card). Unattached Bats don\'t affect movement; each attached Bat makes that hero move 1 fewer space (minimum 1).',
      },
      {
        heading: 'If You Win',
        body: 'The shushing of wings fades as dawn breaks and the vampire bats roost. Below them lie the dried-out husks of food vessels, joining the many who gave their blood to the bat lords of the manor.',
      },
    ],
    monsters: [{ name: 'Bats', stats: 'Speed 5 · Might 2 · Sanity 1' }],
  },

  {
    id: 25,
    title: 'Voodoo',
    intro:
      'Time for all masks to come off. You\'ve collected each friend\'s essence, sewn their likenesses, and placed them through the house. Your friends are all here — and all their dolls. First things first: there\'s voodoo to do.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer turns traitor. Set up the Turn/Damage track with a clip at 0.\nUsing "Voodoo Doll Descriptions," select a doll for each hero. On paper, secretly record which doll matches which hero and which of its two rooms it\'s in (must choose the discovered room if only one is discovered). Then read each hero their doll\'s quote.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'They\'re trying to find the dolls and destroy them.',
      },
      {
        heading: 'You Win When',
        body: 'More than half of the heroes who began the haunt are dead.',
      },
      {
        heading: 'You Must Do This',
        body: 'At the end of each of your turns, advance the track (starting at 1). Any doll not yet destroyed affects its hero now — read its effect quote aloud.',
      },
      {
        heading: 'Voodoo Doll Descriptions',
        body: 'Wax Doll: Furnace Room or Kitchen.\nChina Doll: Balcony or Tower.\nStone Doll: Underground Lake or Graveyard.\nGlass Doll: Pentagram Chamber or Chapel.\nRag Doll: Gardens or Conservatory.',
      },
      {
        heading: 'Voodoo Doll Effects',
        body: 'Wax Doll: the hero takes 1 point of physical damage.\nChina Doll: roll 4 dice; if less than the turn number, the doll shatters, killing the hero.\nStone Doll: the hero rolls Might; if less than the turn number, they lose 1 in each trait.\nGlass Doll: the hero takes 1 point of mental damage.\nRag Doll: the hero rolls Knowledge; if less than the turn number, they take 2 points of physical damage.',
      },
      {
        heading: 'If You Win',
        body: 'You draw a bright red slash through each photo you taped into your journal before arriving. The feeling of accomplishment never lasts. Time to find new friends.',
      },
    ],
    monsters: [],
  },

  {
    id: 26,
    title: 'Pay the Piper',
    intro:
      'You hear the skitter, scritch, scratch all the time now. Rats in the walls. Their whispery voices promise friendship and devotion — because you are their kin, a wererat with special powers. They spell out what you must do.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer turns traitor.\nRestore any traits below their starting values, then add 1 to each trait.\nSet aside small red monster tokens (Rats) equal to twice the players. Put one Rat in each unoccupied room with an omen or event symbol (doubling/choosing as needed).\nSet aside 5 triangular Sanity Roll tokens.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'They\'re trying to kill all the Rats, which would prevent you from completing your rat-thing ritual.',
      },
      {
        heading: 'You Win When',
        body: 'You either kill all the heroes or complete your ritual.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'A defeated Rat is killed (not stunned). A group of Rats in one room can attack together, adding their Might (max 8 dice); an unsuccessful group attack takes no damage. While in the Pentagram Chamber you can\'t be affected by heroes; neither Rats nor heroes can enter it.',
      },
      {
        heading: 'How to Complete the Ritual',
        body: 'Move to the Pentagram Chamber (safe there). Each turn, roll Sanity 3+ to perform the ritual; on success put a Sanity Roll token on your card and a Rat in a room adjacent to the Chamber (doors not required). Rolls needed: 3–4 players 5; 5–6 players 4.',
      },
      {
        heading: 'If You Win',
        body: 'Your lovely children lap up the spilled blood and tussle over the larger chunks. Children will be children — and children need to eat.',
      },
    ],
    monsters: [{ name: 'Rats', stats: 'Speed 3 · Might 2 · Sanity 1' }],
  },

  {
    id: 27,
    title: 'Amok Flesh',
    intro:
      'You hear breaking crystal. Your cloned tissue is free from its containment and expanding. You wish you hadn\'t used such unstable protoplasm. Time to round up all your friends before they hurt themselves running from your growing, all-consuming flesh.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer turns traitor.\nSet aside at least 20 small orange monster tokens to represent a single growing Blob.\nThe player carrying the Crystal Ball card discards it.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'They\'re trying to destroy your Blob by finding objects that hurt it and tossing them in. You can try to kill them or steal those objects.',
      },
      {
        heading: 'You Win When',
        body: 'All the heroes are either dead or turned into Blob-people.',
      },
      {
        heading: 'The Blob',
        body: 'On the first monster turn, the Blob engulfs the Crystal Ball\'s room and each room adjacent through a door (place Blob tokens). Each monster turn after, it expands into each adjacent room through a door (using doors, stairs, and special movement, but not the Mystic Slide; it can also expand up/down the Coal Chute, Gallery, and Collapsed Room). After expanding, roll 1 die; on a 2 expand again. Blob tokens aren\'t monsters — they don\'t attack and aren\'t affected by monster effects, the Bell, or the Spirit Board. If the Blob enters the Mystic Elevator, it stops working.',
      },
      {
        heading: 'Blob-People',
        body: 'Anyone in a room with a Blob token (including you) immediately becomes a Blob-person, discards all items/omens (token on their card), and is controlled by their player to help you win. A Blob-person can\'t attack, be attacked, draw cards, use the elevator, discover rooms, or carry items; it moves on its player\'s turn and passes freely through Blob rooms. At the start of the monster turn, put a Blob token in any room a Blob-person occupies (it doesn\'t expand from there until connected to the greater Blob).',
      },
      {
        heading: 'If You Win',
        body: 'Your cloned tissue fills most of the house — your friends, the vermin, the moths, all fused with the blob. You fall back, arms spread wide, into the waiting embrace of bubbling flesh.',
      },
    ],
    monsters: [{ name: 'Blob-People', stats: 'Speed 2' }],
  },

  {
    id: 28,
    title: 'Ring of King Solomon',
    intro:
      'As a child you found pentagrams under your bedroom floor — and the source of blood-soaked dreams. The voices told you how to prepare for the Arrival. Now the Arrival is at hand. Hell has come.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer turns traitor.\nChoose the room with the portal from Hell: an unoccupied event room at least 4 rooms from the closest explorer (or as far as possible).\nPut the large circular Demon Lord token there, plus small yellow Demon tokens numbered 1 up to the number of heroes at reveal (max 4).',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'They\'re trying to kill the Demons.',
      },
      {
        heading: 'You Win When',
        body: 'All the heroes are dead.',
      },
      {
        heading: 'Each Demon Must Do This',
        body: 'On the monster turn, each Demon moves full speed toward the closest hero it can attack (best route) and attacks if it can (you choose ties).',
      },
      {
        heading: 'Special Attack Rules',
        body: 'A Demon can steal the Ring instead of dealing damage; a Demon carrying it can\'t use/trade/drop it, but an explorer who defeats that Demon by 2+ can steal it back. Speed attacks can\'t be used against the Demon Lord.',
      },
      {
        heading: 'If You Win',
        body: 'The Hellgate is open. The tangled bodies of your fellow explorers form a throne of flesh for the demon lord. The screaming has only just begun. Just as you\'ve always dreamed.',
      },
    ],
    monsters: [
      { name: 'Demon 1', stats: 'Speed 3 · Might 5 · Sanity 5' },
      { name: 'Demon 2', stats: 'Speed 4 · Might 4 · Sanity 4' },
      { name: 'Demon 3', stats: 'Speed 5 · Might 3 · Sanity 3' },
      { name: 'Demon 4', stats: 'Speed 6 · Might 2 · Sanity 2' },
      { name: 'Demon Lord', stats: 'Speed 2 · Might 7 · Sanity 7' },
    ],
  },

  {
    id: 29,
    title: 'Frankenstein\'s Legacy',
    intro:
      'You read a lab notebook: "That which was once dead may be reanimated!" With growing excitement you realize you can finish this experiment. You must. In the name of science.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer turns traitor.\nPut the large circular Frankenstein\'s Monster token in the Research Laboratory or Operating Laboratory (or find a tile, place it on the upper level with the token on it, then shuffle).',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'They think your Monster is an abomination and will try to kill it. They also know it\'s vulnerable to fire.',
      },
      {
        heading: 'You Win When',
        body: 'All the heroes are dead.\nThe Monster must always move full speed toward the closest hero (you choose ties) and attack if it can.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'When making an attack roll, the Monster adds 2 to the result (no bonus on defense). It is immune to Speed attacks. If you beat a hero by 2+ with a Might attack, you can steal a Torch token instead of dealing damage and automatically destroy it.',
      },
      {
        heading: 'If You Win',
        body: 'You harvest the skin from your former friends, careful not to tear too much. With your surplus of skin, organs, teeth, and bone, you can recreate the experiment from scratch. Isn\'t science wonderful?',
      },
    ],
    monsters: [
      { name: 'Frankenstein\'s Monster', stats: 'Speed 3 · Might 8' },
    ],
  },

  {
    id: 30,
    title: 'Tomb of Dracula',
    intro:
      'The girl seems helpless. When she takes your hand you shudder — no living hand is so cold. Then she opens her mouth and you see the fangs. A while later you awaken, feeling terrific. But so very, very thirsty.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer turns traitor. You are now a Vampire — add 1 to each trait.\nPut the large circular Dracula token in the Crypt or Graveyard (or an unoccupied room at least 4 rooms away).\nDiscard the Girl card and put a magenta monster token in your room (the Bride).\nSet up the Turn/Damage track with a clip at 0.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'The sun is coming up. Kill the heroes quickly — the Vampires weaken as the sun rises (the heroes will tell you how).',
      },
      {
        heading: 'You Win When',
        body: 'All the heroes are dead or turned into Vampires. If you win and another player\'s Vampire killed a hero, that player also wins.',
      },
      {
        heading: 'You Must Do This',
        body: 'At the start of your turn, advance the Turn/Damage track (starting at 1).',
      },
      {
        heading: 'Vampires',
        body: 'Dracula doesn\'t move or attack until Turn 2 (he can still defend). Each time any Vampire tries to enter the Chapel or a room with a hero carrying the Holy Symbol, it rolls Sanity 6+ or can\'t enter (only one roll if the Holy Symbol is in the Chapel).',
      },
      {
        heading: 'Special Attack Rules',
        body: 'Domination: a Vampire attacking a hero of the opposite sex can make a Sanity attack; if it wins, the hero takes Speed damage instead of mental (can be done from an adjacent room, and you can move the defeated hero into the Vampire\'s room). When a hero\'s Speed drops to the skull via Domination, they become a Vampire (raise Speed to start, +1 each trait, controlled by their player). Vampires can also kill heroes normally; a hero killed that way doesn\'t become a Vampire.',
      },
      {
        heading: 'If You Win',
        body: 'The elixir of life throbs through your body like the dying heartbeat of your protesting meal. But as always, the well runs dry. Dracula will know where to find more.',
      },
    ],
    monsters: [
      { name: 'Dracula', stats: 'Speed 5 · Might 8 · Sanity 6' },
      { name: 'The Bride', stats: 'Speed 4 · Might 4 · Sanity 4' },
    ],
  },

  {
    id: 31,
    title: 'Airborne',
    intro:
      'This scenario has no traitor — only heroes. You are all trying to escape the house.',
    sections: [
      {
        heading: 'Where to Find the Rules',
        body: 'Refer to the Secrets of Survival booklet.',
      },
    ],
    monsters: [],
  },

  {
    id: 32,
    title: 'Lost',
    intro:
      'The crystal ball flashes and the pipe organ thunders. The house shifts and changes. The air thickens into corrosive green mist; outside, the sky is mauve. You slip off your mask — you\'re home! All that\'s left is to collect the specimens.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer turns traitor.\nSet aside all played room tiles except starting tiles and occupied rooms; remove Secret Passage/Stairs/Wall Switch tokens connecting to set-aside rooms.\nIf the Organ Room isn\'t in the house, find it and attach it to a starting tile of your choice.\nShuffle the set-aside tiles with the undrawn and discard tiles. Move occupied rooms next to their floor\'s starting tiles.\nSet aside 5 triangular Knowledge Roll tokens.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'They\'re trying to reactivate your dimensional transporter in the Organ Room to return home, while taking damage each turn from the poisonous atmosphere.',
      },
      {
        heading: 'You Win When',
        body: 'All the heroes are dead.',
      },
      {
        heading: 'How to Prevent the Heroes\' Escape',
        body: 'Make the controls human-proof: attempt a Knowledge roll of 4+ in the Chapel, Game Room, either Laboratory, or the Pentagram Chamber. On success, put a Knowledge Roll token in that room (one per room). Each placed token subtracts 3 from heroes\' rolls to activate the transporter.',
      },
      {
        heading: 'If You Win',
        body: 'You trundle your specimens to the laboratory and pick out bell jars for storage. You might have to saw a few down to size — but that\'s OK. They\'re already dead.',
      },
    ],
    monsters: [],
  },

  {
    id: 33,
    title: 'An Invocation of Darkness',
    intro:
      'It\'s all right here: the ritual to bring about the reign of a dark god for a thousand years. The more you read, the less you can resist the book\'s spell. You must open the gate that summons the elder god.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer turns traitor.\nSet aside the large circular Demon Lord token (the Elder God) and 5 triangular Knowledge Roll tokens.\nRestore any traits below their starting values; then for each trait roll 2 dice and increase it by the result.\nYou take an extra turn immediately after the haunt is revealed; play then proceeds from your left.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'They are trying to destroy the Book, to stop the summoning or banish the Elder God.',
      },
      {
        heading: 'You Win When',
        body: 'All the heroes are dead.',
      },
      {
        heading: 'How to Summon the Elder God',
        body: 'Carry the Book to the Chapel or Pentagram Chamber. There, make Knowledge rolls of 5+ (each roll uses 1 space of movement; you can still roll even if the Book is stolen, as long as you\'re in those rooms). Each success earns a Knowledge Roll token; at 5 tokens, a portal opens in your room and the Elder God arrives — it kills you immediately (remove your figure, drop items), but on your next turn you control it.',
      },
      {
        heading: 'If You Win',
        body: 'Nothing can stop you! Ia, ia! Let the age of humanity come to an end!',
      },
    ],
    monsters: [
      {
        name: 'Elder God',
        stats: 'Speed X (= players at reveal) · Might 12 · Sanity 7',
      },
    ],
  },

  {
    id: 34,
    title: 'Guillotines',
    intro:
      'This haunt uses the hidden traitor rules described on page 17 of the rulebook.',
    sections: [
      {
        heading: 'Where to Find the Rules',
        body: 'All players read this haunt in the Secrets of Survival booklet.',
      },
    ],
    monsters: [],
  },

  {
    id: 35,
    title: 'Small Change',
    intro:
      'Now that your subjects are safely in the house with your cats, the real fun begins. Dropping the beaker of Shrinkital, you shrink yourself and your subjects to the size of mice. Already your cats pad toward the frightened subjects.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer turns traitor.\nWith 3–4 players put one Cat token (small red monster) in the Entrance Hall. With 5–6 players put one in the Entrance Hall and another in the haunt-reveal room.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'They\'re trying to escape the house in a Toy Airplane.',
      },
      {
        heading: 'You Win When',
        body: 'More than half of the heroes who began the haunt have been killed by Cats.',
      },
      {
        heading: 'Being Small',
        body: 'Your items and omens shrank with you and work normally. You can\'t draw cards — discovering a room with any symbol ends your turn. Each doorway counts as a space (you can stop in one). To use stairs, roll Might 3+ (else end your turn). You can\'t use the Collapsed Room or Mystic Elevator, and aren\'t affected by the Gallery, Gymnasium, or Vault. Cats count doorways as spaces too and can catch only one hero at a time.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'You can\'t attack explorers (let the Cats eat them). When a Cat defeats a hero, it plays "cat-and-mouse" for a turn instead of damage; on that hero\'s next turn they may escape (heroes explain how). If anyone defeats the Cat first, it drops the hero and is stunned; otherwise it swallows the hero at the start of the next monster turn. A Cat with the Toy Airplane can roll Speed 7+ to bat it down (you may try at 5+), then attack a hero in it.',
      },
      {
        heading: 'If You Win',
        body: 'It will take months to analyze the data, but one thing is clear — your cats consider this experiment a great success!',
      },
    ],
    monsters: [{ name: 'Cats', stats: 'Speed 6 · Might 7 · Sanity 5 · Knowledge 5' }],
  },

  {
    id: 36,
    title: 'Better with Friends',
    intro:
      'Many years ago you drowned in the underground swamp beneath this house and existed as a ghost. The medallion let you return to mortal form and find others to share your twilight existence. Now it is time for them to join you in death. Death is better with friends.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer turns traitor.\nPut a pentagonal item token in the Attic (the Rowboat); place it when the Attic is discovered if needed.\nSet aside 4 triangular Might Roll tokens.\nSet up the Turn/Damage track with a clip at 0.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'The house is sinking into an underground swamp. The heroes will try to escape.',
      },
      {
        heading: 'You Win When',
        body: 'More than half of the heroes who started are dead, or the Rowboat is disabled.',
      },
      {
        heading: 'You Must Do This',
        body: 'At the end of your turn, advance the Turn/Damage track (starting at 1).',
      },
      {
        heading: 'Flooding',
        body: 'Each turn the house floods further (tell the players the levels): T1 basement partial; T2 basement full; T3 + ground partial; T4 ground full; T5 + upper partial; T6 whole house full for the rest of the game. Flooding affects all heroes but not you (effects in Secrets of Survival).',
      },
      {
        heading: 'Special Attack Rules',
        body: 'You can attack the Rowboat once per turn with a Might attack — roll Might 3+ to damage it (put a Might Roll token on your card). After 4 tokens, the next successful Might attack disables the Rowboat.',
      },
      {
        heading: 'If You Win',
        body: 'Your friends\' lifeless bodies float beside your own. After a while they open their eyes, and you lead them down into the cold, dark water. You lead them home.',
      },
    ],
    monsters: [],
  },

  {
    id: 37,
    title: 'Checkmate',
    intro:
      'Those fools are reading Uncle Ebenezer\'s journal — his vow to defeat Death at chess. His bones still sit by the chess set. You doubt these fools can do better, but just in case, you\'ll make sure none of them win.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer turns traitor.\nPut a small purple monster token (Death) in the same room as a hero of your choice.\nTake 5 pentagonal item tokens (Holy Seals) and place one in each of the Vault, Crypt, Research Laboratory, Operating Laboratory, and Game Room (now or when discovered). Tell the heroes there are five, but not which undiscovered rooms have them.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'One of them will try to beat Death at chess, using the Holy Seals. If they beat Death even once, you lose.',
      },
      {
        heading: 'You Win When',
        body: 'All the heroes are dead. You also win if there is no hero in Death\'s room at the start of the monster turn (they forfeit the game).',
      },
      {
        heading: 'Death Must Do This',
        body: 'On the monster turn, Death plays chess against the explorer in its room with the highest Knowledge. Both roll Knowledge, but Death cheats — after its first roll it rerolls any blank dice once. Compare results: a tie does nothing; if Death rolls higher it captures a piece — Death wins by 1–2: each hero loses 1 Sanity; 3–4: each hero loses 1 Might; 5+: "Check" — each hero loses 1 Sanity and 1 Might.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'Death can\'t attack or be affected except by being beaten at chess. You can\'t enter Death\'s room or affect a hero there (no Bell, Revolver, or Dynamite). You can\'t pick up Holy Seals but can steal them from heroes.',
      },
      {
        heading: 'If You Win',
        body: 'You knew they couldn\'t beat Death at his own game. So what if you helped a bit? They\'re dead and gone, and you\'re still here. Checkmate.',
      },
    ],
    monsters: [{ name: 'Death', stats: 'Knowledge 8' }],
  },

  {
    id: 38,
    title: 'Hellbeasts',
    intro:
      'Firebats only come out at night and can\'t breed without human blood. Still, they\'re cute, and they\'re your pets. You\'ve brought them the humans they need — now make sure they can get to the blood.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer turns traitor.\nGather small red monster tokens (Firebats). Put a number equal to half the players (rounded up) in the haunt-reveal room.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'Their blood is what your Firebats need to breed. They\'ll try to find a way to stop you.',
      },
      {
        heading: 'You Win When',
        body: 'All the heroes are dead.',
      },
      {
        heading: 'You Must Do This',
        body: 'When you roll for the Firebats\' movement on the monster turn, put that many new Firebat tokens in the haunt-reveal room. Firebats can\'t move on the turn they appear.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'Firebats can\'t attack or be attacked. After you move all Firebats, roll 1 die for each Firebat sharing a room with one or more heroes; all heroes in that room take physical damage equal to the result (the Armor card can prevent only 1 point). Firebats don\'t slow heroes moving through their room.',
      },
      {
        heading: 'If You Win',
        body: 'Your batlings sup greedily on the humans scattered about the mansion. Soon more firebats will grace the manor with their burning presence. The cycle of life... what could be more beautiful?',
      },
    ],
    monsters: [{ name: 'Firebats', stats: 'Speed 3' }],
  },

  {
    id: 39,
    title: 'The Heir',
    intro:
      'They\'ve come at last — the only possible heirs to the ancient Romanescu fortune. If the true heir sits on the throne while holding the Romanescu ring and spear, they take everything from you. That must not happen. Tonight your hidden assassins will kill the heir.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer turns traitor.\nIf the Statuary Corridor isn\'t in play, find it and place it as hard to reach as possible, then shuffle.\nSet up the Turn/Damage track with a clip at 0.\nYou have Assassins hidden equal to the players. Secretly write down their rooms: each must be in a room in play, one Assassin per room, never in an occupied room or the Statuary Corridor.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'One of them is the heir, but you don\'t know which.',
      },
      {
        heading: 'You Win When',
        body: 'The heir is dead.',
      },
      {
        heading: 'Using Your Assassins',
        body: 'When a hero moves into a room with an Assassin, you may reveal it and attack immediately (even off-turn): a sneak attack rolling 2 dice of physical damage the hero can\'t defend against. After attacking once, the Assassin takes poison and dies (mark it off). Whenever a hero dies, you may ask if they were the heir — the player must answer truthfully.',
      },
      {
        heading: 'You Must Do This',
        body: 'At the end of your turn, advance the track (starting at 1). At the end of Turn 3, new Assassins equal to the original number of players enter (secretly write their rooms; any unoccupied room without an Assassin). At the end of Turn 6, place more the same way.',
      },
      {
        heading: 'If You Win',
        body: 'The heir is dead; your family\'s stolen wealth is safe. You drop a paper crown beside the body. As it reddens with the heir\'s blood, you quietly shut the door.',
      },
    ],
    monsters: [{ name: 'Assassins', stats: 'Might 2' }],
  },

  {
    id: 40,
    title: 'Buried Alive',
    intro:
      'The spirit board slides across the letters by itself, spelling BURIED ALIVE — breaking the spell that hid your secret: the victim you buried alive just before entering the house. If your fellow explorers find your victim, that would never do.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer turns traitor.\nSet up the Turn/Damage track with a clip at 0.\nChoose an already-discovered basement room and secretly write it down — the buried person is there. If there are fewer than five basement rooms (counting the Basement Landing), draw and place basement rooms until there are five, then write down the burial room.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'They\'re trying to rescue the buried person.',
      },
      {
        heading: 'You Win When',
        body: 'The buried person is dead.',
      },
      {
        heading: 'You Must Do This',
        body: 'At the end of your turn, advance the track (starting at 1), then roll that many dice. The buried person takes that much physical damage. Keep a running total — the buried person dies after 12 points.',
      },
      {
        heading: 'The Spirit Board',
        body: 'The Spirit Board helps the heroes; the explorer carrying it can\'t trade or drop it. If you defeat that hero by 2+ with a Might attack, you can steal the Spirit Board instead of dealing damage — it is then immediately destroyed and the card discarded.',
      },
      {
        heading: 'If You Win',
        body: 'Your frantic companions were just too late. Somehow this whole exercise has made you peckish. Time for a late dinner... with dessert.',
      },
    ],
    monsters: [],
  },

  {
    id: 41,
    title: 'Invisible Traitor',
    intro:
      'You read a word carved on the back of your ring. Saying it aloud, a terrible pain spikes through your eye. Then it\'s gone — along with your conscience and your body. You\'re invisible: an invisible hunter, ready to kill.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer turns traitor.\nGet a piece of paper. Choose any room currently in the house and write down its name — that\'s where you are now. Then remove your figure from the house.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'They\'re trying to find and kill you.',
      },
      {
        heading: 'You Win When',
        body: 'All the heroes are dead.',
      },
      {
        heading: 'How to Move',
        body: 'Instead of moving your figure, write down the room where you end your movement (use your Speed and normal movement). Exiting a room with a hero doesn\'t cost an extra space (unlike monsters). You can still discover rooms, but placing tiles reveals your location.',
      },
      {
        heading: 'Stealing Items',
        body: 'Once per turn you can roll Speed to steal an item from a hero in your room (not a Speed attack; no defense). 4+ you take the item; 1–3 you fail (no need to say who); 0 you fail and must say which hero you targeted.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'The Ring no longer lets you make Sanity attacks. Unless attacking with an item, all your attacks are sneak attacks: roll dice equal to half the original heroes (rounded up); the hero takes that much physical damage with no defense. If a hero guesses your room and attacks, handle it normally. You can both steal and attack on the same turn.',
      },
      {
        heading: 'If You Win',
        body: 'Your friends lie scattered across the manor. You wipe the blood from your face and fade once more from view. That was fun. Maybe you\'ll try arson next.',
      },
    ],
    monsters: [],
  },

  {
    id: 42,
    title: 'Comes the Hero',
    intro:
      'Immortality came cheaply: just open a little gateway to Hell, and your master lets you keep the gift forever. Even immortal, time\'s a-wasting. Best not to wait too long before opening the dread gate.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer turns traitor.\nRaise any traits below their starting numbers to those numbers.\nIf you don\'t have a weapon card (Revolver, Axe, Blood Dagger, etc.), search the item or omen stack, take the first weapon, then shuffle.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'They\'re trying to stop you from opening the gate to Hell.',
      },
      {
        heading: 'You Win When',
        body: 'You open the gate to Hell.',
      },
      {
        heading: 'How to Open the Gate to Hell',
        body: '1. Sacrifice (kill) a hero with a weapon, then carry the body to the Catacombs, Chasm, or Pentagram Chamber (pick up like an item; each room entered costs 2 spaces while carrying; the Dog can\'t carry a body).\n2. Once the body is in one of those rooms, roll Sanity or Knowledge 4+ to open the gate (once per turn).',
      },
      {
        heading: 'Coping with Immortality',
        body: 'Your traits don\'t go up or down (even gaining/losing items) unless the heroes find a special way to lower them. Items can\'t be stolen from you. Explorers don\'t slow your movement.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'You can\'t be attacked and take no damage from card or room effects. You attack normally but take no damage if defeated.',
      },
      {
        heading: 'If You Win',
        body: 'As the gate rips through the house into your world, you hear the shrieks of the damned mingling with the cries of the yet-to-be-damned. And you\'re immune to it all. Enjoy.',
      },
    ],
    monsters: [],
  },

  {
    id: 43,
    title: 'The Star-Sickness',
    intro:
      'This haunt uses the hidden traitor rules described on page 17 of the rulebook.',
    sections: [
      {
        heading: 'Where to Find the Rules',
        body: 'All players read this haunt in the Secrets of Survival booklet.',
      },
    ],
    monsters: [],
  },

  {
    id: 44,
    title: 'Death Doth Find Us All',
    intro:
      'The house is a living creature, and like every living thing it must eat. Long ago you struck a bargain: every ten years you bring new people, the house ages them to dust, and you gain ten more years of youth. The tremors have begun.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer turns traitor.\nAll the heroes immediately age 10 years (including the explorer with the Medallion) — consult the table and tell each hero how to adjust their traits.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'They\'re aging fast, but they\'ve found a Medallion that thwarts the process.',
      },
      {
        heading: 'You Win When',
        body: 'All the heroes are dead.',
      },
      {
        heading: 'At The End Of Your Turn',
        body: 'Each hero rolls 1 die and ages that many decades (even if you\'re dead). Each new decade (cumulative): 20s gain 1 Might & 1 Speed; 30s gain 1 Sanity & 1 Knowledge; 40s lose 1 Speed, gain 1 Sanity; 50s lose 1 physical & 1 mental; 60s lose 1 Might, 1 Speed, & 1 mental; 70s+ lose 1 from each of the four traits.',
      },
      {
        heading: 'Feeding off Death',
        body: 'Whenever a hero dies for any reason, immediately roll 3 dice and add the result to any trait or combination of traits.',
      },
      {
        heading: 'The Medallion',
        body: 'You can\'t pick up, steal, or carry the Medallion.',
      },
      {
        heading: 'If You Win',
        body: 'Ashes to ashes, dust to dust — well, almost all. You feel just fine. Leaving the house, you shut the door and say adieu, until next decade.',
      },
    ],
    monsters: [],
  },

  {
    id: 45,
    title: 'Tick, Tick, Tick',
    intro:
      'You giggle as you consider your handiwork: a bomb strapped to each explorer. Now they can\'t help but respect and serve you.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer turns traitor.\nIf you don\'t have the Dynamite card, take it from whoever has it or search the item stack for it, then shuffle.\nSet up the Turn/Damage track with a clip at 0.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'You\'ve strapped a time bomb to each of them; they\'re trying to defuse the bombs.',
      },
      {
        heading: 'You Win When',
        body: 'Either all the heroes are dead or you complete the Big Bomb.',
      },
      {
        heading: 'The Big Bomb',
        body: 'You complete the Big Bomb on Turn 12; then it explodes and everyone dies.',
      },
      {
        heading: 'You Must Do This',
        body: 'At the end of your turn, advance the track (starting at 1), add that number to the living heroes, and roll that many dice (max 8). On 8+, the closest living hero to your left with an active bomb explodes — killed along with every other hero in the room; their items/omens are destroyed.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'You can\'t move — you stay in your starting room. After your first turn, any bombed explorer who enters your room or an adjacent room (doors not required) immediately explodes with all heroes there (you\'re unaffected). A deactivated hero can\'t explode from your roll or proximity. You can use Dynamite in your own room (you aren\'t affected).',
      },
      {
        heading: 'If You Win',
        body: 'The bomb is beautiful — a true work of art, the culmination of all your skill and mad desire. Time to show the world its glory!',
      },
    ],
    monsters: [],
  },

  {
    id: 46,
    title: 'The Feast',
    intro:
      'You smell a delicious banquet. Human body parts lead to a severed head on a silver platter — your friends have prepared your favorite meal. You are a civilized cannibal, and the freaks are ready to help prepare the next course: the victims you brought here.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer turns traitor.\nIf the Dining Room isn\'t in the house, find it and put it on the ground floor, then shuffle.\nPut small purple monster tokens (Cannibal Freaks) in the Dining Room equal to the number of heroes.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'Victims captured by the Freaks have escaped from the Attic; the heroes will try to save them.',
      },
      {
        heading: 'You Win When',
        body: 'Either all the Victims are eaten or all the heroes are dead. If even one Victim escapes through the front door, you can win only by killing all the heroes.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'A defeated Cannibal Freak is killed (not stunned). Victims can\'t attack; if you or a Freak defeats a Victim, it\'s killed and the attacker can feast (a Victim inflicts no damage if it wins). You and Freaks don\'t slow Victims and vice versa.',
      },
      {
        heading: 'Feasting',
        body: 'A killed Victim becomes a Corpse (flip its token); a killed hero is tipped over. If you or a Freak shares a room with a Corpse/dead hero at the start of your turn and no living hero is present, you can feast. Spending an entire turn feasting (no other actions) adds 1 to each of your traits (Freaks too). Once eaten, remove the body.',
      },
      {
        heading: 'If You Win',
        body: 'You raise the victim\'s head and chant: "Through flesh and bone and blood I am become flesh and bone and blood no more!" Immortality fills the empty vessel of your flesh, and the cannibal freaks bow down and worship you.',
      },
    ],
    monsters: [{ name: 'Cannibal Freaks', stats: 'Speed 2 · Might 4 · Sanity 4' }],
  },

  {
    id: 47,
    title: 'Worm Ouroboros',
    intro:
      'Your body stretches; your skull splits in two and your torso becomes a long snake. You feel huge, and you need to grow even larger — a need so strong you could crush the world. Maybe you\'ll start by crushing this house.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Remove your figure — you are now the two-headed Worm Ouroboros.\nDrop all items in the haunt-reveal room. If you held the Girl, Dog, or Madman, you devour them (discard).\nPut the two large circular Ouroboros Head tokens in the haunt-reveal room.\nSet aside 16 small green monster tokens (Ouroboros Body).',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'They\'re trying to kill you.',
      },
      {
        heading: 'You Win When',
        body: 'You put all 16 Ouroboros Body tokens inside the house — then you\'re large enough to destroy it and escape.\nEach turn, roll separately for each Head\'s movement. Put one Body token in each room a Head vacates (if none there; one per room). Heads can move through Body rooms (no new token) but not through Secret Stairs/Passage or the Mystic Elevator. Heads can discover rooms (ignore symbols; a symbol doesn\'t end movement).',
      },
      {
        heading: 'Special Attack Rules',
        body: 'Once the heroes complete a special ritual, they can attack the Heads. Each Head must be hit a number of times equal to half the players (rounded up) to be destroyed. Only the Heads attack, but both Head and Body tokens slow heroes (heroes don\'t slow Heads). Heads can\'t be stunned and aren\'t affected by Speed attacks.',
      },
      {
        heading: 'If You Win',
        body: 'You have encircled the house, your coils crushing the timbers. You grow larger and more powerful. Soon you will circle the world — and after the world is yours, the stars must surely follow.',
      },
    ],
    monsters: [{ name: 'Ouroboros Head', stats: 'Speed 1 · Might 6' }],
  },

  {
    id: 48,
    title: 'Stacked Like Cordwood',
    intro:
      'You told your companions about grisly deaths here five years ago — a madman who couldn\'t be killed, whose mangled body always returned. There\'s a reason you know so much: that madman was a distant relative. He\'s coming back, and he\'s going to need victims.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer turns traitor.\nPut the large circular Crimson Jack token in the Entrance Hall, right next to the front door.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'They\'re looking for a weapon capable of killing Crimson Jack.',
      },
      {
        heading: 'You Win When',
        body: 'All the heroes are dead.\nIf Crimson Jack is defeated, he\'s temporarily removed instead of stunned or damaged; at the start of your next turn he returns to the Entrance Hall. Each time he returns, add 1 to each of his traits.\nCrimson Jack projects an aura of fear: at the start of each hero\'s turn, a hero in his room must roll Sanity 3+ or lose 1 mental and 1 physical point.',
      },
      {
        heading: 'If You Win',
        body: 'Crimson Jack\'s hulking form looms over your friend\'s body, his pale face fixed in a grin that never dies. But already you grow bored. You\'re sure you saw a frat house just down the road...',
      },
    ],
    monsters: [{ name: 'Crimson Jack', stats: 'Speed 3 · Might 3 · Sanity 3' }],
  },

  {
    id: 49,
    title: 'You Wear It Well',
    intro:
      'When you were five, you found a spirit in your Mommy\'s bedroom preparing to steal her soul. You begged it not to — for a price. You\'ve brought your friends here today to pay that price with their souls.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer turns traitor.\nPut a small purple monster token (the Astral Spirit) in your room.\nSet aside triangular Sanity Roll tokens equal to the players.\nThe Astral Spirit has forced the heroes\' Souls out of their bodies; their bodies are now unconscious.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'They\'re trying to destroy the Astral Spirit so they can re-enter their bodies.',
      },
      {
        heading: 'You Win When',
        body: 'Either all the heroes\' Souls are destroyed, or the Astral Spirit inhabits a soulless hero\'s body.',
      },
      {
        heading: 'How the Spirit Inhabits a Body',
        body: 'Once a hero\'s Soul is destroyed, the Astral Spirit can ritual into that body. Once per turn it can roll Sanity against a body in its room, needing a result higher than that explorer\'s starting Sanity; each success adds a Sanity Roll token by the body. When a body has tokens equal to the players, the Spirit inhabits it and you win. The Spirit can move through walls (not floors/ceilings) and isn\'t stunned if defeated.',
      },
      {
        heading: 'Defeating Explorers\' Souls',
        body: 'The Astral Spirit can\'t attack a physical body, only a Soul, and only with Sanity or Knowledge. You can attack a hero\'s unconscious body (no defense): roll 2 dice of mental damage. Reducing a hero\'s Knowledge or Sanity to the skull this way destroys their Soul, but the Spirit can\'t inhabit that body.',
      },
      {
        heading: 'If You Win',
        body: 'One friend\'s body staggers upright, gasping. Everything is different. Your friend whispers, "Ahhhh... it has been so long since I have worn a coat of flesh." "You wear it well," you say. And the spirit does.',
      },
    ],
    monsters: [{ name: 'Astral Spirit', stats: 'Speed 3 · Sanity 6 · Knowledge 6' }],
  },

  {
    id: 50,
    title: 'Treasure Hunt',
    intro:
      'This haunt has no traitor — just heroes. All the heroes are competing to find the hidden treasure.',
    sections: [
      {
        heading: 'Where to Find the Rules',
        body: 'The rest of the rules for this haunt are in the Secrets of Survival booklet.',
      },
    ],
    monsters: [],
  },
];

/** Look up a haunt story by its number (1–50). */
export function findHauntStory(id: number): HauntStory | undefined {
  return TRAITOR_TOME.find(h => h.id === id);
}
