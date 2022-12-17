import GameSavingLoader from './GameSavedLoader';

(async () => {
  try {
    return await GameSavingLoader.load();
  } catch (err) {
    return Promise.reject(err);
  }
})();
