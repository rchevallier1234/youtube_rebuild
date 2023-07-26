function create_checkbox_element(name, text)
{
    let div_element = document.createElement("div");
    let input = document.createElement("input");
    input.id = name;
    input.setAttribute("type", "checkbox");
    input.setAttribute("name", name);
    div_element.appendChild(input);
    let text_element = document.createElement("label");
    text_element.setAttribute("for", name);
    text_element.innerText = text;
    div_element.appendChild(text_element);

    return (div_element);
}

function create_radio_element(name, value, text, nb) {
    let div_element = document.createElement("div");
    let input = document.createElement("input");
    input.id = `${name}_${nb}`;
    input.setAttribute("type", "radio");
    input.setAttribute("name", name);
    input.value = value;
    div_element.appendChild(input);
    let text_element = document.createElement("label");
    text_element.setAttribute("for", `${name}_${nb}`);
    text_element.innerText = text;
    div_element.appendChild(text_element);

    return (div_element);
}

function create_form_pub()
{
    let pub = document.createElement("div");
    pub.id = "pub";

    let title = document.createElement("h3");
    title.innerText = "Communication commerciale";
    pub.appendChild(title);

    let explanation = document.createElement("p");
    explanation.innerText = "Si vous avez accepté une contrepartie de valeur de la part d'un tiers \
        pour réaliser cette vidéo, vous devez nous le faire savoir. Nous afficherons un message à \
        destination des spectateurs pour leur indiquer que votre vidéo contient une communication commerciale.";
    pub.appendChild(explanation);

    
    let choice = create_checkbox_element("pub_choice", "En cochant cette case, vous confirmez que la communication commerciale respecte\
        nos règles relatives aux annonces ainsi que les lois et réglementations en vigueur.");
    pub.appendChild(choice);

    let explanation2 = document.createElement("p");
    explanation2.innerText = "En cochant cette case, vous confirmez que la communication commerciale respecte \
        nos règles relatives aux annonces ainsi que les lois et réglementations en vigueur.";
    pub.appendChild(explanation2);

    return (pub);
}

function create_form_chapters()
{
    let element = document.createElement("div");
    element.id = "chapters";

    let title = document.createElement("h3");
    title.innerText = "Chapitres automatiques";
    element.appendChild(title);

    let explanation = document.createElement("p");
    explanation.innerText = "Les chapitres et temps forts peuvent faciliter le visionnage de votre vidéo. \
    Vous pouvez remplacer à tout moment les suggestions automatiques en \
    créant des chapitres dans la description de la vidéo. ";
    element.appendChild(explanation);

    let choice = document.createElement('input');
    choice.setAttribute("type", "checkbox");
    choice.id = "pub_choice";
    choice.name = "chapiter";
    element.appendChild(choice);
    let text = document.createElement("label");
    text.setAttribute("for", "chapiter");
    text.innerText = "Autoriser les chapitres et temps forts automatiques";
    element.appendChild(text);
    

    return (element);
}

function create_form_place()
{
    let element = document.createElement("div");
    element.id = "place";

    let title = document.createElement("h3");
    title.innerText = "Lieux mentionnés";
    element.appendChild(title);

    let explanation = document.createElement("p");
    explanation.innerText = "Permettez aux spectateurs d'explorer les principaux lieux d'intérêt visibles \
        dans votre vidéo. Il s'agit de lieux publics tels que des restaurants et des magasins. \
        Nous n'affichons pas votre position actuelle ni d'autres informations personnelles";
    element.appendChild(explanation);

    let choice = document.createElement('input');
    choice.setAttribute("type", "checkbox");
    choice.id = "pub_choice";
    choice.name = "pub"
    choice.innerText = "Autoriser les chapitres et temps forts automatiques";
    element.appendChild(choice);
    let text = document.createElement("label");
    text.setAttribute("for", "pub");
    text.innerText = "Autoriser les chapitres et temps forts automatiques"
    element.appendChild(text);

    return (element);
}

function create_form_tags()
{
    let element = document.createElement("div");
    element.id = "tags";

    let title = document.createElement("h3");
    title.innerText = "Tags";
    element.appendChild(title);

    let explanation = document.createElement("p");
    explanation.innerText = "Les tags peuvent être utiles, par exemple, si les mots désignant \
        le contenu de votre vidéo sont souvent mal orthographiés. À part cela, les tags n'ont qu'un \
        impact minime sur la visibilité de vos contenus.";
    element.appendChild(explanation);
    
    let text_tags = document.createElement("input");
    text_tags.setAttribute("type", "text");
    text_tags.setAttribute("placeholder", "Ajouter un tags");
    text_tags.setAttribute("max", "500");
    element.appendChild(text_tags);

    let explanation2 = document.createElement("p");
    explanation2.innerText = "Séparez chaque tag par une virgule";
    element.appendChild(explanation2);

    return (element);
}

