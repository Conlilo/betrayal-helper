import type { Lang } from '@/types/shared';
import type { HauntStory } from '../types';
import { TRAITOR_TOME_VI } from './traitorTome.vi';

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

  // ===== Widow's Walk expansion (haunts 51–100 + Seasons of the Witch) =====
  {
    id: 51,
    title: "Director's Cut",
    intro:
      '"Cut! Cut! Cut! For Kubrick\'s sake, you people are the WORST actors! At most one of you will be working on this movie come morning — and I don\'t care who!" If only one actor gets to star in this steaming pile of celluloid, it\'s gonna be you.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorers are still in the game but have turned traitor. Each explorer discards all weapon item cards and weapon omen cards and draws an equal number of non-weapon item cards.',
      },
      {
        heading: 'What You Know About the Hero',
        body: 'The hero is the Director of the film The Haunting of Hell Hotel. You are struggling actors, and each of you must kill all the other actors. The weapons you collected are useless props. The Director holds an omen card concealing the Vision (a face-down event card) — getting it might impress the Director and keep your job. The Director\'s Production Assistants are also opponents; if you attack the Director, a Production Assistant interposes, defending with Knowledge.',
      },
      {
        heading: 'You Win When',
        body: 'One of you holds the Director\'s Vision in the Theater with no other actors present; the Director then gives instructions which may let you win. All the rest of you lose. If you kill the Director, you lose.',
      },
      {
        heading: 'Special Item and Omen Rules',
        body: 'If you draw a weapon from the item or omen stack, discard it and draw another card from the same stack.',
      },
      {
        heading: 'How the Item Tokens Work',
        body: 'Props (pentagonal item tokens) sit in some rooms. Entering a room with one, look at its number and keep it number-side-down (max one at a time; if you take a second, look at both, keep one, leave the other). Reveal a Prop\'s number to the other explorers when you use it.',
      },
      {
        heading: 'Token Items (1–10)',
        body: '1 Powerless Chainsaw: 2 dice physical to another explorer, 1 die to yourself, then end your turn. 2 Sawed-Off Shotgun: Speed attack; whoever wins deals the difference. 3 Flash Powder: Knowledge attack (no damage); on win, the target drops all item tokens and item cards and you pick one up. 4 Fog Machine: Knowledge attack (no damage); on win, move to an adjacent room and drop the Smoke token there (leaving needs Sanity 5+). 5 Hook for a Hand: Might attack, +1 die, and drop one item card, item token, or omen. 6 Plastic Skeleton: Might attack vs an explorer in an adjacent room; on their next turn they need Speed 5+ to exit. 7 Screechy Violin: 2 dice Sanity to another explorer, 1 die to yourself. 8 Clapperboard: draw an event, then keep it or give it away (once per turn). 9 Dove-Summoning Capguns: Speed attack (no damage); on win, move the target to a discovered room up to three rooms away. 10 The Plan: if in the Director\'s room, take the omen that started the haunt and the face-down card under it (don\'t look).',
      },
      {
        heading: 'Special Attack Rules',
        body: 'Make a Knowledge attack vs a Production Assistant in your room. You can\'t attack the Director while a Production Assistant is in your room. Stun an Assistant → send it to any room on your floor without an explorer; if you lose, the Director may move your figure the same way. If an attack deals 2+ damage to an actor or the Director who holds an item token or the Vision omen, take it instead (drop any item token you have; don\'t look at the event card).',
      },
    ],
    monsters: [],
  },

  {
    id: 52,
    title: 'Prism',
    intro:
      'The trap door snaps shut above you. The paperwork for Group 22B waits on the desk. You settle into your favorite swivel chair and click "Begin Experiment."',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer is still in the game but has turned traitor and is no longer in the house — remove your figure and discard your cards. You are the master of the prism, controlling its Traps. Roll 2 dice for a Mathematical Sequence (don\'t reveal it). Put the 24 Obstacle tokens (Traps) face-up, one per non-landing room (set extras aside). On paper, choose a room that holds a token in your sequence as the exit room, note it, and hide it. Move the rooms the heroes are in to new positions (don\'t move the exit room if a hero is in it; connect doors when able and keep a path from the exit room to its floor\'s landing). Set the Turn/Damage track to 6.',
      },
      {
        heading: 'Mathematical Sequences',
        body: '0 Threes: 3, 6, 9, 12, 15, 18, 21, 24. 1 Fibonaccis: 1, 2, 3, 5, 8, 13, 21. 2 Fours: 4, 8, 12, 16, 20, 24. 3 Primes: 2, 3, 5, 7, 11, 13, 17, 19, 23. 4 Powers of 2: 1, 2, 4, 8, 16.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'They will try to discover which room is the exit and reach it before time runs out.',
      },
      {
        heading: 'You Win When',
        body: 'All the heroes have died, or time runs out before they find the exit room.',
      },
      {
        heading: 'You Must Do This on Your Turn',
        body: 'Lower the Turn/Damage track; at 0 the haunt ends. After lowering, pick up the rooms the heroes are in and move them elsewhere (connect doors when able, keep a path from the exit room to its landing; don\'t move the exit room if a hero is in it).',
      },
      {
        heading: 'Triggering the Traps',
        body: 'When a hero enters a room with a Trap token, if its number is in your sequence the room is safe — flip the token to its blank side. Otherwise remove the token and roll a die: 0 the hero makes a Knowledge attack (you win → 1 mental damage and ends all movement); 1 a Speed attack (you win → 1 damage to a trait of the hero\'s choice and ends all movement); 2 a Might attack, no weapons (you win → 1 physical damage and ends all movement).',
      },
      {
        heading: 'Special Attack Rules',
        body: 'You cannot take damage.',
      },
      {
        heading: 'Special Movement Rules',
        body: 'If you set aside any Obstacle tokens at the start, put one into each new room as it is discovered.',
      },
    ],
    monsters: [],
  },

  {
    id: 53,
    title: 'Till Morning Light',
    intro:
      '"Let us in! We only want to kill you!" the voices shout. On the Surge, it\'s legal for one night to kill anyone you want. If you let them in, surely they\'ll only kill the others. Time to open some doors...',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer is still in the game but has turned traitor. Set aside the small blue monster tokens (Surgers) numbered 1 to 9.',
      },
      {
        heading: 'You Win When',
        body: 'All the heroes are dead.',
      },
      {
        heading: 'How to Let the Surgers In',
        body: 'During your turn, in any ground-floor room with a door not connected to a room, roll 3 dice (1 fewer die for each hero in the room). On 3+ put a Surger in the room. In the Entrance Hall with the Key, you place the token automatically.',
      },
      {
        heading: "You Must Do This on the Monsters' Turn",
        body: 'At the end of the monster turn, advance the Turn/Damage track. When it reaches 5, the haunt ends.',
      },
      {
        heading: 'Special Movement Rules',
        body: 'Surgers cannot pass a Lock unless three or more Surgers are on either or both sides of it (then remove the Lock from the door). Surgers cannot use dumbwaiters.',
      },
    ],
    monsters: [
      {
        name: 'Surgers',
        stats: 'Speed 3 · Might 6* · Sanity 3 · Knowledge 3 (*+1 Might per other Surger in the same room, max 8 dice)',
      },
    ],
  },

  {
    id: 54,
    title: 'Monster Mash',
    intro:
      'You were working in the lab late one night... You\'ve been setting up this party for months — booking The Cryptkicker Five, filling the house with stranded bus passengers. But these victims are fighting back instead of cowering!',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer is still in the game but has turned traitor. If the Ballroom isn\'t in play, search the room stack for it, place it, and shuffle. For each Guest List room in play, put the noted monster token there. If fewer than three monsters are in play, search the stack for enough monster starting rooms for three monsters, place them, and shuffle.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'The heroes think they can find things in the house to destroy your guests. Destroy them first.',
      },
      {
        heading: 'You Win When',
        body: 'All the heroes are dead, or at least four monsters are in the Ballroom.',
      },
      {
        heading: 'You Must Do This on Your Turn',
        body: 'When you would discover a room, draw the next five rooms for that floor, choose one, and put the other four on the bottom of the room stack in any order.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'You cannot be attacked.',
      },
      {
        heading: 'Special Movement Rules',
        body: 'When a Guest List room is discovered by anyone, put its monster there. When you move a monster, if a hero is in line of sight you must move it toward a visible hero; otherwise move it by the shortest route toward the Ballroom (including Coal Chute, dumbwaiters, etc.). Once a monster enters the Ballroom it stays there.',
      },
      {
        heading: 'Guest List',
        body: 'Bloody Room → Crimson Jack (Speed 3 / Might 7 / Sanity 2; if stunned, moves to the Entrance Hall). Chasm → Banshee (4 / 7 / 5; always attacks using Sanity). Crypt → Dracula (3 / 6 / 4; heroes who begin a turn in his room spend an extra space to exit). Graveyard → Zombie Lord (2 / 6 / 4; heroes defeated but not killed turn traitor). Library → Mummy (2 / 6 / 5; deals 1 physical damage if damaged during an attack). Operating Laboratory → Frankenstein\'s Monster (2 / 8 / 3; immune to Speed attacks). Pentagram Chamber → Demon Lord (3 / 6 / 4; can\'t take damage during an attack; may attack from a connecting room). Widow\'s Walk → Witch (3 / 5 / 5; may attack using Might or Sanity).',
      },
    ],
    monsters: [],
  },

  {
    id: 55,
    title: 'She Is Not Amused',
    intro:
      '"Awaken, Medusa! Awaken and end the rule of man!" You pull back your hood and, for the first time in millennia, the snakes sprout from your hair. You will turn the spawn of Perseus into your perpetual companions, frozen in stone.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer is still in the game but has turned traitor. If the Statuary Corridor isn\'t in play, search the room stack for it, place it, and shuffle. Put your figure in the Statuary Corridor. Put a small orange monster token (Statue) face-down in each room with an item or omen symbol. If the Armor card isn\'t in play, search the item stack and discard pile, take it, then shuffle the discard pile into the stack. Gain 2 Might and 1 Speed. Set aside Might Roll tokens and Sanity Roll tokens, each equal to the number of heroes.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'They are the progeny of Perseus and must be petrified.',
      },
      {
        heading: 'You Win When',
        body: 'All the heroes are dead or turned to stone.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'If you deal physical damage on an attack, give that explorer a Might Roll token (they lose 1 Might at the end of each of their turns, except while petrified). On your turn, if no explorer is in your room, you may gaze: pick an exit, and all heroes in line of sight must make a Sanity roll of 4+ or be turned to stone (give them a Sanity Roll token; they can\'t move or act until no longer petrified). You may not attack and gaze on the same turn.',
      },
      {
        heading: 'How You Regenerate',
        body: 'At the end of your turn, if your Might is below its starting value and you took no physical damage this turn from an explorer who has a mirror, gain 1 Might.',
      },
    ],
    monsters: [],
  },
  {
    id: 56,
    title: 'Make America Disintegrate Again',
    intro:
      'His waxy face peeled to reveal maggots and gaping eye sockets, yet his cold words now make perfect sense to you. He is the one who will make this country great again — as soon as he completes the Rites of Ascension. Your friends have to see the truth. You\'ll make them see.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer is still in the game but has turned traitor. You are a campaign manager for a Lich running for president. Set aside the Madman (the Lich) and put one Obstacle token (Power) on it. Put three pentagonal item tokens (Phylacteries) anywhere in the house. You must speak only in bombastic political talking points from now on.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'They are trying to stop the ritual.',
      },
      {
        heading: 'You Win When',
        body: 'All the heroes are dead or traitors, or twenty Power tokens are stacked on the Madman card, completing the Rites of Ascension.',
      },
      {
        heading: 'You Must Do This on Your Turn',
        body: 'At the end of each of the original traitor\'s turns, add a Power token to the Madman card for each traitor still living, including yourself.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'Traitors now do all damage to Sanity. A hero reduced to 0 Sanity becomes a traitor (reset traits), speaking only in empty talking points. When attacking, a traitor can offer The Choice: deal the damage to the target, or split it among the other heroes (rounded up); if The Choice is accepted, gain 1 Sanity. Instead of damage, you can force the explorer to move that many tiles from their room (you choose where).',
      },
      {
        heading: 'If You Would Be Reduced to Zero Sanity',
        body: 'You stay at 1 point above your Sanity skull symbol.',
      },
    ],
    monsters: [],
  },

  {
    id: 57,
    title: 'The Gathering Storm',
    intro:
      'This haunt has no traitor — just heroes. You are all trying to escape the house. The rest of the rules are in Secrets of Survival.',
    sections: [
      {
        heading: 'Where to Find the Rules',
        body: 'This scenario has no traitor; all of the rules are in the Secrets of Survival booklet.',
      },
    ],
    monsters: [],
  },

  {
    id: 58,
    title: 'Olly Olly Oxen Free',
    intro:
      'A little girl\'s spirit giggles and jumps inside your body. Memories flash of a game of Hide and Seek where the only one who came to find you was death. In this new body, you can finish your game...',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer is still in the game but has turned traitor. Set aside pentagonal item tokens (Dolls) equal to the number of explorers — the only friends you\'ve been able to play with until now.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'They are playing your game whether they want to or not. They are trying to hide from you; if you find them they become "It".',
      },
      {
        heading: 'You Win When',
        body: 'All the heroes are found and become "It".',
      },
      {
        heading: 'Special Attack Rules',
        body: 'Heroes are always hiding while in a room; to find them you must make Knowledge attacks. Defeat a hero this way and they are found, become "It", turn traitor, and start seeking other heroes. A hero who becomes "It" drops a Doll if carrying one and reads the Traitor\'s Tome. Heroes cannot deal damage to traitors.',
      },
      {
        heading: 'Seeking',
        body: 'Heroes are always seeking. When a hero finds a Doll, give that hero an item token. You cannot pick up or steal a Doll; that would be cheating.',
      },
    ],
    monsters: [],
  },

  {
    id: 59,
    title: "The Fleshchild's Alchemical Mandate",
    intro:
      'You recognize the Philosopher\'s Stone your master pressed into your sternum when he brought you to life. The venerable Zosimus Alchemista built you to gather samples. You are his Fleshchild, and you can return to your work now that you remember what you are.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer is not still in the game, but someone much like you is. Flip your character card, setting your traits to the starting values on the new side, then raise each trait by the number of heroes.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'They know what you are. You must collect samples (Flesh) from each of them for your master.',
      },
      {
        heading: 'You Win When',
        body: 'You have all the Flesh on your character card, or all the heroes are dead.',
      },
      {
        heading: 'How to Harvest Flesh',
        body: 'Each hero starts with an orange monster token (a pound of Flesh) on their card. When you start your turn in a room with one or more Flesh, pick up one and put it on your card. Flesh counts as an item and can be dropped or stolen, but not traded.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'When you defeat a hero with Flesh on their card, increase the damage you deal to that hero by 1.',
      },
      {
        heading: 'Special Movement Rules',
        body: 'When you add Flesh to your card, you may immediately move up to your Speed. When you start your turn in a room with an orange monster token, pick up one Flesh.',
      },
    ],
    monsters: [],
  },

  {
    id: 60,
    title: "Cat O'Clock",
    intro:
      'You look deep into the cat\'s soulful eyes and realize you would do anything for The Cat. The Cat has awoken but is locked inside the house. It requires you to let all the kittens in — then it can take over the world.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer is still in the game but has turned traitor. Raise both physical traits by 2 and lower both mental traits by 2 (no lower than the lowest value above the skull). Set aside six Sanity Roll tokens. Put a large circular Cat token in the reveal room. Put red monster tokens (Kittens): two if 2–3 heroes, three if 4–5 heroes. Roll 2 dice twice on the Cat Name table to name The Cat; always use this name.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'The heroes are trying to soothe the Kittens and make them forget world domination.',
      },
      {
        heading: 'You Win When',
        body: 'All the heroes are dead, or The Cat exits the house through the front door in the Entrance Hall.',
      },
      {
        heading: 'You Must Do This on Your Turn',
        body: 'You may spend 1 space of movement to attempt a Might roll of 3+ to open a window or drawer in your room. On success, put a Sanity Roll token in the room (you\'ve opened it) and put a Kitten in the room. If all six Sanity Roll tokens are in the house, choose one and move it to your current room.',
      },
      {
        heading: 'Your New Feline Friends',
        body: 'Kittens don\'t impede movement, but deal 1 physical damage to any hero who enters their room (a soothed Kitten does not). On the monsters\' turn, each Kitten moves 4 spaces (never sharing a room); entering a room with heroes, it deals 1 physical to one hero. At the start of The Cat\'s turn, count unsoothed Kittens and divide by two (rounded down); The Cat\'s Speed and Might increase by that for the turn. To escape, The Cat must succeed at a Might roll of 6+, once per turn.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'If you are attacked, you may put a Kitten in any room that does not contain a Kitten.',
      },
    ],
    monsters: [{ name: 'The Cat', stats: 'Speed 0 · Might 3 · Sanity 6 · Knowledge 6' }],
  },

  {
    id: 61,
    title: "Captain Sting's Revenge",
    intro:
      'The sea parts into a portal and you find yourself in the Underground Sea. "Prepare t\' conquer this here land and take all the loot ye can find!" The first thing you do is slaughter the person who opened your long-sought treasure chest.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer is dead — remove your figure and discard your cards. Put the large circular Pirate Queen token (Captain Sting) in the room you were in. If the Underground Lake isn\'t in play, search the room stack for it, place it in the basement, and shuffle. Put the Box (the Treasure Chest) in the Underground Lake. Put magenta monster tokens (Pirates) equal to the number of heroes in the Underground Lake.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'They are landlubbers; they win if the Treasure Chest is destroyed in the Underground Lake.',
      },
      {
        heading: 'You Win When',
        body: 'All the heroes are dead, or you have secured Pieces of Loot equal to the number of heroes and returned them to the Treasure Chest.',
      },
      {
        heading: 'You Must Do This on Your Turn',
        body: 'If you or a Pirate brings a Piece of Loot to the Treasure Chest, roll 1 die; on 1 or higher, put the Piece of Loot in the Chest.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'Captain Sting can steal an item card during any attack, win or lose, attacking or attacked. Pirates only need to deal 1 point of damage to steal.',
      },
      {
        heading: 'Special Movement Rules',
        body: 'Captain Sting moves using her Speed and does not roll to move. Pirates (including Sting) carry only one Piece of Loot at a time; while carrying one, they move 1 fewer space.',
      },
    ],
    monsters: [
      { name: 'Captain Sting', stats: 'Speed 5 · Might 8 · Sanity 5 · Knowledge 4' },
      { name: 'Pirates', stats: 'Speed 4 · Might 3 · Sanity 4 · Knowledge 2' },
    ],
  },

  {
    id: 62,
    title: 'Rosencrantz and All of You Are Dead',
    intro:
      'A wave of mystic energy washes over you. You are dressed in Elizabethan costume with a crown upon your head. Your name is now Hamlet and you like to talk out loud to yourself a lot.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer is still in the game but has turned traitor. Raise any of your traits that are lower than your Speed up to your Speed value.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'Those jerks killed your dad, the King of Denmark. You\'ll get your revenge and then die with an amazing death scene — if they don\'t rush through the five acts first.',
      },
      {
        heading: 'You Win When',
        body: 'You say your lines and die at the end of a duel, or all the heroes are dead.',
      },
      {
        heading: 'How to Die',
        body: 'Get the explorers to kill you, but first say your lines in order. 1. Go to the room with item token 1 (the Mirror): "O, that this too solid flesh would melt!" 2. Go to the room with item token 2 (the Dagger): "To be, or not to be: That is the question." 3. Get yourself killed: "O, I die, Horatio! ... The rest is silence." Say this as you die and you win.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'After you attack a hero, if the hero is still alive they immediately attack you. You can only die from attacking or being attacked; in all other cases, if you would die, lower the trait to the lowest value above the skull symbol.',
      },
      {
        heading: 'Special Rhyming Rules',
        body: 'When you take an action, if you describe it with a rhyme you get +2 to your roll or +2 to the relevant trait. Once per turn.',
      },
    ],
    monsters: [],
  },

  {
    id: 63,
    title: 'Shush',
    intro:
      'You pull off your human mask, revealing your true form — an evil fairy that feeds on the hearts of man. You set the Voicebox down and start your task. Now nobody can hear them scream.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Put the Box card (the Voicebox) next to your room. Choose a number 1–6: that\'s how many uncursed Spellbooks the heroes must collect to be able to hurt you and destroy the Box. For every step from your number to 6, add 1 to one of your traits (not always the same trait). Put six pentagonal item tokens (Spellbooks) face-down in different rooms. On paper, note which represent the cursed Spellbooks.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'They must win but don\'t know how. You hold the keys to their victory; they have to earn them.',
      },
      {
        heading: 'You Win When',
        body: 'All the heroes are dead.',
      },
      {
        heading: 'The Restrictions on Explorers',
        body: 'The heroes cannot talk to each other until they regain their voices. Once you resume the game, each time a hero speaks aloud they take 1 die of damage to a trait of their choice (chuckling or giggling doesn\'t count).',
      },
      {
        heading: 'When a Hero Collects a Spellbook',
        body: 'Check the token\'s number. If it matches a cursed Spellbook, it explodes — the hero takes 1 die of physical damage and removes the token. If it matches an uncursed Spellbook, the hero takes the token.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'If a hero attacks you before the group has collected the right number of Spellbooks, go through the motions but take no damage (you can still damage the hero).',
      },
      {
        heading: 'Interacting With the Voicebox',
        body: 'Until the heroes collect the right number of Spellbooks, no one (including you) can pick up or destroy the Voicebox. After they do, a hero in the room can pick up or destroy it; if destroyed, remove the Box, the heroes regain their voices, you take 1 die of damage to each trait, and the heroes can now damage you (you don\'t have to tell them that).',
      },
    ],
    monsters: [],
  },

  {
    id: 64,
    title: 'Chairman of the Board',
    intro:
      'Your newest guest thought you were just curious citizens. Little did they know you were already poltergeists, permanent residents bound to swell your ranks. What kind of hosts would you be if you let your guest leave before their residency is secured?',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorers are still in the game but have all turned traitor — your figures remain, but you are Poltergeists. Put the hero\'s figure in any basement or roof room not separated from the house by a barrier (if a Poltergeist is there, swap places). Get some paper. Look closely at the details of every room tile.',
      },
      {
        heading: 'What You Know About the Hero',
        body: 'The hero is trying to escape through the front door of the Entrance Hall. If they make it, you lose your chance to add them as a ghostly resident.',
      },
      {
        heading: 'You Win When',
        body: 'The hero dies.',
      },
      {
        heading: 'Special Movement Rules',
        body: 'You move through walls as if they were doorways (not through floors/ceilings), and freely up/down the Coal Chute, Collapsed Room, and Gallery. You ignore room text about physical traits or physical damage. You can\'t discover new rooms or use the Mystic Elevator or dumbwaiters. You may use your item/omen cards but can\'t trade or acquire them.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'You can\'t make normal attacks. Instead, end your movement in the hero\'s room and throw something: write the name of a thing depicted on the room tile (one or two words, 6+ letters, not tricky), then make a Sanity attack (the hero defends per Secrets of Survival). Answer questions truthfully. If you deal damage, you may instead move the hero that many rooms (a legal move). When you defend, use only Sanity or Knowledge; physical damage to you becomes mental.',
      },
      {
        heading: 'Special Death Rules',
        body: 'You can\'t be truly killed. If you die, remove your figure and lose all item cards; at the start of your next turn place yourself in the Dungeon, Rookery, Study, or Theater, reset your traits, and don\'t move that turn.',
      },
    ],
    monsters: [],
  },

  {
    id: 65,
    title: 'Sushi Night',
    intro:
      'Water flows from the walls and a searing pain shoots through your legs. Whether you like it or not, your fins have returned. You are a Merperson now.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer is still in the game but has turned traitor (a generally peace-loving Merperson). Raise your Speed to its maximum value. Set aside three of your explorer tokens. Put the Fountain token in any basement room and put your figure there. Starting in the Fountain room, put face-down small monster tokens (Flood) equal to the number of explorers on rooms, one per room. Once every room on a floor is flooded, put extra Flood tokens on the next floor up.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'They are hunting you. They look hungry.',
      },
      {
        heading: 'You Win When',
        body: 'The entire house is flooded and you escape to the ocean — or you transform back into a human, so they no longer have reason to hunt you.',
      },
      {
        heading: "You Must Do This After Each Explorer's Turn",
        body: 'Put a Flood token on an unflooded room. After the turn of the explorer to your right, flood three rooms instead. Flood the lowest floor not yet fully flooded; overflow to the next floor up.',
      },
      {
        heading: 'Special Movement Rules',
        body: 'If you move into a room without a Flood token, you must stop moving. If you end your turn without having been in a Flood room, put an explorer token on your card; at three tokens your fins dry and you become human. Once a floor is fully flooded, rooms discovered there are also flooded.',
      },
    ],
    monsters: [],
  },

  {
    id: 66,
    title: 'The Cardinal Sins',
    intro:
      '"Today, if all goes as planned, I shall be elected Pope! To ensure my uncontested election, I shall bathe this house in the blood of sinners!" No other cardinal is as worthy of Popehood as the legendary Cardinal Sinn.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer is still in the game but has turned traitor. Raise your traits by a total of 5 points. Put your figure in any landing.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'They are trying to stop your ascension to Popehood. Electors (small monster tokens) are around the house, each with a vote; plead your case by punishing the heroes for their sins.',
      },
      {
        heading: 'You Win When',
        body: 'All the heroes are dead, or you are on the roof to send up the white smoke and you have four or more Electors on your character card.',
      },
      {
        heading: 'How to Denounce a Sin',
        body: 'Once per turn, in a room with an Elector, instead of attacking you may denounce the sin of that Elector\'s color. Denounce the closest hero ("I excommunicate you because of your sin of [name]"), then attack as shown on the Electors table. If you deal damage, steal a random item card and put the Elector on your card. With the Ceremonial Robe, attack the two closest heroes the same way, gaining only one Elector even if you damage both.',
      },
      {
        heading: 'Electors',
        body: 'Red (Wrath) attack with Might. Orange (Gluttony) with Sanity. Yellow (Sloth) with Speed. Green (Envy) with the hero\'s lowest trait. Blue (Greed) with the hero\'s highest trait. Purple (Pride) with Knowledge. Magenta (Lust) with your highest trait.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'Unless you have four or more Electors, you can\'t take mental or physical damage. However, a hero can steal an item card from you when they would otherwise deal you 2 or more physical damage with an attack.',
      },
    ],
    monsters: [],
  },

  {
    id: 67,
    title: 'Murderball',
    intro:
      'A spectral boy with a slingshot cries, "Got you! No tag backs!" Then the slingshot and bloodstone appear in your hands. You\'ve got several targets, and they bleed pretty when you hit them.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer is still in the game but has turned traitor. If a hero has the Bloodstone card, take it. If the Nursery isn\'t in play, search the room stack for it, place it, and shuffle. Set aside small red monster tokens (Kills) equal to twice the number of heroes.',
      },
      {
        heading: 'You Win When',
        body: 'You have three Kills, or collectively Kills equal to twice the number of heroes have been awarded. In the latter case, every explorer with a Kill wins; the one with the most Kills is the most-awesomest-winner.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'Attack with the Bloodstone: a Speed attack vs anyone in line of sight (you don\'t lower traits, so use it every time). If you\'re defeated, no damage from the failed attack, but the Bully deals you 1 mental for being a "Loser!". If you kill your target, keep the Bloodstone and remain traitor another turn. If not, give the Bloodstone and the Traitor\'s Tome to your target (they become traitor, may not attack you next turn). If you didn\'t attack, take 2 mental, roll a die, and pass the Bloodstone that many heroes to your left. If killed by a hero or you lose the Bloodstone to one, that hero becomes the traitor. When any explorer kills another, that explorer gets a Kill.',
      },
      {
        heading: 'Special Item and Omen Rules',
        body: 'You may not pick up or use weapons while you are the traitor. You don\'t take damage from using the Bloodstone, and you may not drop it.',
      },
    ],
    monsters: [],
  },

  {
    id: 68,
    title: 'He Who Must Not Be Read',
    intro:
      'As you open the book — a children\'s story about an evil necromancer named Maldovo — its illustrations glow. "At last, my summoning is complete. I am Maldovo, and I have arrived back into this world!"',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer is still in the game but has turned traitor. Raise all traits that are not at least 2 above their starting values to that value. Set aside item tokens 1–5 (Soulcruxes). Put item 1 (the Chest) in a room of your choice; keep the others nearby.',
      },
      {
        heading: 'You Win When',
        body: 'All the heroes are dead.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'You cannot take damage; you can still attack heroes and they can steal from you. If a hero dies, they drop all cards, become a Wraith, and join your side (a Wraith can\'t draw, carry, or use cards; a stunned Wraith is removed). If a hero had companions (Cat, Dog, Girl, or Madman) when turned, turn those face-down; each adds 1 die per companion to the Wraith\'s rolls. After all instructions are read, if any hero mentions your name — Maldovo — you may make a Sanity attack against them.',
      },
      {
        heading: 'Special Movement Rules',
        body: 'You can move through but not end your turn in a Soulcrux room (Wraiths can). You, the Wraiths, and the special items can discover rooms, operate the Mystic Elevator, and don\'t need special rolls to enter or exit rooms.',
      },
      {
        heading: 'Special Item Rules',
        body: 'When a hero enters the Chest room, announce the contents: the Chest is locked (Might 4+ to break, or auto-open with the Key). Opened → a Rabbit runs out (replace #1 with #2; it acts after the opener, flees at Speed 4; Speed 3+ to kill). Rabbit killed → a Duck (replace #2 with #3, Speed 5; Might 4+ to kill). Duck killed → an Egg (replace #3 with #4, Speed 1; Knowledge 5+ to break). Egg broken → your soul as a Pen (replace #4 with #5; Sanity 6+ to destroy).',
      },
    ],
    monsters: [],
  },

  {
    id: 69,
    title: 'No Noose Is Good News',
    intro:
      'You awaken with a noose in your hand, flooded with someone else\'s memories and an urge to carry out execution orders. The names on your list fill in like an old game of Hangman. So that\'s how you\'ll decide who gets the gallows...',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer is still in the game but has turned traitor. Get pieces of paper equal to the number of heroes and draw a Hangman gallows on each. Decide a theme (titles, names, or common words/phrases), specified to all players. In secret, write a word or phrase per hero (max four words, twelve letters). Under each gallows, write the blanks. Speak in a Wild West voice for the rest of the game.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'They are all on your execution list and will be playing Hangman to win back their lives.',
      },
      {
        heading: 'You Win When',
        body: 'All the heroes are dead.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'Instead of attacking, attempt to hang a hero: a Might attack vs a hero in your room (no damage); on a win, place a noose around their neck (until they break free, they can\'t guess letters and roll 2 fewer dice against attacks). If you\'re in the Roof Landing, Upper Landing, or Foyer, instead make a Speed attack vs a hero on the floor below — trace a path using both landings, rolling 1 fewer die per room between you (not counting your rooms), with an uninterrupted string of unlocked doors.',
      },
      {
        heading: 'How to Play the Gallows Game',
        body: 'Once per turn a hero may guess a letter. Correct → write it in. Incorrect → draw a body part (head, body, left arm, right arm, left leg, right leg), and that hero takes 1 die of physical damage. If a hero\'s Hangman card completes with a full person (six wrong guesses) while you\'re in line of sight, that hero is killed.',
      },
    ],
    monsters: [],
  },

  {
    id: 70,
    title: 'To Reach the Cosmos',
    intro:
      'A ringing in your ear keeps climbing. Every thought reverberates like a drum. You almost don\'t notice the pale blue tentacle entering the room, standing upright like a bendy straw pointing at your head.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer is still in the game but has turned traitor. Set aside the small green monster tokens (Brainstraws). Put one Brainstraw in your room and one in an adjacent room up to three rooms away without a hero in it (if there are no empty rooms, put them in your room). Get paper equal to the number of heroes; write a "Thought" for each and fold it. On the outside of each, write a trait (no trait more than twice) and raise that Thought\'s trait by 1.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'They don\'t want you to ascend; they\'ll cut your straws and try to take your Thoughts.',
      },
      {
        heading: 'You Win When',
        body: 'You end your turn holding each living hero\'s Thought.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'Instead of a physical attack, make a Sanity attack vs a hero in your room. A Brainstraw may steal a random Thought via a Knowledge attack, then ends its movement and spawns another Brainstraw in its room. If a Brainstraw is defeated during a hero\'s turn, it is stunned and retreats to your room. When a hero defeats you to steal your Thought, if you hold another explorer\'s Thought you may give that one instead.',
      },
      {
        heading: 'Losing and Gaining Thoughts',
        body: 'If you lose a Thought, lose 1 in the trait listed on the paper. If you gain a Thought, gain 1 in its trait and read it aloud.',
      },
    ],
    monsters: [
      {
        name: 'Brainstraws',
        stats: 'Speed 3 · Might 5 · Sanity 5 · Knowledge 5 (a Brainstraw in the Mystic Elevator disables it until it leaves)',
      },
    ],
  },

  {
    id: 71,
    title: 'The Other Side',
    intro:
      'You\'ve finally contacted the spirits of the house, and they are not friendly. You\'re standing in a locked house full of manifested ghosts. The only way out alive is to appease the Ghosts of the dead that control the house.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer is still in the game but has turned traitor. Set aside matching explorer tokens: one per hero with 4–5 heroes, two each with 3, three each with 2. Raise your Sanity and Knowledge to their maximum values. Ghosthunting equipment: for each hero, search the item stack and discard pile in this order — Chalk, Device, Ceremonial Robes, Locket, Blueprint — and take any a hero holds, then shuffle the discard pile into the stack.',
      },
      {
        heading: 'You Win When',
        body: 'You manage to put all the Ghosts to rest.',
      },
      {
        heading: 'How to Put a Ghost to Rest',
        body: 'Take something precious from each Ghost and deliver it to a room with an omen symbol; do this at least four times and at least once per Ghost. When you steal an item belonging to a Ghost, put that hero\'s explorer token on the item; take it to a room and put the explorer token there to mark it rested, after which that Ghost lowers its traits to their lowest values. You may not reuse a room already holding an explorer token.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'Attack Ghosts only with Sanity or Knowledge, once per turn per Ghost in your room; regardless of the trait, a Ghost can only lose Sanity. When you defeat a Ghost, gain 1 Sanity or Knowledge and take one of its items (even items that can\'t normally be lost). If a Ghost attacks you with Speed, Might, or Knowledge and wins, you take no damage unless your Sanity is at its minimum value.',
      },
    ],
    monsters: [],
  },

  {
    id: 72,
    title: "Man's Worst Enemy",
    intro:
      'You scooped up a poor trapped puppy, never noticing the pentagram around it. Now its soulful eyes have reshaped your mind. What a good boy he is — and you need to protect your friend from your former allies.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer is still in the game but has turned traitor. Discard the Dog card and put a red monster token (the Beast) in your room. If you have the Girl, Cat, or Madman, set aside their cards and adjust your traits accordingly (not below the skull); represent companions with different-colored monster tokens placed in different rooms up to 4 spaces away. Set the Turn/Damage track to 6.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'They are trying to destroy the Beast.',
      },
      {
        heading: 'You Win When',
        body: 'All the heroes are either dead or controlled by the Beast.',
      },
      {
        heading: 'You Must Do This on Your Turn',
        body: 'At the end of each turn, lower the Turn/Damage track. When it reaches 0, you may possess a hero, then reset the track to 6.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'The Beast makes Sanity attacks (mental damage); reducing a victim\'s mental trait to the skull possesses them. The Beast can\'t be attacked through normal means. You and other possession victims attack and use cards normally; if any of your traits drop to the skull you\'re removed. If a hero has the Cat card, the Beast must attack that hero if it can. When the Turn/Damage track reaches 0, the Beast may automatically possess the hero with the lowest Sanity.',
      },
    ],
    monsters: [{ name: 'The Beast', stats: 'Speed 4 · Might 4 · Sanity 6' }],
  },

  {
    id: 73,
    title: 'Existence Precedes Essence',
    intro:
      'You plunge a skull into glowing star-filled tar and it sprouts flesh, becoming a living Head. "What... Am... I?" it says. "Buddy, you\'re my new best friend, and together we will never be bummed again." "Hooray! Also, I\'m hungry," says the Head.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer is still in the game but has turned traitor. Lower your Sanity to the lowest value above the skull. Put the Fountain token and the large circular Head token in the reveal room. Set aside a matching explorer token per hero. Get three pieces of paper and write: "Attack the closest hero", "Join the traitor", "Rejoin the heroes".',
      },
      {
        heading: 'You Win When',
        body: 'All the heroes have either been fed to your Head or turned into more new friends.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'Instead of attacking, hurl the Head: toss it any number of rooms away in a straight line (including up/down stairs, the Balcony, or the Coal Chute), then make a Might attack vs a hero in that room. If a hero is killed, replace their figure with the matching explorer token. If the Head kills a hero or crosses an explorer token, put that token on the Head (tokens move with it and can be stolen). While the Head has any explorer tokens, it can\'t attack but may defend.',
      },
      {
        heading: 'More New Friends',
        body: 'If a hero\'s explorer token is brought into the Fountain, that hero reanimates as a monster (reset traits, give the "Attack" note, place in the closest hero\'s room). If the attacked hero attacks it back next turn, give the "Join" note (now on your side); if not, the "Rejoin" note (back to the heroes). Recover the paper each time.',
      },
    ],
    monsters: [{ name: 'The Head', stats: 'Speed 5 · Might 5' }],
  },

  {
    id: 74,
    title: 'Coulrophobia',
    intro:
      'You look in the mirror and realize this house isn\'t scary — it\'s hilarious! The funniest thing of all would be to murder everyone in really funny ways. Let\'s put on this big red nose first.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer is still in the game but has turned traitor — you are Knick-Knack the Clown and you tell knock-knock jokes. Put your figure in the Entrance Hall. You may reset any traits to 1 above their starting values. Set aside five pentagonal item tokens (Gags). Get five papers numbered 1–5 with words (1. Acid-blasting seltzer bottle, 2. Exploding whoopee cushion, 3. Neck-breaking banana peel, 4. Toxic cream pie, 5. Strangulating rubber chicken). Eyes closed, have each hero secretly pick one paper (hide unchosen ones).',
      },
      {
        heading: 'You Win When',
        body: 'You kill two heroes, or all but one hero is out of the house and you kill that hero.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'Once per turn, make a knock-knock joke or a killing joke. Knock-Knock: pick a Gag and tell a joke; each hero on your floor makes a Sanity roll. If your Gag matches that hero\'s paper, you laugh maniacally and they need 5+; others need 2+. Failures take 1 mental damage. Killing Joke: if you or the Dog are in a hero\'s room, use a Gag (destroyed); the hero needs Might or Speed 5+ or takes 1 physical and 1 mental. If the Gag matches their paper, put it face-up before them; on their next turn they begin laughing to death (1 physical and 1 mental at the end of each turn, no attacks). When you would take damage, destroy a Gag instead to take none. Noodles the Dog can attack and carry one Gag.',
      },
    ],
    monsters: [{ name: 'Noodles the Dog', stats: 'Speed 6 · Might 3' }],
  },

  {
    id: 75,
    title: 'Let It Glow',
    intro:
      'A snowglobe floods your brain with dark memories of freezing snow, and an icy power flows through you. Now everyone will feel as cold as your heart has been all these years...',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer is still in the game but has turned traitor. Set the Turn/Damage track to 1 (temperature; each number is 10°F below zero). Set aside ten orange monster tokens (Snow Monsters). Gain 2 Might and 2 Knowledge.',
      },
      {
        heading: 'You Must Do This on Your Turn',
        body: 'At the end of each turn, advance the Turn/Damage track (the temperature drops) and announce it. If the track reaches 0, you take 1 die of physical damage at the start of your turn unless you\'re in the Balcony.',
      },
      {
        heading: 'You Win When',
        body: 'All the heroes are killed or freeze to death. When the track reaches 9 minus the number of heroes at the start of the haunt, the house is completely frozen and all heroes freeze.',
      },
      {
        heading: 'How to Create Snow Monsters',
        body: 'Once per turn, create a Snow Monster in any room with an omen symbol by succeeding at a Knowledge roll of 5+ (max ten in play). A Snow Monster\'s Speed and Might equal the number on the track (minimum 1). If you\'re attacked in a room containing a Snow Monster, you can make the hero attack the Snow Monster instead.',
      },
      {
        heading: "You Must Do This on the Monsters' Turn",
        body: 'For each face-up Snow Monster in a room with an unlocked Thermostat, you may roll a die; for each blank result, advance the Turn/Damage track.',
      },
    ],
    monsters: [],
  },

  {
    id: 76,
    title: 'Back to the Past',
    intro:
      'You clean blood off your dagger and get a strange sense of deja vu. Someone has changed the past — or the future. No matter; all you have to do is remain hidden, and the power will be yours.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer is still in the game but has turned traitor. Set aside nine Obstacle tokens (Pentagrams) and six small monster tokens (Flipped Landings). Remove your figure from the house. Choose a room in play to hide in; write its name on paper and keep it secret.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'They are reversing time to stop you from killing them. Slow them down by masking your location.',
      },
      {
        heading: 'You Win When',
        body: 'You complete the ritual by being unrevealed when the Turn/Damage track reaches 0.',
      },
      {
        heading: 'Special Turn Order Rules',
        body: 'You don\'t take turns; you act on the heroes\' turns.',
      },
      {
        heading: "You Must Do This on Each Hero's Turn",
        body: 'A hero asks one yes/no question about your room (you must answer truthfully; questions are limited to the room\'s name or characteristics — not its floor, position, symbols, or text). After answering, roll 2 dice and flip face-down up to that many rooms the players now know aren\'t yours (never flip your room). When you flip a room, remove figures/tokens, flip it, put it back, then replace them. A flipped landing gets a small monster token reminder and is still treated as the landing.',
      },
      {
        heading: 'How to Slow the Heroes',
        body: 'At the start of each hero\'s turn, you may put one of the nine Pentagrams in any room (it costs an extra space of movement to enter). Each time a hero enters a flipped room, they take 1 die of mental damage.',
      },
    ],
    monsters: [],
  },

  {
    id: 77,
    title: "They're Always After Me",
    intro:
      'You open a cereal box and are engulfed in colorful lights — rainbows, moons, horseshoes. When they fade, your friend is a twisted little gnome. "Ye will not get me pot o\' gold!" the Leprechaun cackles, and takes off running.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer is still in the game but has turned traitor. Raise your Speed to its highest value. Shuffle the Medallion (your Lucky Charm) into the omen stack. Adopt a bone-chillingly bad Irish accent for the rest of the game.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'They seek your Pot of Gold at the end of a hidden Rainbow. Don\'t let them get your Lucky Charm, or they\'ll find the Rainbow.',
      },
      {
        heading: 'You Win When',
        body: 'All the heroes are dead.',
      },
      {
        heading: 'Special Turn Order Rules',
        body: 'You take a turn after each hero takes a turn. You\'re speedy.',
      },
      {
        heading: 'You Must Do This on Your Turn',
        body: 'If you end your turn in a room with an omen symbol, look at the top omen card then put it back. If you then succeed at a Knowledge roll of 4+, you may shuffle the stack.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'You can\'t attack with Might except on the Rainbow. Elsewhere, make Speed attacks rolling dice equal to your Speed or the number of room tiles you entered on this floor before attacking, whichever is fewer. You can\'t attack anyone in the room you start in (except on the Rainbow), nor enter a room you previously left this turn. If defeated when you attack or defend, cry "Dear boy, release me!" and the hero tells you what happens.',
      },
      {
        heading: 'Special Item and Omen Rules',
        body: 'If you would draw an item card, you may draw an omen instead. If you draw the Medallion, place the seven Colors of the Rainbow out from an open roof door (red, orange, yellow, green, blue, purple, magenta), then put the Pot of Gold at the end.',
      },
      {
        heading: 'The Rainbow',
        body: 'Each Color of the Rainbow is 1 space of movement. If you stop on a Color with a hero, or a hero ends on your Color, you may make a Might attack to push them off; on success they fall to their death.',
      },
    ],
    monsters: [],
  },

  {
    id: 78,
    title: "The Devil's Name",
    intro:
      'You lift a stone capstone and a name that threatens to consume tries to force its way into your mind. You are the Fiend. The Brimstone Square holds the secret of your true name — the only thing that might drive you back into your prison.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer is still in the game but has turned traitor. Gain 5 Knowledge. Put six pentagonal item tokens 1–6 (Tomes of Lore) in different rooms; at least one on each floor, and only one on your current floor. If you have the Chalk card, give it to a hero. Pick a number 1–20 for a 5-letter name on the Fiend\'s Name table; write it down secretly.',
      },
      {
        heading: 'How Your True Name Works',
        body: 'Each Tome of Lore can reveal one letter of your true name (after a hero spends all movement and successfully researches it; each instance of a letter is a different letter). If a hero in your room speaks your true name, you\'re banished and they win. If they speak the wrong name, you possess that hero. A hero may also speak a name to a possessed hero: correct ends the possession (can\'t be regained); incorrect deals mental damage equal to the number of unguessed letters.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'Make a Knowledge attack vs a hero in your room. If you reduce the hero\'s trait to the skull, a portion of your essence possesses them (reset traits, become a traitor). If any of your traits would drop to the skull, lower it to the lowest value above instead.',
      },
      {
        heading: 'Special Item Rules',
        body: 'You cannot pick up Tomes of Lore or the Chalk; possessed heroes can do both.',
      },
      {
        heading: 'You Win When',
        body: 'All the heroes are possessed or dead.',
      },
      {
        heading: "The Fiend's Name",
        body: 'Roll/pick 1–20 for a 5-letter name: 1 BALAM, 2 MATIR, 3 LILIM, 4 ORMIS, 5 VOTHR, 6 LOLTH, 7 BOTIS, 8 MIMUM, 9 VECUR, 10 ORPAK, 11 MECUH, 12 BAPHM, 13 VICTH, 14 ORCUS, 15 LETHK, 16 OICAK, 17 BELTH, 18 MOLAK, 19 LAMAS, 20 VEPAR.',
      },
    ],
    monsters: [],
  },

  {
    id: 79,
    title: 'The Twins',
    intro:
      'A red cord erupts between your two friends, binding them — a black whip filled with pinprick stars. They are two poles of a magnet, the space between crackling with force.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorers are still in the game but have turned Twin traitors. For each trait, you may lower one Twin\'s trait to raise the other\'s by the same amount. Set aside Obstacle tokens (Nodes) equal to six minus the number of heroes.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'They are trying to stop you from making a Seam — an energy wave that extends between you and your Twin when you\'re far enough apart.',
      },
      {
        heading: 'You Win When',
        body: 'You get out all the Nodes and can trace a path between you and your Twin that touches all the Nodes and includes at least twenty rooms.',
      },
      {
        heading: 'How to Weave the Seam',
        body: 'On your turn, drop a Node (like dropping an item) on a doorway or other route between rooms or floors; that route can no longer be moved or seen through by anyone, including you. If all Nodes are placed, remove one before dropping a new one. You may not put a Node in a room that already has one, nor one that would seal off rooms from the rest of the house. If you don\'t move on a turn you start in a Node room, you may tap the Node to raise a trait to its starting value.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'If you take damage, you may split it between you and your Twin, as long as both lose at least 1 point in a trait.',
      },
    ],
    monsters: [],
  },

  {
    id: 80,
    title: 'I, Mutant',
    intro:
      'You wake on the floor hours later, your skin a strange shade of periwinkle. The fine people at Humane Research Supplies delivered a fresh batch of monkeys for your experiments... and the monkeys have escaped their cages.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer is still in the game but has turned traitor. Refer to the heroes as "Monkeys" the rest of the game. If the Research Laboratory isn\'t in play, search the room stack for it, place it, and shuffle. For each Monkey, put a round monster token (Assistant) of a different color in the Research Laboratory. Put Obstacle tokens (Electronets) equal to the number of explorers in different rooms.',
      },
      {
        heading: 'You Win When',
        body: 'You successfully capture all your Monkeys.',
      },
      {
        heading: 'You Must Do This on Your Turn',
        body: 'You may put one Electronet in a room you occupied this turn; each Assistant may do the same on the monsters\' turn.',
      },
      {
        heading: 'How to Capture a Monkey',
        body: 'When a Monkey enters a room with an Electronet, they must roll Might, Speed, or Knowledge 5+ for each Electronet there. Any failed roll captures the Monkey (tip their figure); each success removes an Electronet.',
      },
      {
        heading: 'Assistants',
        body: 'Assistants move their full Speed (no roll) and may move captured Monkeys (spend 2 movement). A defeated Assistant is stunned; when no longer stunned, replace it with a different color. Red (3/5/2/2): may move a defeated Monkey to an adjacent room. Orange (5/3/2/2): moves through false doors. Yellow (2/2/2/5): attacks/defends with Knowledge — on success, place an Electronet and capture instead of dealing damage. Green (1/3/5/3): may teleport instead of moving. Blue (3/4/2/3): when defeated during an attack, the Monkey takes the excess as damage. Purple (3/4/2/3): +2 attack dice and steals an item instead of damage (you gain it). Magenta (3/4/4/1): cannot be stunned.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'You accidentally made the Monkeys unkillable. If you would kill a Monkey, any trait that would drop to the skull drops to the lowest value above, and the Monkey is captured instead (put an Electronet in its room).',
      },
    ],
    monsters: [],
  },

  {
    id: 81,
    title: 'The Canopic Curse',
    intro:
      'You\'ve discovered the canopic jar holding Khasekhemui\'s power upon the pharaoh\'s death. But even you don\'t know which jar in this house holds the essence. You\'ll have to get them all before the others figure it out.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer is still in the game but has turned traitor. Before leaving the room, collect Obstacle tokens (Curses) 1–6 and bring them, face-down and random. Call each hero out individually to get a Curse. Bring the Curse tokens back. Put the large circular Mummy token in the Pentagram Chamber; put one random Curse face-down under it, and the rest in the box.',
      },
      {
        heading: 'You Win When',
        body: 'You bring the correct Jar to the Pentagram Chamber, uniting the Mummy with his essence.',
      },
      {
        heading: 'Assigning Curses and Traitorships',
        body: 'Randomly assign each hero a Curse (no two the same; Curses 2 and 5 count as the same for this). Curse 2 or 5 makes that hero a secret traitor — they read this page, pretend to have another Curse, and act under it until they reveal the ruse (which must happen when the last Jar is picked up).',
      },
      {
        heading: 'How to Acquire a Jar',
        body: 'Take a Jar from a room at the end of your turn (you can\'t move after, but may give it away). Only one Jar per turn; you may drop a Jar anytime but can\'t repick it the same turn.',
      },
      {
        heading: 'How to Know Who Has the Correct Jar',
        body: 'When all six Jars are collected, reveal the Curse under the Mummy; the explorer with the matching Jar token holds the correct Jar, and it becomes their turn. If a traitor, they head to the Pentagram Chamber. Explorers may not attack a Jar-holder until the correct Jar is revealed; after, a damaged holder must roll Might 4+ to keep the Jar.',
      },
      {
        heading: 'Curses',
        body: '1 You can\'t pick up an even-numbered Jar. 2 You\'re also a traitor (take the correct jar to the Pentagram Chamber). 3 Unless you end your turn in an item or omen room, take 1 die of mental damage. 4 You can\'t pick up a Jar from the floor you were on when cursed. 5 You\'re also a traitor (as Curse 2). 6 You can only pick up the highest-numbered Jar not being held.',
      },
    ],
    monsters: [],
  },

  {
    id: 82,
    title: 'Get a Clue',
    intro:
      'A scream echoes through the house — the host has been found dead. No need to solve this mystery: the butler did it! The only question is how to get out before you become his next victim.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer is still in the game but has turned traitor. Gain 2 Might. Set the Turn/Damage track to the number of heroes.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'The heroes know you\'re the killer and are ready to tell the police; they\'ll need alibis.',
      },
      {
        heading: 'You Win When',
        body: 'All the heroes are dead, or the Rope is dropped in the Dining Room and the police arrive before those left alive have their alibis.',
      },
      {
        heading: 'You Must Do This on Your Turn',
        body: 'At the start of your turn, advance the Turn/Damage track. When it reaches 12, the police arrive.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'If any of your traits would drop to the skull, lower it to the lowest value above. In a hero\'s alibi room, you can\'t damage or steal from them.',
      },
      {
        heading: 'Special Item and Omen Rules',
        body: 'You may not pick up item cards, item tokens, or omens — but you may steal weapons and the Rope from heroes using physical attacks.',
      },
    ],
    monsters: [],
  },

  {
    id: 83,
    title: 'In the Details',
    intro:
      'This scenario has no traitor — only heroes. You are all trying to be the one to get out of the contract. The rest of the rules are in Secrets of Survival.',
    sections: [
      {
        heading: 'Where to Find the Rules',
        body: 'This scenario has no traitor; all of the rules are in the Secrets of Survival booklet.',
      },
    ],
    monsters: [],
  },

  {
    id: 84,
    title: 'Forget to Remember',
    intro:
      'The portraits all depict Richard Smith — a killer this town never forgot. Your friend stares at you just like the portraits, and the house creaks and groans. The serial killer\'s mind is too powerful for any brain to hold, and he\'s scheming inside yours.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer is still in the game but has turned traitor. If your Sanity and/or Knowledge are below their starting values, raise them to starting. Secretly roll 1 die per hero and add the results. Ask each hero to roll 1 die. If the sum is less than your roll, you are disloyal and Richard Smith dwells within you. If the sum equals or exceeds your roll, you are loyal — but still count as a traitor and may use traitor powers.',
      },
      {
        heading: 'You Win When',
        body: 'If disloyal, when all the heroes are dead or are monsters serving the Psychic Spirit. If loyal, you and the living heroes win when each living hero\'s Knowledge is lowered to its lowest value or skull, after which the heroes destroy the Crystal Ball and you lower your Knowledge to 1 to forget Richard Smith.',
      },
      {
        heading: "You Must Do This on the Monsters' Turn",
        body: 'Whether or not you\'re loyal, make the Psychic Spirit\'s mental attacks against the heroes (the Crystal Ball holder, otherwise the highest-Knowledge hero). On a loss, damage splits evenly between Sanity and Knowledge (excess to the hero\'s preference). The Psychic Spirit never attacks you.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'You can make mental attacks using Knowledge or Sanity on any explorer in your room (targets decide how to apply damage, so persuade them). The Psychic Spirit never takes mental damage. If you\'re loyal, convince the heroes to turn their efforts on the Crystal Ball. If you\'re loyal and a hero kills you, they see your innocence and lose 2 Sanity.',
      },
    ],
    monsters: [{ name: 'Psychic Spirit of Richard Smith', stats: 'Sanity 6 · Knowledge 6' }],
  },

  {
    id: 85,
    title: 'The Murderer in the Machine',
    intro:
      'Your phone buzzes with a Flitter notification — a photo of your best friend, brutally murdered. Then another. And another. This is a great way to clean out your friend list.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer is still in the game but has turned traitor. Discard the Ring. Take a pentagonal item token (a Smartphone). Remove the Sanity clip from your character card — you no longer have a Sanity value (you can\'t be attacked with Sanity, lose Sanity, or make Sanity rolls). Set the Turn/Damage track to 1.',
      },
      {
        heading: 'You Win When',
        body: 'Every hero has been driven mad and joined your side, or been killed.',
      },
      {
        heading: 'You Must Do This on Your Turn',
        body: 'At the start of your turn, advance the Turn/Damage track. Do this only when your traitor character\'s turn comes (even if dead), and not on the turns of former heroes who\'ve joined you.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'You can Share social media killings at any time on your traitor turn (even if dead). Once per turn, for each Smartphone (including dropped ones): choose a hero; if no reception is established, have them look for it (stop if the room has a Dead Zone or is in the basement); inform them of grisly photos of slain Flitter friends; then make a Sanity attack with dice equal to the track number plus the number of Bars in the room (max 8). The hero defends with Sanity.',
      },
      {
        heading: 'How to Add Friends to Your Network',
        body: 'Once a hero\'s Sanity drops to the skull, they become your friend (remove their Sanity clip; they keep taking turns, but their goal is to prevent the heroes from escaping).',
      },
      {
        heading: 'Special Dropped Smartphone Rules',
        body: 'If a hero ends their turn in a room with no Smartphone, you may attempt a Knowledge roll of 5+ to move a dropped Smartphone to that hero\'s room.',
      },
    ],
    monsters: [],
  },

  {
    id: 86,
    title: 'The Woods in the Cabin',
    intro:
      'You are a tree. You\'ve lived here a hundred years, reaching toward the sky, your roots deep in the earth. Pity these hairless apes have mistaken you for a house.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Remove your figure from the house — you are now the living Tree. Write down how many rooms are in the house. Discard every card you carry (shuffle any weapons into their stacks). Place the Tree House on top of the Foyer (move anything in it along with it; if not in play, find it, place it on the Foyer, shuffle). If there are fewer than five basement rooms, place basement rooms until there are five. Put a Plant token (Rootstalk) in four basement rooms and a green monster token (Roots) in each other basement room. Put an orange monster token (Acorn) in each upper-floor room. Put red monster tokens (Squirrels) equal to the number of heroes in the room with the Plant token connected to the Tree House.',
      },
      {
        heading: 'You Win When',
        body: 'All the heroes are dead, or you become ten undestroyed rooms larger than at the start of the haunt.',
      },
      {
        heading: 'You Must Do This on Your Turn',
        body: 'Put one Root in a basement room without a Rootstalk. Put one Acorn in an upper-floor room. Put Squirrels equal to the number of heroes in the room with the Plant token connected to the Tree House. Discover a room through any open door in the basement.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'On the monsters\' turn, your Squirrels may attack any hero with an explorer token on their card (one who attacked you or your Squirrels). A hero attacking one of your rooms treats it as Might 4. Squirrels in the same room may combine their Might into one attack, but if it fails, each point of damage removes 1 Squirrel.',
      },
    ],
    monsters: [
      {
        name: 'Squirrels',
        stats: 'Speed 8 · Might 1 · Sanity 6 · Knowledge 1 (move full Speed, no roll)',
      },
    ],
  },

  {
    id: 87,
    title: 'Sibling Rivalry',
    intro:
      'Your brain talks to itself in near-identical voices. "Marbles on the stairs! She\'ll never make it out of THIS one!" As you realize these voices are now your own, your body splits into two versions of yourself. This should be... fun.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer is still in the game but has turned traitor. You have a Sibling on the other side of your character card (trait clips in the same place). Your values can\'t change until the Headmistress is found. Put your explorer token (your Sibling) as far from your figure as possible. Put the large circular Doctor token (the Headmistress) in any basement room. Set aside Obstacle tokens (Pranks) equal to twice the number of explorers.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'You\'ve locked the Headmistress in the basement; the heroes will try to let her out.',
      },
      {
        heading: 'You Win When',
        body: 'Your pranks bring about the deaths of all the heroes.',
      },
      {
        heading: 'You Must Do This on Your Turn',
        body: 'Alternate which Sibling you move. At the start of each turn after the first, flip your character card.',
      },
      {
        heading: 'How to Pull a Prank',
        body: 'Move to any room and succeed at a Sanity roll of 3+ to put a Prank there (max twice the number of heroes at a time). When a Prank is triggered, return it to your pile; later you may reset it elsewhere.',
      },
      {
        heading: 'Triggering Pranks',
        body: 'When a hero enters a Prank room, roll 2 dice: 0 they make a Speed roll 3+ or take 1 physical; 1 a Might roll 4+ or take 1 physical; 2 a Sanity roll 3+ or stop moving; 3 a Knowledge roll 4+ or drop a random item/omen (can\'t repick this turn); 4 any trait 5+ or take 1 mental.',
      },
    ],
    monsters: [],
  },

  {
    id: 88,
    title: 'Cry, Babylon!',
    intro:
      '"All bow down to me, the mighty emperor Nebuchadnezzar! Prepare yourselves as sacrifices for the death god Marduk. Tonight I will escape this place and take my revenge."',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer is still in the game but has turned traitor. Reset your traits to their starting values, then raise each trait by the number of heroes.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'They are trying to stop you, the reincarnated Nebuchadnezzar, from fully manifesting as the Babylonian god Marduk.',
      },
      {
        heading: 'You Win When',
        body: 'All the heroes are dead.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'Instead of taking damage when defeated, you may reduce one of your physical traits by 1. When you kill a hero, gain 1 in each trait.',
      },
      {
        heading: 'Special Movement Rules',
        body: 'If you enter the room with the Lammasu, you immediately lose 1 from each trait; the Lammasu is destroyed but materializes on another floor (you choose which; the heroes place it at least 3 spaces from any hero, a landing if possible).',
      },
      {
        heading: 'Special Omen Rules',
        body: 'You cannot possess the Cat card.',
      },
    ],
    monsters: [],
  },

  {
    id: 89,
    title: "One of the Master's Affairs",
    intro:
      'You throw off your cloak — you are Rough Ralph, hunchbacked servant of Doctor Frank N. Sense! Little does the Doctor know that this house is a spaceship, and you plan to blast it all the way back to your home planet of Tinselvania.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer is still in the game but has turned traitor. Set the Turn/Damage track to 10 (your spaceship\'s countdown). Gain 1 in each trait. If the Theater, Tower, and Underground Lake aren\'t in play, find them, place them, and shuffle. Put the monsters in rooms per the Denizens table.',
      },
      {
        heading: 'You Win When',
        body: 'The Turn/Damage track reaches 0 and you blast off with at least one hero in the house.',
      },
      {
        heading: "You Must Do This on Each Hero's Turn",
        body: 'At the end of each hero\'s turn, if that hero didn\'t score a victory in one of their tasks or attack a monster, lower the Turn/Damage track.',
      },
      {
        heading: "How the House's Denizens Function",
        body: 'Each monster\'s four traits equal the value of one of your traits (per the table); it attacks with that trait. Monsters don\'t roll to move. A stunned monster returns to its starting room and isn\'t normal until you enter that room. Add 1 die to your rolls per unstunned monster in your room. You can\'t be damaged in a room with an unstunned monster.',
      },
      {
        heading: 'Denizens',
        body: 'Doctor Frank N. Sense (Operating Laboratory, uses your Knowledge). Monty / Frankenstein\'s Monster (Gymnasium, Might). Cornucopia / Pirate Queen (Master Bedroom, Sanity). Hedley / Head (Larder, your lowest trait). Fuchsia / magenta token (Dusty Hallway, Speed).',
      },
    ],
    monsters: [],
  },

  {
    id: 90,
    title: 'Internal Conflict',
    intro:
      'The boss makes you Chief Intern, handing you a shiny pentagonal badge. "One last thing," he says as you leave. "If I were you, I\'d think about getting rid of the competition."',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer is still in the game but has turned traitor. Take a pentagonal item token (your Badge). You can order the other Interns around as long as you have the Badge.',
      },
      {
        heading: 'You Win When',
        body: 'You are the last intern alive.',
      },
      {
        heading: 'You Must Do This on Your Turn',
        body: 'If you discover a room with an event symbol, put an Employee in that room before you draw your event.',
      },
      {
        heading: 'How to Deliver Coffee',
        body: 'To deliver a Coffee, end your turn in the same room as an Employee and remove it to your card. If you deliver a Coffee this turn, raise your Speed by 1; if you don\'t, lower your Sanity by 1.',
      },
      {
        heading: 'Commanding the Competition',
        body: 'At the end of your turn, you may move any number of competing Interns. For each, roll 1 die: 0 draw the next room, place it, and put the Intern there; 1 move the Intern to any room a floor above or below; 2 move the Intern up to their Speed, ignoring room effects.',
      },
    ],
    monsters: [],
  },

  {
    id: 91,
    title: 'Burn out the Darkness',
    intro:
      'The darkness is everywhere, enveloping you. Such beautiful darkness; surely you must share it with the world, starting with those pernicious fires and the fools trying to spread them.',
    sections: [
      {
        heading: 'Right Now',
        body: 'This haunt can have multiple traitors. You are now Darkness, and there\'s no point attacking it. Remove the clips from your character cards; if you ever need a trait roll, your result is 5. Discard all your cards. Darkness is quiet — you may only speak in a whisper.',
      },
      {
        heading: 'You Win When',
        body: 'The Fires are all extinguished on your turn and there are still at least a number of face-up rooms equal to the number of traitors, or all the heroes are Darkness.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'Once per turn, attack a hero in your line of sight using the inkiness of their soul (Sanity attack, result 5). On a win they take mental damage; if not, your turn ends. When a hero would die for any reason, that hero joins the Darkness and turns traitor. Monster tokens represent Fire and don\'t take turns.',
      },
      {
        heading: 'Special Movement Rules',
        body: 'You can no longer discover rooms. Your movement each turn is dice equal to your highest Speed number minus the Fire tokens in your room. Face-up Fire tokens count as opponents. In any room, you may try to suppress its Fires (roll 1 die per Fire; a non-blank removes a face-down token or flips a face-up one). Treat face-down tiles as having doors on each side (no blocked line of sight); spend 1 movement to pass through a wall into an adjacent room.',
      },
    ],
    monsters: [],
  },

  {
    id: 92,
    title: 'Ghost at the Finish Line',
    intro:
      'This haunt has no traitor — just heroes. You are all trying to be the one to find the last room in the house. The rest of the rules are in Secrets of Survival.',
    sections: [
      {
        heading: 'Where to Find the Rules',
        body: 'This scenario has no traitor; all of the rules are in the Secrets of Survival booklet.',
      },
    ],
    monsters: [],
  },

  {
    id: 93,
    title: "Owl's Moving Castle",
    intro:
      'Your house is on the move to a magical land filled with owls — never mind that it might be off the edge of a cliff. You\'re an Owl, and soon everyone else will be too.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer is still in the game but has turned traitor. If any floor is more than two tile lengths from every table edge, move the floor so at least one tile is exactly two lengths from an edge. Put your figure in any room on your floor. Make every "oo" sound a very long "oooo" — you are an Owl.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'Like you, they\'re all Owls — but for some reason they don\'t want to be, and they don\'t want you to be one either.',
      },
      {
        heading: 'You Win When',
        body: 'All heroes are dead, or all living heroes have no explorer tokens and are stuck as Owls forever.',
      },
      {
        heading: "How to Act Now That You're an Owl",
        body: 'You can fly: move on flipped tiles and across non-existent tiles between sections if you enter/exit through a window or outside room (each empty space = 2 movement; stay on the same floor; end inside the house). Your Speed is double your card value (max 8 dice on Speed rolls); you take no falling damage. You can\'t use item or omen cards.',
      },
      {
        heading: 'How to Move the House',
        body: 'At the end of your turn, roll dice equal to the number of heroes and move up to that many room tiles toward the table edge (the Grand Staircase/Foyer/Entrance Hall counts as three tiles, moved at once). Tiles pushed off the table cease to exist. You can\'t move a tile surrounded on four sides, nor one that would cut off a floor (unless both parts have windows/outside rooms). Moving a hero\'s tile turns them into an Owl (no Sanity loss, but if the tile falls off they drop Sanity to lowest and become an Owl in the placement room). Landings move only if at least half their doorways are unconnected; a room alone on its floor can\'t move.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'Once per turn as an Owl, hoot at the heroes in your room: against each, make a Might or Sanity attack. On a win they split the damage; if it would drop a trait to the skull, they transform into an Owl (Sanity to the lowest value above the skull).',
      },
    ],
    monsters: [],
  },

  {
    id: 94,
    title: 'Last Will and Tournament',
    intro:
      'Your eccentric Aunt Edwina has passed, and you were called for the reading of her will. Squabbling over her collection turned to greed, until the traitor spoke with her voice: "You ungrateful wretches! Put down my things, and get out of my house!"',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer is still in the game but has turned traitor, possessed by the greedy spirit of Aunt Edwina. Count your item and omen cards that can be traded or stolen (these are your Bequests). When the heroes are ready, if your Bequest total isn\'t higher than the highest single hero\'s, draw item cards until it is. If your traits are below starting, raise them, then increase one trait by 1.',
      },
      {
        heading: 'You Win When',
        body: 'You end your turn with all the Bequest cards, or all other explorers are dead.',
      },
      {
        heading: 'You Must Do This After Every Turn',
        body: 'If your Bequest total is equal to or less than another explorer\'s, all explorers roll dice equal to their Bequest total (max 8, min 1), +1 if in an item room. The highest result becomes the traitor (tie → closest to your left). When you stop being the traitor, give one random Bequest and the Traitor\'s Tome to the new traitor; you become a hero. If you die as the traitor, the heroes roll to see who is possessed.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'Once per turn, attempt to retake a Bequest from an explorer in your room by making an attack with any trait (+1 die in an item room). On a win, roll the Bequest Disposition table; the attack deals no damage.',
      },
      {
        heading: 'Special Item and Omen Rules',
        body: 'You may not willingly trade or drop cards, and must pick up any dropped cards in your room. When you die, drop all Bequests in an item pile; for each, roll 1 die — a blank discards it.',
      },
      {
        heading: 'Bequest Disposition',
        body: '0 the attacked explorer discards a random Bequest. 1 steal a random Bequest from them. 2 steal a Bequest of your choice from them.',
      },
    ],
    monsters: [],
  },

  {
    id: 95,
    title: 'Nanny, Interrupted',
    intro:
      '"I know you\'re excited to grow up, but if I had my way, you\'d stay the same age forever." The ceilings rise higher — until you realize you\'re actually getting shorter.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer is still in the game but has turned traitor. If any of your traits are below their starting values, raise them to starting.',
      },
      {
        heading: 'What You Know About the Heroes',
        body: 'The naughty children must be rounded up and returned to the Nursery for a good night\'s sleep.',
      },
      {
        heading: 'You Win When',
        body: 'All the heroes are in the Nursery and turned back into the babies they once were.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'You can\'t make normal physical attacks; once per turn you may make one of each of these (none can hurt you). Reminisce: Knowledge attack vs a non-baby hero on your floor → mental damage; a trait dropping to the skull makes them a baby. Throw the baby over your shoulder: when a baby is in or exiting your room, Speed attack (no damage); on a win, pick them up onto your card (carry multiple). Use the baby\'s middle name: in sight of or carrying a baby, say their full name and "Go to your room!", then a Sanity attack (+1 die per baby held); on a win, place the baby in the Nursery.',
      },
      {
        heading: 'Special Damage Rules',
        body: 'When you take damage, you must drop item cards, omen cards, and/or heroes equal to the amount, if possible.',
      },
      {
        heading: 'Special Movement Rules',
        body: 'Add 1 die to your Speed for movement. You have the front-door key (enter/exit the Entrance Hall). You can leave by jumping out a window or outside room: roof (5 dice physical), upper floor (3 dice), or ground floor (1 die); no damage with the Rope. Once outside, walk the ground-floor perimeter (each outside tile edge is its own room).',
      },
    ],
    monsters: [],
  },

  {
    id: 96,
    title: 'House of Leavings',
    intro:
      'You\'ve been pulled into an alternate dimension — a house like the one you left, arranged differently. Your friend cackles madly and scurries off, and an eerie snorting sound follows. There\'s a minotaur. You don\'t want to imagine a minotaur.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer is still in the game but has turned traitor. Put your figure and the large circular Demon Lord token (the Minotaur) in the Grand Staircase. Set aside small yellow monster tokens (Claw Marks) equal to the number of explorers. Reduce your Speed to the lowest value above the skull.',
      },
      {
        heading: 'You Win When',
        body: 'All the heroes are dead.',
      },
      {
        heading: "You Must Do This on Each Hero's Turn",
        body: 'At the end of each hero\'s turn, if that hero isn\'t in the Minotaur\'s line of sight, they take 1 die of mental damage. After the hero checks line of sight, you may move the Minotaur to any room in your line of sight, and may put a Claw Mark in the room it left (once placed, it can\'t move). The Minotaur doesn\'t get a monster turn.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'You and the Minotaur can\'t attack the heroes. Heroes can make Sanity attacks against the Minotaur (it defends with your Sanity); if it defeats a hero, deal mental damage and move that hero to any room within their line of sight. Your traits can\'t drop below the lowest value above the skull; if you would be killed, drop the trait to the lowest value above and move to the Upper Landing.',
      },
      {
        heading: 'Special Movement Rules',
        body: 'All rooms you discover are considered "new" and must be discovered normally. If an explorer draws the Abandoned Room and it would be placed adjacent to a Claw Mark, shuffle it back; if drawn again immediately, place it regardless.',
      },
      {
        heading: 'Special Omen Rules',
        body: 'You can\'t pick up, steal, or carry the omen that started the haunt.',
      },
    ],
    monsters: [],
  },

  {
    id: 97,
    title: 'Lambs to the Slaughter',
    intro:
      'Ominous howling and banging at the doors. Red eyes flash as Wolves prowl the windows. "Owwwwwooo." Wait... did that come from inside the house? Did it come from you?',
    sections: [
      {
        heading: 'Where to Find the Rules',
        body: 'This haunt uses the hidden traitor rules described on page 17 of the base game rulebook. The rest of the rules are in the Secrets of Survival booklet.',
      },
    ],
    monsters: [],
  },

  {
    id: 98,
    title: 'Plastic Fantastic',
    intro:
      'You came to a quiet lodge in Uncanny Valley for some peace, but someone has arrayed a million blank-eyed mannequins around it. Wait — one of them moved.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Your explorer is still in the game and has not turned traitor, but has been absorbed into the Mannequins. Remove your figure and discard your cards. Put a small monster token (Mannequin) of any color into each room, on the stunned side, placed randomly.',
      },
      {
        heading: 'You Win When',
        body: 'All the Mannequins have left the house and at least one hero is still alive — that is, you win when the heroes do.',
      },
      {
        heading: "You Must Do This on Every Hero's Turn",
        body: 'At the end of every hero\'s turn, check for provocations. For each action the hero didn\'t do, state the provocation, roll 2 dice, and flip that many stunned Mannequins of the listed color face-up. If there aren\'t enough to flip, move a token of that color toward the hero for each one you couldn\'t flip.',
      },
      {
        heading: "You Must Do This on the Monsters' Turn",
        body: 'Move all stunned Mannequins toward the Entrance Hall (their Speed); a stunned one in the Entrance Hall with movement left leaves the house. Pick a color not to check provocations for until the next monsters\' turn. Move face-up Mannequins toward the nearest hero (luring face-up Mannequins of any color along the way). After moving, face-up Mannequins in a room attack each hero there.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'Face-up Mannequins make a collective Might attack vs each hero in their room (dice equal to the face-up Mannequins, max 8). They\'re plastic and can\'t be damaged by physical attacks. If a hero makes a mental attack vs a Mannequin, roll dice equal to the face-up Mannequins; if you lose, turn all Mannequins in that room face-down.',
      },
      {
        heading: 'Provocations',
        body: 'If a hero does not... Discover a room → roll for Red tokens. Move to a new floor → Orange. Use an item or omen → Yellow. Attack → Green. Use all of their movement → Blue. Leave a room with a monster → Purple and Magenta.',
      },
    ],
    monsters: [{ name: 'Mannequins', stats: 'Speed 3 · Might 1 · Sanity 1 · Knowledge 1' }],
  },

  {
    id: 99,
    title: 'The Manor of Your Demise',
    intro:
      'A box opens and smolders. You lean in and are sucked head-first into a tiny creepy house. This haunt has no traitor — just heroes. You\'re all trying to find the Box. The rest of the rules are in Secrets of Survival.',
    sections: [
      {
        heading: 'Where to Find the Rules',
        body: 'This scenario has no traitor; all of the rules are in the Secrets of Survival booklet.',
      },
    ],
    monsters: [],
  },

  {
    id: 100,
    title: "Let's Play a Game",
    intro:
      'A beat-up cassette croaks, "I think we would all enjoy a little game. This house is filled with challenges of my design, set to burn with you inside it. Each of you must now make a choice: do you trust your friends? Do you need them?"',
    sections: [
      {
        heading: 'About This Haunt',
        body: 'This haunt has no traitor — just heroes. Setup, voting, and victory rules are in the Secrets of Survival booklet; the 24 Challenges below are read from here as explorers reveal them. If an instruction says to flip the token or leave it face-up, the Challenge isn\'t vanquished; otherwise it is vanquished (token onto your card).',
      },
      {
        heading: 'Challenges (1–12)',
        body: '1 Javelin: Speed 4+ or take 1 physical and flip; on success, take the Spear if not in play. 2 Voice: reset a physical trait to lowest above skull, else flip and (if on a team) teammates lose 1 Sanity. 3 Reflection: Sanity 4+ or lose 2 Sanity and flip (teammates take 1 physical); on success, take the Idol. 4 Mechanical arm: Might 6+ → gain 1 Might and move to an adjacent room; fail → trapped until a Might 6+. 5 Axe: Speed or Might 3+ or take 2 physical and flip; on success, take the Axe. 6 Gun: take the Revolver and attack an explorer in range (may target yourself). 7 Hurt: loner takes 3 damage split as chosen; team Knowledge 4+ or each teammate takes 2 mental and flip — on success deal 5 physical or 5 mental split among teammates. 8 Dew: Sanity or Knowledge 5+ → gain 2 in that trait; fail → lose 1 in the other mental trait and flip. 9 Empty box: set your items aside (can\'t be picked up); loner loses 1 Sanity, team loses 2 Sanity split. 10 Numbers: Knowledge 5+; fail → 1 mental and flip; on success, take the Puzzle Box. 11 Tested: everyone rolls 8 dice — highest takes the token, lowest reduces a physical trait, any tie flips it. 12 Give and take: Knowledge 5+; fail → 2 physical and flip; loner success reduces an explorer\'s physical trait, team success revives a dead teammate by reducing your own.',
      },
      {
        heading: 'Challenges (13–24)',
        body: '13 Nothing here: return the token; it doesn\'t count. 14 Floor drops: move each explorer here to the Basement Landing (or Roof Landing) and end your turn; a later visitor may complete it. 15 Smoke: lower the Turn/Damage track; a team without its victory flips it. 16 Alarm: choose an explorer to attack you, then attack them; or mix the token into the new-room placement pile to gain 1 Sanity. 17 Full box: subtract 2 from Knowledge rolls here while face-up; Knowledge 4+ — on success with Challenge 9 face-up, take both and any items by that room. 18 Blood for blood: Knowledge 6+; fail → flip; on success take the Sacrificial Dagger (its holder must attack another explorer). 19 Awaken: put the token and your figure in the Entrance Hall (team: a teammate too); in the Entrance Hall at the start of your turn, reset Knowledge to lowest to vanquish. 20 Crumple: leave face-up and end your turn; a later starter can vanquish it. 21 Crime pays: steal any number of an explorer\'s items (min one), taking 1 mental per item. 22 Unfortunate events: draw three events and follow them (team may give them to teammates); if anyone loses a trait point, flip. 23 Allegiances: a loner may join the team (else flip); a team member may become a loner (else flip). 24 Profit: Speed attacks vs any number of explorers (no damage); each winner takes a Challenge from the loser; lose any or don\'t attack → flip.',
      },
    ],
    monsters: [],
  },

  {
    id: 101,
    title: 'Seasons of the Witch',
    intro:
      '"What comes after December?" your friend asks, flipping past the last page and polymorphing into a grizzled witch. "NO. THERE ARE NO MORE MONTHS." The witch Magdalena Gunchester will hold you in this house for one full year. (The finale; read each Month aloud in order at the start of the haunt revealer\'s turns.)',
    sections: [
      {
        heading: 'Right Now',
        body: 'Set the Turn/Damage track to 0 in front of the haunt revealer (it tracks Months). If any traits are below starting, raise them. Note each hero\'s birthday on the Calendar. Place all room tiles in the house. Put the large circular Witch token (Magdalena) in the Widow\'s Walk. Put a Plant token (Food) in the Dining Room, Gardens, Kitchen, Larder, Tree House, and Wine Cellar; the Fountain (Water) in the Underground Lake; the Smoke token (Coal) in the Furnace Room. Set aside the Cat token, the colored monster/Obstacle/Trait Roll tokens, and each hero\'s explorer tokens. Read January and take the first turn; don\'t read ahead.',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'Magdalena, the mad witch heir to the Gunchester fortune, has enchanted this house to trap you for a year and sworn that humanity\'s violent ways will be its end.',
      },
      {
        heading: 'You Win When',
        body: 'At least one of you survives twelve Months in the house and defeats Magdalena.',
      },
      {
        heading: "You Must Do This on the Haunt Revealer's Turn",
        body: 'At the start of the haunt revealer\'s turn, advance the Turn/Damage track and read only that Month\'s section. Past 12, read the final section. Magdalena doesn\'t move from the Widow\'s Walk, but attacks any hero who exits it.',
      },
      {
        heading: 'The Twelve Months',
        body: 'Jan: a storm brews — you may board up windows/outside rooms (Boards token in your room). [Vivian Lopez: +3 movement.] Feb: blizzard — at the start of your turn, take 1 physical per window/outside room within 4 spaces that lacks Boards. [Missy Dubourde: each hero +2 Might.] Mar: enlarged cats — Lioness in the Upper Landing, Cubs in each other landing, each attacks the nearest hero, then remove them. [Jenny LeClerc: +2 dice to all defense this turn.] Apr: flooding snakes — for each room connected to the Underground Lake, roll 3 dice and place that many green Snakes; Snakes move 4 toward the nearest hero; a hero in a Snake room rolls Speed 5+ or takes 1 physical and a token; leave the Snakes. [Father Rhinehardt: set aside all explorer tokens at end of turn.] May: serpents press on — Snakes move and attack as in April; each hero with a token takes 1 physical, then remove the Snakes. [Brandon Jaspers: each hero +2 Knowledge.] Jun: rats — a hero with a token takes 1 physical then sets aside tokens; at the Month\'s end, a hero in a Food room rolls Speed 5+ or sets aside that Food. [Darrin "Flash" Williams: each hero +2 Speed.] Jul: heat — spend 3 movement in the Gardens, Kitchen, or Tree House and roll Knowledge 5+ to plant Food; at the end of each turn, roll Might — if it doesn\'t exceed your spaces moved, take the difference as physical. [Professor Longfellow: plant Food in the Wine Cellar for free.] Aug: smoke fills the Coal Chute, Furnace Room, and event rooms — heroes in or connected to such a room take 1 physical; at the Month\'s end, a hero in the Furnace Room rolls Knowledge 5+ to fix it or the Coal is set aside. [Heather Granville: if the Coal is set aside, put it back.] Sep: locusts — at the Month\'s end, each hero in a Food room rolls Sanity 5+ or sets aside that Food. [Peter Akimoto: each hero +2 Sanity.] Oct: quake — at the Month\'s end, for each non-landing basement room roll 2 dice; a blank removes the room and its tokens; a hero there rolls Speed 4+ to reach the Basement Landing or dies. [Ox Bellows: choose one room not to roll for.] Nov: provisions low — at the Month\'s end, remove a Food per hero plus the Water and Coal; for each you can\'t remove, each hero takes 1 mental. [Zoe Ingstrom: remove 2 fewer Food.] Dec: vampire bats — put a Bat in each room; in a window/outside room you occupy without an Obstacle token, remove the Bats there and in connected rooms (spend 3 movement to clear an Obstacle); at the Month\'s end, Bats deal 1 die per Bat on a floor to each hero on that floor, then remove them. [Madame Zostra: remove six extra Bats.]',
      },
      {
        heading: 'After Month 12: No More Months',
        body: 'Hypnotized, all heroes move to the Widow\'s Walk. Starting with the haunt revealer, each hero takes a turn attacking Magdalena with any trait; defeating her places that trait\'s Trait Roll token by the Witch (you can\'t reuse a trait already placed until all four types are down). Keep attacking until you\'re all dead or you place Trait Roll tokens equal to the number of heroes who started the haunt — then you win.',
      },
      {
        heading: 'Calendar (Birthdays)',
        body: '1 January Vivian Lopez · 2 February Missy Dubourde · 3 March Jenny LeClerc · 4 April Father Rhinehardt · 5 May Brandon Jaspers · 6 June Darrin "Flash" Williams · 7 July Professor Longfellow · 8 August Heather Granville · 9 September Peter Akimoto · 10 October Ox Bellows · 11 November Zoe Ingstrom · 12 December Madame Zostra.',
      },
    ],
    monsters: [
      { name: 'Magdalena Gunchester', stats: 'Speed 8 · Might 8 · Sanity 8 · Knowledge 8' },
      { name: 'Lioness', stats: 'Speed 6 · Might 5' },
      { name: 'Cubs', stats: 'Speed 4 · Might 3' },
    ],
  },

];

/** Look up an English haunt story by its number (1–101; 51+ are the Widow's Walk expansion, 101 = Seasons of the Witch finale). */
export function findHauntStory(id: number): HauntStory | undefined {
  return TRAITOR_TOME.find(h => h.id === id);
}

/**
 * Look up a haunt story in the given language, falling back to English when no
 * Vietnamese translation exists yet (see `traitorTome.vi.ts`).
 */
export function getHauntStory(id: number, lang: Lang = 'en'): HauntStory | undefined {
  if (lang === 'vi' && TRAITOR_TOME_VI[id]) return TRAITOR_TOME_VI[id];
  return findHauntStory(id);
}
