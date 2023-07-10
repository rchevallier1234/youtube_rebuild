DROP DATABASE IF EXISTS youtube_remake;
CREATE DATABASE youtube_remake;

use youtube_remake;

CREATE TABKE video (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    id_user INT UNSIGNED,
    id_playlists: INT UNSIGNED,
    title: String,
    Description: String;
    url_video: String;
    url_mignature: String;
    url_end_image: String;
    id_playlists: Int;
    audience: Boolean;
    age_min: Boolean;
    commercial_communication: Boolean;
    Automatic_chapters: Boolean;
    Automatic_places: Boolean;
    tag: String;
    Langue: String;
    recording_Date: String;
    recording_place: String;
    Licence: String;
    Integration: Boolean;
    Abonnement: Boolean;
    Remix_Shorts: String;
    category: String;
    Comment: String;
    Comment_short: String;
    nb_like: Boolean;
//visibility
    save: Boolean;
    type_save: int;
    date_post: String
);

user {
    id: int,
    email: String,
    first_name: String;
    last_name: String | faculatife;
    birth_date: String;
    gender: String;
    url_img: String;
    id_playlists: Array;
    chaine_support: Array;
    Description: String;
    info: String;
    nb_views: Int;
    date_creation: int;
    id_history: Array;
}
