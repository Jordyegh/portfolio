import { useState, useEffect } from 'react';
import './App.css';
import { db } from './firebase-config';
import { collection, getDocs } from 'firebase/firestore';

interface IUser {
  id: string;
  name: string;
  lastName: string;
}

function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const usersCollectionRef = collection(db, 'users');

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);

      setUsers(data.docs.map(doc => {
        return { id: doc.id, ...doc.data() } as IUser;
      }));
    };

    getUsers();
  });

  return (
    <div className="App">
      Hello World!
      {
        users.map((user: IUser) => {
          return <p key={user.id}>{user.id} - {user.name} {user.lastName}</p>
        })
      }
    </div>
  );
}

export default App;
