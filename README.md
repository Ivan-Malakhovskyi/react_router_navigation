# TASKS

# JSON SERVER

https://my-json-server.typicode.com/Ivan-Malakhovskyi/react_router_navigation

## How to up local json-server

1. npm install json-server
2. Ad db.json data in root your project
3. npx json-server --watch db.json
4. By default server available on http://localhost:3000
5. Change it npx json-server --watch db.json --port 8080
6. Add script in package.json

```json
{
  "mock-api": "json-server --watch db.json --port 8080"
}
```

1. Update routing - add enclosed(вкладений) route

- example /info

2. Refactor TableView
3. Refactor AuthorSubView
4. Refactor BookDetailsView
5.
