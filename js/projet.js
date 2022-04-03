
//State = ['En cours', 'Fini', 'En suspend']
var proj = {
    "maj": "2022_03_28",
    "projets": [
        {
            "name": "L'équipe Explore",
            "date": "2020_05",
            "state": "Fini",
            "context": "Personnel",
            "description": "Développement d'un site web pour une équipe d'étudiants en journalisme de l'école du CELSA, pour le prix L\'Équipe Explore.<br>Traitant du sujet de la cohabitation difficile entre Serbes, Albanais et Kosovars au travers du football, l\'équipe de journalistes, la designer et moi-même avons collaboré afin de livrer un site web sur un sujet délicat. Néanmoins, nous avons réussi à fournir un travail suffisament qualitatif pour obtenir la 1ère place de ce concours lancé par le journal L\'Équipe.",
            "imgUrl": "src/projets/EquipeExplore.png",
            "imgIcUrl": "src/icn/icn_projets/Icn_EquipeExplore.png",
            "vidUrl": "",
            "gifUrl": "",
            "footer": "Lien article :<br>https://www.lequipe.fr/Medias/Actualites/Le-celsa-remporte-le-6e-prix-explore/1141167<br>Lien site web :<br>https://www.lequipe.fr/explore/hr14-surface-de-separation/"
        },
        {
            "name": "Youstiti",
            "date": "2018_06",
            "state": "Fini",
            "context": "Professionel",
            "description": "Développement d’une application Android et iOS dans le cadre d’un stage de fin d’étude, puis d'un cdd de 2 mois, pour la startup Intence (anciennement Youstiti).<br>Cette application permet de géocaliser l'utilisateur pendant une certaine période de temps, et d'envoyer les données à des caméras installé préalablement. Ces caméras s'orienteront alors vers l'utilisateur et le filmeront. Ce système peut être mit en place, par exemple dans des stations de ski, des circuits de karting ou encore des zones de surf. L'utilsateur pourra alors profiter de ses loisirs sans devoir s'embeter à filmer, et recevra quand même une vidéo de lui et ses compagnons s'amusant !<br>Pour ce système, je me suis occuper d'implementer les designs, ainsi que plusieurs fonctionnalités, tel que la géolocalisation, le changement de langue, l’export de photos/vidéos sur un serveur. J’ai également pu développer différentes communications avec le serveur, comme pour la demande de connexion, en utilisant des sockets ssl.",
            "imgUrl": "src/projets/Youstiti.png",
            "imgIcUrl": "src/icn/icn_projets/Icn_Youstiti.png",
            "vidUrl": "",
            "gifUrl": "",
            "footer": ""
        },
        {
            "name": "ULR Loc'Salle",
            "date": "2019_04",
            "state": "Fini",
            "context": "Scolaire",
            "description": "Développement d’une application Android pour l'université de La Rochelle. Celle-ci permet de localiser les salles et les bâtiments de la faculté, mais aussi de pouvoir savoir quelles salles sont libres pour travailler.",
            "imgUrl": "src/projets/Ulr.png",
            "imgIcUrl": "src/icn/icn_projets/Icn_Ulr.png",
            "vidUrl": "",
            "gifUrl": "",
            "footer": ""
        },
        {
            "name": "Snake",
            "date": "2019_07",
            "state": "Fini",
            "context": "Personnel",
            "description": "Création d’un jeu mobile Android snake, plus le niveau augmente, plus le serpent va vite, plus la zone de jeu rétrécie et plus le score à obtenir pour finir le niveau est élevé.",
            "imgUrl": "src/projets/Snake.png",
            "imgIcUrl": "src/icn/icn_projets/Icn_Snake.png",
            "vidUrl": "",
            "gifUrl": "",
            "footer": ""
        },
        {
            "name": "Tetris",
            "date": "2019_06",
            "state": "Fini",
            "context": "Personnel",
            "description": "Création d’un jeu tetris dans le cadre d’une game jam organisé par Lola Guilldou, Miss Myu et l’Agrume Masqué. Jeu réalisé seul en un week end en utilisant le logiciel Construct 2. J’ai préféré partir sur un jeu simple mais qui m’a permit d’approfondir les bases de Construct 2, ainsi que certains concepts de programmation.",
            "imgUrl": "src/projets/Tetris.png",
            "imgIcUrl": "src/icn/icn_projets/Icn_Tetris.png",
            "vidUrl": "",
            "gifUrl": "",
            "footer": ""
        },
        {
            "name": "Hamster Life",
            "date": "2019_08",
            "state": "En suspend",
            "context": "Personnel",
            "description": "Création d’un jeu qui simule la vie d’un hamster sous Construct 2.<br>La vie de cet hamster est régit par 4 activitées :<br>- Manger<br>- Boire<br>- Dormir<br>- Jouer<br>Pour réaliser une de ces actions, le joueur devra jouer à un mini-jeu, et selon ca réussite, cela remplira plus ou moins la jauge concernée, et diminuera plus ou moins la ou les jauges contraire. Par exemple si un joueur réussit parfaitement le mini-jeu pour dormir, le niveau de fatigue diminuera beaucoup, et les niveaux de faim, soif et d'ennuie n'augmenteront que peu.<br>Les minis-jeux sont :<br>Pour manger : récupérer les graines qui tombe du ciel.<br>Pour boire : sauter de bulle en bulle pendant un temps imparti.<br>Pour dormir : jeu de type memory.<br>Pour jouer : jeu de plateforme.",
            "imgUrl": "src/projets/Hamster.png",
            "imgIcUrl": "src/icn/icn_projets/Icn_Hamster.png",
            "vidUrl": "",
            "gifUrl": "",
            "footer": ""
        },
        {
            "name": "Chifoumi",
            "date": "2018_04",
            "state": "Fini",
            "context": "Scolaire",
            "description": "Création d’un jeu de pierre - feuille - ciseaux dans le cadre d’un cours d’interface homme machine. Le but était de nous introduire au problème de redimensionnement de fenêtre et à wx-widgets, tout en nous faisant créer un projet complet en C++. Ce projet m’aura permit de comprendre que le redimensionnement de fenêtre est quelque chose de primordial pour un logiciel, et que l’ergonomie en dépend. Au moment de la création de ce jeu, j’avais choisi de définir une taille de fenêtre par défaut, et d’empêcher tout redimensionnement. Aujourd’hui, avec du recul est de nouvelle expérience, je pense que j’aurai plutôt dû autoriser le redimensionnement, en gardant les images et les textes centrés mais s’éloignant/se rapprochant du centre.",
            "imgUrl": "src/projets/PvsC.png",
            "imgIcUrl": "src/icn/icn_projets/Icn_PvsC.png",
            "vidUrl": "",
            "gifUrl": "",
            "footer": ""
        },
        {
            "name": "Slot Machine",
            "date": "2019_10",
            "state": "Fini",
            "context": "Scolaire",
            "description": "Création d’une machine à sous dans le cadre d’un cours de programmation événementielle en python, ce qui nous a permit d’apprendre à utiliser PyQt5 ainsi que QtCreator.",
            "imgUrl": "src/projets/Chance.png",
            "imgIcUrl": "src/icn/icn_projets/Icn_Chance.png",
            "vidUrl": "",
            "gifUrl": "",
            "footer": ""
        },
        {
            "name": "Light-minded",
            "date": "2021_01",
            "state": "En suspend",
            "context": "Personnel",
            "description": "Développement du jeu \"Light-minded\" sur Unity pour la Global Game Jam de 2021, sur le thème \"Lost & Found\".<br>Puzzle game 3D se basant sur l'obscurité et l'utilisation d'une lumière légère pour se déplacer et résoudre des puzzles plus ou moins complexe. Nous avons donc dû créer un système de gestion de la lumière permettant de, par exemple, charger un générateur ou encore créer un rayon lumineux.",
            "imgUrl": "src/projets/Light.png",
            "imgIcUrl": "src/icn/icn_projets/Icn_Light.png",
            "vidUrl": "",
            "gifUrl": "",
            "footer": "https://globalgamejam.org/2021/games/light-minded-6"
        },
        {
            "name": "Run A Round",
            "date": "2021_03",
            "state": "Fini",
            "context": "Scolaire",
            "description": "CCréation d'un Runner 2D sous Unity.<br>La particularité de ce jeu est qu'on tourne dans un cercle. Plus on tourne plus le nombre d'obstacle augmente. Des bonus/malus apparaissent, avec pour effet, par exemple, de changer de sens, de rétrécir ou encore d'accélérer la rotation.",
            "imgUrl": "src/projets/Run.png",
            "imgIcUrl": "src/icn/icn_projets/Icn_Run.png",
            "vidUrl": "",
            "gifUrl": "",
            "footer": ""
        },
        {
            "name": "Spaaaaace",
            "date": "2021_03",
            "state": "Fini",
            "context": "Scolaire",
            "description": "Développement d'un jeu de course spatiale sur Unity.<br>J'ai dû développer un système d'apparition automatique de divers objets spatiaux qui peuvent gêner le joueur dans sa course ainsi que d'endommager son vaisseau. De plus créer un système d'accélération qui diffère selon le vaisseau utilisé. Un système d'arme et de tir a aussi été rajouté pour pouvoir détruire différents obstacles.",
            "imgUrl": "src/projets/Space.png",
            "imgIcUrl": "src/icn/icn_projets/Icn_Space.png",
            "vidUrl": "",
            "gifUrl": "",
            "footer": ""
        },
        {
            "name": "Metro",
            "date": "2019_10",
            "state": "Fini",
            "context": "Scolaire",
            "description": "Développement d’un logiciel en python permettant de calculer le chemin le plus court entre deux stations du métro de Paris.<br>Pour cela j'ai utilisé plusieurs méthodes. Tout d'abord l'algorithme de Dijkstra classique, puis une amélioration qui évite des redondances de recherche en évitant de revenir plusieurs fois sur une même station. Je l'ai aussi fait en utilisant l'algorithme A* ainsi qu'en démarrant Dijkstra dans les deux sens. En appliquant ces diverses méthodes, on peut remarquer que l'algorithme des A* et celui du double Dijkstra sont les plus efficaces, du fait d'une complexité moindre.",
            "imgUrl": "src/projets/Metro.png",
            "imgIcUrl": "src/icn/icn_projets/Icn_Metro.png",
            "vidUrl": "",
            "gifUrl": "",
            "footer": ""
        },
        {
            "name": "Marching Square",
            "date": "2019_11",
            "state": "Fini",
            "context": "Scolaire",
            "description": "Développement d'un logiciel en C, permettant de mettre en place l'algorithme de \"Marching Square\".<br>Cet algorithme permet de visualiser des données sous forme d'images 2d. Dans le cas ci dessous, les données utilisées correspondaient à celle d'un relief montagneux.",
            "imgUrl": "src/projets/Square.png",
            "imgIcUrl": "src/icn/icn_projets/Icn_Square.png",
            "vidUrl": "",
            "gifUrl": "",
            "footer": ""
        },
        {
            "name": "Météo",
            "date": "2020_04",
            "state": "Fini",
            "context": "Scolaire",
            "description": "Développement d'un logiciel en C, permettant de visualiser des données correspondant à des champs de vecteurs.<br>Pour cela un maillage est défini, puis selon un fichier de données, des vecteurs sont placés, contenant une vitesse. Ce qui nous donne, pour l'exemple ci dessus, la modélisation des courants d'air de la zone définie par les données.",
            "imgUrl": "src/projets/Vent.png",
            "imgIcUrl": "src/icn/icn_projets/Icn_Vent.png",
            "vidUrl": "",
            "gifUrl": "",
            "footer": ""
        },
        {
            "name": "EDF Flower",
            "date": "2020_05",
            "state": "Fini",
            "context": "Scolaire",
            "description": "Création d'une animation sur Blender, devant montrer l'évolution de la smart flower d'EDF au cours de la journée",
            "imgUrl": "src/projets/FleurEdf.png",
            "imgIcUrl": "src/icn/icn_projets/Icn_FleurEdf.png",
            "vidUrl": "src/videos/FleurEdf.mp4",
            "gifUrl": "src/gifs/FleurEdf.gif",
            "footer": ""
        }
    ]
}

function initProj() {
    var tab = document.getElementById("tableProjs");
    var tr = document.createElement('tr');
    tr.setAttribute('class', 'realTr');
    var td;
    var img;

    for (i = 0; i < proj.projets.length; i++) {
        td = document.createElement('td');
        td.setAttribute('class', 'realTd');

        img = document.createElement('img');

        if (proj.projets[i].gifUrl != "") {
            img.setAttribute('src', proj.projets[i].gifUrl);
        } else {
            img.setAttribute('src', proj.projets[i].imgIcUrl);
        }

        //img.setAttribute('src', proj.projets[i].imgIcUrl);
        img.setAttribute('alt', 'Avatar');
        img.setAttribute('onclick', 'qget(\'' + i + '\')');

        td.appendChild(img);
        tr.appendChild(td);

        if ((i+1)%5 == 0) {
            tab.appendChild(tr);
            tr = document.createElement('tr');
            tr.setAttribute('class', 'realTr');
        }
    }

    if ((proj.projets.length+1)%5 != 0) {
        tab.appendChild(tr);
    }
}