# Create migration
npx typeorm migration:create ./src/migrations/name
npx typeorm migration:create ./src/migrations/CreateThreadSummaryForum

# Create controller
npx nest g controller ThreadSummaries controllers
