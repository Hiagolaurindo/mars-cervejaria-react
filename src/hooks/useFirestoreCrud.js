import { useEffect, useState } from 'react';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../firebase/config';

export function useFirestoreCrud(collectionName) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const collectionRef = collection(db, collectionName);
    const q = query(collectionRef, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(
      q,
      snapshot => {
        const data = snapshot.docs.map(document => ({
          id: document.id,
          ...document.data(),
        }));
        setItems(data);
        setLoading(false);
      },
      err => {
        setError(err.message);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [collectionName]);

  const createItem = async data => {
    await addDoc(collection(db, collectionName), {
      ...data,
      createdAt: new Date().toISOString(),
    });
  };

  const updateItem = async (id, data) => {
    const itemRef = doc(db, collectionName, id);
    await updateDoc(itemRef, {
      ...data,
      updatedAt: new Date().toISOString(),
    });
  };

  const deleteItem = async id => {
    const itemRef = doc(db, collectionName, id);
    await deleteDoc(itemRef);
  };

  return { items, loading, error, createItem, updateItem, deleteItem };
}
