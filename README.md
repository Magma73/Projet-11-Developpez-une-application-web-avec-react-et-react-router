# Projet 11 - Développez une application Web avec React et React Router

## Contexte du projet

Kasa est dans le métier de la location d’appartements entre particuliers depuis près de 10 ans maintenant. Avec plus de 500 annonces postées chaque jour Kasa fait partie des leaders de la location d’appartements entre particuliers en France.
Le site de Kasa a été codé il y a maintenant plus de 10 ans en http://ASP.NET avec un code legacy important. Aujourd’hui, Kasa souhaite passer à une stack complète en JavaScript avec NodeJS côté Back-end, et React côté Front-end. Kasa en a également profité pour commander de nouvelles maquettes auprès de son designer habituel.

## Mission du projet

La mission pour ce projet était de faire la refonte du site de Kasa : développer l’ensemble de l’application, les pages, les composants React et les routes React Router.

## Technologies utilisées

- React : pas de librairie React externe
- React Router : gérer les routes
- Modules CSS : gérer le css
- Prettier : mettre en forme le code
- ESLint : indiquer les erreurs et sécuriser le code
- Figma : consulter les maquettes
- Github : versionner le code

## Maquettes à respecter

La base des maquettes a été créée via [Figma](https://www.figma.com/file/bAnXDNqRKCRRP8mY2gcb5p/ARCHIVE-UI-Design-Kasa-FR?type=design&node-id=75-109&t=klBWtEHHrFVTx8Y3-0).

### Page d'accueil

![Maquette Kasa accueil](/public/assets/maquettes/D_Home.png)

## Notes et contraintes du projet

**Police :**

- Polices : [DM Sans ](https://fonts.google.com/specimen/DM+Sans?query=dm+sans)

**Couleurs :**

- Rouge : #FF6060
- Gris : #F6F6F6
- Noir : #000000
- Blanc : #FFFFFF

**Contraintes :**

- Techniques (cf le ![guidline](/public/assets/maquettes/Coding+guidelines+Kasa+FR.pdf))

  - Réaliser des composants modulaires et réutilisables
  - Faire un composant par fichier
  - Structurer logiquement les différents fichiers
  - Utiliser des props entre les composants
  - Utiliser du state dans les composants quand c'est nécessaire
  - Gérer les événements
  - Utiliser la méthode map
  - Privilégier les composants fonctionnels plutôt que des composants classes
  - Gérer les paramètres des routes avec React Router dans l'URL et récupérer les informations de chaque logement
  - Créer une page par route
  - Renvoyer la page 404 pour chaque route inexistante, ou si une valeur présente dans l’URL ne fait pas partie des données renseignées
  - Réunir la logique du routeur dans un seul fichier

- Approche et maquettes

  - Approche : mobile first
  - Maquette desktop : oui
  - Maquette tablette : à improviser
  - Maquette mobile : oui

- Validateurs
  - Aucune erreur ou warning dans la console

## Tester le projet

Pour tester simplement et rapidement le projet, vous pouvez visiter la démo en ligne : https://lucky-sable-03032a.netlify.app/

Sinon, vous pouvez également cloner le projet :

`https://github.com/Magma73/Projet-11-Developpez-une-application-web-avec-react-et-react-router.git`

Accédez au répertoire du projet puis utilisez la commande `npm install` pour installer les dépendances du projet et `npm start` pour ouvrir l'application dans votre navigateur.