function create_form_language()
{
    let element = document.createElement("div");
    element.id = "language";

    let title = document.createElement("h3");
    title.innerText = "Langue et certificat de sous-titrage";
    element.appendChild(title);

    let explanation = document.createElement("p");
    explanation.innerText = "Sélectionnez la langue de votre vidéo et, si nécessaire, un certificat de sous-titrage.";
    element.appendChild(explanation);

    let language_choice = document.createElement("select");
    let pays_array = ["France",
        "Egypte",
        "Emirats Arabes Unis",
        "Equateur",
        "Erythrée",
        "Espagne",
        "Estonie",
        "Etats-Unis d'Amérique",
        "Ethiopie",
        "Fidji",
        "Finlande",
        "France",
        "Gabon",
        "Gambie",
        "Géorgie",
        "Ghana",
        "Grèce",
        "Grenade",
        "Guatémala",
        "Guinée",
        "Guinée Bissau",
        "Guinée Equatoriale",
        "Guyana",
        "Haïti",
        "Honduras",
        "Hongrie",
        "Inde",
        "Indonésie",
        "Iran",
        "Iraq",
        "Irlande",
        "Islande",
        "Israël",
        "italie",
        "Jamaïque",
        "Japon",
        "Jordanie",
        "Kazakhstan",
        "Kenya",
        "Kirghizistan",
        "Kiribati",
        "Koweït",
        "Laos",
        "Lesotho",
        "Lettonie",
        "Liban",
        "Liberia",
        "Liechtenstein",
        "Lituanie",
        "Luxembourg",
        "Lybie" ,
        "Macédoine",
        "Madagascar",
        "Malaisie",
        "Malawi",
        "Maldives",
        "Mali",
        "Malte",
        "Maroc",
        "Marshall",
        "Maurice",
        "Mauritanie",
        "Mexique",
        "Micronésie",
        "Moldavie",
        "Monaco",
        "Mongolie",
        "Mozambique",
        "Namibie",
        "Nauru",
        "Nepal",
        "Nicaragua",
        "Niger",
        "Nigéria",
        "Nioué",
        "Norvège",
        "Nouvelle Zélande",
        "Oman",
        "Ouganda",
        "Ouzbékistan",
        "Pakistan",
        "Palau",
        "Palestine",
        "Panama",
        "Papouasie Nouvelle Guinée",
        "Paraguay",
        "Pays-Bas",
        "Pérou",
        "Philippines",
        "Pologne",
        "Portugal",
        "Qatar",
        "République centrafricaine",
        "République Dominicaine",
        "République Tchèque",
        "Roumanie",
        "Royaume Uni",
        "Russie",
        "Rwanda",
        "Saint-Christophe-et-Niévès",
        "Sainte-Lucie",
        "Saint-Marin",
        "Saint-Vincent-et-les Grenadines",,
        "Iles Salomon",
        "Salvador",
        "Samoa Occidentales",
        "Sao Tomé et Principe",
        "Sénégal",
        "Serbie",
        "Seychelles",
        "Sierra Léone",
        "Singapour",
        "Slovaquie",
        "Slovénie",
        "Somalie",
        "Soudan",
        "Sri Lanka",
        "Suède",
        "Suisse",
        "Suriname",
        "Swaziland",
        "Syrie",
        "Tadjikistan",
        "Taiwan",
        "Tanzanie",
        "Tchad",
        "Thailande",
        "Timor Oriental",
        "Togo",
        "Tonga",
        "Trinité et Tobago",
        "Tunisie",
        "Turkménistan",
        "Turquie",
        "Tuvalu",
        "Ukraine",
        "Uruguay",
        "Vanuatu",
        "Vatican",
        "Vénézuela",
        "Vietnam",
        "Yemen",
        "Zambie",
        "Zimbabwe"];
    for (let i = 0; pays_array[i] != null; i++) {
        let option = document.createElement("option");
        option.id = pays_array[i];
        option.innerText = pays_array[i];
        language_choice.appendChild(option);
    }
    element.appendChild(language_choice);

    let certif_choice = document.createElement("select");
    let certif_array = [
        "Aucun",
        "Ce contenu n'a jamais été diffusé à la télévision aux États-Unis",
        "Ce contenu a uniquement été diffusé à la télévision aux États-Unis sans sous-titres",
        "Ce contenu n'a pas été diffusé à la télévision aux États-Unis avec des sous-titres depuis le 30 septembre 2012",
        "Ce contenu ne rentre pas dans la catégorie des programmations en ligne qui nécessitent des sous-titres conformément à la réglementation de la FCC (section 47, alinéa 79)",
        "La FCC et/ou le Congrès américain ont accordé une dérogation pour ce contenu en ce qui concerne le respect des exigences de sous-titrage",
    ]
    for (let i = 0; certif_array[i] != null; i++) {
        let option = document.createElement("option");
        option.id = `certif_${i}`;
        option.innerText = certif_array[i];
        certif_choice.appendChild(option);
    }
    element.appendChild(certif_choice);

    return (element);
}

