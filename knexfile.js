module.exports = {
  client: 'pg',
  connection: process.env.DATABASE_URL ||
    'postgresql://mateusz:password123@localhost/zeit-serverless',
};