
<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

<ul>
    <li>Your machine needs to be ready for the latest Laravel and Node.js.</li>
</ul>

## Installation


   ```sh

    # Enter the project directory
    cd ticket-tracking-system

    # Copy env file and add your own database and mail credentials
    cp .env.example .env

    # Fill DB credentials in 
    .env file

    # Install dependency
    composer install

    # Generate app key
    php artisan key:generate
    
    # Migrate database
    php artisan migrate

    # Create encryption keys
    php artisan passport:install

    # Seed default QA and RD users
    php artisan db:seed --class=UserTableSeeder

    # Install dependency with NPM
    npm install

    # Develop
    npm run dev # or npm run watch

    # Build on production
    npm run production
    
    # Serving application
    php artisan serve

   ```

#### QA email: qa@example.com password: 12345678
#### RD email: rd@example.com password: 12345678
