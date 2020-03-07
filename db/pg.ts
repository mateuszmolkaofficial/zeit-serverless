import knex from 'knex';
import knexOptions from '../knexfile';
const pg = knex(knexOptions);
export default pg;
