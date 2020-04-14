<p align="center"><img src="https://res.cloudinary.com/dtfbvvkyp/image/upload/v1566331377/laravel-logolockup-cmyk-red.svg" width="400"></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/d/total.svg" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/v/stable.svg" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/license.svg" alt="License"></a>
</p>

## Simple Products

### About This Project
This project is a simple product CRUD application developed with Laravel 6 and Vue.js in a single project that is not uncoupled, thus without using REST API. It was developed for a technical knowledge test and is entirely in English.

### System requirements

- PHP >= 7.2.5
- BCMath PHP Extension
- Ctype PHP Extension
- Fileinfo PHP extension
- JSON PHP Extension
- Mbstring PHP Extension
- OpenSSL PHP Extension
- PDO PHP Extension
- Tokenizer PHP Extension
- XML PHP Extension

Note: On windows it is recommended to use Laragon version 4.0.16 for the development environment


### Configuration
To run this project it is necessary to execute these commands in sequence on the terminal:
```
composer install
npm install && npm run dev
php artisan migrate
php artisan db:seed
```

Note: For login verify user data in database/seeds/UsersTableSeeder.php

### License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT). This project also.
