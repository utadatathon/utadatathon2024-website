import { useEffect, useState, useRef } from 'react';
import firebase from 'firebase/app';
import 'firebase/messaging';

export default function HomeNotif() {
  const [notif, setNotif] = useState(true);
  const popup = useRef(null);

  useEffect(() => {
    setNotif(checkNotif());
    triggerPopup();
  }, []);

  const checkNotif = () => {
    //pop up visible if user did not enable push notif and browser supports push notif
    const isSupported =
      'Notification' in window &&
      'serviceWorker' in navigator &&
      'PushManager' in window &&
      firebase.messaging.isSupported();
    if (isSupported && Notification.permission !== 'granted') {
      Notification.requestPermission();
      return true;
    }
    return false;
  };

  const triggerPopup = () => {
    popup.current.classList.add('show');
    setTimeout(() => setNotif(false), 4000);
  };

  
}
