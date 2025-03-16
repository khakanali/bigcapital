import path from 'path';
import moment from 'moment';
import { fileURLToPath } from 'url';

// Replace __dirname with ES Module-compatible equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Assign paths to global
global.__root_dir = path.join(__dirname, '..');
global.__resources_dir = path.join(global.__root_dir, 'resources');
global.__locales_dir = path.join(global.__resources_dir, 'locales');
global.__views_dir = path.join(global.__root_dir, 'views');
global.__storage_dir = path.join(global.__root_dir, 'storage');

// Moment prototype extension
moment.prototype.toMySqlDateTime = function () {
  return this.format('YYYY-MM-DD HH:mm:ss');
};