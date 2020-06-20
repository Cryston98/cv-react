import React, { Component } from "react";
import "./App.css";
import myImg from "./Andy.jpg";

class UserSection extends Component {
  render() {
    return (
      <div class="section">
        <img src={myImg} class="profile" alt="none" />
        <b id="tit">Profil</b>
        <p>
          <span>Prenume :</span> Sebastian-Adrian
        </p>
        <p>
          <span>Nume :</span> Deaconu
        </p>
        <p>
          <span>Adresa :</span> Jud. Gorj Com. Bumbesti-Pitic
        </p>
        <p>
          <span>Telefon :</span> 0738178368
        </p>
        <p></p>
      </div>
    );
  }
}

class ExperienceSection extends Component {
  render() {
    return (
      <div class="section">
        <b>Experienta / Proiecte </b>
        <p>
          <div class="item">
            <div class="item-head">
              <div class="circle"></div>
              <h4 class="title-item">Proiect Personal - Platforma Web</h4>
            </div>
            <div class="item-body">
              <div class="line">
                <p class="content-item">
                  Proiect personal pentru a salva link-uri de pe internet (video
                  youtube, link la articole, etc) si a le structura intr-un
                  curs. Sa zicem ca vream sa ne creem un curs despre fitness.
                  Gasim un video relevant pe youtube pe canul X si il salvam pe
                  platforma la cursul de fitness, dupa gasim alt video util pe
                  un alt canal si il salvam si pe acesta pe platforma. Astfel,
                  ne extragem informatii din diferite locuri de pe internet si
                  le structuram in ce ordine vrem, formandu-ne proprile cursuri.
                  <br></br>
                  <span>Tehnologii utilizate : </span>
                  Html, css, java script, php, mysql
                  <br></br>
                  <span> Numar membri : </span> 1
                </p>
              </div>
            </div>
          </div>
        </p>

        <p>
          <div class="item">
            <div class="item-head">
              <div class="circle"></div>
              <h4 class="title-item">
                Proiect Facultate - Proiect Comunicare intre Aplicatii
                Distribuite
              </h4>
            </div>
            <div class="item-body">
              <div class="line">
                <p class="content-item">
                  <span>Despre : </span> Scopul proiectului a fost de a realiza
                  o comunicare intre mai multe aplicatii de tip Server - Client.
                  In proiect am avut un site pentru a vinde carti si o aplicatie
                  android pe post de client care sa comunice cu serverul/site-ul
                  web. Aplicatia avea optiunea de autentificare si vizualizare
                  rapida a cartilor disponibile pe site.
                  <br></br>
                  <span>Tehnologii utilizate : </span>
                  Html, css, java script, php, mysql, java
                  <br></br>
                  <span> Numar membri : </span> 3
                </p>
              </div>
            </div>
          </div>
        </p>

        <p>
          <div class="item">
            <div class="item-head">
              <div class="circle"></div>
              <h4 class="title-item">
                Proiect Facultate - Retea Bluetooth - 2 Module arduino cu
                senzori si aplicatie Android
              </h4>
            </div>
            <div class="item-body">
              <div class="line">
                <p class="content-item">
                  <span>Despre : </span> Proiectul a constat in realizarea unei
                  retea Bluetooth formata din doua module arduino si un
                  dispozitiv android. Fiecare modul arduino era format dintr-o
                  placa arduino Uno si 2-3 senzori de preluarea a semnalelor din
                  jur (gaz, lumina, presiune, umiditate, distata) si fiecare
                  modul era programat ca atunci cand primea un semnal prin
                  bluetooth de la aplicatia android sa preia datele citite de
                  senzori si sa le trimita catre aplicatie android.Dupa ce
                  datele erau preluate se afisau pe dispozitivul android urmand
                  sa se activeze optiunea de a salva datele in cloud. In cazul
                  nostru am folosit Firebase.
                  <br></br>
                  <span>Tehnologii utilizate : </span>
                  Libraria Arduino & limbajul C pentru programare placilor
                  arduino. Aplicatie in Adroid Studio - Java & XML,
                  <br></br>
                  <span> Numar membri : </span> 3
                </p>
              </div>
            </div>
          </div>
        </p>
      </div>
    );
  }
}

class ITSection extends Component {
  render() {
    return (
      <div class="section">
        <b> Site-uri de IT</b>
        <p>
          <span>Ramon Nastase :</span>{" "}
          <a href="https://ramonnastase.ro/">https://ramonnastase.ro/</a>
        </p>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserSection />
        <ExperienceSection />
        <ITSection />
      </header>
    </div>
  );
}

export default App;
