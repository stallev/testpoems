import { Routes, Route } from 'react-router-dom';
import { RoutePath } from './common/constants/RoutePath';
import { Landing, Contacts, NotFoundPage, Profile, Poem, NewPoem } from './pages';
import { Layout } from './common/components';

import '../src/common/styles/global.scss';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path={RoutePath.Landing} element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path={RoutePath.Contacts} element={<Contacts />} />
          <Route path={RoutePath.Profile} element={<Profile />} />
          <Route path={RoutePath.NewPoem} element={<NewPoem />} />
          <Route path={`${RoutePath.Poem}/:id`} element={<Poem />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

