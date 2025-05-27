# Heavnly

Heavnly is a full-stack web application for listing, discovering, and reviewing properties. It features user authentication, listing management, reviews, image uploads, and a responsive UI.

## Features

- **User Authentication:** Register, login, and logout securely.
- **Listings Management:** Create, view, edit, and delete property listings with image uploads.
- **Reviews:** Authenticated users can leave and delete reviews on listings.
- **Image Uploads:** Upload and manage listing images (Cloudinary integration).
- **Flash Messages:** User feedback for actions (success/error).
- **Session Management:** Secure sessions stored in MongoDB.
- **Form Validation:** Robust validation on both client and server sides.
- **Responsive UI:** Built with Bootstrap for mobile and desktop.
- **Error Handling:** Custom error pages for invalid routes and server errors.

## Technologies Used

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (with Mongoose ODM)
- **Authentication:** Passport.js (Local Strategy)
- **Templating:** EJS with ejs-mate layouts
- **Frontend:** Bootstrap, Font Awesome
- **Image Storage:** Cloudinary, Multer
- **Session Store:** connect-mongo
- **Validation:** Joi
- **Flash Messages:** connect-flash
- **Environment Variables:** dotenv
- **Deployment:** Render

## Project Structure

```
heavnly/
│
├── app.js                 # Main application entry point
├── models/                # Mongoose models (User, Listing, Review)
├── routes/                # Express route modules
├── controllers/           # Route handler logic
├── views/                 # EJS templates
├── public/                # Static assets (CSS, JS, images)
├── utils/                 # Utility modules (error handling, async wrappers)
├── init/                  # Database seeding scripts
├── cloudConfig.js         # Cloudinary configuration
├── middleware.js          # Custom middleware
└── .env                   # Environment variables (not committed)
```

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- MongoDB Atlas account (or local MongoDB)
- Cloudinary account

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/yourusername/heavnly.git
   cd heavnly
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add:

   ```
   ATLASDB_URL=your_mongodb_connection_string
   SECRET=your_session_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_KEY=your_cloudinary_key
   CLOUDINARY_SECRET=your_cloudinary_secret
   ```

4. **Run the application:**
   ```sh
   npm start
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

## Deployment

The app is ready for deployment on platforms like [Render](https://render.com/). Ensure all environment variables are set in your deployment dashboard.

## License

This project is licensed under the MIT License.

---

**Heavnly** – Find your next stay, review, and share your experience!
