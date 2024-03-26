function toggleNav() {
    var navbar = document.getElementById('navbar');

    // Si la classe "open" est présente, on la supprime, sinon on l'ajoute
    if (navbar.classList.contains('open')) {
        navbar.classList.remove('open');
    } else {
        navbar.classList.add('open');
    }
}

function openStory(storyId) {
    var mainContent = document.getElementById("mainContent");

    // Insère le contenu de l'histoire basé sur l'identifiant de l'histoire
    switch (storyId) {
        case "story1":
            mainContent.innerHTML = "<h2>Story 1</h2><p>C'était une fois, dans une forêt lointaine, un petit lapin qui s'appelait Bob. Bob aimait sauter et jouer toute la journée. Un jour, il rencontra une tortue nommée Tim. Tim était très lent, mais Bob aimait bien la compagnie de Tim. Ensemble, ils partirent à l'aventure à travers la forêt.</p>";
            break;
        case "story2":
            mainContent.innerHTML = "<h2>Story 2</h2><p>Il était une fois, un petit garçon nommé Tom qui rêvait de devenir un astronaute. Il passait son temps à lire des livres sur l'espace et à observer les étoiles la nuit. Un jour, il construisit une fusée en carton et imagina qu'il voyageait dans l'espace, explorant des planètes lointaines et découvrant de nouveaux mondes.</p>";
            break;
        case "story3":
            mainContent.innerHTML = "<h2>Story 3</h2><p>Dans un royaume enchanté, vivait une princesse nommée Sofia. Sofia était très curieuse et aimait explorer les jardins du château. Un jour, elle découvrit un passage secret caché derrière un buisson. Intriguée, elle décida de l'explorer et fut transportée dans un monde magique rempli de créatures fantastiques.</p>";
            break;
        // Ajoutez d'autres cas pour plus d'histoires si nécessaire
        default:
            mainContent.innerHTML = "<p>Story not found.</p>";
    }
}
