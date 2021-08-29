# react-rails-boilerplate

## Description

This is a simple boilerplate react/rails app that includes:

1. A frontend project generated with `npx create-react-app frontend`
2. A backend project generated with `rails new backend`
3. A dead-simple docker-compose setup.

Additionally, for convenience, I've installed **Tailwind** and stubbed out:
- one controller
- one model
- one ruby test
- a little axios helper
- a UI component that hits the health check route on the api

## Development

To run the backend locally:
```
bundle install
docker-compose up -d
rake db:migrate
bin/rails server
```

Frontend
```
yarn install
yarn start
```

## Health check for backend
http://localhost:3000/health_check
