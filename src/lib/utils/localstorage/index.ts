const LOCAL_STORAGE_KEYS = {
  personalDetails: 'personalDetails',
  userToken: 'userToken'
};

/**
 * Store local data based on key
 * @param key
 * @param value value to be stored
 */
const storeLocalData = (key: string, value: any) => {
  localStorage.setItem(key, value);
};

/**
 * Get local data based on key
 * @param key
 */
const getLocalData = (key: string) => localStorage.getItem(key);

/**
 * Clear all local data
 */
const clearAllLocalData = () => {
  localStorage.clear();
};

/**
 * Clear local data based on key
 * @param key
 */
const clearLocalData = (key: string) => {
  localStorage.removeItem(key);
};

export {
  storeLocalData,
  getLocalData,
  clearAllLocalData,
  clearLocalData,
  LOCAL_STORAGE_KEYS,
};
