# react-rails-boilerplate

## Description

This is a simple boilerplate react/rails app. This includes:

1. frontend project generated with `npx create-react-app frontend`
2. backend project generated with `rails new backend`
3. A simple docker-compose setup.

Additionally, for convenience, I've installed **Tailwind** and stubbed out:
- one controller
- one ruby test
- a little axios helper

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
