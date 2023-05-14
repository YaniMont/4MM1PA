import React from 'react';
import './firebaseConfig';
import { Provider as PaperProvider } from 'react-native-paper';
import RootNavigation from '../app/navigation';

export default function App() {
  return (
    <PaperProvider>
      <RootNavigation />
    </PaperProvider>
  );
}


  
 //   const auth = getAuth(firebaseApp);
   // onAuthStateChanged(auth, user => {
       // Check for user status
 //  });
