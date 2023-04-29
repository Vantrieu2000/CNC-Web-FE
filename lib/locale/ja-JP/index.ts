import errors from './errors';
import pages from './pages';
import success from './success';
import system from './system';
import title from './title';
import validate from './validate';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ...pages,
  ...validate,
  ...system,
  ...title,
  ...errors,
  ...success,
};
