# TPO website Backend

## Overview

This repository contains the code for a TPO website Backend. The system includes functionality for adding companies, managing recruiters, and sending emails to the Training and Placement Office (TPO) regarding any query.

## Features

### Company Management

- **Add Company:** Add new companies with details such as company name, role, CTC, and job ID.
- **List All Companies:** Retrieve and list all added companies.
- **Delete Company:** Delete a company by providing its ID.

### Recruiter Management

- **Register Recruiter:** Register new recruiters with a unique username, email, and password.
- **Login:** Authenticate recruiters based on email and password.
- **List All Recruiters:** Retrieve and list all registered recruiters.

### Email System

- **Send Email to TPO:** Send emails to the Training and Placement Office. The system sends notifications to the TPO and the user, acknowledging the query.

## Installation

1. Clone the repository: `git clone https://github.com/Srishti8587/TPO-website_backend.git`
2. Install dependencies: `npm install`

## Usage

1. Configure environment variables, including the Gmail account and APP password.
2. Run the application: `node app.js`
3. Access the endpoints for company and recruiter management.
4. Test the email functionality by sending emails to the TPO.

## Dependencies

- `nodemailer`: Used for sending emails.
- `mongoose`: MongoDB object modeling for Node.js.
- `dotenv`: Loads environment variables from a `.env` file.

## Contributions

Feel free to contribute by opening issues, providing feedback, or submitting pull requests.

## License

This project is licensed under the [MIT License](LICENSE).

---

**Note:** Ensure that you have Node.js and MongoDB installed before running the application.
