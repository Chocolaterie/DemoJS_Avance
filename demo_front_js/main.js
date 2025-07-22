// Récupérer un élément du DOM (le bouton avec l'id btn-api)
const buttonApi = document.getElementById('btn-api');

buttonApi.addEventListener('click', () => {
    // le code executé "quand" je clique sur le bouton
    // alert(`J'ai cliqué sur le bouton`);

    // URI de l'API
    const apiURI = "http://localhost:3000/articles";

    // Toujours avant d'appeler un traitement async : afficher popup de chargement
    UIkit.modal('#modal-loading').show();

    // Attendre 1 sec avant de fermer la popup
    setTimeout(() => {
        // Appeler l'API
        fetch(apiURI).then(response => {
            // Le code à executer lorsqu'on a la réponse HTTP
            // Le code de la vue
            console.log(response)

            // Afficher dans la console le body de la réponse en JSON
            const data = response.json();
            console.log(data)

            // Retourne les données JSON Asynchrone (Promise)
            return data;

            // 2eme then => récupérer le return du then précédent
        }).then(data => {
            console.log(data)
            // Peupler une liste d'article <ul><li> à partir de data qui est une liste d'article JS

            // Récupérer le div uk-grid  'wrapper-articles' qui va contenir les cards
            const wrapperArticles = document.getElementById('wrapper-articles');

            // Vider le wrapper articles (en gros vider les articles)
            wrapperArticles.innerHTML = ``;

            // Pour chaque article dans le JSON
            data.forEach(article => {
                // créer un div
                const divCardArticle = document.createElement('div');

                // Injecter un ensemble HTML dans le div 
                divCardArticle.innerHTML = `
                <div class="uk-card uk-card-default uk-card-body">
                    <h3 class="uk-card-title">${article}</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            `;

                // Ajouter le div 'divCardArticle' dans le div 'wrapperArticles' (comme on avait fait avec le ul)
                wrapperArticles.appendChild(divCardArticle);
            });

            // Aprés avoir afficher la liste des article 
            // Fermer la popup
            UIkit.modal('#modal-loading').hide();
        });
    }, 1000);
})