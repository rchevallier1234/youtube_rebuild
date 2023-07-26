import { create_form_plus } from "./create_video_plus.js";

function create_form_detail()
{
    let detail = document.createElement("div");
    detail.id = "détail";

    let title = document.createElement("h2");
    title.innerText = "Detail";
    detail.appendChild(title);

    let titre = document.createElement("textarea");

    titre.setAttribute("max", "100");
    titre.setAttribute("placeholder", "Ajouter un titre pour décrire votre video");
    detail.appendChild(titre);

    let comment = document.createElement("textarea");
    comment.setAttribute("max", "5000");
    comment.setAttribute("placeholder", "Présenter votre vidéo a vos spectateur");
    detail.appendChild(comment);

    return (detail);
}

function create_form_mignature()
{
    let mignature = document.createElement("div");
    mignature.setAttribute("id", "mignature");

    let title = document.createElement("h3");
    title.innerText = "Mignature";
    mignature.appendChild(title);

    let explanation = document.createElement("p");
    explanation.innerText = "Sélectionnez ou importez une image qui donne \
    un aperçu du contenu de votre vidéo. Une bonne image se remarque et attire l'attention des spectateurs.";
    mignature.appendChild(mignature.appendChild(explanation));

    let file = document.createElement("input");
    file.setAttribute("type", "file");
    file.setAttribute("accept", "image/png, image/jpeg");
    file.setAttribute("id", "file");
    mignature.appendChild(file);
    return (mignature);
}

function create_select_playlist_option()
{
    let select = document.createElement("select");
    for (let i = 1; i != 3; i++) {
        let option = document.createElement("option");
        option.innerText = `playlist ${i}`;
        select.appendChild(option);
    }
    //optenire les playlistes créé;
    return (select);
}

function create_form_playlist()
{
    let playlist = document.createElement("div");
    playlist.setAttribute("id", "playlist");

    let title = document.createElement("h3");
    title.innerText = "Playlist";
    playlist.appendChild(title);

    let explanation = document.createElement("p");
    explanation.innerText = "Ajoutez votre vidéo à une ou plusieurs playlists. \
        Les playlists peuvent aider les spectateurs à trouver vos contenus plus rapidement.";
    playlist.appendChild(explanation);

    let select = create_select_playlist_option()
    playlist.appendChild(select);

    return (playlist);
}

function create_form_audience()
{
    let audiance = document.createElement("div");
    audiance.id = "audiance";

    let title = document.createElement("h3");
    title.innerText = "Audiance";
    audiance.appendChild(title);

    let explanation = document.createElement("p");
    explanation.innerHTML = "<strong>Cette vidéo a-t-elle été conçue pour les enfants ? (obligatoire)</strong> <br> \
        Quel que soit votre pays de résidence, vous êtes légalement tenu de respecter la loi COPPA (Children's Online Privacy Protection Act) et/ou d'autres lois.\
        Vous devez nous indiquer si vos vidéos sont conçues pour les enfants. En quoi consistent les contenus conçus pour les enfants ?";
    audiance.appendChild(explanation);

    let choice = document.createElement("div");
    choice.innerHTML = '<input type="radio" id="contactChoice1" name="audiance" value="enfant" /> <label for="contactChoice1">Oui, elle est conçue pour les enfants</label> \
    <br><input type="radio" id="contactChoice2" name="audiance" value="adult" /> <label for="contactChoice2">Non, elle n\'est pas conçue pour les enfants</label>'
    audiance.appendChild(choice);
    return (audiance);
}

function create_form_age_limit()
{
    let age_limite = document.createElement("div");
    age_limite.id = "age limite";

    let title = document.createElement("h3");
    title.innerText = "Limite age";
    age_limite.appendChild(title);

    let explanation = document.createElement("p");
    explanation.innerHTML = "<strong>Souhaitez-vous limiter cette vidéo à un public adulte ?</strong><br> \
        Les vidéos soumises à une limite d'âge n'apparaissent pas dans certaines sections de YouTube. \
        Il est possible que leur monétisation soit limitée ou qu'aucune annonce n'y soit diffusée. En savoir plus";
    age_limite.appendChild(explanation);

    let choice = document.createElement("div");
    choice.innerHTML = '<input type="radio" id="ageChoice1" name="age_limite" value="plus18" /> <label for="ageChoice1">Oui, elle est conçue pour les enfants</label> \
        <br><input type="radio" id="ageChoice2" name="age_limite" value="moin18" /> <label for="ageChoice2">Non, elle n\'est pas conçue pour les enfants</label>'
    age_limite.appendChild(choice);
    return (age_limite);
}

export function create_form () {
    const popup = document.querySelector(".popup");
    const detail = create_form_detail();
    const mignature = create_form_mignature();
    const playlist = create_form_playlist();
    const audience = create_form_audience();
    const age_limite = create_form_age_limit();
    const plus = create_form_plus();

    popup.appendChild(detail);
    popup.appendChild(mignature);
    popup.appendChild(playlist);
    popup.appendChild(audience);
    popup.appendChild(age_limite);
    popup.appendChild(plus);
}