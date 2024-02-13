import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// (Add logic to a method that accepts some content + adds it to the database)
export const putDb = async (content)  => {
  console.log('Post to the database');

  // Create a connection to the database + the version that will be used
  const contactDb = await openDB('jate', 1);

  // Create a new transaction + specify the database + data privileges
  const tx = contactDb.transaction('jate', 'readwrite');

  // Open the desired object store
  const store = tx.objectStore('jate');

  // Use the .put() method on the store + pass in the content
  const request = store.put({ id: 1, value: content });

  // Get confirmation of the request
  const result = await request;
  console.log('💾 - data saved to the database', result);
};

initdb();
