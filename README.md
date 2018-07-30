# React-Blog
Anwendung für Wpm Webentwicklung

Die Anwendung ist ein Blog, auf React- und GQL- Basis in dem unbegrenzt Personen Beiträge schalten können. Dazu gehört das Teilen von kurzen Posts, Zitaten und Links.

Beim Versuch die App auf Heroku zu deployen traten Probleme auf, die auf Grund der angehängten Datenbank entstanden sind und ich leider nicht rechtzeitig lösen konnte, daher ist eine Ansicht derzeit nur im lokalen Browser möglich. 

Um die Anwendung zu starten :

1. ZIP download oder kopie über Key erstellen </br>
2. $ cd react-blog/server </br> $ yarn install
3. $ cd react-blog </br>$ yarn install </br>$ yarn start</br></br>



![Archtitektur](PaperReactBlog.png?raw=true "Archtitektur")

<b>Features</b>

•	Beiträge anzeigen <br/>
•	Beiträge filtern nach Aktualität und Beliebtheit <br/>
•	Beitragsliste durchsuchen<br/>
•	User-Authentifizierung<br/>
•	Posten von neuen Beiträgen<br/>
•	Likes verteilen<br/>
•	Echtzeit Updates<br/>

<b>Frontend:</b><br/>
<i>React</i>: Frontend framework <br/>
<i>Apollo Client 2.1</i>: Caching GraphQL client

<b>Backend:</b><br/>
<i>graphql-yoga</i>: GraphQL Server <br/>
<i>Prisma</i>: GraphQL API Layer verbindet meine Datenbank mit einer GraphQL API

<b>GraphQl-Schema / CRUD-Operationen:</b><br/>

<b>Queries:</b><br/>
  •	feed: Hole Beiträge aus dem Backend<br/>
<b>Mutations:</b><br/>
  •	post: Erstelle neue Beiträge <br/>
  •	signup: Erstelle einen neuen Account<br/>
  •	login: Login <br/>
  •	vote: „Gefällt mir“ - Angabe<br/>
<b>Subscriptions:</b><br/>
  •	newLink: Echtzeitupdate für neue Links<br/>
  •	newVote: Echtzeitupdate für neue Votes

