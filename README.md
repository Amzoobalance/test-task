# test-task
1. Clone this repository to your local machine

2. Run npm install to install necessary dependencies

3. Make sure you have Redis installed and running locally

4. Create .env file and assign values for the following variables
  API_SERVICE_PORT=3000
  RENDERER_SERVICE_PORT=4000
  MONGO_DB_URL=your MongoDB connection URL
  SENDINBLUE_API_KEY=your Sendinblue API V3 Key

5. Run node src/seed to add data to MongoDB

6. Start node src/api-service, node src/renderer-service, and node src/email-service in separate terminal windows

7. Visit http://localhost:4000
