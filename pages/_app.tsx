import Head from 'next/head';
import { AppProps } from 'next/dist/shared/lib/router/router';
import 'firebase/auth';
import AppHeader from '../components/AppHeader';
import { initFirebase } from '../lib/firebase-client';
import { AuthProvider } from '../lib/user/AuthContext';
import '../styles/globals.css';
import '../styles/tailwind.css';
import { FCMProvider } from '../lib/service-worker/FCMContext';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css';
// used for code syntax highlighting
import 'prismjs/themes/prism-tomorrow.css';
// used for rendering equations
import 'katex/dist/katex.min.css';

initFirebase();

/**
 * This is the root of the component heirarchy. When the site is hydrated, this
 * will load into memory and never re-initialize unless the page refreshes.
 */

function PortalApp({ Component, pageProps }: AppProps) {
  return (
    <DndProvider backend={HTML5Backend}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <AuthProvider>
          <FCMProvider>
            <Head>
              <meta charSet="utf-8" />
              <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
              <meta
                name="viewport"
                content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
              />
              <title>UTA Datathon</title>
              <meta name="description" content="Welcome to UTA Datathon 2024." />
              {process.env.ENABLE_PWA ||
                (process.env.NODE_ENV !== 'development' && (
                  <link rel="manifest" href="/manifest.json" />
                ))}
              <link href="/icons/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16" />
              <link href="/icons/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32" />
              <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
              <meta name="theme-color" content="#4b0082" />
            </Head>
            <div className="min-h-screen flex flex-col bg-customBackground">
              <AppHeader />
              <Component {...pageProps} />
            </div>
          </FCMProvider>
        </AuthProvider>
      </LocalizationProvider>
    </DndProvider>
  );
}

export default PortalApp;
