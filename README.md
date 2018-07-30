# React-Blog
Anwendung für Wpm Webentwicklung


<b>Features</b>

•	Beiträge anzeigen 
•	Beitragsliste durchsuchen
•	User-Authentifizierung
•	Posten von neuen Beiträgen
•	Likes verteilen
•	Echtzeit Updates

<b>Frontend:</b>
React: Frontend framework 
Apollo Client 2.1: Caching GraphQL client

<b>Backend:</b>
graphql-yoga: GraphQL Server 
Prisma: GraphQL API Layer verbindet meine Datenbank mit einer GraphQL API

<b>GraphQl-Schema / CRUD-Operationen:</b>

•	Queries:
  feed: Hole Beiträge aus dem Backend
•	Mutations:
  post: Erstelle neue Beiträge 
  signup: Erstelle einen neuen Account
  login: Login 
  vote: „Gefällt mir“ - Angabe
•	Subscriptions:
  newLink: Echtzeitupdate für neue Links
  newVote: Echtzeitupdate für neue Votes

