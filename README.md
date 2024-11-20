Slow Messaging App

This project is a full-stack slow-messaging app built as part of a final weekend assignment. The app encourages minimal usage by restricting message fetching and incorporating cooldown periods for messages. Below is an overview of the project, its features, challenges, and highlights.
Overview

The Slow Messaging App is designed to:

    Limit user interaction by providing only a fixed number of message-fetch tokens daily and weekly.
    Introduce a cooldown mechanism where messages are unavailable for a set period after being sent.
    Display messages on cooldown with metadata such as the author and timestamp but without their content.

Tech Stack

    Frontend: Next.js
    Backend: Drizzle ORM, PostgreSQL
    Validation: Zod
    Language: TypeScript
    Linting: ESLint

Features

    User Authentication: Users can log in with any username and a shared password stored securely using environment variables.
    Message Cooldown: Messages sent are only fully visible after a 1-hour cooldown.
    Token Management:
        1 daily fetch token per day (reset at 00:00 UTC).
        2 extra weekly tokens (refilled every Sunday).
    Statistics Page: Displays:
        Total messages written by each user.
        Number of messages written and received per fetch.
        Number of received messages not on cooldown.
    Responsive Design: Optimized for both desktop and mobile devices.
    Semantic HTML: Adheres to best practices for accessibility and SEO.

Project Planning

A GitHub project board was used for sprint planning. The work was divided into four main sprints:
Sprint Goals

    Skeleton Setup:
        Set up the backend with PostgreSQL and Drizzle ORM.
        Build the frontend with Next.js.
        Establish the database schema and API routes.

    Business Logic:
        Implement message cooldown and token mechanics as pure functions.
        Write automated tests to validate edge cases.

    User Interface:
        Create a responsive design with semantic HTML.
        Build user authentication and message-related components.

    Statistics Page and Final Features:
        Add statistics page logic.
        Refine UI and ensure styling consistency.
        Conduct end-to-end testing.

Challenges

1. Cooldown and Token Management Logic

Ensuring messages respect cooldown rules while tokens are consumed correctly required careful thought about what data to store versus calculate dynamically. Pure functions simplified testing this logic. 2. Balancing Features and Time Constraints

Given the time constraints, prioritizing essential features like authentication and cooldown logic over advanced UI components was critical. 3. Responsive Design

Designing a layout that works seamlessly across mobile and desktop required iterations and testing.
Highlights

    Strong Testing Foundation: All business logic is tested with clear, descriptive test cases.
    Clean Code and Structure: The project follows a modular file structure for scalability and maintainability.
    Effective Token Management: Smooth implementation of daily and weekly token refresh mechanics.
    Statistics Insights: The statistics page provides meaningful insights into user behavior without requiring advanced visualizations.

Installation

    Clone the repository:

git clone <repo-url>

Install dependencies:

npm install

Set up environment variables:

    Add a .env file with the following:

    DATABASE_URL=your_database_url
    SHARED_PASSWORD=your_shared_password

Run the application:

    npm run dev

Scripts

    lint - Run linting checks.
    test - Run automated tests.

Future Improvements

    Add graphical representations to the statistics page.
    Enhance message filters and sorting options.
    Implement push notifications for new messages post-cooldown.
