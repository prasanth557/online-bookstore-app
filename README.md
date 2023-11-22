# online-bookstore-management-app


# Book Store Management APP

# Idea of the App

The project aims to implement a small web app that lists the most rated books released and user can manage the books data by adding and deleting. The app fetches JSON data from backend web application and it performs CURD operations.

## Table of Contents

- [Requirements](https://github.com/prasanth557/online-bookstore-app
#Requirements)
- [Technologies Used](https://github.com/prasanth557/online-bookstore-app
#technologies-used)
- [Features](https://github.com/prasanth557/online-bookstore-app#features)
- [Project Structure](https://github.com/prasanth557/online-bookstore-app#project-structure)
- [Architecture](https://github.com/prasanth557/online-bookstore-app#architecture)
- [Installation](https://github.com/prasanth557/online-bookstore-app#installation)
- [Development Server](https://github.com/prasanth557/online-bookstore-app#development-server)

## Requirements

### Technologies Used
 # Frontend
- Angular
- Bootstrap
- HTML
- CSS
- Angular Forms
- rxjs
# Backend
- Asp.net Core
- C#
- EntityFramework
- REST APIs

### Features
List Most Popular Books:

1. Users can view the most Popular Books released so far.
Results Display:

2. Repositories are displayed in a list format, with one book details per row.
Detailed Information:

3. For each Boook, users can see:
Book name
Book Author
Edit Book
Add Book Details

## Project Structure

The project structure includes the following components:

# Points
-> Add Page:
-> Users can click on the Add button to open a new window and enter book details.
-> Edit Page:
-> Users can click on the Edit button to open a new window with detailed information.
-> Delete Book:
-> The deleted button is available on the right side of the book details and we can delete book.

## Architecture

![Architecture](https://github.com/prasanth557/online-bookstore-app/blob/main/images/Architecture.png)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/prasanth557/online-bookstore-app.git

2. Navigate to the project folder:

   cd online-bookstore-app

3. Install dependencies:
   
   npm install
   npm i bootstrap
   npm install rxjs
   
4. Start the development server:

   ng serve

# Usage - workflow

1. User credentials - username= 'prash' , password= '1234'
  - it will redirect to home page
2. Here you can see the list of all repositories with images
3. you can navigate through pages or click loadmore button to load more repos.
4. On click name of repo or GiveRating button - a modal popup will appear with data you click on repository.
5. you can give rating out of 5
6. now you can submit and close the modal.
7. Logout application- redirect to login page.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Screenshots of application

![LHome page](https://github.com/prasanth557/online-bookstore-app/blob/main/images/Home 2023-11-22 153318.png)
![Add page](https://github.com/prasanth557/online-bookstore-app/blob/main/images/Add Book 2023-11-22 153446.png)
![Update Page](https://github.com/prasanth557/online-bookstore-app/blob/main/images/Update2023-11-22 153520.png)