function create_form_recording()
{
    let element = document.createElement("div");
    element.id = "recording";

    let title = document.createElement("h3");
    title.innerText = "Date et lieu d'enregistrement";
    element.appendChild(title);

    let explanation = document.createElement("p");
    explanation.innerText = "Indiquez où et quand votre vidéo a été tournée. Les spectateurs peuvent rechercher des vidéos par lieu.";
    element.appendChild(explanation);

    let date = document.createElement("input");
    date.id = "date";
    date.setAttribute("type", "date");
    element.appendChild(date);

    let place = document.createElement("input");
    place.setAttribute("type", "text");
    place.setAttribute("placeholder", "Rechercher");
    element.appendChild(place);

    return (element);
}

function create_form_license()
{
    let license = document.createElement("div");
    license.id = "license";

    let title = document.createElement("h3");
    title.innerText = "Licences";
    license.appendChild(title);

    let explanation = document.createElement("p");
    explanation.innerText = "En savoir plus sur les types de licences";
    license.appendChild(explanation);

    let select = document.createElement("select");
    let option1 = document.createElement("option")
    option1.innerText = "Licence YouTube standard";
    select.appendChild(option1);
    let option2 = document.createElement("option")
    option2.innerText = "Creative Commons - Attribution";
    select.appendChild(option2);
    license.appendChild(select);

    let integration = create_checkbox_element("integration", "Autoriser l'intégration");
    license.appendChild(integration);

    let abonner = create_checkbox_element("abonner", "Publier dans le flux \"Abonnements\" et informer les abonnés");
    license.appendChild(abonner);

    return (license);
}

function create_form_shorts()
{
    let shorts = document.createElement("div");
    shorts.id = "Short";

    let title = document.createElement("h3");
    title.innerText = "Remix des Shorts";
    shorts.appendChild(title);

    let explanation = document.createElement("p");
    explanation.innerText = "";
    shorts.appendChild(explanation);

    let radio1 = create_radio_element("Remix", "all", "Autoriser le remixage de vidéos et de pistes Audio", 1);
    shorts.appendChild(radio1);

    let radio2 = create_radio_element("Remix", "audio", "Autoriser le remixage de pistes audio uniquement", 2);
    shorts.appendChild(radio2);

    let radio3 = create_radio_element("Remix", "none", "Ne pas autoriser le remixage", 3);
    shorts.appendChild(radio3);

    return (shorts);
}

function create_form_category()
{
    let category = document.createElement("div");
    category.id = "categoty";

    let title = document.createElement("h3");
    title.innerText = "Catégorie";
    category.appendChild(title);

    let explanation = document.createElement("p");
    explanation.innerText = "";
    category.appendChild(explanation);

    return (category);
}

function create_form_element()
{
    let element = document.createElement("div");
    element.id = "element";

    let title = document.createElement("h3");
    title.innerText = "elementaires et avis";
    element.appendChild(title);

    let explanation = document.createElement("p");
    explanation.innerText = "";
    element.appendChild(explanation);

    return (element);
}

export function create_form_plus()
{
    let plus = document.createElement("div")
    plus.id = "plus";
    plus.innerHTML = '<h3>Plus</h3>';

    const pub = create_form_pub();
    const automatic_chapters = create_form_chapters();
    const place = create_form_place();
    const tags = create_form_tags();
    const language = create_form_language();
    const recording = create_form_recording();
    const license = create_form_license();
    const shorts = create_form_shorts();
    const category = create_form_category();
    const element = create_form_element();

    plus.appendChild(pub);
    plus.appendChild(automatic_chapters);
    plus.appendChild(place);
    plus.appendChild(tags);
    plus.appendChild(language);
    plus.appendChild(recording);
    plus.appendChild(license);
    plus.appendChild(shorts);
    plus.appendChild(category);
    plus.appendChild(element);

    return (plus);
}