import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonRadio,
  IonRadioGroup,
  IonTitle,
  IonToolbar,
  IonCheckbox
} from '@ionic/react';
import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonRadioGroup name={'radio-group'}>
            <IonListHeader>
              <IonLabel>My Radio Group</IonLabel>
            </IonListHeader>
            <IonItem lines={'none'}>
              <IonLabel>Option A</IonLabel>
              <IonRadio value={'option-a'} />
            </IonItem>
            <IonItem lines={'none'}>
              <IonLabel>Option B</IonLabel>
              <IonRadio value={'option-b'} color={'danger'} />
            </IonItem>
            <IonItem lines={'none'}>
              <IonLabel>Option C</IonLabel>
              <IonRadio value={'option-c'} />
            </IonItem>
          </IonRadioGroup>
        </IonList>

        <IonList>
          <IonItem>
            <IonLabel>Item 1</IonLabel>
            <IonCheckbox></IonCheckbox>
          </IonItem>
          <IonItem>
            <IonLabel>Item 2</IonLabel>
            <IonCheckbox></IonCheckbox>
          </IonItem>
        </IonList>

        <IonButton>PressMe!!</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
