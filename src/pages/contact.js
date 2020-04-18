import React from 'react'
import Layout from '../components/layout'

const ContactPage = () => (
  <Layout>
    <div className="tile is-ancestor is-vertical">
      <div className="tile is-parent">
        <div class="tile is-child" header="Contact">
          <p>Algemene E-mail: secretariaat@noorse.be</p>

          <h2> Contactpersonen deelbesturen</h2>
          <p> Voorzitter: Gert Mertens </p>
          <p> Secretaris: Vicky De Greef (vicky.de.greef@telenet.be)</p>
          <p> Jeugd: Nicky Symons (nickysymons@yahoo.com)</p>
          <p> Senioren: Glenn Van De Putte (seniorenbestuurnoorse@gmail.com)</p>
          <p> Dames – Meisjes: Stijn Schrijvers</p>
          <p> G-voetbal: Rita Staes (gvoetbal@noorse.be)</p>
        </div>
        <div class="tile is-child" header="Kantine">
          <h2>Openingsuren</h2>
          <p>
            Woensdag 16u30 – 23u00 <br />
            Donderdag 18u00 – 23u00 <br />
            Vrijdag 18u00 – 23u00
            <br />
            Zaterdag en zondag wordt de kantine geopend een uur voor aanvang van
            de eerste wedstrijd. Dit zal meestal om 8u00 s ochtends zijn en
            sluit 2,5 na afloop van de laatste wedstrijd.
            <br />
            Wil je checken of kantine open is? Check even via socceronline of
            bel naar onze kantine.
            <br />
            Tel: 03 664 44 12 <br />
          </p>
        </div>
        <div class="tile is-child" header="Bereikbaarheid">
          <p> K. Noorse S.V. </p>
          <p> Frans De Peuterstraat 50</p>
          <p> 2950 Kapellen</p>
          <p> België</p>

          <p>
            {' '}
            Frans De Peuterstraat, Kapellen. A12 Haven – Bergen op Zoom blijven
            volgen tot afrit Hoevenen / Kapellen. 2e{' '}
          </p>
          <p>
            {' '}
            straat rechts aan Texaco Station (Klein Heiken) inslaan daarna 5e
            straat links (Heizoomlaan) deze geeft uit op{' '}
          </p>
          <p> de terreinen.</p>
        </div>
      </div>
      <div className="tile is-parent">
        <div class="tile is-child is-12">Google map</div>
      </div>
    </div>
  </Layout>
)

export default ContactPage
