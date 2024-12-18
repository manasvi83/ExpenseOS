
// module.exports = {
//     schema: "./utils/schema.js",
//     out: './drizzle',
//     dialect: 'postgresql',
//     dbCredentials: {
//         connectionString: 'postgresql://expensesTracker_owner:9wrOnRp7aAFq@ep-dark-hill-a5qwbi8b.us-east-2.aws.neon.tech/expensesTracker?sslmode=require',
//     }
// };


import { defineConfig } from 'drizzle-kit'
export default defineConfig({
  dialect: "postgresql",
  out: './drizzle',
  schema: "./utils/schema.js",
  dbCredentials: {
    url: 'postgresql://expensesTracker_owner:9wrOnRp7aAFq@ep-dark-hill-a5qwbi8b.us-east-2.aws.neon.tech/expensesTracker?sslmode=require',
  }
})