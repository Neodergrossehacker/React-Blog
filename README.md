# React-Blog
Anwendung für Wpm Webentwicklung


<b>Features</b>

•	Beiträge anzeigen <br/>
•	Beitragsliste durchsuchen<br/>
•	User-Authentifizierung<br/>
•	Posten von neuen Beiträgen<br/>
•	Likes verteilen<br/>
•	Echtzeit Updates<br/>

<b>Frontend:</b><br/>
React: Frontend framework <br/>
Apollo Client 2.1: Caching GraphQL client

<b>Backend:</b><br/>
graphql-yoga: GraphQL Server <br/>
Prisma: GraphQL API Layer verbindet meine Datenbank mit einer GraphQL API

<b>GraphQl-Schema / CRUD-Operationen:</b><br/>

•	Queries:<br/>
  feed: Hole Beiträge aus dem Backend<br/>
•	Mutations:<br/>
  post: Erstelle neue Beiträge <br/>
  signup: Erstelle einen neuen Account<br/>
  login: Login <br/>
  vote: „Gefällt mir“ - Angabe<br/>
•	Subscriptions:<br/>
  newLink: Echtzeitupdate für neue Links<br/>
  newVote: Echtzeitupdate für neue Votes

