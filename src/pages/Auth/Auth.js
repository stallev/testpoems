import React from 'react';
import styles from './styles/_auth.module.scss';
import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

// import awsExports from './aws-exports';
import awsExports from '../../aws-exports';
import { Container } from '../../common/components';

Amplify.configure(awsExports);


// import styles from './styles/_auth.module.scss';

const Auth = () => {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
};

export default Auth;