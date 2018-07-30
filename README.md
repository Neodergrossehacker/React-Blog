# React-Blog
Anwendung für Wpm Webentwicklung

![Archtitektur](PaperReactBlog.png?raw=true "Archtitektur")

<b>Features</b>

•	Beiträge anzeigen <br/>
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

