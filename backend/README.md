# Rails Backend

## Development
Fetch dependencies with: bundle install

## Credential Management
This project uses rails encrypted credentials.

Since this is a boilerplate, the master.key file is in version control, but you need to generate your own and keep it
secret.
 
To edit the encrypted credentials file with VS Code run `EDITOR="code --wait" bin/rails credentials:edit`

Save and close VS Code to trigger a rebuild of the encrypted credentials.
For more information, see: https://blog.eq8.eu/til/rails-52-credentials-tricks.html


## Database creation
```
docker-compose up -d
rake db:migrate
```

## How to run the test suite

## Services (job queues, cache servers, search engines, etc.)

## Deployment instructions

