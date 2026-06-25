import type { Lang } from '@/types/shared';
import type { HauntStory } from '../types';
import { SECRETS_OF_SURVIVAL_VI } from './secretsOfSurvival.vi';

/**
 * The 50 haunts of the Secrets of Survival booklet (Betrayal at House on the
 * Hill, 2010) — the heroes' side of each scenario. Each ALL-CAPS heading on a
 * haunt page is split into its own `sections` entry; monster stat blocks go in
 * `monsters`.
 *
 * Story/rules text is kept in the original English — translate later if needed.
 * Pairs with TRAITOR_TOME (the traitor's side); look up the same `id` in both.
 */
export const SECRETS_OF_SURVIVAL: HauntStory[] = [
  {
    id: 1,
    title: 'The Mummy Walks',
    intro:
      'Dust billows into the room and a shadow passes over your heart. A cold, damp voice shivers in your mind: "I lost my bride more years ago than you could possibly comprehend. My tears are dust, but my love is still as strong as the sun. Now my love is reborn to me. There is nothing you can do to keep us apart—and if you turn against me, I will rip your soul from your body and swallow it whole."',
    sections: [
      {
        heading: 'Right Now',
        body: 'Set aside 2 triangular Knowledge Roll tokens.\nThe traitor loses the Girl card and any bonuses from it. Instead the traitor puts a small magenta monster token (the Girl) in any room on the same floor as the haunt reveal and at least 5 tiles from the Mummy (or as far as possible).\nWhen an explorer enters the Girl token\'s room, that player takes the Girl card.',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'The traitor is trying to get the Mummy married to the Girl.',
      },
      {
        heading: 'You Win When',
        body: 'You banish the Mummy back to the land of the dead before it marries the Girl.',
      },
      {
        heading: 'How to Banish the Mummy',
        body: 'If the Book is not yet in play, the next hero to discover an omen room searches the omen stack and takes the Book card instead of drawing normally, then shuffles that stack.\nA hero must speak the Mummy\'s true name from the Book to banish it. Follow these steps in order; each hero can attempt only one step per turn.\n1. Knowledge roll 6+ to discover the Mummy\'s true name, in the room with the Sarcophagus (hieroglyphics), the Research Laboratory (team\'s notes), or the Library (history). On success, take a Knowledge Roll token.\n2. After any hero discovers the name, a hero holding the Book can attempt Knowledge 6+ to look up the name and learn the banishing spell. On success, take a Knowledge Roll token.\n3. Once the heroes have two of these tokens, a hero must Carry the Book to the Mummy\'s room and defeat the Mummy in Sanity combat to complete the banishing spell.\nThe Mummy is immune to Speed attacks (Revolver, Dynamite).',
      },
      {
        heading: 'If You Win',
        body: 'A hot, dry wind whispers through the room as you slam the ancient tome shut. The mummy shuffles toward you, its wrappings disintegrating. "My bride... my only love... no... more..." As the last of the mummy disappears, the wind stops. You are alone.',
      },
    ],
    monsters: [],
  },

  {
    id: 2,
    title: 'The Séance',
    intro:
      'A dread chill descends upon the house, and mist rises in lazy coils from the floor. A voice clatters through the air: "I must rest... put my soul to rest... or die..."',
    sections: [
      {
        heading: 'Right Now',
        body: 'Set aside a number of triangular Knowledge Roll tokens equal to the number of players. Set aside an equal number of triangular Sanity Roll tokens and a pentagonal item token (the Corpse).',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'The traitor is trying to summon a Ghost before you do.',
      },
      {
        heading: 'You Win When',
        body: 'You either defeat the Ghost after the traitor takes control of it, or you bury the Ghost\'s bones after you summon it.',
      },
      {
        heading: 'How to Summon the Ghost',
        body: 'You race the traitor to summon the Ghost by conducting a séance.\nEach hero can attempt a Knowledge or Sanity roll of 5+, but only while in the Pentagram Chamber, and only one such roll per turn. On a success, put the matching trait token in the haunt-reveal room. When the heroes place a number of tokens equal to half the number of players (round down), they\'ve summoned the Ghost.\nWhoever completes the séance first controls the Ghost.',
      },
      {
        heading: 'If You Summon the Ghost First',
        body: 'Ghost\'s declaration (read aloud): "Bury my bones!"\nPut the Ghost token in the room where the last séance roll succeeded; it stays there until you lose control of it.\nSet up the Turn/Damage track at 1. At the end of each subsequent turn of the player who completed the séance, advance the clip. You have until the start of Turn 5 to bury the bones.\nOnce per turn, a hero in the Attic, Bedroom, or Master Bedroom can attempt Knowledge 5+ to find the bones; on success put the Corpse token on that character card.\nCarry the Corpse to the Crypt or Graveyard and attempt Knowledge 5+ once per turn to bury the bones. While doing this the Ghost can\'t attack. If you fail to bury by the start of Turn 5, the traitor gains control of the Ghost and you must destroy it instead.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'No one can attack until the séance is complete.\nWhile the traitor controls the Ghost, you can make only Sanity attacks against it, and only if you have the Ring or are in the Pentagram Chamber. A successful Sanity attack destroys the Ghost.\nIf the Ghost attacks a hero and is defeated, it is not harmed.',
      },
      {
        heading: 'If You Win',
        body: 'The mists recede, and the terrible cold clutching at your heart slowly fades. A feeling of calm and contentment rises up in its place. A soul is at peace.',
      },
    ],
    monsters: [],
  },

  {
    id: 3,
    title: 'Frog-Leg Stew',
    intro:
      'A cackling, rasping laugh echoes through the house. "No, no, no! Mustn\'t hide from me, my naughty little monkeys! You\'ve been very bad little toadlings, stealing Ooma\'s book. I\'m afraid Ooma\'s going to have to whack your little noses off—or something worse, much worse."',
    sections: [
      {
        heading: 'What You Know About the Bad Guys',
        body: 'The Witch has cast a spell that makes her invulnerable. She can also turn people into Frogs.',
      },
      {
        heading: 'You Win When',
        body: 'You kill the Witch.',
      },
      {
        heading: 'How to Kill the Witch',
        body: 'You must use the spellbook (the Book card) to cast a Form of Mortal spell on the Witch, making her vulnerable. The spell requires a mandrake root (a pentagonal item token). Follow these steps in order; each hero can attempt only one step per turn.\n1. Find a mandrake root. When you discover a new room with a mandrake, the traitor places a Root token there (some may be in existing rooms).\n2. In a room with a Root token, attempt Knowledge 4+ to dig up the mandrake; on success put the token on your character card.\n3. With a Root token and the Book, while in the Witch\'s room, attempt Knowledge 6+ to cast Form of Mortal. On success you can attack the Witch normally, and any successful attack kills her. On failure, keep the Root and try again.',
      },
      {
        heading: 'Frogs',
        body: 'A hero turned into a Frog drops all items and discards companions. That hero\'s Might and Knowledge drop to their lowest numbers above the skull. A Frog can\'t attack, draw cards, or discover rooms; another explorer can pick it up and carry it like an item.\nIn the same room as a Frog while holding the Book, attempt Knowledge 4+ to turn the Frog back into a human (traits return to starting values).',
      },
      {
        heading: 'Special Attack Rules',
        body: 'The Witch is invulnerable and can\'t be attacked until you cast Form of Mortal on her.\nExplorers can attack the Cat when it appears.',
      },
      {
        heading: 'If You Win',
        body: 'The witch screams, "Noooooo! You can\'t do this! ... I\'ll crawl into your nightmares and make you bleed!" Just as you\'re ready to smash a lamp over your head to shut out her grating voice, she is gone... for now.',
      },
    ],
    monsters: [],
  },

  {
    id: 4,
    title: 'The Web of Destiny',
    intro:
      'The web was so large your mind refused to see it. Now you are entangled in it, the sticky strands hardening against your skin. At the edge of your vision, a shadow detaches from the ceiling—a spider gliding across the web. It hovers over you, and you feel a stinger stabbing into your belly. You scream... but will anyone hear?',
    sections: [
      {
        heading: 'Right Now',
        body: 'The haunt revealer has been caught in a sticky web and is now a trapped explorer: can\'t move, but can still attack the web to destroy it, and can use or trade items.\nIf the Medical Kit hasn\'t been found, any hero who could draw an item may search the item stack and take the Medical Kit instead, then shuffle.\nSet aside a number of triangular Might Roll tokens equal to the number of players.\nThe trapped explorer has been infested with giant spider eggs that will eventually hatch.',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'A tremendously large Spider has awakened. It wants to protect the trapped explorer until its eggs hatch.',
      },
      {
        heading: 'You Win When',
        body: 'The trapped explorer has been freed, the eggs have been destroyed, and at least one hero exits the house.',
      },
      {
        heading: 'How to Destroy the Web and Eggs',
        body: 'As long as the eggs are not destroyed, none of the trapped explorer\'s traits can drop to the skull.\nDestroy the web with Might attacks; the web defends with Might 4. On defeating it, put a Might Roll token in that room (no damage either way). When the room holds Might Roll tokens equal to the number of players, the web is destroyed and the trapped explorer can act normally.\nIn the trapped explorer\'s room with the Medical Kit, attempt Knowledge 4+ to destroy the eggs. The Healing Salve destroys the eggs with no roll.',
      },
      {
        heading: 'How to Exit the House',
        body: 'After the explorer is free and the eggs are destroyed, attempt a Knowledge or Might roll of 6+ to open the front door in the Entrance Hall. On success, draw an event card and end your turn. On later turns, living heroes exit from the Entrance Hall by spending 1 space of movement.',
      },
      {
        heading: 'If You Win',
        body: 'Brushing cobwebs from your eyes, you stumble from the manor. Looking back, you see a light flickering from a window above—and a shiver of movement, then another. Time to leave—now.',
      },
    ],
    monsters: [],
  },

  {
    id: 5,
    title: 'I Was a Teenage Lycanthrope',
    intro:
      'A scream rips through the mansion, growing louder until it deepens into a howl of pure rage. Your shadow shakes as you realize you stand bathed in the light of the full moon.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Set aside a number of small red monster tokens equal to the number of players. Set aside one pentagonal item token (Silver Bullets).',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'The traitor is a Werewolf that grows more powerful and can infect others with lycanthropy, turning them into Werewolves too.',
      },
      {
        heading: 'You Win When',
        body: 'All of the Werewolves are dead. You do not need to kill the Dog to win.',
      },
      {
        heading: 'How to Kill Werewolves',
        body: 'Find the Revolver and create Silver Bullets. Each hero can attempt a step only once per turn.\n1. Without the Revolver, find it in the Attic, Game Room, Junk Room, Master Bedroom, or Vault: Knowledge 5+ to search the item stack for the Revolver, then shuffle.\n2. In the Research Laboratory or Furnace Room, Knowledge 5+ to create Silver Bullets; take the token. (These two tasks can be done in either order by different explorers.)\n3. Give the Silver Bullets and Revolver to the same hero.\n4. A hero with both can kill a Werewolf or the Dog.',
      },
      {
        heading: 'You Must Do This on Your Turn',
        body: 'If a Werewolf or the Dog damages you, you\'ve been bitten. At the start of each of your subsequent turns, attempt Sanity 4+ to resist the curse. On a failure you become a Werewolf and are no longer a hero (read this haunt in the Traitor\'s Tome and do everything under "Right Now"). Bitten heroes who resist still win if the Werewolves are killed... at least until the next full moon.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'A hero with Silver Bullets who defeats a Werewolf or Dog once using the Revolver kills it. (The Revolver never runs out of bullets.)',
      },
      {
        heading: 'If You Win',
        body: 'Clouds scud across the full moon. The house grows dark and quiet as you stand over the battered body of your dead friend. You had to do it to survive—but can you live with what you have done?',
      },
    ],
    monsters: [],
  },

  {
    id: 6,
    title: 'The Floating Eye',
    intro:
      'You\'re not certain if what you sense is a whine almost too high to hear or a thrumming almost too deep to feel. Cool blue lights pulse once, then again. Someone screams, "The masters have come for us! The great Eyes will consume our brains!"',
    sections: [
      {
        heading: 'Right Now',
        body: 'Set aside a number of triangular Might Roll tokens equal to the number of players.',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'Aliens can use a mind-control ability on heroes—on all the heroes in a room—so stay spread out if you can.',
      },
      {
        heading: 'You Win When',
        body: 'You disable the Spaceship so it can\'t take off with your friends.',
      },
      {
        heading: 'You Must Do This on Your Turn',
        body: 'If you are under an Alien\'s control, the traitor moves you toward the Spaceship room. At the start of your next turn after entering that room, you board the Spaceship and are out of the game. You cannot attack or act while controlled.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'Free a controlled hero by attacking and defeating that hero (normal or Sanity combat with the Ring); a defeated hero takes only half damage (round down), and you take normal damage if defeated. Once freed, a hero can\'t be controlled again.\nMight 5+ to damage the Spaceship; each success puts a Might Roll token next to it. When it has Might Roll tokens equal to the number of players, the Spaceship is disabled and the heroes win.\nAliens are immune to Speed attacks (Revolver, Dynamite).',
      },
      {
        heading: 'If You Win',
        body: 'With the help of your so-called friend, those alien things almost captured you. Even now, crouched in the bushes, you can feel the eyes calling to you. For a second your body edges back toward the house. Then you turn and run, stumbling for the road and safety.',
      },
    ],
    monsters: [],
  },

  {
    id: 7,
    title: 'Carnivorous Ivy',
    intro:
      'A dry, rasping sound echoes through the house. At first you\'re sure giant rattlesnakes are coming, but then you see the tendrils of vines pressing against the windows. As the glass bursts, you realize the plants are coming—coming for you.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Set aside a pentagonal item token to represent the Plant Spray.',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'Each Root/Tip pair in the house is a Creeper. Creepers will try to grab you. The carnivorous plants feed on fertilizer made from dead bodies.',
      },
      {
        heading: 'You Win When',
        body: 'You use the Plant Spray to kill a number of Creepers equal to the number of players.',
      },
      {
        heading: 'How to Create Plant Spray',
        body: 'Carry the Book to the Research Laboratory or Kitchen. Once per turn in one of those rooms with the Book, attempt Knowledge 5+ to create the Plant Spray; take the token. You can create it only once—if destroyed, you can\'t make more.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'Automatically kill a Creeper by taking the Plant Spray into a room with a Root or Tip token and using it instead of attacking that turn. (You have enough spray for all Creepers.)\nRoots can\'t attack and are affected only by the Plant Spray. Tips attack and are attacked normally.\nIf a Tip defeats a hero in physical combat, the hero takes no damage but is grabbed and drops all items in that room; the Tip then ends its movement.\nDefeating a Tip stuns it and it drops any grabbed hero.\nRoots don\'t slow movement, but Tips do.',
      },
      {
        heading: 'You Must Do This on Your Turn',
        body: 'If you are grabbed, you can\'t use items but can still attack the Tip grabbing you. Defeat it to be dropped (then move and act); if the Tip defeats you, no damage but your turn is over.',
      },
      {
        heading: 'If You Win',
        body: 'The tendrils writhe and thrash, then slither away, shrinking back into the ground. The only sound you hear is sobbing. But who\'s crying? Oh—it\'s you.',
      },
    ],
    monsters: [],
  },

  {
    id: 8,
    title: 'Wail of the Banshee',
    intro:
      'First you hear a faint scrambling on the walls, then a glimpse of tattered silver robes. Something enters the room behind you. The creature sighs, and you feel a terrible chill boring into your heart. Death is nigh.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Set aside a number of triangular Knowledge Roll tokens equal to the number of players. Set aside an equal number of triangular Sanity Roll tokens.',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'The traitor used the Spirit Board to summon a baleful Banshee. While carrying the Spirit Board, the traitor is immune to the Banshee\'s wail.',
      },
      {
        heading: 'You Win When',
        body: 'You successfully perform an exorcism to banish the Banshee.',
      },
      {
        heading: 'How to Banish the Banshee',
        body: 'The exorcism needs successful exorcism rolls equal to the number of players. Each hero can attempt only one exorcism roll per turn.\nSanity 5+ while in the Chapel, Crypt, or Pentagram Chamber, or carrying the Holy Symbol or Spirit Board.\nKnowledge 5+ while in the Library or Research Laboratory, or carrying the Book or Crystal Ball.\nEach success puts the matching trait token on the item card or room tile used. Once a hero uses an item or room for an exorcism roll, no hero can use that item or room again. When tokens placed equal the number of players, the Banshee is banished.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'The Banshee can\'t be attacked. Stealing the Spirit Board from the traitor makes the traitor vulnerable to the Banshee but does not grant immunity to the hero carrying the Board.',
      },
      {
        heading: 'If You Win',
        body: 'The shrieking grows closer; the walls shake; your hair turns white. The doorknob turns as you cry out the last words of the exorcism. Then... silence.',
      },
    ],
    monsters: [],
  },

  {
    id: 9,
    title: 'The Dance of Death',
    intro:
      'Every clock in the house strikes midnight—though you\'re sure it isn\'t that late. A lone fiddler plays a haunting melody that calls you to dance. The music makes your soul shrivel, but it also makes your lips curl into a smile.',
    sections: [
      {
        heading: 'Right Now',
        body: 'This haunt doesn\'t begin with a traitor—only heroes. Each hero has a chance to become a traitor during his or her turn.\nIf the Pentagram Chamber and Stairs from Basement aren\'t in the house, the haunt revealer searches the room stack for them and places them in the basement (Pentagram Chamber as far from the revealer as possible). Do the same for the Ballroom, connecting it to a ground-floor room. Then shuffle.\nSet aside a number of triangular Sanity Roll tokens equal to the number of players.',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'Somewhere in the house a Dark Fiddler plays music that bites into your brain. A dance of death has begun in the Ballroom.',
      },
      {
        heading: 'You Win When',
        body: 'You banish the Dark Fiddler.',
      },
      {
        heading: 'How to Banish the Fiddler',
        body: 'Complete these steps in order; only one step per turn.\n1. The hero carrying the Holy Symbol moves to the Pentagram Chamber and can\'t voluntarily give it away.\n2. A hero in the Pentagram Chamber with the Holy Symbol can attempt Sanity 5+ to defy the Fiddler (you need only be in the same room as the Symbol). On success put a Sanity Roll token there.\n3. When the chamber has Sanity Roll tokens equal to the number of explorers at the start of the haunt, the Fiddler is banished.',
      },
      {
        heading: 'You Must Do This',
        body: 'At the start of your turn, attempt Sanity 4+ to resist the Fiddler\'s lure, unless carrying the Holy Symbol. If you fail in the Ballroom, you become insane and a traitor (read this haunt in the Traitor\'s Tome). If you fail elsewhere, take 1 Sanity damage; if your Sanity drops to the skull, you become a traitor instead of dying. Otherwise move toward the Ballroom by the shortest route through discovered rooms (you may act along the way).',
      },
      {
        heading: 'Special Attack Rules',
        body: 'The Dark Fiddler can\'t be attacked.',
      },
      {
        heading: 'If You Win',
        body: 'The fiddler plays faster as you chant the words to banish him. Rain falls from the ceiling. His face melts like wax in fire, and the terribly beautiful music fades only when the last of his body disappears in the driving rain.',
      },
    ],
    monsters: [],
  },

  {
    id: 10,
    title: 'Family Gathering',
    intro:
      'The madman cocks his head, listening. "Do you hear it? Under the floor, where I put them. My family." The floor buckles and two corpses heave up into the light. One fixes the madman\'s traitorous companion with a maggoty smile. The dull beat of footsteps echoes throughout the house.',
    sections: [
      {
        heading: 'What You Know About the Bad Guys',
        body: 'The Madman and the Zombies want to kill you. You can trap the Zombies by luring them into the rooms that were important to them in life.',
      },
      {
        heading: 'You Win When',
        body: 'You trap all of the Zombies.',
      },
      {
        heading: 'How to Trap Zombies',
        body: 'Lure the Zombies into their favorite rooms by exploiting their single-mindedness.\nZombies move slowly, always toward the closest hero they can see.\nYou can trap them in the Master Bedroom, Chapel, Conservatory, Game Room, Library, and Attic.\nWhen a Zombie enters or starts a turn in one of those rooms, it must attempt Knowledge 4+ to avoid being trapped. On a failure it makes no attacks and stays there peaceably for the rest of the game (turn its token face down).\nOnce a Zombie is trapped in a room, that room can\'t trap another Zombie.',
      },
      {
        heading: 'If You Win',
        body: '"Sorry, Mama!" screamed the madman. A sob bubbled from the rigor-locked gums of one of the shuffling corpses. You left Mama behind that night, but sometimes you think you can still hear her sobs trickling up through the floorboards.',
      },
    ],
    monsters: [],
  },

  {
    id: 11,
    title: 'Let Them In',
    intro:
      'Outside the window, the mist roils—shapes taking form in the vapors. From elsewhere you hear the madman scream, "At last! Throw wide the windows!" A cold wind plays through the house, whispering seductive threats in your ear.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Set aside a number of triangular Sanity Roll tokens equal to the number of players. Set aside an equal number of triangular Knowledge Roll tokens.',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'The traitor and the Madman are trying to let in the Specters. The Specters will try to kill you and can\'t be attacked physically.',
      },
      {
        heading: 'You Win When',
        body: 'You banish all the Specters, either through an exorcism or by defeating each individually with Sanity attacks (using the Ring).',
      },
      {
        heading: 'How To Perform An Exorcism',
        body: 'The exorcism needs successful exorcism rolls equal to the number of players. Only one exorcism roll per turn.\nSanity 5+ in the Chapel, Crypt, or Pentagram Chamber, or carrying the Holy Symbol or Ring.\nKnowledge 5+ in the Library or Research Laboratory, or carrying the Book or Crystal Ball.\nEach success puts the matching trait token on the room tile or item card used. Once used, an item or room can\'t be used in an exorcism again. When tokens placed equal the number of players, the Specters are banished.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'You can make Sanity attacks against a Specter if you have the Ring; defeating it banishes it. Defeating a Specter when it attacks you stuns it.\nWhile the Madman is focused on letting in the Specters he won\'t attack, but he can defend himself.',
      },
      {
        heading: 'If You Win',
        body: 'The rites have been observed. The exorcism succeeded. The windows are shut. The specters have been banished. But... what\'s that flicker of motion outside the window? Best not to let them in again.',
      },
    ],
    monsters: [],
  },

  {
    id: 12,
    title: 'Fleshwalkers',
    intro:
      'The crystal ball pulses with an image of the room you stand in, containing a crystal ball, and so on, as if you\'re falling into a well of identical images. Then a new image forms: the entrance hall, where people are arriving. One of the newcomers locks eyes with you. They are your eyes. It is your doppelgänger—your evil twin.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Put a number of small monster tokens (Evil Twins) in the Entrance Hall equal to the number of players, using different colors, each matched to a specific hero.\nThe player to the left of the haunt revealer goes first.',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'This haunt has no traitor—just heroes. The Evil Twins are just like you, but they want to kill you.',
      },
      {
        heading: 'You Win When',
        body: 'Your hero is alive and all of the Evil Twins are dead.',
      },
      {
        heading: 'The Evil Twins Must Do This',
        body: 'After the haunt revealer\'s turn, the Evil Twins act on the monster turn. Each rolls for movement as a monster and moves toward its matching hero by the shortest route. If it ends its turn in a room with any hero, it attacks (its counterpart if possible; otherwise random).\nIf a player\'s hero is killed, that player takes control of that hero\'s Evil Twin and attacks other explorers.\nEach Evil Twin has its counterpart\'s starting trait values; those traits don\'t change. Evil Twins can\'t carry items or take custody of companions.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'Without the Crystal Ball when you attack or defend against your own Evil Twin, you lose 1 additional point in each trait regardless of who wins; if your Twin defeats you, you also take normal damage. Fighting someone else\'s Twin does not cost the extra point.\nWith the Crystal Ball, you kill your Evil Twin when you defeat it.\nDefeating another hero\'s Twin stuns it, unless you have the Crystal Ball and that hero is dead (then you kill it). The Crystal Ball holder can attack stunned Twins.\nYou may take the Crystal Ball from a willing hero in the same room on your turn.',
      },
      {
        heading: 'If You Win',
        body: 'Shuddering, you back away. Your body lies dead on the floor. Not your body, you tell yourself. Your doppelgänger. You had to kill it. It was you or it, right? Right?',
      },
    ],
    monsters: [],
  },

  {
    id: 13,
    title: 'Perchance to Dream',
    intro:
      'Wake up, wake up! Why won\'t the dreamer wake up? One of your fellow explorers has fallen asleep in the bedroom. Nothing wakes the dreamer, who thrashes, crying out, "Come back! Don\'t do it!" Must be a nightmare.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Set aside a number of triangular Sanity Roll tokens equal to the number of players. Set aside an equal number of triangular Might Roll tokens.',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'The dreamer\'s subconscious has released Nightmares into the house. If enough escape, you lose. You don\'t know how many need to escape (the traitor does), so stop as many as you can.',
      },
      {
        heading: 'You Win When',
        body: 'You wake the dreamer before an unknown number of Nightmares escape into the world. (The traitor knows that exact number.)',
      },
      {
        heading: 'How to Wake the Dreamer',
        body: 'Bring the Holy Symbol to the dreamer and use it to wake them.\n1. Carry the Holy Symbol to the room with the dreamer\'s body.\n2. While a hero holds the Symbol there, any hero in the room can attempt a Sanity or Might roll of 5+ to wake the dreamer; each success takes a matching trait token. The dreamer awakens when the heroes have tokens equal to the number of players.\n3. The Smelling Salts card can\'t be used to awaken the dreamer.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'Nightmares inflict mental damage instead of physical damage.\nIf you attack a Nightmare and defeat it, it\'s killed instead of being stunned.',
      },
      {
        heading: 'If You Win',
        body: 'The roaming nightmares lose all cohesion and vanish. The dreamer gives one final scream in a deep, hellish voice: "NOOOOO! Don\'t make me go back!" Your friend wakes, blinking, and says, "I had the strangest dream."',
      },
    ],
    monsters: [],
  },
  {
    id: 14,
    title: 'The Stars Are Right',
    intro:
      'The bookshelves are packed with sinister tomes speaking of evil, death, madness, and the names of Things That Should Not Be. Rhythmic chanting echoes through the corridors—a cult shouting to summon an ancient creature, the loudest voice your traitorous companion\'s. The traitor is here to complete the ritual by bringing the cultists everything they need... including human sacrifices.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Set aside a number of pentagonal item tokens (cans of Paint) equal to the number of players. Put one in each of these rooms, in order, as many as you can: Kitchen, Larder, Junk Room, Storeroom, Research Laboratory, Attic. If there are more tokens than rooms, put extras in those rooms (again in order). If none are in play, search the room stack for one, put it on a legal floor, put all Paint tokens on it, then shuffle.',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'The traitor works with a fanatic cult. The Cultists are summoning their god by bringing sacrifices into the Pentagram Chamber—items, a few omens, and explorers\' corpses. You don\'t know how many sacrifices are needed, so stop them as quickly as possible.',
      },
      {
        heading: 'You Win When',
        body: 'You desecrate the pentagram before the god is summoned.',
      },
      {
        heading: 'How to Desecrate the Pentagram',
        body: 'Find cans of paint and throw them on the floor of the Pentagram Chamber.\nYou can carry only one Paint token at a time.\nThrow a Paint token into the Pentagram Chamber from an adjacent room with a connecting door (counts as 1 space of movement).\nYou must throw every Paint token in the house into the Pentagram Chamber to desecrate it.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'If your explorer is killed, tip the figure over to mark the corpse. A Cultist or the traitor can pick up and carry your corpse like an item; while carrying it, entering a room costs 2 spaces of movement.',
      },
      {
        heading: 'If You Win',
        body: 'The house shakes; the walls sweat as the cultists\' dread god draws near. Just as your world is about to be torn away, paint splashes across the floor, desecrating the pentagram. The world is safe, for now, but the cultists\' chant still burns in your mind, and blood drips from your damaged ears. In time your body will heal... but will your soul?',
      },
    ],
    monsters: [],
  },

  {
    id: 15,
    title: 'Here There Be Dragons',
    intro:
      'One of your explorers picks up a scrap of paper and mumbles something. The front doors burst open and an enormous dragon roars in, rampaging and snorting fire! Your friend points, yelling, "Eat \'em, dragon! Eat them all!"',
    sections: [
      {
        heading: 'What You Know About the Bad Guys',
        body: 'The Dragon wants to kill you all. It can breathe fire and bite. You\'ll need special weapons and armor to defeat such a ferocious beast.',
      },
      {
        heading: 'You Win When',
        body: 'You slay the dragon.',
      },
      {
        heading: 'How to Slay the Dragon',
        body: 'You\'ll need the Antique Armor (a pentagonal item token), the Shield (another pentagonal item token), and the Spear card. The Antique Armor and Shield are both somewhere in the basement.\nAntique Armor: a unique item different from the Armor card; it can\'t be stolen with a special attack and can\'t be worn together with the Armor. Use a full turn to put it on or take it off and give it away (can\'t move/act that turn). While worn, take 5 less physical damage but move 1 fewer space; it doesn\'t protect against fire or heat.\nShield: while carried you\'re immune to fire and heat damage but move 1 fewer space (2 fewer with the Antique Armor too). Every hero in the Shield-carrier\'s room is immune to the Dragon\'s fire breath.\nSpear: in addition to its Might bonus, add 4 to your roll when attacking or defending against the Dragon with Might.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'When hit by the Dragon\'s fire breath, you can discard an item to take 2 less physical damage (repeat with multiple items).\nThe traitor tracks damage dealt to the Dragon and announces when it\'s slain.',
      },
      {
        heading: 'If You Win',
        body: 'The dragon quivers, then lies still as smoke rises from its nostrils. Now you must deal with the traitor, grinning like an idiot. "But this is a dream!" protests the traitor. Rather poignant, for last words.',
      },
    ],
    monsters: [],
  },

  {
    id: 16,
    title: 'The Phantom\'s Embrace',
    intro:
      'Your companion was always too obsessed with that girl, jealous of her friendship with you. Now he\'s trapped her inside the house. You hear her scream, then silence. A deep laugh echoes from below, followed by a quiet ticking. It sounds like the timer on a bomb. Just like it, in fact.',
    sections: [
      {
        heading: 'What You Know About the Bad Guys',
        body: 'Your traitorous companion summoned a Phantom to guard the Girl, hidden in the basement, and set a bomb trap. You don\'t have much time.',
      },
      {
        heading: 'You Win When',
        body: 'You rescue the Girl and then either defuse the bomb or escape with the Girl before it blows up.',
      },
      {
        heading: 'How to Rescue the Girl',
        body: 'First find the Phantom and rescue the Girl; then find and defuse the bomb—or get out.\nThe Phantom (and Girl) appear in the next basement room you discover with an event or omen symbol; the traitor places their tokens there.\nInstead of drawing a card for that room, attack the Phantom. Defeat it to kill it and gain custody of the Girl. If it defeats you, you take normal damage and it escapes with the Girl (both tokens removed); the Phantom reappears in the next basement event/omen room you discover.\nIf the whole basement is explored, the traitor places the Phantom and Girl in any basement room (never the same room twice).',
      },
      {
        heading: 'How to Defuse the Bomb',
        body: 'Once per turn, attempt Knowledge 7+ in the room where the Phantom was defeated to defuse the bomb.',
      },
      {
        heading: 'How to Escape from the House',
        body: 'Attempt a Knowledge (pick the lock) or Might (break the door) roll of 6+ to open the front door in the Entrance Hall. On success, draw an event card and end your turn. On later turns, all heroes can move 1 space out the front door to escape.',
      },
      {
        heading: 'If You Win',
        body: 'The girl sobs in your arms as you flee. You can still hear that infernal ticking. Glancing back, you see a lone shape in an upper window, raising a hand to the glass as you pass through the iron gates of the estate.',
      },
    ],
    monsters: [],
  },

  {
    id: 17,
    title: 'A Breath of Wind',
    intro:
      'As you move through the room, some of the debris begins to shake, lifting off the floor. Soon a cloud of broken objects spins through the air, and you hear a cackle of insane laughter as pieces of junk launch themselves toward you.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Set aside several pentagonal item tokens to represent Candles.',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'They are trying to kill you.',
      },
      {
        heading: 'You Win When',
        body: 'You exorcise the Poltergeist.',
      },
      {
        heading: 'How to Perform the Exorcism',
        body: 'This exorcism requires burning Candles.\nOnce per turn in the Kitchen, Dining Room, Chapel, or Gallery, attempt Speed 3+ to find a Candle; on success put a Candle token on your character card (more than one can be found in a room).\nWhile carrying a Candle, you may discard it in any room on the haunt-reveal floor and attempt Knowledge 5+. On success place the Candle token there (no more Knowledge rolls in that room); on failure the Candle is lost. A placed Candle can\'t be taken by the Poltergeist or traitor. When you\'ve placed Candle tokens equal to the number of heroes at haunt reveal, you exorcise the Poltergeist.\nA hero with the Candle item card can use (and discard) it instead of a Candle token on a Knowledge roll, placing a pentagonal item token on success.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'The Poltergeist is immune to Might attacks and can\'t be harmed by the Revolver. Dynamite affects it (see the Traitor\'s Tome).\nAny hero in the Poltergeist\'s room may attack it with Speed; defeating it inflicts no damage but lets you steal one item it carries. If it defeats you, take 1 die of physical damage.\nA hero carrying the Ring, Skull, or Bell can attack the Poltergeist with Sanity; defeating it decreases the Turn/Damage track by the difference in rolls. If it defeats you, take 1 die of mental damage.',
      },
      {
        heading: 'If You Win',
        body: 'The candle sputters and burns your hand as you recite the words for the final time. With a sickening crash, the airborne debris flies in all directions, denting the walls. Then, all is still.',
      },
    ],
    monsters: [],
  },

  {
    id: 18,
    title: 'United We Stand',
    intro:
      'You heard your friend scream, but by the time you arrived, he was already a monster, flesh flowing across bones like molten rubber. Flesh like that can\'t be cut with normal weapons. But fire will melt it all away. A big enough fire will burn away your monstrous friend and all the horror of this house forever.',
    sections: [
      {
        heading: 'Right Now',
        body: 'If the Stairs from Basement tile is not in the house, search the room stack for it and place it in the basement, then shuffle.',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'The traitor hungers for your flesh, and only burning down the house will kill the monster.',
      },
      {
        heading: 'You Win When',
        body: 'The house fire kills the traitor.',
      },
      {
        heading: 'How to Burn Down the House',
        body: 'Discover and move to the Furnace Room; Knowledge 5+ to set the furnace to overheat. At the end of the subsequent turn of the hero who did this, the Furnace Room explodes (turn it over); anyone in it (including the traitor) is killed.\nFrom then on, at the end of every explorer\'s turn (including the traitor\'s), a new room catches fire and kills anyone in it (flip the tile). A room can catch fire only if adjacent to a burned room (doors not required). Dead heroes\' players can\'t spread fire, but the traitor must.\nWhen the fire reaches the Stairs from Basement, a subsequent explorer can destroy the Foyer; fire then spreads to the Entrance Hall and Grand Staircase (mark with item tokens). Fire can also spread via Coal Chute or up to the Collapsed Room. When the Foyer, Entrance Hall, and Grand Staircase burn, the house collapses, killing anyone left inside.',
      },
      {
        heading: 'How to Escape the House',
        body: 'Attempt a Knowledge (pick the lock) or Might (break the door) roll of 4+ to open the front door in the Entrance Hall. On success, draw an event card and end your turn. On later turns, all explorers move 1 space out the front door to escape. The traitor can\'t initially move through the front door—the escaping heroes bar it behind them.',
      },
      {
        heading: 'If You Win',
        body: 'The house collapses into a blazing inferno. A fitting end for such an evil place and the thing your friend became. Still, staring at the red-hot flames, you can\'t help but admire the secret lost in them. After all, aren\'t we all stronger when united?',
      },
    ],
    monsters: [],
  },

  {
    id: 19,
    title: 'A Friend for the Ages',
    intro:
      'The gallery is lined with antique paintings. Your eye falls upon one that looks strangely familiar—the face of one of your friends, marred by age and mortal wounds. A dusty placard reads: "To a friend for the ages. May death itself refuse you while this ward endures."',
    sections: [
      {
        heading: 'Right Now',
        body: 'Take a number of pentagonal item tokens (cans of Paint) equal to the number of heroes + 2. Set aside a number of triangular Knowledge Roll tokens equal to the number of heroes.\nPlace Paint tokens in these rooms, one each: Attic, Abandoned Room, Collapsed Room, Patio, Statuary Corridor, Storeroom, Wine Cellar. If more rooms than tokens, place in rooms farthest from any explorer. If more tokens than suitable rooms, set extras aside; place a Paint token in each eligible room as it is discovered.',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'The traitor is protected by a mystical portrait that absorbs all ills and infirmities, and is trying to protect it at all costs.',
      },
      {
        heading: 'You Win When',
        body: 'You break the portrait\'s spell by repainting it, or the traitor is dead.',
      },
      {
        heading: 'How to Repaint the Portrait',
        body: 'Paint tokens can be picked up, dropped, traded, and stolen like items but can\'t be carried by the Dog; carry only one at a time.\nIn the Gallery with a Paint token, attempt Knowledge 4+ on your turn to repaint the portrait. On success discard the Paint token and place 1 Knowledge Roll token in the room (once per turn).\nWhen the Gallery has Knowledge Roll tokens equal to the number of heroes at haunt start, the spell is broken.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'The traitor can\'t be harmed by normal means. If you defeat the traitor in physical combat by 2 or more, you can steal an item.\nException: when a hero wearing the Amulet of the Ages defeats the traitor in combat, the traitor\'s traits take damage as normal.',
      },
      {
        heading: 'If You Win',
        body: 'As you make the last stroke, the painting yields and gives up its power. Your companion staggers, hair growing long and white, body falling apart into dust. But as you look at the new portrait, you wonder... where have you seen that face before?',
      },
    ],
    monsters: [],
  },

  {
    id: 20,
    title: 'Ghost Bride',
    intro:
      'An apparition in white lace shimmers into view. "You\'ve left me alone these long years, but I waited. For you. For our wedding." The ghost glides toward one of your explorers: "Once you are dead like me, we will be together... forever." A faint organ plays a wedding march through the house.',
    sections: [
      {
        heading: 'Right Now',
        body: 'If the Crypt isn\'t in the house, search the room stack for it and put it in the basement, then shuffle.\nPut a pentagonal item token in the Crypt to represent the Corpse.',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'The Ghost Bride thinks one of the explorers is her new groom.',
      },
      {
        heading: 'You Win When',
        body: 'You find the wedding ring (the Ring card) and the body of the real groom (the Corpse token), then present them to the Ghost Bride in the Chapel before she marries your friend.',
      },
      {
        heading: 'How to Stop the Wedding',
        body: 'Follow these steps in order; each hero can attempt only one step per turn.\n1. Knowledge 5+ in the Bedroom, Dining Room, or Library, or carrying the Book (her diary), to figure out the real groom\'s name.\n2. Knowledge 4+ in the Crypt to locate the body.\n3. Might 4+ in the Crypt to disinter it.\n4. Carry the Corpse token to the Chapel; it\'s heavy, so entering a room costs 2 spaces of movement (can be traded like an item).\n5. Carry the Ring to the Chapel (order doesn\'t matter).\nWith the Corpse and Ring in the Chapel, the Ghost Bride appears there and rests in peace.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'The Ghost Bride makes Sanity attacks. She can\'t be damaged or stunned by any means except Sanity attacks from the Ring.',
      },
      {
        heading: 'If You Win',
        body: 'You heave the mummified corpse across the threshold of the chapel, the ring forced onto its finger. The apparition in white appears; from the broken form rises an apparition in black. Linking hands, the two fade slowly, lovingly, from existence.',
      },
    ],
    monsters: [],
  },

  {
    id: 21,
    title: 'House of the Living Dead',
    intro:
      'That racket sounds like something coming up through the floor. Decaying bodies, rot-blackened teeth, grave breath! Pus-filled corpses snatch at you with death-gaunt arms. They\'re going to feast on your flesh—and you won\'t die. Eternally hungry, your mutilated corpse will join the undead. You must stop them somehow!',
    sections: [
      {
        heading: 'What You Know About the Bad Guys',
        body: 'They are slow but tough Zombies that want to kill you all. An ancient Zombie Lord controls them.',
      },
      {
        heading: 'You Win When',
        body: 'You destroy either the Zombie Lord or all the Zombies.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'If you\'re killed, you become a Zombie on your next turn; the traitor tells you your new traits (read this haunt in the Traitor\'s Tome).\nDestroy a Zombie by defeating it with any Might-attack weapon; Dynamite also kills Zombies. Otherwise defeating a Zombie only stuns it.\nWhen you may draw an item card, you can instead draw three, choose one, and bottom the others.\nWhile carrying the Holy Symbol, Zombies making Might attacks against you roll 2 fewer dice. (No effect on the Zombie Lord.)\nYou can damage the Zombie Lord only while carrying the Medallion. The Medallion holder needs no weapon to damage it, but wielded weapons damage it normally. The traitor tracks damage and announces when it\'s destroyed. Heroes without the Medallion can\'t even stun the Zombie Lord.',
      },
      {
        heading: 'If You Win',
        body: 'The sound of flesh rent by corpse-gray hands, the horrible chomping that followed—you can hear them still. Each time, you almost imagine something shifting in the walls. Then you roll over and go back to sleep. Checking for the origin of those sounds never leads to anything good.',
      },
    ],
    monsters: [],
  },

  {
    id: 22,
    title: 'The Abyss Gazes Back',
    intro:
      'The house shudders and groans; a wave of heat envelops you. A portion of the house crumbles and falls into a burning lake of fire. You scramble to safety, wondering how to keep the house from collapsing into Hell and taking you with it.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Set aside a number of triangular Sanity Roll tokens equal to the number of players. Set aside an equal number of triangular Knowledge Roll tokens.',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'The traitor welcomes the Abyss—and wants to make sure everyone else goes along for the ride.',
      },
      {
        heading: 'You Win When',
        body: 'You successfully perform an exorcism to keep the house from collapsing.',
      },
      {
        heading: 'How To Perform the Exorcism',
        body: 'The exorcism needs successful exorcism rolls equal to the number of players. Only one per turn.\nSanity 5+ in the Chapel, Crypt, or Pentagram Chamber, or carrying the Holy Symbol or Ring.\nKnowledge 5+ in the Library or Research Laboratory, or carrying the Book or Crystal Ball.\nEach success puts the matching trait token on the room tile or item card used; a token still counts even if that room/item is later destroyed. Once used, an item or room can\'t be used again. When tokens placed equal the number of players, the house stops collapsing.',
      },
      {
        heading: 'You Must Do This on Your Turn',
        body: 'At the end of your turn, the traitor tells you to turn over one or more room tiles; these have collapsed and are now part of the Abyss.',
      },
      {
        heading: 'Dealing with the Abyss',
        body: 'The traitor tracks time on the Turn/Damage track.\nIf you carry the Holy Symbol and are adjacent (with a connecting door) to a destroyed room, you can sacrifice it instead of turning over tiles; discard it and don\'t turn those tiles, preventing collapse until the end of your next turn (the track still advances).\nIf the Abyss engulfs your room, attempt Speed 4+ to jump to an adjacent discovered, non-collapsing room with a connecting door; fail (or no room available) and you\'re sucked in and killed.\nIf an event or the Mystic Elevator sends you to a collapsed room or floor, you plummet into the Abyss and die.\nThe Entrance Hall, Foyer, and Grand Staircase each count as a separate room (mark each with an item token when lost).',
      },
      {
        heading: 'If You Win',
        body: 'The last incantation is over. The house ceases rumbling, the gray mist pulls back, the red glow is extinguished. You sigh. Hell won\'t claim you today.',
      },
    ],
    monsters: [],
  },

  {
    id: 23,
    title: 'Tentacled Horror',
    intro:
      'Ropy lengths of muscled tissue flail into view, jagged horn-rimmed suckers pulsing and clicking. A rubbery length scuttles across a fellow explorer\'s leg, tightens, and reels him out of sight. His screams grow fainter, then stop. Then the tentacle returns.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Set aside 3 triangular Might Roll tokens.',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'A Tentacled Horror is searching for you. Each Tentacle is an Arm token plus a Sucker token. If a Sucker pulls you to its matching Arm, you\'ll be killed at the start of the next monster turn unless rescued. The Tentacles grow stronger over time.',
      },
      {
        heading: 'You Win When',
        body: 'You destroy the creature.',
      },
      {
        heading: 'How to Destroy the Creature',
        body: 'Find and destroy the Head.\nThe hero with the Crystal Ball uses it to find the Head: Knowledge 4+ (an unsuccessful roll triggers the card\'s negative consequences). On success, instead of drawing a card, roll 4 dice for the Head\'s location: 0 Larder; 1 Kitchen; 2 Organ Room; 3 Chasm; 4–5 Underground Lake; 6 Conservatory; 7 Crypt; 8 Furnace Room.\nThe Crystal Ball shatters after this use (discard the card).\nIf that room isn\'t discovered, find it in the room stack, give it to the traitor to connect to any unexplored doorway on an appropriate floor, then shuffle.\nPlace a small monster token there for the Head.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'Arms can\'t attack or be attacked. Suckers attack and are attacked normally.\nIf a Sucker defeats you in physical combat, no damage—you\'re grabbed and drop all items there; the Sucker ends its movement.\nDefeating a Sucker stuns it; it drops any grabbed hero and the Sucker token returns to its matching Arm\'s room.\nArms don\'t slow movement; Suckers do.\nThe Head can attack heroes. Each time the Head would take damage, instead place a Might Roll token in its room; when all 3 are placed, the Head is destroyed.',
      },
      {
        heading: 'You Must Do This on Your Turn',
        body: 'If you are grabbed, you can\'t use items but can still attack the Sucker grabbing you. Defeat it to be dropped and freed, but each room you move into the rest of the turn costs 2 spaces. Tie or lose: no damage, but your turn is over.',
      },
      {
        heading: 'If You Win',
        body: 'The sucker-rimmed tentacle lashes in agony, bringing down ceiling and wall. A scream ascends beyond your hearing as the creature\'s last call penetrates dimensions you cannot imagine. Finally, That Which Should Not Be is no more—until you meet it again in your dreams.',
      },
    ],
    monsters: [],
  },

  {
    id: 24,
    title: 'Fly Away Home',
    intro:
      'You hear a shushing, sandpapery sound outside. Through a window you see a great swarm of bats with glowing red eyes. You pull the curtains, but then you hear it: a thump, another, a horrid choking laugh. Shush, shush, shush. They\'re here.',
    sections: [
      {
        heading: 'Right Now',
        body: 'If the Organ Room isn\'t in the house, search the room stack for it and put it in the house, then shuffle.',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'The traitor has let bloodsucking Bats into the house. The Bats already killed the traitor; now they want to kill you.',
      },
      {
        heading: 'You Win When',
        body: 'You drive away the Bats by making appropriate noises with the pipe organ (in the Organ Room), then kill any Bats attached to explorers.',
      },
      {
        heading: 'How to Drive Away the Bats',
        body: 'Follow these steps in order; each hero can attempt only one per turn.\n1. In the Organ Room, Might 5+ to start the pipe organ.\n2. After it\'s started, Knowledge 6+ in the Organ Room to make the noises that drive away all unattached Bats and prevent more from entering. (A hero whose hobby is Music can use Knowledge 5+ instead.)\n3. Attack and kill any Bats attached to heroes.',
      },
      {
        heading: 'You Must Do This',
        body: 'At the beginning of your turn, take 1 physical damage for each Bat attached to you. Wearing the Armor reduces the total by 1.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'Attack a Bat attached to you or another hero using Might; defeating it kills it instead of stunning.\nUnattached Bats don\'t affect movement, but you move 1 fewer space per attached Bat (minimum 1).',
      },
      {
        heading: 'If You Win',
        body: 'The last bloated bat crumples to the ground, and the room grows brighter. You see the faint light of dawn in the east. The shushing fades to silence. You shake in relief, knowing you won\'t spend another night here.',
      },
    ],
    monsters: [],
  },

  {
    id: 25,
    title: 'Voodoo',
    intro:
      'You crack a journal and find each page holds a taped-down photograph of a voodoo doll, each defaced with a big red slash—except the last few. One looks like one of your friends. And this one sort of looks like you...',
    sections: [
      {
        heading: 'What You Know About the Bad Guys',
        body: 'The traitor has hidden voodoo dolls throughout the house, each linked to a hero and in a dangerous place. As the Turn/Damage track advances, the dolls\' effects get worse.',
      },
      {
        heading: 'You Win When',
        body: 'You destroy all of the dolls and at least half (rounding up) of the heroes who began the haunt are still alive.',
      },
      {
        heading: 'How to Destroy the Dolls',
        body: 'Follow the traitor\'s hints to the rooms with dolls (you can ask the traitor to repeat any hint).\nIn this haunt, explorers don\'t stop when entering a previously unexplored symbol room. You can explore as many rooms as you wish, drawing a card only if you end movement in a symbol room (or search for a doll in a newly discovered symbol room).\nMove to a room you think holds a doll. Attempt Knowledge 2+ to search; on success, ask the traitor if the room contains a doll—they must answer truthfully and name which one. You can search only one room per turn.\nOnce you find a doll, you can automatically destroy it if it\'s yours; you can find any doll but destroy only your own.\nIf a hero dies, that hero\'s doll is also destroyed.',
      },
      {
        heading: 'If You Win',
        body: 'You dash the doll on the floor, over and over—button eyes shatter, stitching bursts, the material splits. The doll is destroyed. Wait—that wasn\'t the brightest thing to do with a voodoo doll. You don\'t feel well... but it could have been much worse.',
      },
    ],
    monsters: [],
  },

  {
    id: 26,
    title: 'Pay the Piper',
    intro:
      'Those damned noises! You pound the wall and the skitter, scritch, scratch ceases—then begins again, louder. One explorer listens with an expression of joy so extreme it seems like pain, and you notice how ratlike your friend looks. The traitor says one word in a horribly high voice: "Feed!" Rats flood from under the baseboards. It\'s you or them.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Before the traitor places Rat tokens, put any explorer in the Pentagram Chamber in a room adjacent to it instead (no connecting door needed).',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'The traitor is performing a wicked rat-thing ritual in the Pentagram Chamber. You can stop it only by quickly killing every Rat in the house. Watch out for swarms attacking together.',
      },
      {
        heading: 'You Win When',
        body: 'You destroy all the Rats, or you kill the traitor before he or she reaches the Pentagram Chamber.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'Inflicting any damage on a single Rat kills it.\nThe heroes can\'t affect the traitor in any way while he or she is in the Pentagram Chamber. Neither Rats nor heroes can enter the Pentagram Chamber.',
      },
      {
        heading: 'If You Win',
        body: 'Rat bites bleed on your arms, legs, and scalp. You can still feel their warm, furry bodies straining to bite and swarm. But the swarms are dead at last. You hope you\'re finally safe. ... skitter, scritch, scratch ...',
      },
    ],
    monsters: [],
  },

  {
    id: 27,
    title: 'Amok Flesh',
    intro:
      'You hold the crystal sphere to your eye; a baby-pink clot is caught in the center. The crystal pulses, you drop it, and it shatters. A fleshy blob lies exposed amid the splinters—a yolk that bubbles and expands, doubling in size every few seconds. It surges forward as you back away. Will it never stop growing?',
    sections: [
      {
        heading: 'Right Now',
        body: 'The player whose explorer carries the Crystal Ball discards that card; whoever is in that room should move away quickly, because that\'s where the Blob starts growing.\nSet aside a number of triangular Knowledge Roll tokens equal to the number of players. Set aside an equal number of triangular Sanity Roll tokens.',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'The Blob is spreading. If you end up in a room with a Blob token, you become a Blob-person (your new goal is to help the traitor win).',
      },
      {
        heading: 'You Win When',
        body: 'You destroy the Blob.',
      },
      {
        heading: 'How To Destroy the Blob',
        body: 'Once per turn, in a room adjacent (with a connecting door) to a Blob token, attempt Knowledge 3+ to examine the Blob; each success puts a Knowledge Roll token on your character card.\nFinding the Blob\'s weakness needs successful Knowledge rolls equal to the number of players; when the last succeeds, set aside all those tokens.\nThen find the chemical formula: ingredients equal to the number of players. Once per turn, Knowledge 3+ to search for an ingredient in the Attic, Conservatory, Furnace Room, Gardens, Library, either Laboratory, Junk Room, Kitchen, Larder, Storeroom, an open Vault, or Wine Cellar. Each success puts a Knowledge Roll token on your card and a Sanity Roll token in that room (no more searching there).\nFrom an adjacent room (connecting door), spend 1 space to throw an ingredient into the Blob: transfer a Knowledge Roll token from your card to the Blob\'s room. When ingredients thrown equal the number of players, the entire Blob is destroyed.',
      },
      {
        heading: 'If You Win',
        body: 'You toss the beaker into the roiling expanse of pulsating flesh; the blob absorbs it instantly. The house shakes; the blob quivers, evaporating, consuming itself in a violent convulsion. All that remains are pools of fetid liquid, bits of bone, and strands of half-dissolved skin.',
      },
    ],
    monsters: [],
  },

  {
    id: 28,
    title: 'Ring of King Solomon',
    intro:
      'As you study the ring, inscriptions rearrange themselves into words you can read: "King Solomon\'s Ring." Then: "Demons Bow to You." And last: "The Hellgate is Open." The house quakes; a hot, sickly sweet wind blows through. A scream promising an eon of pain sounds from another room—perhaps a demon from Hell.',
    sections: [
      {
        heading: 'What You Know About the Bad Guys',
        body: 'Demons are entering the house through a portal from Hell. They want to kill everyone. Different Demons have different physical and mental traits.',
      },
      {
        heading: 'You Win When',
        body: 'You destroy the Demon Lord. To do this, defeat it twice while carrying the Ring. Each attack can use Might or Sanity.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'A Sanity attack against the Demon Lord using the Ring adds 2 to your roll. Defeating it the first time stuns it; the second time destroys it. (If the Demon Lord attacks the Ring-carrier and loses, that counts as one of the two defeats.)\nA successful Sanity attack against any other Demon using the Ring gains control of that Demon; you can move it and attack other Demons or the traitor on later turns. Another hero taking the Ring controls the conquered Demons; if the Ring is dropped or stolen by the traitor, all controlled Demons become uncontrolled.\nIf you defeat a Demon or Demon Lord without the Ring, you only stun it.',
      },
      {
        heading: 'If You Win',
        body: 'King Solomon\'s Ring blazes as the demon lord succumbs. The wind reverses; the Hellgate becomes a Helldrain, sucking back the flames. Tendrils of fire grab each demon and pull it into the maw. As the last shrieking demon disappears, the Helldrain collapses like an eye closing. Hell is done with you—but are you done with Hell?',
      },
    ],
    monsters: [],
  },

  {
    id: 29,
    title: 'Frankenstein\'s Legacy',
    intro:
      'Your fellow explorer pores over the yellowed pages, mumbling about reanimating dead flesh. Then he looks up, eyes alight with zeal. "To the laboratory! Tonight, I shall realize the dream of necrotic revitalization! Tonight, the dead shall walk!"',
    sections: [
      {
        heading: 'Right Now',
        body: 'Set aside 5 pentagonal item tokens to represent Torches.\nSet up the Turn/Damage track at 0 to keep track of Torch hits.',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'The traitor has animated Frankenstein\'s Monster and commands it to kill you all. The Monster is very tough, so avoid it. Its one weakness: fire.',
      },
      {
        heading: 'You Win When',
        body: 'The Monster is dead.',
      },
      {
        heading: 'How to Kill the Monster',
        body: 'Two ways:\n1. Death by Fire: Go to the Charred Room, Furnace Room, Pentagram Room, or Kitchen to find and light a torch (put a Torch token on your card; carry only one at a time, no limit on total). In the Monster\'s room or an adjacent room with a connecting door, attempt a Speed attack to throw the Torch. Defeat the Monster for one Torch hit: advance the Turn/Damage track by 1 and discard the Torch (this attack doesn\'t stun it). If it defeats you, you lose the Torch. One Torch thrown per hero per turn. The Monster is killed once hit by a number of Torches equal to the number of players.\n2. Death by Falling: The Monster must always move toward the closest explorer it can attack. Lure it into the Tower or Chasm, then attempt Might 6+ there to push it to its death (once per turn).',
      },
      {
        heading: 'If You Win',
        body: 'You feed the book to the candle flame, page by page—a true abomination. Then a brilliant, simple light breaks upon you, dazzling you with the book\'s possibilities. How surprising that you alone should discover so astonishing a secret. You burn your finger, just a bit, patting out the burning page.',
      },
    ],
    monsters: [],
  },

  {
    id: 30,
    title: 'Tomb of Dracula',
    intro:
      'A sick certainty clutches your stomach as the coffin lid creaks open. A pale hand pushes it back—coarse, broad, hair on the palm, nails cut to sharp points. "We have to kill it," you yell, "before it completely awakens!" That\'s when you see the fresh bite marks on your friend\'s neck and the new fangs in your friend\'s mouth.',
    sections: [
      {
        heading: 'What You Know About the Bad Guys',
        body: 'The traitor and the Girl (now the Bride) are both Vampires in league with Dracula. Dracula is very powerful but awakens slowly—you have a couple of turns to act before he\'s fully conscious. He and his minions will try to kill you or turn you into Vampires.',
      },
      {
        heading: 'You Win When',
        body: 'Dracula and the Bride have both been destroyed.',
      },
      {
        heading: 'How to Destroy Vampires',
        body: 'Using the Spear to defeat a Vampire with a Might attack stakes its heart and kills it. Any other successful attack inflicts damage against the traitor, or stuns Count Dracula and the Bride.\nThe traitor tracks turns. Immediately after the traitor advances the Turn/Damage track, another explorer rolls a number of dice equal to the number of players; when the result is lower than the current turn number, the sun comes up.\nVampires weaken as day goes by. At the start of each traitor turn after sunrise, each Vampire (Dracula, Bride, traitor) loses 1 from each trait. If a Vampire\'s trait drops to 0 or the skull, it bursts into flames and is destroyed.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'Defeating a Vampire inflicts normal damage. If you also carry the Holy Symbol, you can force that Vampire 1 room away from you (through a connecting door) for each point of damage you inflict.',
      },
      {
        heading: 'If You Win',
        body: 'A stake through the heart, the light of the sun—these were your weapons against the blood-sucking scourge and its nightwalking children. Day has come. The vampires are destroyed. They truly are gone, you think, idly rubbing a wound on your neck. Better have that looked at, just in case.',
      },
    ],
    monsters: [],
  },

  {
    id: 31,
    title: 'Airborne',
    intro:
      'A deafening shriek leaves you reeling; the house crumples and jerks into the air. A bird the size of a 747 is carrying the house in its talons. If you\'re going to live, you need to get out fast—but you need some way to survive the fall. You remember parachutes someone stumbled over. There might not be enough for everyone.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Set aside a number of pentagonal item tokens equal to half the number of players (round down); these are Parachutes.\nRemove any basement tiles. Put any basement explorers in the Mystic Elevator beside a ground-floor door (search the room stack for it if needed, place it on the ground or upper floor), then shuffle.',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'This haunt has no traitor—only heroes. Even so, only some of you can survive.',
      },
      {
        heading: 'You Win When',
        body: 'You exit the house with a Parachute. Heroes who do not find a Parachute are killed.',
      },
      {
        heading: 'Finding a Parachute',
        body: 'Heroes can still explore but can\'t enter the basement (if the next tile can only go in the basement, discard it and draw until you can place one).\nSearch for a Parachute with a Knowledge or Speed roll of 4+ in any room with an omen symbol; on success put a Parachute token on your card. Only one Parachute per room.\nYou can\'t move further on the turn you find or steal a Parachute, and can carry only one.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'Steal a Parachute by attacking with Might (resisted by Might) or tricking with Knowledge (resisted by Knowledge). You take it if you win by 1 or more; the loser takes no damage; your turn ends whether or not it worked.\nYou can attack heroes to inflict damage instead, per normal rules. A dead hero carrying a Parachute drops it for anyone to pick up.\nHeroes slow each other as if they were monsters.',
      },
      {
        heading: 'Exiting the House',
        body: 'With a Parachute, move to the Entrance Hall, Balcony, Tower, Coal Chute, or Collapsed Room and spend 1 space. Then make a Knowledge or Sanity roll of 4+; on success you exit safely.',
      },
      {
        heading: 'If You Win',
        body: 'The air rushes past like a hurricane; your parachute opens and your fall slows. Then you hear flapping—tears in the fabric, ropes tangled. Perhaps the chute got damaged in the fighting, but for now it seems okay. The tears aren\'t getting bigger. Not yet, anyway...',
      },
      {
        heading: 'If You Lose',
        body: 'Your so-called friends have left you to be food for the chicks of this demonic bird of prey. On the other hand, maybe if you landed on another human body, you\'d survive the fall. Your friend over there looks pretty soft...',
      },
    ],
    monsters: [],
  },

  {
    id: 32,
    title: 'Lost',
    intro:
      'The crystal ball flashes and a thundering chord bursts from the pipe organ. The house shakes and shifts, changing its layout. The air thickens into a cloying, green, corrosive mist. Outside, the sky is mauve and the pedestrians have rather more teeth than they should. Better return the house to your home dimension before too much skin scalds away.',
    sections: [
      {
        heading: 'What You Know About the Bad Guys',
        body: 'The traitor is an alien who transported the house to its home dimension. The corrosive atmosphere will slowly kill you.',
      },
      {
        heading: 'You Win When',
        body: 'You return the house to your own dimension.',
      },
      {
        heading: 'You Must Do This',
        body: 'At the beginning of each hero\'s turn, roll 2 dice; that hero subtracts the result from any trait or combination of traits.',
      },
      {
        heading: 'How to Return the House',
        body: 'The pipe organ in the Organ Room is also a dimensional transporter. While in the Organ Room, attempt a Knowledge roll to play the right song (once per turn). Needed total: 3 players 15+; 4 players 16+; 5 players 18+; 6 players 20+.\nFound clues benefit everyone; the same clue can\'t be found twice.\nAdd 1 for each room with an omen symbol in the house.\nAdd 2 if you have the Music hobby while playing.\nAdd 2 if you find the music books in the Library (Knowledge 5+ there, once per turn).\nAdd 2 if you view the trophy animals in the Game Room (Sanity 5+).\nAdd 2 if you locate your planet from the Tower (Knowledge 5+).\nAdd 2 while the Madman is in the Organ Room.\nAdd 2 while the Book is in the Organ Room.',
      },
      {
        heading: 'If You Win',
        body: 'You pound out the last chord; this time the sound thunders through the house. The house shakes and shifts; the air clears and becomes transparent. It\'s dark outside. The pain grows less, the bleeding slows. You\'ve returned to your own dimension. But are you on your home planet? That remains to be seen.',
      },
    ],
    monsters: [],
  },

  {
    id: 33,
    title: 'An Invocation of Darkness',
    intro:
      'Since opening the book, your friend has been cackling insanely, muttering about a gate and the "space between the stars." He\'s clearly insane—the only way to get him back to his right mind will be to destroy the sinister volume he carries.',
    sections: [
      {
        heading: 'Right Now',
        body: 'If neither the Chapel nor the Pentagram Chamber is in play, the person to the left of the haunt revealer searches the room stack for one of those tiles and puts it on a legal floor (as far from the traitor as possible), then shuffles.',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'The traitor is using the Book to summon a hideous Elder God that will consume the world, starting with you.',
      },
      {
        heading: 'You Win When',
        body: 'You destroy the Book. You also win if you kill the traitor before he or she finishes the summoning ritual.',
      },
      {
        heading: 'How to Destroy the Book',
        body: 'Before the Elder God is summoned, you can steal the Book from the traitor.\nAfter the summoning, the Book lies in the room where the ritual was performed; pick it up as normal.\nCarry the Book to the Furnace or the Chasm, then spend 1 space of movement to throw it in, destroying it and banishing the Elder God.',
      },
      {
        heading: 'If You Win',
        body: 'You aren\'t sure you\'ll ever fully recover from what you\'ve seen tonight. There are some things humans were Not Meant to Know, and surely this is one of them. Maybe you can convince yourself that it was all a dream...',
      },
    ],
    monsters: [],
  },

  {
    id: 34,
    title: 'Guillotines',
    intro:
      'Your head spins and you lose consciousness. You awaken to a recorded voice: "I want to play a game. The door will open in an hour, but none of you will be alive unless you\'re good at finding things. You each have a steel collar with a blade held by a spring. Keys have been hidden throughout the house. It takes two keys to unlock each collar. Let the game begin."',
    sections: [
      {
        heading: 'What the Traitor Hears',
        body: '"All the other people here were witnesses to your mother\'s traffic accident. Her car caught fire, but they were too afraid to drag out her unconscious body before the fuel tank exploded. Now you have a chance for revenge. Your collar doesn\'t work, but the others don\'t know that. Will they have courage to help you the way they didn\'t help her?"',
      },
      {
        heading: 'Right Now',
        body: 'Place pentagonal item tokens (Keys) in these rooms, now or when discovered: Attic, Catacombs, Chasm, Collapsed Room, Crypt, Furnace Room, Gallery, Junk Room, Operating Laboratory, Pentagram Chamber, Tower, Vault.\nTake red monster tokens numbered 1 up to the number of players; mix and deal one face down to each player. The explorer with token 1 is the traitor.\nTake pentagonal item tokens numbered 1 up to the number of players; players keep these face up.\nSet up the Turn/Damage track at 0 (four or fewer players) or 1 (five or six players).',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'This haunt uses the hidden traitor rules (page 17). You all read this booklet, but one of you is a traitor. Someone has locked you in a collar with a ticking timer likely to decapitate you, and one of your companions thinks you\'d be better off headless. The traitor must reveal only if that explorer would be killed by a collar; before then they can collect and trade Keys to gain trust.',
      },
      {
        heading: 'You Win When',
        body: 'The heroes win when all collars are removed and at least half the heroes (rounded up) are alive. If more than half the heroes are killed, the traitor wins. A collar is removed when unlocked or detonated; it also counts as removed if its wearer was killed otherwise, or if it\'s on a revealed or dead traitor.',
      },
      {
        heading: 'How to Unlock a Collar',
        body: 'Take a Key from a room after drawing and acting on any required cards (taking a Key is optional).\nYou can\'t move after finding a Key, but can use it or give it away. Each Key unlocks once, then is discarded.\nWith at least two Keys, announce at any time during your turn that you\'re unlocking your own collar or that of anyone in your room. (You can\'t be traded a Key and use it to unlock your collar the same turn.)\nKeys can\'t unlock a decapitated explorer\'s collar.\nRoom timing—Crypt/Furnace Room: take the Key after taking the room\'s damage. Gallery: jump down into the Ballroom (must be in the house). Collapsed Room: make the roll to avoid falling first—succeed and get the Key, fail and fall to the basement without it. Vault: the first explorer to end a turn in the open Vault gets the Key. Catacombs/Chasm/Tower: cross the room successfully first; fail and try again next turn. Attic/Junk Room/Pentagram Chamber: attempt the tile\'s leaving roll—fail and take the damage without the Key. Operating Laboratory: an X-ray shows the Key inside you—roll 3+ with each trait and take 2 dice of physical damage; any failed roll means no Key but you still take the damage.',
      },
      {
        heading: 'You Must Do This',
        body: 'At the end of each haunt revealer\'s turn, advance the Turn/Damage track by 1. Then every explorer with an item token numbered equal to or less than the current turn rolls 3 dice; if the result is less than the current turn number, that explorer is immediately killed.',
      },
      {
        heading: 'If the Heroes Win',
        body: 'As the last collar is released, the doors open and a cool breeze blows through the hall. But who did this, and why? If enough people enjoy grisly torture, perhaps there\'ll be a sequel or five...',
      },
      {
        heading: 'If the Traitor Wins',
        body: 'As you look at the headless bodies of the people who left your mother to die, you feel you\'ve learned a valuable lesson about life. Whoever did this must be some kind of profound moral teacher. Either that, or you\'re both just nuts. Who can say?',
      },
    ],
    monsters: [],
  },

  {
    id: 35,
    title: 'Small Change',
    intro:
      'A couple of tabby cats have been prowling about. A vial shatters; silver liquid turns into a sparkling cloud that surrounds you. When your head clears, the chair seat is miles above you—you\'re roughly the size of a mouse. Then you hear it outside your room: "...meow..."',
    sections: [
      {
        heading: 'Right Now',
        body: 'Set aside a pentagonal item token to represent the Toy Airplane.',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'The traitor has shrunk you and let the Cats into the house. They will try to eat you.',
      },
      {
        heading: 'You Win When',
        body: 'At least half the heroes (rounding up) use the Toy Airplane to escape through the Balcony, Gardens, Graveyard, Patio, Tower, or any room with an outside-facing window.',
      },
      {
        heading: 'Being Small',
        body: 'Items and omens you carry shrank with you and work normally.\nYou can\'t draw cards; discovering a symbol room ends your turn.\nEach doorway counts as a space (entering the next room costs 2); you can stop in a doorway.\nMight 3+ to go up or down stairs (fail ends your turn, retry next turn).\nYou can\'t use the Collapsed Room or Mystic Elevator, and aren\'t affected by the Gallery, Gymnasium, or Vault.\nYou need the Toy Airplane to leave the house.',
      },
      {
        heading: 'Using the Toy Airplane',
        body: 'The Toy Airplane is in the Bedroom, Master Bedroom, Storeroom, Attic, or Game Room. Knowledge 3+ once per turn to search one of those rooms; on success place the token there.\nKnowledge 4+ once per turn to start it; it stays grounded until your next turn, during which heroes can board (but can be attacked by Cats).\nFlying Speed is 5; the hero who started it moves it on later turns at that speed instead of normal movement, counting doorways as separate spaces.\nPicking up a grounded hero costs 1 space; the plane\'s highest-Speed hero rolls Speed: 4+ picks them up; 2–3 fail but retry (another space); 0–1 crash (plane grounded, restart).\nYou can\'t leave until all living heroes are picked up; spend 1 space to exit a room\'s outside-facing edge.\nFlying heroes attack or are attacked only with the Revolver, Ring, or Dynamite; they don\'t roll for stairs and pass freely through the Collapsed Room, Gallery, and across the Chasm.\nThe traitor can\'t fly the Toy Airplane.',
      },
      {
        heading: 'If a Cat Catches You',
        body: 'If captured, at the start of your next turn choose any trait; you and the Cat each roll it (a contest). Roll higher and you escape and act normally; otherwise you\'re still captured and your turn is over.\nIf another hero defeats the Cat, it drops you and is stunned.\nHeroes captured by cats can\'t be picked up by the Toy Airplane.',
      },
      {
        heading: 'If You Win',
        body: 'The little plane sputters, then glides out the window. You hear a yowl of frustration as you soar away from the vicious felines. You\'ve escaped! Now all you have to do is find a way back to your old size before some hawk decides to make a meal of you...',
      },
    ],
    monsters: [],
  },

  {
    id: 36,
    title: 'Better with Friends',
    intro:
      'The medallion glows bluish-black as water rushes into the basement. Didn\'t someone mention a boat in the attic? All of you run upstairs—except the one who brought you here. The house is sinking! You don\'t have time to figure out why, but you might have enough time to escape.',
    sections: [
      {
        heading: 'What You Know About the Bad Guys',
        body: 'The traitor lured you here to die. The house is sinking into an underground swamp, and you\'ll drown unless you escape.',
      },
      {
        heading: 'You Win When',
        body: 'At least half the heroes who started the haunt (rounding up) escape the house alive. You can\'t leave any living heroes behind when you escape.',
      },
      {
        heading: 'How to Escape the House',
        body: 'The Rowboat is in the Attic (explore the upper floor to find it if needed).\nPick up the Rowboat and carry it from the Attic to the Balcony or Tower (token on your card). It\'s heavy: each room entered costs 2 spaces. Only one hero carries it (can be traded); the Dog can\'t carry it.\nAs soon as all living heroes are in the Balcony or Tower with the Rowboat, you escape. You can\'t escape while any living hero is still in the house.',
      },
      {
        heading: 'Effects of Flooding',
        body: 'If any explorer (including the traitor) begins a turn on a flooded level:\nPartially Flooded: move 2 fewer spaces.\nFully Flooded: move 4 fewer spaces and take 2 physical damage (can\'t be prevented or reduced).\nNo matter how flooded, you can always move at least 1 space.',
      },
      {
        heading: 'Slowing the Flood',
        body: 'The traitor marks time on the Turn/Damage track. During your turn you can drop the Medallion in a partially or fully flooded room to stop the sinking for one turn; discard that card, and the traitor doesn\'t advance the track on the next traitor turn.',
      },
      {
        heading: 'If You Win',
        body: 'Paddling with all your might, you move the boat away from the foundering house. Your friend screams after you: "Come back! Death is better with friends! Share it with me!" Hmmm. That\'s one offer of hospitality you should refuse.',
      },
    ],
    monsters: [],
  },

  {
    id: 37,
    title: 'Checkmate',
    intro:
      'You decipher Ebenezer Slocum\'s journal: "I have found the means to force Death itself to appear before me. I will defeat it!" A body slumped at a chessboard crumbles to dust at your touch. Across the table a dark, shadowy figure appears and beckons toward the chess set between you. You hope you\'re better than Ebenezer was.',
    sections: [
      {
        heading: 'What You Know About the Bad Guys',
        body: 'Death has challenged you to a chess game. If there is no one in the room to play against Death at the beginning of the monster turn, the heroes forfeit and lose.',
      },
      {
        heading: 'You Win When',
        body: 'You checkmate Death by getting a higher result than it does on a Knowledge roll. Once during each of Death\'s turns, a hero in the same room can attempt this roll.',
      },
      {
        heading: 'How to Beat Death',
        body: 'Heroes can pick up Holy Seal tokens; with one, attempt Sanity 4+ to break it (one per turn). Each broken Seal makes Death roll 1 fewer die on later Knowledge rolls (2 fewer with only three or four players).\nThe Book holds chess strategies: if the hero playing chess carries it, add 1 die (to a max of 8) to the Knowledge rolls.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'Death can\'t attack or be affected in any way other than being beaten at chess.\nDeath does not slow hero movement.',
      },
      {
        heading: 'If You Win',
        body: '"Checkmate." Death stares at its King, then crumbles into dust. Death smiles, and you feel your hair turn white. "Until next time," Death responds.',
      },
    ],
    monsters: [],
  },

  {
    id: 38,
    title: 'Hellbeasts',
    intro:
      'Out of the corner of your eye, red streaks fly by. Turning, you see a flapping bat, body and wings crackling with fire, circling you, the heat singeing your hair. One friend laughs with glee while the others scream in horror. This can\'t be good.',
    sections: [
      {
        heading: 'What You Know About the Bad Guys',
        body: 'The traitor commands a swarm of Firebats and wants you all dead. The Firebats can\'t attack you, but they\'ll burn you if you stay in a room with them.',
      },
      {
        heading: 'You Win When',
        body: 'You successfully perform an exorcism to drive the Firebats from the house.',
      },
      {
        heading: 'How to Perform the Exorcism',
        body: 'The exorcism needs successful exorcism rolls equal to the number of players. Only one per turn.\nSanity 5+ in the Chapel, Crypt, or Pentagram Chamber, or carrying the Holy Symbol or Ring.\nKnowledge 5+ in the Library or Research Laboratory, or carrying the Book or Crystal Ball.\nEach success puts the matching trait token on the room tile or item card used. Once used, an item or room can\'t be used again. When tokens placed equal the number of players, the Firebats are banished.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'Firebats can\'t attack or be attacked.\nFirebats don\'t slow heroes moving through their room.\nThe traitor tells you how much damage you take for being in a room with one or more Firebat tokens.',
      },
      {
        heading: 'If You Win',
        body: 'The bats are gone, returned to whatever hell first bore them. The house still smolders, and the scent of burnt flesh twists your stomach. You stumble from the manor, vowing never to return. If the hellbeasts find a way back, you don\'t want to be around to see it.',
      },
    ],
    monsters: [],
  },

  {
    id: 39,
    title: 'The Heir',
    intro:
      'You come across a tale: the Romanescus, an ancient royal family, made their last stand in this house. Studying their genealogy, you realize one of you is the heir to the Romanescu fortune—if the true heir sits on a throne here, the fortune is restored. Then you notice a friend is missing, the one who muttered about "wrapping up a loose end."',
    sections: [
      {
        heading: 'Right Now',
        body: 'The haunt revealer secretly chooses one other hero to be the heir, writes that character\'s name on paper, and shows it to the other heroes. If the heir dies, the traitor wins, so keep the heir\'s identity secret.',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'The traitor has filled the house with hidden Assassins.',
      },
      {
        heading: 'You Win When',
        body: 'The heir sits on the throne carrying both the Spear and the Ring. The throne is in the Statuary Corridor; as soon as the heir enters that room with both items, you win.',
      },
      {
        heading: 'If You Win',
        body: 'As the heir settles on the throne, the lights dim, then grow more brilliant than ever. The ring becomes a crown, the spear becomes an old key. The heir smiles. "I know... everything. Come, let me take you to my family\'s treasure. I wish to reward my friends and new guardians."',
      },
    ],
    monsters: [],
  },

  {
    id: 40,
    title: 'Buried Alive',
    intro:
      'The spirit board slides back and forth across the letters without anyone\'s aid, spelling out: B U R I E D A L I V E. Looking around, you realize you haven\'t seen one of your friends since you entered—some twisted magic prevented you from remembering. If your friend really is buried alive, you must find that person now.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Set aside a number of triangular Might Roll tokens equal to the number of players.',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'The traitor has buried a (nonplayer) friend in a basement room (secretly written down). You don\'t know which room, but you know it was in the house when the haunt began.',
      },
      {
        heading: 'You Win When',
        body: 'You find and dig up the buried person before he or she dies. The Spirit Board will help you.',
      },
      {
        heading: 'How to Rescue Your Friend',
        body: 'Each time you move into a room, attempt Knowledge 3+ to search it; on success, ask the traitor whether this is the burial room (they answer truthfully). Search only one room per turn.\nOnce found, attempt Might 4+ in the burial room to dig (once per turn); each success puts a Might Roll token there. The heroes need successful Might rolls equal to the number of players to save the buried person.',
      },
      {
        heading: 'The Spirit Board',
        body: 'Once the haunt begins, you can\'t use the Spirit Board to look at the top room tile; instead use it to find the buried person.\nThe hero with the Spirit Board can\'t voluntarily give, trade, or drop it; if that hero dies it drops with their items for anyone to pick up.\nUse it once per turn until the burial room is found, then discard the card.\nUsing it ends your movement and other actions that turn. Attempt a Sanity roll and consult: 0–2 no effect; 3–4 move any explorer 3 spaces; 5–6 heal the buried person (roll 2 dice; the traitor subtracts the result from the buried person\'s damage total); 7+ the traitor must announce the burial room.',
      },
      {
        heading: 'If You Win',
        body: 'Digging frantically, you free your trapped friend. Her fingernails are splintered from clawing at the wooden coffin, blood running down her shaking hands. She hasn\'t made a sound since being freed. Slowly you help her out, sure that with proper care she\'ll be good as new... someday.',
      },
    ],
    monsters: [],
  },

  {
    id: 41,
    title: 'Invisible Traitor',
    intro:
      'You hear a companion whisper a strange word... and then scream, a sound more horrid than any living being. You rush over, but you are alone. Then a shuffling and a harsh, cold laugh. You have a terrible feeling that one of your friends has turned into a foe.',
    sections: [
      {
        heading: 'What You Know About the Bad Guys',
        body: 'The traitor has turned invisible and has decided to kill you all.',
      },
      {
        heading: 'You Win When',
        body: 'The traitor is dead.',
      },
      {
        heading: 'Fighting Blind',
        body: 'If a hero survives a traitor attack, that hero can attempt a Knowledge roll at the end of the traitor\'s turn: 0–2 nothing; 3–4 you know if the traitor is still in the room (and which exit they used if they left); 5+ you know which room the traitor is in now.\nOnce per turn you can attempt to attack the invisible traitor; if the traitor is in your room you fight normally, otherwise you fail and can\'t attack again that turn.\nFiring the Revolver or throwing Dynamite into the traitor\'s room resolves normally.',
      },
      {
        heading: 'Skull and Spirit Board',
        body: 'At the start of your turn, carrying the Skull, Sanity 4+ to track the traitor: on success they tell you which floor they\'re on.\nAt the start of your turn, carrying the Spirit Board, Knowledge 4+ to track the traitor: on success they tell you what symbol, if any, is in their room.',
      },
      {
        heading: 'If You Win',
        body: 'The traitor lies dead, her body visible now that the evil has left it. She doesn\'t look so terrible when you can actually see her. You don\'t know why your friend turned against you—you just hope whatever caused it won\'t bring her back in some other, even more hideous form...',
      },
    ],
    monsters: [],
  },

  {
    id: 42,
    title: 'Comes the Hero',
    intro:
      'A statue stands before you, hand outstretched as if imploring you to place something in it. A message is carved into the podium: "To Defeat the Undefeatable." Something has just gone very wrong, and this statue might be your only means to stop things going from bad to worse.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Place a pentagonal item token (the Statue) in the room where the haunt was revealed.',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'An invincible traitor is using a ritual to open a gate to Hell. You suspect it involves human sacrifice.',
      },
      {
        heading: 'You Win When',
        body: 'The traitor is dead.',
      },
      {
        heading: 'How to Kill the Traitor',
        body: 'The traitor can\'t be attacked or harmed by normal means. Place an appropriate item in the Statue\'s hand during your turn; the item is discarded and the Statue animates, staying in that form for the rest of the game (tell the traitor which form): Holy Symbol → Judge; Axe → Warrior; Crystal Ball → Seer; Book → Wizard.\nThe Statue doesn\'t move normally; once per turn a hero in its room makes a Knowledge or Sanity roll to move it up to the result in spaces.\nWhen the Statue is in the traitor\'s room it doesn\'t attack; instead, at the start of the traitor\'s turn it lowers one trait by 1: Judge → Speed; Warrior → Might; Seer → Sanity; Wizard → Knowledge.\nIf the traitor defeats the Statue, it isn\'t stunned but can\'t lower a trait on its next turn; it can still be moved to follow the traitor.',
      },
      {
        heading: 'If You Win',
        body: 'The statue fought as if defending all the world. The traitor lies vanquished, and you stand in awe of the statue\'s power. Now it sits, its fist pressed thoughtfully against its chin. No words appear beneath it. All is quiet.',
      },
    ],
    monsters: [
      { name: 'Animated Statue', stats: 'Speed 8 · Might 8 · Sanity 8 · Knowledge 8' },
    ],
  },

  {
    id: 43,
    title: 'The Star-Sickness',
    intro:
      'Beside the spear you find a note: "Ever since I touched that meteorite, I can feel the change working in me—a twisted DNA that never came from this world. I have heard the creatures inside my blood, telling me how much better use they can make of my body. You will know it by three stages: first a virulent fever, then the spores take over the host\'s mind, and in the third stage... horror." Uh oh—you\'ve been feeling stuffed up ever since you got here.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Take small monster tokens of one color numbered 1 up to twice the number of explorers; mix them. Each player takes two and looks but doesn\'t reveal them. Whoever has token 1 is the traitor (more may appear later; you remain a traitor even if you lose token 1).\nIf the Research Laboratory isn\'t in the house, the haunt revealer searches the room stack for it and places it legally, then shuffles.\nSet up the Turn/Damage track at 1.\nSet aside a pile of triangular Knowledge Roll tokens and a pentagonal item token (the Serum).',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'This haunt uses the hidden traitor rules (page 17). One of you is a traitor, infected with an alien virus, seeking to turn the rest into Aliens. Anyone who holds the traitor token cannot reveal it at any time.',
      },
      {
        heading: 'You Win When',
        body: 'The heroes win when they create the Serum and all living explorers are inoculated. If all explorers are dead or become traitors/Aliens, the traitor(s) win; if the traitors win, the person who became a traitor most recently loses instead.',
      },
      {
        heading: 'You Must Do This on Your Turn',
        body: 'The first time each turn you share a room with another explorer, you each give one another a random face-down monster token. With multiple explorers, exchange with only one (preferably one not previously exchanged with). Only one exchange per turn. If you receive token 1, you permanently become a traitor, even if you trade it away later.',
      },
      {
        heading: 'The Haunt Revealer Must Do This',
        body: 'At the end of the revealer\'s turn each round, advance the Turn/Damage track. Then roll dice equal to the turn number: a Might attack against every explorer in the house (resisted by Might). Traitors are not immune—the disease battles everyone\'s immune system. No upper limit on dice.',
      },
      {
        heading: 'Creating the Serum',
        body: 'Once per turn in the Research Laboratory, Knowledge 5+ (+1 die per other explorer in the room, +1 if the Book is present). On success put a Knowledge Roll token in the room.\nSearch for herbs in the Conservatory or Gardens: at the end of your turn there, Knowledge 3+; on success take a Knowledge Roll token (herbs) on your card. Herbs are item-like (droppable, tradeable, stealable); you can carry more than one and search each turn.\nCreating the Serum requires Knowledge Roll tokens in the Research Laboratory equal to the number of explorers—at least one discovered in the lab and at least one from herbs. Whoever brings the last token takes the Serum.\nCarrying the Serum, inject yourself or a willing explorer in your room for 1 space of movement. An injected non-traitor stops exchanging tokens and is no longer attacked by the disease; below-starting traits are restored to starting values.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'All explorers can attack each other.\nIf a traitor dies other than by Serum injection, that player announces it and a third-stage transformation begins: skip the next turn, then become an Alien (drop all items and tokens).\nAliens aren\'t affected by the disease and can\'t trade or be traded tokens; they\'re treated as monsters for movement and damage.\nCarrying the Serum, you can inject an unwilling explorer or an Alien by defeating it in physical combat using Speed—this kills the traitor or Alien (an injected traitor is permanently killed, no Alien transformation).\nCarrying the Serum in the same room as a transforming traitor, inject them for 1 space of movement to kill them permanently.',
      },
      {
        heading: 'If the Heroes Win',
        body: 'Your infected friends looked exactly like themselves, but somehow... different. As you go out into the world, you know you\'ll look carefully at everyone you meet from now on—seeking the signs...',
      },
      {
        heading: 'If the Traitor Wins',
        body: 'You\'ve heard there are billions of life forms like these on this planet! It\'s time to find a major population center and start reproducing in earnest.',
      },
    ],
    monsters: [{ name: 'Aliens', stats: 'Speed 4 · Might 6 · Sanity 4' }],
  },

  {
    id: 44,
    title: 'Death Doth Find Us All',
    intro:
      'Ever since you entered, you\'ve felt different—tired, shaking, almost ancient. Wiping dust from a mirror, you stare at deep new lines on your face, your hair faded, your shoulders sagging. You\'re aging worse than this awful old house. Better find a way to stop this before you lose your youth... or your life.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Set aside 5 triangular Sanity Roll tokens and 5 triangular Knowledge Roll tokens.\nSet aside a number of pentagonal item tokens; these become aging tokens.\nEach hero (including the Medallion holder) puts one aging token on their character card now.\nEach hero\'s age is their starting age plus 10 years per aging token on the card; the traitor tells you the result of your aging.',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'The traitor isn\'t aging. In fact, he or she seems younger than ever.',
      },
      {
        heading: 'You Win When',
        body: 'You stop the supernatural aging process.',
      },
      {
        heading: 'You Must Do This On Your Turn',
        body: 'For each decade you age, put an aging token on your character card. The traitor tells you the effect of aging.',
      },
      {
        heading: 'How to Stop the Aging Process',
        body: 'Complete the Ritual of Rejuvenation: successful ritual rolls equal to the number of players. Each hero can attempt only one ritual roll per turn, and only in the Catacombs, Charred Room, Crypt, Gallery, Kitchen, Pentagram Chamber, or Tower, using a Sanity or Knowledge roll of 5+.\nEach success puts the matching trait token on the room tile used. Once a hero uses a room for the ritual, no hero can use that room again.',
      },
      {
        heading: 'The Medallion',
        body: 'Carrying the Medallion, subtract 1 from the decades you age during the traitor\'s turn (minimum 0).\nEach time a hero dies, whoever carries the Medallion ages 1 decade.',
      },
      {
        heading: 'If You Win',
        body: 'The spell has been cast. All is quiet. For minutes no one moves, waiting to see if your bodies will keep aging. Soon you are all laughing and weeping hysterically. You are alive—but part of your life has been stolen forever.',
      },
    ],
    monsters: [],
  },

  {
    id: 45,
    title: 'Tick, Tick, Tick',
    intro:
      'At first you didn\'t notice the ticking. Then, in a moment of silence, you heard it: tick, tick, tick, like a macabre mechanical heartbeat. Hearing the madman giggle, you realize the ticking is coming from you. The traitor has planted a bomb on you!',
    sections: [
      {
        heading: 'Right Now',
        body: 'Each hero takes a pentagonal item token (a Time Bomb).',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'The traitor is a demolitionist who has rigged each of you with a Time Bomb. You don\'t know how much time is left. The traitor holds a trigger that detonates the bombs, but only when in your room or an adjacent room (no connecting door needed). The bombs are also ticking and might blow on their own. Meanwhile the traitor is building the Big Bomb—stop the demolitionist before he or she kills you all.',
      },
      {
        heading: 'You Win When',
        body: 'The traitor is dead and at least one hero survives.',
      },
      {
        heading: 'How to Stop the Traitor',
        body: 'At least one of you needs your Time Bomb defused to kill the traitor before the Big Bomb explodes.\nOnce per turn, Knowledge 7+ to deactivate the Time Bomb strapped to you (5+ if you have the Madman card). On success discard your Time Bomb token. If the roll result is 2 or less, you activate the bomb and all explorers in your room explode and die (their item and omen cards discarded).\nInstead, you can defuse someone else\'s bomb if you\'re in their room with permission—same 7+ (5+ with the Madman) and the same penalty for rolling 2 or less.\nThe traitor keeps working on the Big Bomb until killed.',
      },
      {
        heading: 'If You Win',
        body: 'The components of the demolitionist\'s massive bomb lie scattered and inert. Without the maniacal brain of the traitor to unify them, they are merely innocuous widgets of no great importance.',
      },
    ],
    monsters: [],
  },

  {
    id: 46,
    title: 'The Feast',
    intro:
      'You smell a delicious banquet—then horror: human body parts scattered through the hallways lead to a severed head on a silver platter. One of your companions has betrayed you to the deranged cannibals inhabiting this mansion, and the traitor wants you to be the main course.',
    sections: [
      {
        heading: 'Right Now',
        body: 'If the Attic isn\'t in the house, search the room stack for it, put it on the upper floor, then shuffle.\nPut a number of small magenta monster tokens (Victims) in the Attic equal to the number of heroes.\nAll Victims begin facing the same direction (each token\'s tip faces that way).',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'The traitor lured you into a house of deranged Cannibal Freaks. When the traitor or a Freak feasts on a Victim, that being grows more powerful. They also want to feast on you.',
      },
      {
        heading: 'You Win When',
        body: 'The traitor and all the Cannibal Freaks are dead, or all the Victims and all the heroes escape the house. If even one Victim or hero is killed, you can win only by killing all the bad guys. Each Victim you get out (through the front door, then removed) makes it harder for the traitor to win.',
      },
      {
        heading: 'Moving the Victims',
        body: 'The player to the left of the traitor moves the Victims at the start of his or her turn. Unless a hero shares its room, a Victim moves 2 rooms straight ahead; if it can\'t, it turns to the next exit on its left and takes it (the only way a Victim\'s facing changes).\nVictims react to house dangers and required rolls like monsters and can\'t go through an unexplored door.\nA Victim stops and won\'t move on its own while a hero is in its room.\nIf a hero begins a turn with a Victim, that hero can move with it 2 spaces in any direction before continuing their turn. One Victim per hero per move, but a Victim can be moved multiple times in a round by different heroes.\nFreaks and the traitor don\'t slow Victims, and vice versa.\nKnowledge or Might 5+ to open the front door in the Entrance Hall (on success draw an event card and end your turn). On later turns, a hero can move out the front door (1 space) with a Victim to escape, and reenter (1 space) for more Victims.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'Instead of being stunned, Victims and Cannibal Freaks are killed if defeated.\nVictims can\'t attack and inflict no damage if they defeat an attacker.',
      },
      {
        heading: 'If You Win',
        body: 'The body of the last slavering freak lies before you, still twitching in a pool of its own saliva and blood. You have won, but... ugh.',
      },
    ],
    monsters: [{ name: 'The Victims', stats: 'Speed 2 · Might 3 · Sanity 3' }],
  },

  {
    id: 47,
    title: 'Worm Ouroboros',
    intro:
      'Your friend shudders, drops to the floor, and his body splits in two as if a giant zipper opened it from head to toe. The Worm Ouroboros, the great snake that circles the world, has forced its way into your reality through the body of your... dead... friend.',
    sections: [
      {
        heading: 'What You Know About the Bad Guys',
        body: 'The traitor has transformed into the Worm Ouroboros: a giant, two-headed snake with a very long body. If it grows fully, there will be no stopping it. Kill it quickly.',
      },
      {
        heading: 'You Win When',
        body: 'The Worm Ouroboros is dead.',
      },
      {
        heading: 'How to Kill Ouroboros',
        body: 'Destroy both Ouroboros Heads. For each, in order:\n1. Pick up the Skull in the room where the traitor dropped it.\n2. Carry the Skull into a room with an Ouroboros Head token; Sanity 5+ once per turn to cast a weakening spell, lowering its Might to 5 and making it vulnerable for the rest of the game. You can\'t attack a Head until you\'ve cast this spell.\n3. After the spell, each defeat is 1 hit. Each Head must be hit a number of times equal to half the number of players (rounded up) to be destroyed. (The traitor tracks hits.)',
      },
      {
        heading: 'Special Attack Rules',
        body: 'Ouroboros Head and Body tokens slow heroes\' movement.\nOuroboros Heads aren\'t affected by Speed attacks (Revolver, Dynamite).',
      },
      {
        heading: 'If You Win',
        body: 'The great serpent writhes in its death agonies. You wipe the blood from your face and sink to the ground. You have killed it. It is dead. Wait—did it twitch again? Can a world-killer ever truly die? Just to be sure, you should leave the house now.',
      },
    ],
    monsters: [],
  },

  {
    id: 48,
    title: 'Stacked Like Cordwood',
    intro:
      'A companion spoke of grisly deaths here five years ago: teenagers slaughtered one by one by a madman who couldn\'t be killed, his mangled body always returning. Now you\'ve seen the madman\'s portrait—he looks like a relative of the friend who told the story. Peering through a doorway, you see your traitorous companion in a room with bodies stacked like cordwood. Then something walks through the front door.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Set aside a number of triangular Might Roll tokens equal to the number of players. Set aside an equal number of triangular Knowledge Roll tokens.',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'The traitor is working with Crimson Jack, a supernatural serial killer. Jack can be permanently killed only with a cursed weapon hidden in the house. Defeat him any other way and he returns stronger.',
      },
      {
        heading: 'You Win When',
        body: 'You find the cursed weapon and use it to kill Crimson Jack.',
      },
      {
        heading: 'How to Find the Cursed Weapon',
        body: 'The cursed weapon is the Axe, the Spear, the Blood Dagger, or the Sacrificial Dagger (your choice).\nIf the heroes don\'t have it, search the Library, Chapel, Vault (must be open), or Attic: Knowledge 3+ once per turn to find it; on success search the appropriate stack for a cursed weapon of your choice, take it, and shuffle.\nThen learn to use it: in the same room as the weapon, Might or Knowledge 5+ to study it; each success puts the matching trait token on your card. When the heroes collect tokens equal to the number of players, they understand how to kill Crimson Jack.\nThereafter, any hero who defeats Crimson Jack using the cursed weapon kills him permanently.',
      },
      {
        heading: 'You Must Do This',
        body: 'At the beginning of your turn, if you\'re in Crimson Jack\'s room you must succeed on Sanity 3+ or lose 1 point from a mental trait and 1 from a physical trait (his aura of fear).',
      },
      {
        heading: 'If You Win',
        body: 'Crimson Jack shivers on the end of the weapon but keeps pushing forward, his terrible smile never wavering. Just as his hands reach for your neck, Jack fades from view and your weapon falls to the floor. As you leave, you look at his portrait on the wall. The killer is gone... for now.',
      },
    ],
    monsters: [],
  },

  {
    id: 49,
    title: 'You Wear It Well',
    intro:
      'You hear a friend running through the house, laughing and sobbing. As you start toward them, a powerful wind tears through your very soul, casting it out of your body. The walls are fuzzy and indistinct; a silvery cord stretches from you back to your unconscious body. All you want is to crawl back inside your own flesh—but how?',
    sections: [
      {
        heading: 'Right Now',
        body: 'Tip over your explorer\'s figure; he or she is now unconscious. Place a small blue monster token in your room for your disembodied Soul (note its number to tell Souls apart).\nSet aside a number of triangular Knowledge Roll tokens equal to the number of players. Set aside an equal number of triangular Sanity Roll tokens.\nIf there\'s no way to move between the basement and the rest of the house, search the room stack for the Stairs from Basement tile, put it in the house, then shuffle.',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'The traitor is working with a powerful Astral Spirit. If it can possess an unconscious body, it will be immortal.',
      },
      {
        heading: 'You Win When',
        body: 'You destroy the Astral Spirit. Once destroyed, you return to your physical body.',
      },
      {
        heading: 'How to Destroy the Astral Spirit',
        body: 'Attack the Astral Spirit only with Knowledge or Sanity. Each successful attack puts the matching trait token on that hero\'s card. When the heroes collect tokens equal to the number of players, the Astral Spirit is destroyed.',
      },
      {
        heading: 'Souls',
        body: 'You are a disembodied Soul.\nYou retain all your traits.\nYou can move through walls like connecting doorways but not through floors/ceilings; you move freely up and down the Coal Chute, Collapsed Room, and Gallery. You\'re not affected by room text mentioning physical traits or physical damage.\nYou can use your items but can\'t trade them or acquire new ones; if your Soul is destroyed, your items are too.\nYou can\'t explore new rooms.\nWhen attacking or defending, use only Knowledge or Sanity. Anything that would inflict physical damage on your Soul inflicts mental damage instead.\nYou can\'t use the Skull or any weapon card.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'If you attack the Astral Spirit and lose, you take no damage.\nIf you defeat the traitor with a mental attack, he or she is stunned but takes no damage.\nThe traitor can attack your unconscious body for 2 dice of mental damage; you can\'t defend against this.',
      },
      {
        heading: 'If You Win',
        body: 'Your companion sends a devastating psychic attack through the astral spirit. The air shimmers and you dissolve. When you awaken, your body feels strange, as if you wore someone else\'s coat home. But at least it is your body. You\'re sure it will fit again soon.',
      },
    ],
    monsters: [],
  },

  {
    id: 50,
    title: 'Treasure Hunt',
    intro:
      'You\'ve long heard of a fortune hidden in this house. In the center of the pentagram you find a framed document: "I, Josiah Enders, being of sound mind and body, do hereby leave my entire fortune to whoever is clever enough to find it. The clues are scattered throughout the house. Good luck, and be careful!" You\'ll do anything to get that treasure. Anything at all.',
    sections: [
      {
        heading: 'Right Now',
        body: 'This haunt has no traitor—just heroes. You all hope to find the treasure, but there can be only one winner.\nThe haunt revealer takes 20 small red monster tokens numbered 1–20, turns them face down, mixes them, and places one face down in each symbol room. These are Clues.\nIf there are more eligible rooms than tokens, distribute as evenly as possible between floors. If more tokens than rooms, set extras aside and place a Clue token face down in each new symbol room after it\'s discovered and its draws are resolved.',
      },
      {
        heading: 'You Win When',
        body: 'You find the treasure. Only one hero can win.',
      },
      {
        heading: 'Searching for Treasure',
        body: 'In any room with a face-down Clue token, spend 1 space of movement and make a Knowledge roll. Add the total number of Clue tokens you currently have, plus any bonuses from specific Clue tokens you carry (Traps, tokens 17–20, do not add). You can search several rooms, or one room several times, in the same turn.\nResults: 0 you tripped, take 2 dice of physical damage; 1–3 nothing, try again; 4–12 take the Clue token and turn it face up (consult its effect); 13–15 the house begins to collapse (first time, turn over an unoccupied upper-floor tile; otherwise a room adjacent to a collapsed one, doors not required—occupants are killed; after the upper floor, collapse the ground floor starting at the Grand Staircase, then the basement; mark the Grand Staircase, Foyer, and Entrance Hall with item tokens); 16+ you find the treasure!',
      },
      {
        heading: 'Clues',
        body: 'Most clues hint at where to look and may grant a bonus on future searches (consult the table). Some are risky and might kill you on a failed Knowledge check; a few are traps with harmful effects and no bonus.\nYou can keep searching a room even after its clue has been found.\nExplorers can trade Clue tokens like items. If you lose a Clue token (trade or theft), you can\'t use its bonus until you get it back.',
      },
    ],
    monsters: [],
  },

  // ===== Widow's Walk expansion (haunts 51–100 + Seasons of the Witch) =====
  {
    id: 51,
    title: "Director's Cut",
    intro:
      '"Cut! Cut! Cut! For Kubrick\'s sake, you people are the WORST actors!" you bellow. "At most one of you will be working on this movie come morning! And I don\'t care who!"',
    sections: [
      {
        heading: 'Right Now',
        body: 'Put the Props (pentagonal item tokens) numbered 1–10 randomly in different rooms, number-side-down, at least two per floor; none may be on the floor with the Theater. Put magenta Production Assistant tokens in your room equal to the number of traitors. Draw an event card (your Vision) and put it face-down under the omen that started the haunt; do not look at it.',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'The other explorers are actors in your horror movie, The Haunting of Hell Hotel, and they\'re ruining it. The omen that started the haunt conceals your Vision; your assistant lost it, so you must find it.',
      },
      {
        heading: 'You Win When',
        body: 'You have item 10 and the Vision and you are in the Theater. When you or a lone actor is in the Theater holding the omen, the holder reveals the Vision and acts out the event dramatically; that explorer wins.',
      },
      {
        heading: 'Special Movement Rules',
        body: 'Your Production Assistants don\'t act on the monster turn; if not stunned, you may move them with you (they defend for you but don\'t attack). Entering a room with an item token, you may look at it; if it\'s item 10, take it and the omen; otherwise put it back. Reach the Theater with item 10 and you win.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'A traitor may make a Knowledge attack vs a Production Assistant in the same room. If a traitor would attack you while a Production Assistant is in your room, they must attack the Assistant instead — and no matter the trait used, the Assistant defends with Knowledge.',
      },
    ],
    monsters: [{ name: 'Production Assistant', stats: 'Knowledge 5' }],
  },

  {
    id: 52,
    title: 'Prism',
    intro:
      'Click. Whir. Screech. Crunch. The ground shakes and you are surrounded by machine sounds. The room, its contents, are moving.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Leave the room — the traitor gets to stay with the house this time. When you return, the house looks different. Get a piece of paper; you\'ll want to take notes to figure out the safe sequence and find a way out.',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'The house is a deadly prison meant to confuse and ensnare you. The architects left a safe route to the exit room — figure out how to reach it and escape in time.',
      },
      {
        heading: 'You Win When',
        body: 'Any living hero is in the exit room at the heart of the prism when the experiment ends.',
      },
      {
        heading: 'Special Movement Rules',
        body: 'Entering a room with an Obstacle token may trigger a Trap; the traitor tells you what to do. If you discover a room with a symbol or ?, you may ignore it and not end your turn there. If a floor has no tiles remaining, draw the next room tile for any floor and place it.',
      },
    ],
    monsters: [],
  },

  {
    id: 53,
    title: 'Till Morning Light',
    intro:
      '"Let us in! We only want to kill you!" The walls and door must hold until morning, when it\'s no longer legal to kill people. Then a familiar voice shouts from inside: "Ok, I will let you in!"',
    sections: [
      {
        heading: 'Right Now',
        body: 'Set the Turn/Damage track to 1. If the Panic Room isn\'t in play, search the room stack for it, place it, and shuffle. Put a Lock token on the door to the Panic Room.',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'It\'s the annual festival of violence called the Surge. The people outside want to kill you, and the traitor thinks letting them in is a good idea.',
      },
      {
        heading: 'You Win When',
        body: 'Morning arrives and you\'re still alive — when the Turn/Damage track reaches 5.',
      },
      {
        heading: 'How the Surgers Get In',
        body: 'The traitor opens ground-floor rooms whose door isn\'t connected to a room; heroes in the room make it harder. The traitor starts with the Key (which opens the front door easily — you may want to take it). You can pass the Lock to the Panic Room, but Surgers have more trouble.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'When a hero attacks a Surger and wins by 3 or more, the Surger is removed instead of stunned.',
      },
    ],
    monsters: [],
  },

  {
    id: 54,
    title: 'Monster Mash',
    intro:
      'You find a dropped invitation: "You are invited to the Transylvanian Ball, the beyond-the-grave social event of the year. Let\'s party to wake the dead! —Dr. Frankenstein"',
    sections: [
      {
        heading: 'What You Know About the Bad Guys',
        body: 'The house is filling with monsters eager for your doom. Each monster is only stunned by normal attacks (including Speed and Sanity), but is permanently banished if it is ever in the same room as a hero bearing a specific omen card.',
      },
      {
        heading: 'You Win When',
        body: 'You banish a number of monsters equal to half the explorers, rounded up.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'The traitor cannot be attacked.',
      },
      {
        heading: 'Special Movement Rules',
        body: 'Unless you cannot move anywhere else, never enter or exit the Ballroom — it\'s a bad place for non-monsters.',
      },
      {
        heading: 'Guest List (Monster → Weakness)',
        body: 'Banshee → Spirit Board (she must return to the outer planes). Crimson Jack → Photograph (confront him with evidence of his crimes). Demon Lord → Holy Symbol (it burns!). Dracula → Spear (stake his heart). Frankenstein\'s Monster → Girl (appeal to its gentler side). Mummy → Book (read his name from the Book of the Dead). Witch → Cat (she wants her familiar back). Zombie Lord → Vial (his features dissolve into goo).',
      },
    ],
    monsters: [],
  },

  {
    id: 55,
    title: 'She Is Not Amused',
    intro:
      'Your friend removes a tattered hood — snakes rise where there should be hair, and she speaks in ancient Greek. There sure are a lot of statues in this house...',
    sections: [
      {
        heading: 'What You Know About the Bad Guys',
        body: 'Your friend is Medusa, a Gorgon with venomous snakes for hair who can petrify people with a glance. Probably you shouldn\'t look at her.',
      },
      {
        heading: 'You Win When',
        body: 'You sever Medusa\'s head.',
      },
      {
        heading: 'How Petrification Works',
        body: 'On their turn, an unpetrified hero may make a Knowledge roll of 4+ to unpetrify a petrified hero in the same room. Statues are face-down "S" tokens; when Medusa suffers physical damage, a hero in a room with one may make a Knowledge roll of 4+ to flip it into an Athenian Hoplite. At the start of a turn, a hero with a face-up Hoplite can send it after Medusa (it ignores negative room and card text); on reaching her it may make a Might attack.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'Medusa can be killed only by an explorer who deals enough physical damage to kill the traitor while holding an Image in the Mirror card. With that card, add 2 dice to attack/defend rolls vs Medusa. Medusa can poison you, giving a Might Roll token that drains your Might; remove your tokens when you gain Might from a card or room.',
      },
      {
        heading: 'Special Event Rules',
        body: 'If you discover an event room without holding an Image in the Mirror card, roll 3 dice; on 3+ search the event stack and discard pile for an Image in the Mirror card and put it in front of you (treated like an item), then shuffle them together. Ignore this rule if both Image in the Mirror cards are already with explorers.',
      },
    ],
    monsters: [{ name: 'Hoplite', stats: 'Speed 5 · Might 5' }],
  },

  {
    id: 56,
    title: 'Make America Disintegrate Again',
    intro:
      'There was something wordlessly foul about the candidate — his waxy face, his policies that served only entropy. When his cold whispered words slithered into your ears, you realized: his presidency really would be the end of the world. Now it\'s up to you to work together and prevent it.',
    sections: [
      {
        heading: 'Right Now',
        body: 'You can redistribute item cards among yourselves. You can redistribute the points of your current Sanity values among yourselves.',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'The candidate is a dread lich seeking control over life and death. On completing the ritual he becomes President and Overlord of America. One of your friends has been swayed and turned traitor.',
      },
      {
        heading: 'You Win When',
        body: 'You destroy all the lich\'s Phylacteries before the traitor completes the Rites of Ascension.',
      },
      {
        heading: 'How to Destroy a Phylactery',
        body: 'A Phylactery is a pentagonal item token. All remaining heroes must be in the same room as a Phylactery to destroy it.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'When you take Sanity damage, a traitor may give you the choice to redistribute it among the other heroes (rounded up); if you don\'t, you take all the damage. Redistribution happens before any hero suffers the damage.',
      },
    ],
    monsters: [],
  },

  {
    id: 57,
    title: 'The Gathering Storm',
    intro:
      'The rookery shrieks, a thunderclap fades to a low howl, and the house buckles as walls are ripped outward by a raging storm. There is no traitor for this haunt — it\'s you against the storm. Good luck.',
    sections: [
      {
        heading: 'Right Now',
        body: 'The haunt revealer chooses an empty room on the roof (hopefully far from an explorer) and destroys it. Set aside the pentagonal item tokens (Tools). Set aside six Obstacle tokens (Destroyed Landings).',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'There is no traitor. It\'s you against the storm.',
      },
      {
        heading: 'You Win When',
        body: 'All entrances to the basement have Tool tokens on them, sealing off the floor and saving those below (this dooms anyone trapped above). You lose when all explorers are dead or the Basement Landing is destroyed.',
      },
      {
        heading: 'How to Find Tools',
        body: 'Sacrifice movement to search: choose a number of dice up to your current Speed and roll 2+ to gain a Tool, then subtract those dice from your Speed this turn.',
      },
      {
        heading: 'How to Advance the Storm',
        body: 'At the end of each explorer\'s turn (except the reveal turn), destroy each room adjacent to a room destroyed on a previous turn. If the Basement Landing is destroyed, the explorers lose.',
      },
      {
        heading: 'How to Destroy a Room',
        body: 'Remove figures and tokens, flip the room, and put it back; tokens on it are lost and explorers on it are killed. An explorer on the same floor can discard a Tool to keep a room from being destroyed. The Grand Staircase/Foyer/Entrance Hall count as one room (mark a destroyed landing with an Obstacle token). When a whole floor is destroyed, next destroy the landing of the floor below plus all rooms adjacent to it. Before destroying the Basement Landing, check whether all entrances are sealed: if yes, the explorers win; if no, they lose.',
      },
      {
        heading: 'How to Seal an Entrance',
        body: 'On your turn, discard a Tool while in a basement room that has an exit to a higher floor (this blocks the storm, not movement). Basement entrances include the Basement Landing, the Coal Chute, a room with the Below Collapsed Room token, and any rooms with dumbwaiters or stairs that connect to the basement.',
      },
      {
        heading: 'Special Movement Rules',
        body: 'You may attempt to exit a destroyed room, but must roll Speed 3+ or fall to the landing of the floor below, taking 2 dice of physical damage (you may choose to fail in a desperate bid to leave your floor). You may discard a Tool to enter and exit destroyed rooms freely for the rest of your turn (assume all entrances on destroyed tiles are open).',
      },
    ],
    monsters: [],
  },

  {
    id: 58,
    title: 'Olly Olly Oxen Free',
    intro:
      'A creepy giggle echoes through the halls. A voice counts "1... 2... 3..." up to 10, then calls out, "Olly Olly Oxen Free!" Guess you\'d better find a good hiding spot.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Set aside Knowledge Roll tokens equal to the number of explorers.',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'The traitor is possessed by a little girl who died playing Hide and Seek and now seeks revenge. The only way to stop her is to exorcise her spirit by burning her Doll "friends".',
      },
      {
        heading: 'You Win When',
        body: 'You find Dolls equal to the number of explorers and burn them in the Furnace Room.',
      },
      {
        heading: 'You Must Do This on Your Turn',
        body: 'Once per turn, you may attempt a Knowledge roll of 5+ in any room with an item symbol that doesn\'t already have a Knowledge Roll token, to find one of the Dolls. On success, add a Knowledge Roll token there; no other Dolls can be found in that room.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'You cannot deal damage to the traitor.',
      },
      {
        heading: 'How to Burn a Doll',
        body: 'Once you have a Doll, bring it to the Furnace Room to burn it. Each explorer can carry only one Doll at a time.',
      },
    ],
    monsters: [],
  },

  {
    id: 59,
    title: "The Fleshchild's Alchemical Mandate",
    intro:
      'One of your friends is no friend at all — they are the Fleshchild of the alchemist Zosimus! Their true form has been revealed, and they have come to harvest a sample from each of you.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Put one orange monster token (a pound of Flesh) on each hero\'s character card.',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'The traitor is an alchemist\'s homuncular creation, sent to collect a bit of each of you.',
      },
      {
        heading: 'You Win When',
        body: 'The Fleshchild is dead.',
      },
      {
        heading: 'You Must Do This on Your Turn',
        body: 'At the start of your turn, if you don\'t have Flesh on your character card, lose 1 from each of your traits.',
      },
      {
        heading: 'How to Save Yourselves',
        body: 'When the Fleshchild takes damage from an attack, it drops all the Flesh it carries. If you have no Flesh on your card and you end your turn in a room with Flesh, pick up one and put it on your card.',
      },
    ],
    monsters: [],
  },

  {
    id: 60,
    title: "Cat O'Clock",
    intro:
      'You\'ve always been a cat person. But there\'s a difference between loving cats and letting the love of cats control you. As the house fills with kittens, remind yourself that you\'re a person — and people are bigger than cats. Most cats, anyway.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Set aside pentagonal item tokens (Ingredients) equal to the number of heroes, and a pentagonal Item Pile token (Cat Food). If the Kitchen isn\'t in play, search the room stack for it, place it, and shuffle.',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'The traitor is bringing mean Kittens into the house. Soothe the Kittens and make the Cat Food that will calm The Cat.',
      },
      {
        heading: 'You Win When',
        body: 'You convince The Cat to eat dinner, soothing it and its kittens into a catnap.',
      },
      {
        heading: 'How to Soothe the Kittens',
        body: 'To soothe a Kitten, a hero must succeed at a Sanity roll of 4+ to stun and soothe it. Unlike normal stunning, a soothed Kitten stays soothed for the rest of the game.',
      },
      {
        heading: 'How to Calm the Cat',
        body: 'Once per turn, a hero in a room with an omen symbol may attempt a Knowledge roll of 3+ to find an Ingredient. Bring Ingredients equal to the number of heroes to the Dining Room, Kitchen, or Menagerie to make Cat Food (replace them with one Cat Food token). Then a hero must defeat The Cat with a Sanity attack (+1 die for each other hero in the room).',
      },
    ],
    monsters: [],
  },

  {
    id: 61,
    title: "Captain Sting's Revenge",
    intro:
      'Gushing water and the smell of salt water fill the house as pirates invade. "Prepare t\' conquer this here land!" Your friend didn\'t survive the raid — avenge them by destroying the pirates\' treasure chest.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Put pentagonal item tokens (Pieces of Loot) equal to the number of heroes on rooms, one per room (one per floor if possible).',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'Your friend was killed by Captain Sting, a deadly pirate leader who cares more about treasure than people.',
      },
      {
        heading: 'You Win When',
        body: 'The Treasure Chest is destroyed. The Pirates win when they return all the Pieces of Loot to the Underground Lake.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'You can attack the Treasure Chest once per turn, only with Might (the Chest has Might 4). On a win, put a Might Roll token on your card. After the heroes have four Might Roll tokens, the next successful Might attack destroys the Chest. Captain Sting can be stunned by normal attacks but takes no damage.',
      },
      {
        heading: 'Special Movement Rules',
        body: 'You can pick up Pieces of Loot, but an explorer carrying one has 1 fewer space of movement.',
      },
    ],
    monsters: [],
  },

  {
    id: 62,
    title: 'Rosencrantz and All of You Are Dead',
    intro:
      'Your clothes change to Elizabethan gowns and you feel the strangest urge to speak in iambic pentameter. You realize you are in Castle Elsinore.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Put item token 1 (the Mirror) and item token 2 (the Dagger) face-up in different rooms.',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'You all conspired to kill the traitor\'s dad, the King of Denmark. The traitor is Hamlet, who will get depressed and then try to kill you and himself. End this story fast.',
      },
      {
        heading: 'You Win When',
        body: 'You say your lines to end the story before Hamlet says his and dies (you can also win by killing Hamlet before his three classic lines, but that\'s hard).',
      },
      {
        heading: 'How to Stop All This Drama',
        body: 'There are five acts; go to the correct rooms and say the lines aloud, in order. Each hero can complete one act per turn. Act 1 (Balcony, Roof Landing, or Widow\'s Walk): "Something is rotten in the state of Denmark." Act 2 (Drawing Room, Library, or Study): "Though this be madness, yet there is method in\'t." Act 3 (Gallery, Solarium, or Theater): "The lady doth protest too much, methinks." Act 4 (Kitchen, Larder, or Storm Cellar): "If I gall him slightly, it may be death." Act 5 (Hamlet\'s room, a duel — attack him at least three times, he survives): "Good night, sweet prince. And flights of angels sing thee to thy rest!" When all five acts are done the haunt ends; if Hamlet is alive, you win.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'After Hamlet attacks you, if you\'re alive you immediately attack him. In Act 5 you may attack or defend with any number of dice up to your Might (at least 1 die) — remember, you\'re trying not to kill him.',
      },
    ],
    monsters: [],
  },

  {
    id: 63,
    title: 'Shush',
    intro:
      'You try to speak but no sound comes. You\'re not deaf — but you can\'t make a sound. In the distance, a door slams.',
    sections: [
      {
        heading: 'Right Now',
        body: 'You cannot speak — the heroes literally cannot speak. Stop reading this aloud. Read the rest in silence, then pass the page to the explorer on your left.',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'Your friend pulls off a human mask, revealing a gruesome creature. The Box it guards — the Voicebox — is the source of the magic silencing you.',
      },
      {
        heading: 'How to Use the Spellbooks',
        body: 'Collect the correct spells to open the Voicebox and regain your voice, but some Spellbooks may be cursed.',
      },
      {
        heading: 'You Win When',
        body: 'You\'ve regained your voices and killed the traitor.',
      },
      {
        heading: 'You Must Do This on Your Turn',
        body: 'Until the traitor tells you otherwise, you cannot speak.',
      },
    ],
    monsters: [],
  },

  {
    id: 64,
    title: 'Chairman of the Board',
    intro:
      'You met your fellow explorers for the first time here at the house, and now you know the truth: they were ghosts all along, and they\'ve made room for one more. Get out fast — if they strip away your sanity, you\'ll become a permanent resident too.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Leave the room (the traitors stay with the house). Get a piece of paper (the Spirit Board) and write the letters A through Z with plenty of room between them. When you return, get a pentagonal item token (the Planchette). Take the Spirit Board omen card from whoever found it.',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'The other explorers are now Poltergeists, trying to turn you into a ghost.',
      },
      {
        heading: 'You Win When',
        body: 'You move through the front door of the Entrance Hall.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'You may attempt one exorcism per turn to kill a Poltergeist instantly: Sanity 5+ in the Chapel, Crypt, or Pentagram Chamber, or while carrying the Holy Symbol or Ring; or Knowledge 5+ in the Library or Research Laboratory, or while carrying the Book or Crystal Ball. On success, one traitor in your room dies instantly.',
      },
      {
        heading: 'How to Use the Spirit Board',
        body: 'When attacked, you don\'t roll dice — you use the Spirit Board. The Poltergeist writes a thing depicted on the room tile (one or two words, 6+ letters). Up to your Knowledge value, point your Planchette at letters you think appear; the Poltergeist says how many times each occurs. Each correct letter (once per occurrence) counts toward your defense. Then guess the word; if correct, add 1 more to your defense. When you would damage a Poltergeist with the Spirit Board, you may instead move 1 room.',
      },
      {
        heading: 'Special Movement Rules',
        body: 'Poltergeists do not count as opponents for purposes of counting movement.',
      },
      {
        heading: 'Special Omen Rules',
        body: 'The Spirit Board cannot be dropped, traded, or stolen.',
      },
    ],
    monsters: [],
  },

  {
    id: 65,
    title: 'Sushi Night',
    intro:
      'The house is flooding, and your friend has been transformed into a Merperson. You must hunt down the traitor before the house floods completely and the Merperson slips back into the ocean.',
    sections: [
      {
        heading: 'What You Know About the Bad Guys',
        body: 'Your friend is now a Merperson, formidable and hard to catch in the water. Hunt the traitor before the house fully floods.',
      },
      {
        heading: 'You Win When',
        body: 'The Merperson is dead. You can feast on its flesh to become immortal.',
      },
      {
        heading: 'Special Movement Rules',
        body: 'When in a flooded room (marked by a face-down monster token), you roll 2 fewer dice on Speed rolls and get 2 fewer spaces of movement (minimum 1 die and 1 space).',
      },
    ],
    monsters: [],
  },

  {
    id: 66,
    title: 'The Cardinal Sins',
    intro:
      'Your friend dons a bright red, pointy hat: "Today, if all goes as planned, I shall be elected Pope! To ensure my uncontested election, I shall bathe this house in the blood of sinners!" Oh, right. You forgot where you were for a moment.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Put one of each color small monster token (seven Electors) face-down in rooms the heroes do not occupy. No two Elector rooms may be adjacent, even between floors, unless impossible (then come as close as you can).',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'The traitor is Cardinal Sinn, who thinks you\'ve been very sinful.',
      },
      {
        heading: 'You Win When',
        body: 'You stop the traitor from being elected Pope. The traitor needs four Electors and must reach the roof; if the heroes hold four Electors total or kill the traitor, you win.',
      },
      {
        heading: 'How to Stop the Cardinal From Becoming Pope',
        body: 'Get a majority of Electors to vote against the traitor. In a room with an Elector that hasn\'t voted, attempt a Sanity roll of 6+ to gain its vote; on success, take the Elector and put it on your character card.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'Unless the traitor has four or more Electors, they can\'t take mental or physical damage; you can make attacks to steal item cards. If you die, give all your Electors to the traitor.',
      },
    ],
    monsters: [],
  },

  {
    id: 67,
    title: 'Murderball',
    intro:
      'A young boy\'s spirit giggles, "I know a fun game! Let me tell you the rules, and you can teach the others..." The Bully delights in games of violence — his favorite involves hurling a stone to see who bleeds best.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Set aside Knowledge Roll tokens and Sanity Roll tokens, each equal to the number of heroes.',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'The traitor is beguiled by the spirit of a mean little boy — a Bully who hurls a stone at you.',
      },
      {
        heading: 'You Win When',
        body: 'You free the spirit from the Bloodstone by putting Knowledge Roll and/or Sanity Roll tokens in the Nursery equal to the number of heroes.',
      },
      {
        heading: 'How to Free the Spirit',
        body: 'Lure the spirit out by showing it deadlier weapons: gather two weapons and drop them in the Nursery (the Dynamite counts as a weapon here, along with the Axe, Blood Dagger, Boomstick, Chainsaw, Sacrificial Dagger, Revolver, and Spear). With at least two weapons in the Nursery, once per turn attempt a Knowledge or Sanity roll of 5+ there to trick the Bully; on success put a token of that roll\'s type in the Nursery.',
      },
      {
        heading: 'If You Die',
        body: 'The Bully won\'t let you quit. Drop all your item cards, put your figure in the Nursery, reset your traits, draw an item card, and do nothing else this turn. Continue taking turns as normal.',
      },
    ],
    monsters: [],
  },

  {
    id: 68,
    title: 'He Who Must Not Be Read',
    intro:
      'As your friend opens a children\'s story about the necromancer Maldovo, a bat-winged flying key falls to the floor. "At last, my summoning is complete. I am Maldovo!" You\'ll need to find his hidden soul before he hunts you down.',
    sections: [
      {
        heading: 'Right Now',
        body: 'If the traitor has the Key card, choose a hero to take it.',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'In the story, a young wizard destroyed Maldovo\'s hidden soul. You\'ll need to find it before Maldovo consumes your own souls.',
      },
      {
        heading: 'You Win When',
        body: 'You destroy Maldovo\'s soul, hidden in a series of Soulcruxes: the soul is in an egg, in a duck, in a rabbit, in a locked chest. Open the chest, kill the rabbit, kill the duck, break the egg, and destroy the soul inside.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'Maldovo cannot take damage.',
      },
    ],
    monsters: [],
  },

  {
    id: 69,
    title: 'No Noose Is Good News',
    intro:
      'A dusty breeze swirls around your friend, who holds a rope tied into a noose. "I\'ll come for you, one by one... The Hangman\'s job is never done..." You won\'t hang high if you can play the gallows game better than the Hangman.',
    sections: [
      {
        heading: 'What You Know About the Bad Guys',
        body: 'The traitor is possessed by an Old West hangman who won\'t rest until everyone hangs.',
      },
      {
        heading: 'You Win When',
        body: 'All living heroes are protected from the gallows.',
      },
      {
        heading: 'How to Play the Gallows Game',
        body: 'On your turn, use all your movement to guess a letter to solve your individual gallows game. Each incorrect guess: the Hangman draws a body part and you take 1 physical damage. Each correct guess: the Hangman fills in the letters and shows everyone the progress. When you solve your game, you\'re protected from the gallows.',
      },
      {
        heading: 'How to Break Free of a Noose',
        body: 'If you\'re caught in a noose at the start of your turn, you may attempt a Might roll of 4+ to break free.',
      },
    ],
    monsters: [],
  },

  {
    id: 70,
    title: 'To Reach the Cosmos',
    intro:
      'A ringing in your ear climbs until every thought reverberates like a drum. The traitor has turned into a brain-sucking horror trying to steal your Thoughts with terrifying Brainstraws.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Get a piece of paper and write down a "Thought" from your hero\'s perspective; fold it so no one else can read it. On the outside, write a trait and raise it by 1.',
      },
      {
        heading: 'You Win When',
        body: 'You have taken all of the traitor\'s Thoughts.',
      },
      {
        heading: 'You Must Do This on Your Turn',
        body: 'If you don\'t have a Thought at the start of your turn, take 1 die of mental damage.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'You may steal one of the traitor\'s random Thoughts via a Knowledge attack. If a Brainstraw defeats you in physical combat while you have a Thought, you take no damage; otherwise normal. Defeat a Brainstraw → it\'s stunned and retreats to the traitor\'s room. Defeat the traitor in physical combat → no damage, but you may move them to a room with a Brainstraw. A hero may steal a Thought from whoever holds it via a Knowledge attack.',
      },
      {
        heading: 'Losing and Gaining Thoughts',
        body: 'Lose a Thought → lose 1 in the listed trait. Gain a Thought → gain 1 in its trait and read it aloud. You can give a Thought to a hero in your room without attacking (you lose, they gain).',
      },
    ],
    monsters: [
      { name: 'Brainstraws', stats: 'Speed 3 · Might 5 · Sanity 5 · Knowledge 5' },
    ],
  },

  {
    id: 71,
    title: 'The Other Side',
    intro:
      'This is your house — it has always been your home, since the day you hung yourselves from the roof. New folks may come and go, but you will be here. Forever.',
    sections: [
      {
        heading: 'Right Now',
        body: 'If any hero lacks an item card, that hero draws one from the item stack. If the heroes don\'t have at least four items after that, each draws one until you have four among you.',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'The traitor is trying to remove you from your home. You have special ways to stop them, because you\'re a Ghost.',
      },
      {
        heading: 'You Win When',
        body: 'The traitor is killed and has joined you in the afterlife.',
      },
      {
        heading: 'You Must Do This on Your Turn',
        body: 'At the end of your turn, gain 1 Sanity if you did not attack this turn.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'You may attack the traitor using any trait (they defend with the same). A mental-trait attack deals mental damage. If you take damage, you must lose Sanity instead of Knowledge. You cannot die: if a trait would drop to the skull, lower it to the lowest value above the skull, and don\'t voluntarily lower it further.',
      },
      {
        heading: 'Special Movement Rules',
        body: 'You\'re incorporeal and immune to negative room effects. During movement, you may lose 1 Sanity to pass through a wall into a previously discovered room as if it were connected by a door.',
      },
      {
        heading: 'Special Item and Omen Rules',
        body: 'You may not drop, trade, or steal item cards or omen cards.',
      },
    ],
    monsters: [],
  },

  {
    id: 72,
    title: "Man's Worst Enemy",
    intro:
      'An old man\'s diary warns that the Beast he summoned in the form of his pup has sunk talons into his soul. As you read the final entry, you hear a cheerful bark and feel a power clutching at your mind.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Set aside the matching explorer tokens for each hero.',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'A hellbeast bound to a puppy seeks to consume your minds or destroy your bodies.',
      },
      {
        heading: 'You Win When',
        body: 'You kill the Beast.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'The Beast can attack you, but its power prevents you from attacking it directly — you can only fight it through the game of fetch. Once per turn in the Beast\'s room, you may use the Bell to attempt a Sanity roll of 5+ to stun it into playing dead. A hero accompanied by the Cat can\'t be possessed (discard the Cat instead of taking damage). You may attack the traitor or a possessed hero normally.',
      },
      {
        heading: 'How to Play Fetch',
        body: 'Once per turn in the Beast\'s room, attempt a Knowledge roll of 4+ to send the Beast to a room with an item symbol up to 6 spaces away. If a weapon is already there, the Beast brings it to you (attack it with that weapon). If not, the Beast draws an item and brings it; if it\'s a weapon, attack with it. If you attack with a fetched weapon and damage the Beast, take one of your explorer tokens. When the heroes have explorer tokens equal to 1 more than the number of explorers, the Beast is slain — but the Dog remains, so the next time you fetch a weapon you must attack the Dog with it or lose all your explorer tokens.',
      },
    ],
    monsters: [],
  },

  {
    id: 73,
    title: 'Existence Precedes Essence',
    intro:
      'A maniacal titter echoes through the house. "I have just met my new and only friend, a small hungry Head... I\'m going to let the Head feast on your faces!" That Head seems alright, but your friend sounds stressed. Maybe your pal just needs a hug.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Set aside Obstacle tokens (Hugs) equal to twice the number of heroes.',
      },
      {
        heading: 'You Win When',
        body: 'You hug the traitor for enough turns to restore them, then team up to hug the Head — or you kill them both.',
      },
      {
        heading: 'How to Hug Someone',
        body: 'To hug the traitor or the Head, make a Might attack. Hugging the traitor, add 1 die per Hug on their card. Any hero within 2 spaces can group-hug (put their figure in your room, +1 die each). Hugging deals no damage but allows normal stealing of carried items (explorer tokens count as items). To restore the traitor, hug them a number of turns equal to twice the number of heroes (put a Hug on their card after each success). If the Head is by itself, you may hug it; the restored traitor may join.',
      },
      {
        heading: 'Special Movement Rules',
        body: 'When you hug on your turn, you may not move again that turn.',
      },
    ],
    monsters: [],
  },

  {
    id: 74,
    title: 'Coulrophobia',
    intro:
      'Laughter echoes down the halls, dredging up a horrific childhood memory of a deranged clown. A dread figure with torturous implements stalks the house. Run for your lives, or the evil clown will get you.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Set aside Might Roll tokens and Knowledge Roll tokens, each equal to the number of heroes. Each hero chooses one of the traitor\'s Gag papers (hide unchosen ones in the box).',
      },
      {
        heading: 'You Win When',
        body: 'The last living hero escapes the house, you kill the Clown, or all the Clown\'s Gags are destroyed. However, you lose if two of you are killed.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'When you attack the Clown, you may use the Stealing Items rules to steal a Gag (chosen by the Clown). You may also attack the Dog to stun it or, if it\'s carrying a Gag, to steal the Gag. A stolen Gag is immediately destroyed.',
      },
      {
        heading: 'How to Leave the House',
        body: 'Once per turn, a hero in the Entrance Hall may attempt a Might roll of 5+ to break the chain or a Knowledge roll of 5+ to pick a lock. On success, add a token to the Entrance Hall. Once there are tokens equal to the number of heroes, the door is unlocked. Start your turn in the Entrance Hall with the door unlocked and you may escape.',
      },
    ],
    monsters: [],
  },

  {
    id: 75,
    title: 'Let It Glow',
    intro:
      'A thin layer of ice begins covering every inch of the house. Your former friend has transformed into a bitter Ice Queen. Warm the house back up before you freeze to death — unless the Queen kills you first.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Set aside 7 pentagonal item tokens (Thermostats). Put one number-side-up in the Furnace Room, and one more in each room with an omen symbol of your choice until you run out of Thermostats or omen rooms.',
      },
      {
        heading: 'You Win When',
        body: 'You kill the traitor, or lock six of the Thermostats and lower the Turn/Damage track to 0.',
      },
      {
        heading: 'How to Defrost the House',
        body: 'Once per turn, attempt a Knowledge roll of 4+ to raise and lock a Thermostat. Once locked, turn its token number-side-down and lower the Turn/Damage track. If an explorer discovers an omen room, put a Thermostat there if you still have one not in play.',
      },
    ],
    monsters: [],
  },

  {
    id: 76,
    title: 'Back to the Past',
    intro:
      'A butler drops a metal tray and everything goes dark. You wake at the entrance, but the house is lit by candlelight and filled with people. "You are reincarnated members of the company that built this house. Your former selves have just been murdered. Stop the murderer before the ritual completes, and you\'ll prevent this house from ever awakening."',
    sections: [
      {
        heading: 'Right Now',
        body: 'Starting with the haunt revealer, take turns drawing rooms off the stack and placing them until all are placed or you can\'t place any more. Put your figures in the Entrance Hall. Set the Turn/Damage track to 12 — time is about to go backwards.',
      },
      {
        heading: 'You Win When',
        body: 'You reveal the traitor before the Turn/Damage track reaches 0.',
      },
      {
        heading: 'You Must Do This on Your Turn',
        body: 'Lower the Turn/Damage track. If the traitor hasn\'t been found, they may place an Obstacle token (Pentagram) in any room.',
      },
      {
        heading: 'How to Search for the Traitor',
        body: 'At the start of your turn, ask the traitor one yes/no question about where they are (truthful; limited to the room\'s name or characteristics — not floor, position, symbols, or text). At the end of your turn, you may declare your room is the traitor\'s; if correct, you win; if not, take 1 mental damage and lower the track.',
      },
      {
        heading: 'Special Movement Rules',
        body: 'You can access false doors from the entrance side. Entering a face-down room, take 1 mental damage; you can enter/exit any side of a face-down room. Ignore movement-hindering text except the traitor\'s Pentagrams (extra space to enter).',
      },
    ],
    monsters: [],
  },

  {
    id: 77,
    title: "They're Always After Me",
    intro:
      'Your friend opens a box and turns into a Leprechaun. "Ye will not get me pot o\' gold!" Where there\'s a Leprechaun, there\'s a Pot of Gold at the end of a Rainbow. Now you need to find the Rainbow.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Put the pentagonal item tokens 1–7 (Wishes) near the Entrance Hall. Set aside seven monster tokens (Colors of the Rainbow), one of each color. Set aside a pentagonal Item Pile token (the Pot of Gold).',
      },
      {
        heading: 'You Win When',
        body: 'You find the Pot of Gold.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'Leprechauns are caught by their toes. If you defeat the Leprechaun, instead of damage you may pick a Wish from the Wishes table and put its matching item token back in the box. You can\'t pick a Wish whose token isn\'t on the table.',
      },
      {
        heading: 'Special Item and Omen Rules',
        body: 'If you would draw an item card, you may draw an omen instead. If you draw the Medallion, lay the seven Colors of the Rainbow out from an open roof door (red, orange, yellow, green, blue, purple, magenta), then put the Pot of Gold at the end.',
      },
      {
        heading: 'Special Movement Rules',
        body: 'Each Color of the Rainbow is its own Roof room tile. Only one hero may end a turn on each Color, but you can pass through an occupied Color. Enter the final magenta Color and you may take the Pot of Gold and win. If you don\'t, it\'s a long way down.',
      },
      {
        heading: 'Wishes',
        body: '1 Each hero draws an item card. 2 Put your figure in any room. 3 Gain 1 Speed and 1 Might. 4 Gain 1 Sanity and 1 Knowledge. 5 Draw three events, keep one, shuffle the others back. 6 Replace any non-landing room with the top room tile. 7 Steal any item or omen card from the Leprechaun, even if it can\'t be stolen.',
      },
    ],
    monsters: [],
  },

  {
    id: 78,
    title: "The Devil's Name",
    intro:
      'As you lift a tablet of glyphs, a searing name tries to force into your mind, then escapes down the hall. The traitor is possessed by an ancient Fiend held prisoner only by the power of its own true name.',
    sections: [
      {
        heading: 'Right Now',
        body: 'If the Chalk card isn\'t in play, search the item stack and discard pile for it, give it to a hero, then shuffle the discard pile into the stack.',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'The Fiend seeks to possess every mortal, replacing identities with its own name. It can destroy the Tomes of Lore in the Furnace Room or the Kitchen — get to them first.',
      },
      {
        heading: 'You Win When',
        body: 'You banish the Fiend by speaking its true name.',
      },
      {
        heading: "How to Learn the Fiend's True Name",
        body: 'Take a Tome of Lore when you enter its room. On your turn, forgo your movement to attempt a Knowledge roll of 5+ to research the name in the Brimstone Square. On success, discard the Tome and the traitor must reveal one letter. You can carry only one Tome at a time.',
      },
      {
        heading: 'How to Banish the Fiend',
        body: 'Be in the same room as the Fiend (or a possessed hero) and speak the name (once per turn, even before all letters are revealed). Incorrect to a possessed hero: the Fiend deals you mental damage equal to the unrevealed letters. Incorrect to the Fiend: you become possessed. Correct to a possessed hero: ends the possession and frees them (immune afterward). Correct to the Fiend: you banish it.',
      },
      {
        heading: 'The Brimstone Square',
        body: 'A 5x5 grid; each column is one letter of the Fiend\'s five-letter name, read left to right. Rows: B R M T S / O E L A H / L I T U R / M O C I M / V A P H K.',
      },
    ],
    monsters: [],
  },

  {
    id: 79,
    title: 'The Twins',
    intro:
      'A red cord erupts between your two friends, who have unified into a hybrid being. Between them, they\'re trying to create a Seam of energy that might bring this house crashing down.',
    sections: [
      {
        heading: 'What You Know About the Bad Guys',
        body: 'They are two halves of a powerful energy connection, weaving a Seam.',
      },
      {
        heading: 'You Win When',
        body: 'One of the Twins is dead.',
      },
      {
        heading: 'Nodes',
        body: 'The Twins leave Nodes of energy around the house. You may attempt a Knowledge roll of 5+ to either destroy a Node (giving it back to the Twins) or move one of the Twins up to 5 spaces toward you.',
      },
      {
        heading: 'Special Movement Rules',
        body: 'You cannot move or create line of sight through a Node; the passage is blocked from one side to the other. The Nodes can never separate a room or set of rooms from the rest of the house.',
      },
    ],
    monsters: [],
  },

  {
    id: 80,
    title: 'I, Mutant',
    intro:
      'You wake on the floor, your skin a strange shade of periwinkle. You\'ve been betrayed by a less-than-sane scientist who wants to make you the subject of some uncanny research.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Set the Turn/Damage track to twice the number of explorers (it tracks damage to the Research Laboratory).',
      },
      {
        heading: 'You Win When',
        body: 'You lower the Turn/Damage track to 0, destroying the Research Laboratory and stopping the traitor\'s experiments.',
      },
      {
        heading: 'Getting Captured',
        body: 'The traitor\'s Electronets capture you. If captured, tip your figure over; you can\'t move or act except mutating and dropping an item. At the start of your turn, remove an Electronet from your room; once none remain there, you\'re no longer captured.',
      },
      {
        heading: 'Mutating',
        body: 'At the end of your turn, you may mutate: lower any traits by 1 or more, then raise another trait by that total. For your highest trait, gain a power for the rest of the game (only one at a time). Speed: spend 1 movement to pass through a wall, or 2 to ignore an Electronet you enter. Might: once per turn, pick up and rotate your room (match at least one door; don\'t separate rooms). Sanity: ignore room text and control the Mystic Elevator; once per turn, a Sanity roll removes an Electronet for each die showing a 2. Knowledge: once per turn, draw an item card.',
      },
      {
        heading: 'How to Destroy the Research Laboratory',
        body: 'Start your turn in the Research Laboratory and, instead of moving or attacking, smash the lab equipment: roll Might, and for each die showing a 2, lower the Turn/Damage track.',
      },
    ],
    monsters: [],
  },

  {
    id: 81,
    title: 'The Canopic Curse',
    intro:
      'Your companion opens a box, finds a canopic jar, and mutters, "Now to find the right one." A strange feeling comes over you — and you\'re sure it would be very bad for your friend to find the right Jar.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Take pentagonal item tokens (Jars) 1–6. Put items 1–5 face-up randomly (no more than two per floor; choose unoccupied item rooms first, then omen rooms). Give item 6 to the traitor.',
      },
      {
        heading: 'You Win When',
        body: 'You bring the correct Jar to the Entrance Hall.',
      },
      {
        heading: 'You Must Do This on Your Turn',
        body: 'Each hero is cursed. The traitor calls you out one by one to assign a Curse (per the Traitor\'s Tome). You must obey it at all times and can\'t reveal its nature or discuss your actions.',
      },
      {
        heading: 'How to Acquire a Jar',
        body: 'Take a Jar from a room at the end of your turn (you can\'t move after, but may give it away). Only one Jar per turn; you may drop one anytime but can\'t repick it the same turn.',
      },
      {
        heading: 'How to Know Who Has the Correct Jar',
        body: 'When all six Jars are collected, the traitor reveals the Curse under the Mummy; the explorer with the matching Jar holds the correct one, and it becomes their turn (a hero must head toward the Entrance Hall). No one may attack a Jar-holder until the correct Jar is revealed; after, a damaged holder must roll Might 4+ to keep it.',
      },
    ],
    monsters: [],
  },

  {
    id: 82,
    title: 'Get a Clue',
    intro:
      'A scream — your dinner host has been found dead, strangled by the Butler. The police are on the way, and when they arrive everyone needs an alibi, or there will be a Rope calling your names.',
    sections: [
      {
        heading: 'Right Now',
        body: 'If the Dining Room isn\'t in play, search the room stack for it, place it, and shuffle. Put all heroes\' figures in the Dining Room. Set aside an explorer token per hero. Put pentagonal item tokens equal to the number of heroes in the Dining Room — the potential murder weapons: 1 Stiletto, 2 Derringer, 3 Candelabrum, 4 Crowbar, 5 Truncheon (the Rope is also a weapon but starts with the traitor).',
      },
      {
        heading: 'You Win When',
        body: 'Each hero establishes an alibi before the police arrive. One alibi must include the Rope. If a hero dies first, another may establish an alibi for them using the dead hero\'s alibi rooms.',
      },
      {
        heading: 'How to Establish an Alibi',
        body: 'Take a murder weapon (the Rope or one from the Dining Room) to one of your specific alibi rooms, then attempt a Knowledge roll of 5+ to "remember" a convincing story (you, the weapon, the room). Each alibi must be in a different room. Put your explorer token and the weapon there; it can\'t be picked up or used until the police arrive.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'The Butler can be damaged as normal but can\'t be killed; you can steal items via physical attacks. While in one of your alibi rooms, the traitor can\'t damage you during an attack.',
      },
      {
        heading: 'Dinner Guests',
        body: 'Red Mr. Rose: Ballroom, Entrance Hall, Game Room. Yellow Lieutenant Lemon: Drawing Room, Entrance Hall, Study. White Professor Pale: Conservatory, Entrance Hall, Kitchen. Green Mr. Lime: Ballroom, Conservatory, Entrance Hall. Blue Mrs. Sapphire: Drawing Room, Entrance Hall, Game Room. Purple Miss Violet: Library, Entrance Hall, Study.',
      },
    ],
    monsters: [],
  },

  {
    id: 83,
    title: 'In the Details',
    intro:
      'This letter is a contract. The people in the house signed a deal with someone they shouldn\'t have, and now the devil wants his due. Is that your name on the contract? What have you done?',
    sections: [
      {
        heading: 'Right Now',
        body: 'Mix up Obstacle tokens (Names) numbered from 1 to the number of players plus two. Give each player a Name token in secret; set aside the other two. The haunt revealer takes the first turn.',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'Whoever doesn\'t have the lowest number is on the hook to give their soul to the infernal powers. Kill the others so you have the lowest by default — or wait until the contract shifts in your favor.',
      },
      {
        heading: 'You Win When',
        body: 'You are the last person left in the house, or you find a loophole in the contract.',
      },
      {
        heading: 'How to Find a Loophole in the Contract',
        body: 'At least one explorer must have died first. Then attempt a Knowledge roll of 4+ in the Pentagram Chamber to turn over your Name token. If no one has a lower number, you\'ve found a loophole. If someone does, they show it secretly and you go up in a puff of smoke (out of the game).',
      },
      {
        heading: 'How to Better Understand Your Position',
        body: 'Attempt a Knowledge roll of 5+ in the Library or Study to look at all the set-aside Name tokens and swap one with yours.',
      },
      {
        heading: 'How to Make a Bargain',
        body: 'Attempt a Sanity roll of 5+ in the Chapel to swap tokens with any other explorer.',
      },
      {
        heading: 'How to Play Dice With the Devil',
        body: 'With the Letter in the Game Room, shuffle it into the omen deck to randomize the Names: put your Name token out and roll 4 dice; all other living explorers roll 4 dice; any who roll equal to or lower than you must put their Name out (higher rollers may opt to); then everyone without a Name gets a random set-aside one. Drawing the Contract event card lets you do the same with the event deck.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'If you kill another explorer, compare token numbers; place the higher out of play and keep the other face-down.',
      },
      {
        heading: 'At the End of the Round',
        body: 'Just before the haunt revealer\'s turn, every living explorer passes their Name token clockwise to the next explorer.',
      },
    ],
    monsters: [],
  },

  {
    id: 84,
    title: 'Forget to Remember',
    intro:
      'This house was home to a madly brilliant killer named Richard Smith, who designed it to augment his psychic abilities and preserve his memory. By entering, you have entered his mind, and the house wants to imprint his mind onto yours.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Set aside six Knowledge Roll tokens.',
      },
      {
        heading: 'You Win When',
        body: 'You slay the Psychic Spirit of Richard Smith by slaying every body it inhabits, or the traitor erases the last vestige of Richard Smith from their memory.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'Whoever has the Crystal Ball can make Knowledge distance attacks (which also activate the Ball, risking Sanity loss). Use any physical-damage method to drive the spirit from a room: make a Might attack vs your room (treat it as Might 5, or Speed 5 vs cards like Dynamite); no damage, but if you deal 2+ physical, put a Knowledge Roll token there (max two per room). Each token lowers the Spirit\'s Sanity and Knowledge by 1 die in that room.',
      },
      {
        heading: 'What Happens When You Would Die',
        body: 'If your Knowledge drops to the skull, you become catatonic (roll 0 on all attacks). If your Sanity drops to the skull, you become a monster making mental attacks for the Spirit (subtract 2 from its roll). If your Might or Speed drops to the skull, you die.',
      },
    ],
    monsters: [{ name: 'Psychic Spirit of Richard Smith', stats: 'Sanity 6 · Knowledge 6' }],
  },

  {
    id: 85,
    title: 'The Murderer in the Machine',
    intro:
      'A tarnished ring hits the floor like your ringtone. A Flitter alert appears with a new progress bar labeled "Dead Friends," set at zero — but something tells you it won\'t stay there.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Each hero takes a pentagonal item token (a Smartphone). Set aside the small monster tokens (Bars of reception) and Obstacle tokens (Dead Zones).',
      },
      {
        heading: 'You Win When',
        body: 'At least one hero with a positive Sanity score escapes the house. The front door is locked and the windows boarded, so you\'ll have to call for help — but the reception is horrible.',
      },
      {
        heading: 'How to Use Your Smartphone',
        body: 'Once per turn, look for reception or call for help. Look for reception in any non-basement room: roll 1 die on the ground floor or 2 dice on the upper floor/roof, +1 if the room has a window or is outside; put that many Bar tokens (max five), or a Dead Zone if zero. Call for help in a room with at least one Bar: roll 4 dice and add the Bars; on 9+ help is on the way. You can lose your phone like an item — willingly dropping or giving it lowers your Sanity by 1 die; if your Sanity drops to the skull, you become the traitor\'s "friend".',
      },
      {
        heading: 'How to Escape the House',
        body: 'When help is on the way, add the number of living heroes to the current Turn/Damage track number and mark that turn. On that turn or any later one, a hero in the Entrance Hall lets the police in, and the heroes win.',
      },
    ],
    monsters: [],
  },

  {
    id: 86,
    title: 'The Woods in the Cabin',
    intro:
      'The house\'s wooden frame is rough-hewn and there are leaves everywhere. This isn\'t a house at all — it\'s a mighty, ensorcelled tree growing recklessly out of control. You have to cut it down before it kills you all.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Each hero without a weapon draws a random weapon from the item stack (if any), then shuffle the stack. Set aside one matching explorer token per hero.',
      },
      {
        heading: 'You Win When',
        body: 'You fell the Tree.',
      },
      {
        heading: 'How to Cut Down the Tree',
        body: 'Destroy the ground floor so the top becomes too heavy: this happens when there are no ground-floor tiles except the Tree House and the total rooms on the upper floor and roof exceed the number of Roots in the basement.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'Once per turn, attack a ground-floor room with a Might attack; on a win, flip the tile over (for the Entrance Hall or Grand Staircase, put a random ground-floor tile face-down on top). You may not attack the Tree House. To remove a Root, use Dynamite or drop a heavy Acorn: remove an Acorn in your room, roll 6 dice, and if you equal or exceed the number of ground-floor rooms, remove a Root of your choice (not a Rootstalk). In a room with an Acorn and a Squirrel, a Knowledge attack that defeats the Squirrel removes both. The first time you do any of these, put your explorer token on your card.',
      },
      {
        heading: 'Special Movement Rules',
        body: 'You may move from a face-down tile to any adjacent room, or discover a room through any side of it. If the Stairs from Basement are in play, they now lead to and from the Tree House.',
      },
    ],
    monsters: [],
  },

  {
    id: 87,
    title: 'Sibling Rivalry',
    intro:
      'You\'ve released the spirits of siblings locked into a deadly game of pranking. Find the spirit of the Headmistress — she\'s trying to complete an exorcism of the Siblings but needs someone living to help.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Set aside five triangular Sanity Roll tokens.',
      },
      {
        heading: 'You Win When',
        body: 'The evil spirits of the Siblings are cleansed through exorcism.',
      },
      {
        heading: 'How to Perform the Exorcism',
        body: 'Only the Headmistress knows the exorcism, so lead her to a cleansing room — the Bathroom, Chapel, Graveyard, Organ Room, or Solarium — and attempt a Sanity roll of 6+ to conduct the ritual; on success, put a Sanity Roll token there. Then cleanse each Sibling by taking it to a room with a Sanity Roll token (remove the Sibling and the token).',
      },
      {
        heading: 'Special Attack Rules',
        body: 'If you defeat a Sibling, instead of dealing damage you may grip it by the ear and drag it as you move; until it leaves your room, any hero entering may automatically catch and drag it. If the Headmistress is in your room, add 2 dice to your attack and defense rolls against the Siblings.',
      },
      {
        heading: "The Headmistress's Letter",
        body: 'A note from Doctor Abigail Mitchell, Headmistress of Wexley School for Girls: she has found a way to subdue the children\'s violent tendencies but must lure them into a room where their spirits can be cleansed, and asks the parents to meet her there to lay the trap.',
      },
    ],
    monsters: [],
  },

  {
    id: 88,
    title: 'Cry, Babylon!',
    intro:
      'Mighty winds shake the house as your friend roars. "I am the Lammasu," a lionlike bird-creature purrs. "We are now in the presence of the great death god Marduk. May he have mercy on your souls."',
    sections: [
      {
        heading: 'Right Now',
        body: 'Set aside the Cat card. Put the Cat token (the Lammasu) in a room on a floor other than the traitor\'s, at least three rooms from any hero (a landing if possible; otherwise as far away as possible).',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'The traitor has become Nebuchadnezzar, the living avatar of Marduk, seeking to absorb your souls.',
      },
      {
        heading: 'You Win When',
        body: 'You kill the walking god your friend has become.',
      },
      {
        heading: "How to Enlist the Lammasu's Aid",
        body: 'When you end your movement in the Lammasu\'s room, discard an item or omen card (not the Cat) to put the Lammasu in the traitor\'s room, where they lose 1 from each trait; you may also take the Cat card. The Lammasu is then destroyed but materializes on another floor (the traitor chooses which; you place it at least 3 rooms from any hero). At the end of any turn you don\'t sacrifice a card to the Lammasu, set aside the Cat card if you have it.',
      },
    ],
    monsters: [],
  },

  {
    id: 89,
    title: "One of the Master's Affairs",
    intro:
      'Your car blew a tire and you sheltered in this house — owned by a freaky doctor who made a monster of body parts. Your friend is revealed as Rough Ralph, the Doctor\'s servant. But you know something they don\'t: the secret of warping time.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Each hero takes a pentagonal item token (Time) and a blank piece of paper. Set aside a Speed Roll, Might Roll, Sanity Roll, and Knowledge Roll token, plus the Fountain token. If the Ballroom, Dusty Hallway, Gymnasium, Larder, Master Bedroom, and Operating Laboratory aren\'t in play, find them, place them, and shuffle. Put your figures in the Ballroom.',
      },
      {
        heading: 'You Win When',
        body: 'All living heroes exit through the front door of the Entrance Hall (sadly, it\'s locked).',
      },
      {
        heading: 'How to Thwart the Bad Guys',
        body: 'Complete these tasks before the doors open; each hero may attempt one task per turn, and each victory stuns a monster (returned to its start room). Stage a farce (Theater): roll Speed, Might, Sanity, or Knowledge 3+; a failure puts that Trait Roll token in the Theater (each counts as a victory). Climb the radio tower (Tower): three times, Might 3+ to put the top room tile under the Tower (fail → 1 physical per tile); each tile is a victory. Synchronize your swimming (Underground Lake): two heroes roll 4 dice each aiming for all the same number (discard a card to reroll); all matching is a victory (put the Fountain there). All eight victories (4 Trait Roll tokens, 3 tiles under the Tower, and the Fountain) unlock the front door.',
      },
      {
        heading: 'How to Warp Time',
        body: 'At the end of your turn, discard your Time token to write down your current traits, room, and cards (a Time Slip). At the start of a later turn, move to that room and reset your traits and cards to the slip (you may take a card from another explorer or search a stack, then shuffle); tear up the slip.',
      },
    ],
    monsters: [],
  },

  {
    id: 90,
    title: 'Internal Conflict',
    intro:
      'The boss creates a new position — Chief Intern — and one of your former friends got it. Now they get to order you around too, and those full-time Employees are especially grumpy without their Coffee.',
    sections: [
      {
        heading: 'Right Now',
        body: 'If there are fewer than five rooms on any floor, place rooms until there are at least five on every floor. Put one Obstacle token (a full-time Employee) in each room with an event symbol.',
      },
      {
        heading: 'You Win When',
        body: 'You are the last intern alive.',
      },
      {
        heading: 'You Must Do This on Your Turn',
        body: 'If you discover an event room, put an Employee in that room before you draw your event cards.',
      },
      {
        heading: 'How to Deliver Coffee',
        body: 'To deliver a Coffee, end your turn in the same room as an Employee and remove it to your card. If you deliver a Coffee this turn, raise your Speed by 1; if you don\'t, lower your Sanity by 1.',
      },
      {
        heading: 'How to Get Promoted',
        body: 'Steal the Chief Intern\'s Badge by defeating them by 2 or more with a Might attack, or by looting it from their dead body. Whoever wears it gains all the Chief Intern\'s powers and reads the Traitor\'s Tome; the explorer who lost it is demoted to a regular Intern.',
      },
    ],
    monsters: [],
  },

  {
    id: 91,
    title: 'Burn out the Darkness',
    intro:
      'Darkness seeps from the house like oil, covering everything; only fire holds it back. Cleansing fire. It looks like you have work to do.',
    sections: [
      {
        heading: 'Right Now',
        body: 'This haunt can have multiple traitors: the hero to the traitor\'s left chooses a non-traitor to join the heroes, then the traitor chooses someone to join the traitors; repeat until everyone is sorted. If there are fewer than five rooms on each floor, draw until there are five. If the Stairs from Basement aren\'t in play, find them, place them, and shuffle (here they count as a landing). Each hero takes 15 small monster tokens of one color (green, orange, or red) — their Fire — and puts one face-down in their room. The hero to the traitor\'s left takes the first turn.',
      },
      {
        heading: 'You Win When',
        body: 'Every room in the house is burned. Kill it with fire!',
      },
      {
        heading: 'How to Burn Down the House',
        body: 'When you enter a room, you may put one of your Fire tokens there face-down. At the start of your turn, the Fire spreads: put one of your Fire tokens face-down in each room connected to a face-up Fire of your color (unless it already has one of your color; the Roof Landing connects to the Upper Landing to the Grand Staircase, and the Foyer to the Stairs from Basement). Then destroy each non-landing room with a face-up Fire (remove figures/tokens, return Fire tokens, flip the room). Heroes in a face-down room move to the nearest face-up room and roll Speed; a result below 2 plus the spaces moved takes 2 dice of physical damage. Finally, flip all your face-down Fire face-up.',
      },
      {
        heading: 'Special Movement Rules',
        body: 'Treat face-down room tiles as if they have doors on each side, and they don\'t block line of sight.',
      },
    ],
    monsters: [],
  },

  {
    id: 92,
    title: 'Ghost at the Finish Line',
    intro:
      'A spectral racer challenges you: "How about a race? The winner wins. The losers... lose. Runners to your marks, get ready, set, GO!" None of you are traitors, but you\'re all in competition to win this haunt.',
    sections: [
      {
        heading: 'Right Now',
        body: 'None of you are traitors, but you\'re all competing. Note how many total item and omen cards are in front of each hero, then shuffle all explorers\' cards back into their stacks. Put the large circular Ghost token (the Runner) in the Gymnasium and set aside seven other random large circular monster tokens. Each player secretly writes a general attribute of cards on each of three pieces of paper, face-down. Randomly pick six notes and read them aloud — these are the Runner\'s criteria (replace duplicates by drawing another). Deal each hero the same number of cards they had before.',
      },
      {
        heading: 'What You Know About the Runner',
        body: 'The Runner is a ghost who wants gifts resembling what he loved in life, and grants ghostly powers based on how well your gifts match.',
      },
      {
        heading: 'You Win When',
        body: 'You discover the final room tile. If it ever becomes impossible to place any more rooms, the explorer who placed the last tile wins.',
      },
      {
        heading: 'You Must Do This on Your Turn',
        body: 'At the start of your turn, give the Runner a gift from any room (discard an item or omen card, even one that can\'t be dropped), then check how many of the criteria you matched on the Criteria Matches table. If you can\'t give a gift, treat it as zero matches.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'You can\'t damage other explorers, but you can steal item cards. The Runner can\'t be damaged. At the start of your turn, if you can\'t give the Runner a gift, he makes a Sanity attack against you (Sanity equals the large circular monster tokens in his stack, including himself); then put a large monster under him (max eight).',
      },
      {
        heading: 'Criteria Matches',
        body: '0 You are attacked by the Runner. 1 +1 space of movement this turn. 2 +2 spaces of movement this turn. 3 Discovering a new room doesn\'t end your movement this turn. 4+ Once this turn you may teleport to any room (and also choose one of the other powers).',
      },
    ],
    monsters: [],
  },

  {
    id: 93,
    title: "Owl's Moving Castle",
    intro:
      'Bones crunch underfoot as the house trembles — it\'s moving. Two glittering eyes peer down from the rafters and you hear a soft hoot. That owl reminds you of your best friend. There must be some way to get them back.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Put three of your matching explorer tokens on your character card.',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'The traitor wants you all to be Owls forever. Their house is moving toward a cliff; when parts fall, they\'re lost — and the only way to survive being on such a tile is to become an Owl.',
      },
      {
        heading: 'You Win When',
        body: 'You turn the traitor back into a Human.',
      },
      {
        heading: 'How to Transform',
        body: 'Human to Owl: lose 1 Sanity and discard your explorer token from your figure (if Sanity would hit the skull, discard a token instead). Owl to Human: move one explorer token from your card to your figure; with no tokens left, you\'re stuck as an Owl.',
      },
      {
        heading: "How to Act When You're an Owl",
        body: 'You can fly: move on flipped tiles and across non-existent tiles if you enter/exit through a window or outside room (each empty space = 2 movement; stay on the same floor; end on a tile). Your Speed is doubled (max 8 dice on Speed rolls); no falling damage. You can\'t attack or use cards. You may hoot as much as you like.',
      },
      {
        heading: "How to Act When You're a Human",
        body: 'You can\'t walk on flipped tiles; to move past one, you must transform into an Owl. You can still hoot — it just seems weird.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'As a Human, make a Knowledge attack against the traitor if they\'re an Owl; reducing their Knowledge to the skull resets it to one step above and turns them back into a Human. Before a physical attack as a Human against an Owl traitor, you must first roll Speed 4+ or they fly out of reach (fail = no attack this turn).',
      },
    ],
    monsters: [],
  },

  {
    id: 94,
    title: 'Last Will and Tournament',
    intro:
      'Your eccentric Aunt Edwina has passed, and you\'ve gathered for the reading of her will, apportioning her macabre collection. At some point, greed settled over you all, and the traitor spoke with her voice: "Put down my things, and get out of my house!"',
    sections: [
      {
        heading: 'Right Now',
        body: 'Set aside the Item Pile tokens. If there are fewer item rooms than explorers, draw room tiles and put item-symbol rooms into play until there are enough. Each hero draws an item card, then counts their item and omen cards that can be traded or stolen (these are your Bequests).',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'The traitor is possessed by the greedy spirit of Aunt Edwina, intent on repossessing the most interesting pieces of her collection — the ones you hold.',
      },
      {
        heading: 'You Win When',
        body: 'You trap the spirit of Aunt Edwina inside an heirloom, freeing yourselves and the house.',
      },
      {
        heading: "How to Capture Edwina's Spirit",
        body: 'If the traitor ever has no Bequests, a hero in a room with an omen symbol may say "You are free" and drop a Bequest to draw out her spirit into the heirloom — and the heroes win.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'You may only attack the traitor normally. Once per turn, attempt to steal a Bequest of an explorer in your room using Sanity or Knowledge (+1 die in an item room); on a win, roll the Bequest Disposition table (the attack deals no damage).',
      },
      {
        heading: 'Special Item and Omen Rules',
        body: 'You may not willingly trade or drop cards, and must pick up any dropped cards in your room. When you die, drop all Bequests in an item pile; for each, roll 1 die — a blank discards it.',
      },
    ],
    monsters: [],
  },

  {
    id: 95,
    title: 'Nanny, Interrupted',
    intro:
      'The Nanny\'s voice reverberates from the walls: "Howsoever did the children get out of their cribs? There is a time and place for games, and this is not it!" The ceilings rise as you shrink.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Set aside the Item Pile tokens.',
      },
      {
        heading: 'You Win When',
        body: 'All of you are outside the front door next to the Entrance Hall (which is locked).',
      },
      {
        heading: 'You Must Do This on Your Turn',
        body: 'At the start of your turn, take 1 die of physical damage and 1 die of mental damage (2 dice of both if you begin in the Nursery).',
      },
      {
        heading: 'Special Damage Rules',
        body: 'When you take mental damage, take it all to Knowledge; physical damage, all to Might. When you take Might damage, raise your Speed by the amount you lowered Might. If a trait drops to the skull, you become a baby for the rest of the game (move at least 1 space, 0 on skull-trait rolls, can\'t take damage, baby talk only).',
      },
      {
        heading: 'Special Attack Rules',
        body: 'As a baby, you may attack the Nanny using Speed. Lose → no damage but she picks you up. Win → she takes no damage but drops carried items, omens, and/or heroes equal to the difference (you may toss freed heroes to adjacent rooms). If you\'re picked up, the first thing you must do on your turn is attack the Nanny to be dropped.',
      },
      {
        heading: 'Special Movement Rules',
        body: 'Crawl out a window or outside feature on the roof (5 dice physical), upper floor (3 dice), or ground floor (1 die); no damage with the Rope or as a baby. You can walk the ground-floor perimeter and hide in dumbwaiters (+2 defense dice). If a trait is at the skull and you need to roll it for a room feature, you automatically succeed.',
      },
      {
        heading: 'Special Item and Omen Rules',
        body: 'You can carry at most one item or omen card per point of Might (minimum one); drop the excess in an Item Pile.',
      },
    ],
    monsters: [],
  },

  {
    id: 96,
    title: 'House of Leavings',
    intro:
      'You\'ve been pulled into an alternate dimension. A friend scurries off cackling, and you hear pleading ghostly voices and the snorting of a very large... minotaur, maybe? It\'s really hard to tell what is real here.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Put all heroes\' figures in the Entrance Hall. Put the undiscovered room tiles back in the box. Set aside the Abandoned Room tile. Pick up all discovered non-landing tiles, divide them into two equal stacks, shuffle the Abandoned Room into one, and put that stack under the other (so the Abandoned Room is in the bottom half). Put the traitor\'s explorer token on the omen that started the haunt.',
      },
      {
        heading: 'You Win When',
        body: 'Any hero ends their turn with all living heroes in the Abandoned Room.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'Only the hero carrying the omen that started the haunt can attack the traitor. You can make Sanity attacks against the Minotaur if it\'s in your line of sight; if you defeat it, move it to any room within your line of sight.',
      },
      {
        heading: 'Special Movement Rules',
        body: 'All rooms you discover are "new" and must be discovered normally. The Minotaur may leave Claw Marks; if an explorer draws the Abandoned Room and it would be placed adjacent to a Claw Mark, shuffle it back, then place it regardless if drawn again immediately.',
      },
    ],
    monsters: [],
  },

  {
    id: 97,
    title: 'Lambs to the Slaughter',
    intro:
      'Ominous howling, then banging. Red eyes prowl the windows; one Wolf throws itself against the door. "Owwwwwooo." Wait — did that howl come from inside the house? Did it come from you?',
    sections: [
      {
        heading: 'Right Now',
        body: 'Take small yellow monster tokens (Origins) numbered 1 to the number of explorers; shuffle them face-down and deal one to each explorer (don\'t look). If there are fewer than five open ground-floor doors (including the front door), draw ground-floor rooms until there are five. Put a red monster token (Wolf) outside five different open ground-floor doors (Barricaded doors). Set aside Obstacle tokens (Barricades) 1–16: put tokens 12–16 face-down on the five Barricaded doors, then one of the remaining eleven next to each (two per door); shuffle each door\'s into a stack. The rest form a face-down Shed. In turn order from the haunt revealer, each explorer puts their figure in a different landing or dumbwaiter room.',
      },
      {
        heading: 'What You Know About the Bad Guys',
        body: 'One of you was raised by the Wolves, but no one knows who — not even that explorer. The traitor builds sabotaged Barricades to hide their Origin, which is revealed if the traitor dies.',
      },
      {
        heading: 'If You Are Not Raised by Wolves, You Win When',
        body: 'You kill the traitor. Each time an explorer dies, reveal their Origin; if it\'s numbered 1, the other explorers win.',
      },
      {
        heading: 'If You Are Raised by Wolves, You Win When',
        body: 'You have the Origin numbered 1 and either all the other heroes are dead or the Wolves have broken into the house.',
      },
      {
        heading: 'You Must Do This on Your Turn',
        body: 'At the end of your turn, the Wolves attack: choose a Barricaded door with the most Barricades and reveal one. If numbered 1–5, it\'s sabotaged (put it and the next Barricade into the Shed and shuffle). Otherwise roll 1 die — blank shuffles it back, non-blank puts it into the Shed. If no Barricades remain and a non-blank is rolled, the Wolves slay all explorers except their lost pup. Also, if you end your turn alone with another explorer, you may look at their Origin (give it back); you may say anything about it, true or not.',
      },
      {
        heading: 'Special Action Rules',
        body: 'Once per turn in a room with a Barricaded door, build or inspect a Barricade. Build: draw three from the Shed, shuffle one into the door\'s stack, return the rest. Inspect: look at the top Barricade and put it on top or bottom of the stack.',
      },
      {
        heading: 'Special Movement Rules',
        body: 'You cannot move through, see through, or discover rooms on the other sides of Barricaded doors.',
      },
    ],
    monsters: [],
  },

  {
    id: 98,
    title: 'Plastic Fantastic',
    intro:
      'You came for peace and quiet, but the lodge is filled with dull-eyed mannequins that have absorbed your friend\'s consciousness. For the moment they are docile. For the moment.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Discard all weapon item and omen cards, and draw an equal number of non-weapon item cards.',
      },
      {
        heading: 'You Win When',
        body: 'All the Mannequins have left the house and at least one hero is still alive.',
      },
      {
        heading: 'Special Movement Rules',
        body: 'For movement, all face-up Mannequins in a room count as one monster.',
      },
      {
        heading: 'Special Attack Rules',
        body: 'Mannequins are plastic and can\'t be damaged by physical attacks. If you end your turn in a room with one or more face-up Mannequins, you may attack with Sanity or Knowledge; the number of face-up Mannequins is the dice rolled against you. If you defeat them, turn all in the room face-down; if not, take the normal mental damage.',
      },
      {
        heading: 'Special Item and Omen Rules',
        body: 'If you draw a weapon from the item or omen stack, discard it and draw another from the same stack.',
      },
    ],
    monsters: [],
  },

  {
    id: 99,
    title: 'The Manor of Your Demise',
    intro:
      'A smoldering box sucks you in head-first, and you find yourselves in the entrance hall of a tiny old mansion. If you don\'t investigate this house, you\'ll never be able to stop playing this game.',
    sections: [
      {
        heading: 'Right Now',
        body: 'Pick up every non-landing room tile and shuffle them back into the room stack. Put each living explorer\'s figure in the Entrance Hall (those who died don\'t rejoin); keep your current traits and item cards. Discard all other cards (if this would drop a trait to the skull, lower it to the lowest value above). Shuffle all discard piles back into their stacks. Set a timer at 30:00, or half of the last time you set for this haunt (whichever is lower). Start the timer and begin a new game of Betrayal at House on the Hill.',
      },
      {
        heading: 'You Win When',
        body: 'You draw the Box omen card in this new game. You lose when all explorers have died, or the timer reaches 0:00 and you haven\'t found the Box.',
      },
      {
        heading: 'Special Damage Rules',
        body: 'Because you revealed a haunt in the previous game, your traits can drop to the skull now. If that happens, you die and don\'t return.',
      },
      {
        heading: 'Special Haunt Rules',
        body: 'Even though you revealed a haunt before, you haven\'t revealed one in this game. Make a haunt roll at the end of your turn if you draw an omen other than the Box. If you reveal the haunt in this new game, read this haunt again from the top.',
      },
    ],
    monsters: [],
  },

  {
    id: 100,
    title: "Let's Play a Game",
    intro:
      'A cassette tape croaks a Saw-like invitation: the house is filled with challenges of a madman\'s design, set to burn with you inside. Each of you must choose — do you trust your friends, or go it alone?',
    sections: [
      {
        heading: 'Right Now',
        body: 'You may reset any of your traits to 1 above their starting values. Put the 24 Obstacle tokens (Challenges) face-down randomly in rooms without explorers, spread roughly evenly across floors (set aside extras). Open the Traitor\'s Tome to this haunt for the Challenges. Set the Turn/Damage track to 8 in front of the haunt revealer. Each explorer takes a red and a blue monster token; review How to Vote, then secretly choose one and reveal together.',
      },
      {
        heading: 'How to Vote',
        body: 'Red (loner): vanquish four Challenges by yourself, reducing the number by 1 for each explorer you kill; when you make a physical attack, steal an item if you win by 2 or more. Blue (team): work with everyone else who voted blue, vanquishing a number of Challenges equal to three times the living teammates. If a team forms, search the item stack and discard pile for the Amulet of the Ages, Ceremonial Robe, Chainsaw, Medical Kit, Pickpocket Gloves, and Rabbit\'s Foot, and deal one to each teammate (shuffle the rest in).',
      },
      {
        heading: 'You Win When',
        body: 'You vanquish all of your Challenges before dying or before the Turn/Damage track reaches 0. Anyone who hasn\'t achieved victory when someone wins or the haunt ends is killed in the fire.',
      },
      {
        heading: "You Must Do This on the Haunt Revealer's Turn",
        body: 'At the start of the haunt revealer\'s turn (even if they\'ve died), lower the Turn/Damage track.',
      },
      {
        heading: 'How to Reveal and Vanquish Challenges',
        body: 'When you discover a new room and Challenges were set aside, put one face-down there. In a room with a face-down Challenge, spend 3 movement to secretly preview its number, or spend 1 movement to flip it and consult its entry to try to vanquish it (this ends your movement). Vanquishing puts the token on your card. On a team, you count as your own teammate for Challenge text.',
      },
    ],
    monsters: [],
  },

];

export function findSecretsOfSurvival(id: number): HauntStory | undefined {
  return SECRETS_OF_SURVIVAL.find((h) => h.id === id);
}

/**
 * Look up the heroes' side of a haunt in the given language, falling back to
 * English when no Vietnamese translation exists yet (see
 * `secretsOfSurvival.vi.ts`).
 */
export function getSecretsOfSurvival(id: number, lang: Lang = 'en'): HauntStory | undefined {
  if (lang === 'vi' && SECRETS_OF_SURVIVAL_VI[id]) return SECRETS_OF_SURVIVAL_VI[id];
  return findSecretsOfSurvival(id);
}
