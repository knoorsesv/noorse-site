import React from 'react'
import Layout from '../components/layout'
import { Container } from '../components/centeredContainer'
import { Header, SubHeader } from '../components/headers'

const TextBlock = ({ children }) => {
  return (
    <div className={'mt-2 mb-4 sm:mb-8 font-light sm:px-6'}>{children}</div>
  )
}

const List = ({ children }) => {
  return <ul className={'list-disc list-inside mb-6'}>{children}</ul>
}

const FairPlayPage = () => (
  <Layout>
    <Container>
      <Header>Intern fairplayreglement</Header>
      <SubHeader>Doelstellingen van de club</SubHeader>
      <TextBlock>
        Noorse is een club waar sportiviteit en vriendschap centraal staan. Elke
        speler of speelster telt. Alle aangesloten leden wordt de gelegenheid
        geboden om zoveel mogelijk deel te nemen aan trainingen, wedstrijden en
        allerlei andere clubactiviteiten.
      </TextBlock>
      <SubHeader>Deontologie van de club</SubHeader>
      <TextBlock>
        Noorse is een club die voetbal aanbiedt als liefhebberij. Bij Noorse
        zijn vrijwilligers voor de vele activiteiten van levensbelang. Geen
        enkel speler of speelster ontvangt een vergoeding voor geleverde
        prestaties.
      </TextBlock>
      <SubHeader> Inschrijving</SubHeader>
      <TextBlock>
        Noorse heeft het ethisch charter van het KVV ondertekend en houdt zich
        hier strikt aan. Dit intern fairplayreglement wordt aan alle leden
        (zowel nieuwe als bestaande) ter ondertekening voorgelegd. Zodoende
        kunnen de leden bij gebeurlijke problemen geconfronteerd worden met het
        door hun ondertekende reglement. Bij leden onder de 18 jaar wordt
        gevraagd om een wettelijke vertegenwoordiger te laten meetekenen.
      </TextBlock>
      <SubHeader>Omgang-gedrag op en naast het veld</SubHeader>
      <TextBlock>
        Leden van Noorse vertegenwoordigen in de uitvoering van hun voetbalsport
        de club en dienen zich dan ook naar de waarden van de club te gedragen.
      </TextBlock>
      <SubHeader>Algemeen</SubHeader>
      <TextBlock>
        <List>
          <li>
            Respecteer de regels van het voetbal en de beslissingen van de
            scheidsrechter of zijn assistent.
          </li>
          <li>
            {' '}
            Trek nooit de integriteit van de wedstrijdleiding in twijfel.
          </li>
          <li> Respecteer de mede- en tegenspeler.</li>
          <li> Behandel alle voetballers gelijkwaardig.</li>
          <li> Gebruik geen fysiek-, mentaal- en verbaal geweld.</li>
          <li> Zorg samen met uw team voor een faire sport.</li>
          <li> Gebruik geen onbehoorlijke taal of agressieve gebaren.</li>
          <li> Draag zorg voor het materiaal, ook al is het niet het uwe.</li>
          <li> Gedraag u waardig.</li>
          <li> Wees er bewust van dat voetbal een teamsport is.</li>
        </List>
      </TextBlock>
      <SubHeader> Spelers</SubHeader>
      <TextBlock>
        <List>
          <li> Groet uw tegenstander voor en na de match.</li>

          <li>
            {' '}
            Probeer te winnen met respect voor jezelf, je teamgenoten en je
            tegenstanders.
          </li>

          <li> Speel volgens de wedstrijdregels.</li>

          <li>
            {' '}
            Vind eerlijk en prettig spelen het belangrijkste en presteer zo goed
            mogelijk.
          </li>

          <li>
            {' '}
            Aanvaard de beslissingen van scheidsrechters en hun assistenten.
          </li>

          <li>
            {' '}
            Blijf bescheiden bij een overwinning en laat je niet ontmoedigen
            door een nederlaag.
          </li>

          <li>
            {' '}
            Blijf sportief ook al toont de tegenstrever onsportief gedrag.
          </li>

          <li> Moedig sportief of plezierig gedrag aan bij je medespelers.</li>

          <li>
            {' '}
            Respecteer het werk van al die mensen die ervoor zorgen dat jij je
            favoriete sport kan beoefenen.
          </li>

          <li>
            {' '}
            Wees er bewust van dat u als ploegkapitein een voorbeeldfunctie
            heeft.
          </li>
        </List>
      </TextBlock>
      <SubHeader>Trainers</SubHeader>
      <TextBlock>
        <List>
          <li> Voetballers hebben een trainer nodig die zij respecteren.</li>
          <li>
            {' '}
            Plaats het belang van de voetbalsport in zijn juiste context.
          </li>
          <li> Leer uw spelers de spelregels na te leven.</li>
          <li> Geef al uw spelers voldoende speelgelegenheid.</li>
          <li>
            {' '}
            Bedenk dat kinderen voor hun plezier spelen en iets willen leren.
            Winnen is een onderdeel van het spel. verliezen ook.
          </li>
          <li> Heb respect voor de prestaties van de tegenstander.</li>
          <li>
            {' '}
            Wees er bewust van dat u als trainer een voorbeeldfunctie heeft.
          </li>
        </List>
      </TextBlock>
      <SubHeader> Bestuurders</SubHeader>
      <TextBlock>
        <List>
          <li>
            {' '}
            Maak van uw club een vereniging waar iedereen welkom is en iedereen
            zich thuis voelt.
          </li>
          <li>
            {' '}
            Betrek iedereen, volgens zijn/haar mogelijkheden, in uw clubwerking.
          </li>
          <li>
            {' '}
            Organiseer het voetbal in de eerste plaats voor de spelers in
            overeenstemming met de filosofie van de KVV.
          </li>
          <li>
            {' '}
            Laat sportiviteit en fair play de belangrijkste waarden zijn in uw
            club.
          </li>
          <li>
            {' '}
            Zorg ervoor dat supporters, sponsors, trainers en spelers zich
            bewust zijn van hun invloed en verantwoordelijkheden.
          </li>
          <li> Apprecieer de inzet van al uw vrijwilligers.</li>
          <li> Laat plezier primeren op de prestaties.</li>
          <li>
            {' '}
            Wees er bewust van dat u als bestuurder een voorbeeldfunctie heeft.
          </li>
        </List>
      </TextBlock>
      <SubHeader>Scheidsrechters en assistent-scheidsrechters</SubHeader>
      <TextBlock>
        <List>
          <li> Pas de spelregels correct, eerlijk en consequent toe.</li>
          <li>
            {' '}
            Zorg ervoor dat zowel op en naast het speelveld uw gedrag waardig
            is.
          </li>
          <li> Moedig sportief spel aan.</li>
          <li>
            {' '}
            Wees beslist, objectief en beleefd in het nemen van beslissingen.
          </li>
          <li> Wees een waardig vertegenwoordiger van het verbond.</li>
          <li> Wees steeds collegiaal en bekritiseer uw collega’s niet.</li>
        </List>
      </TextBlock>
      <SubHeader> Toeschouwers</SubHeader>
      <TextBlock>
        <List>
          <li> Laat iedereen plezier beleven aan het voetbalspel.</li>
          <li> Toon respect voor de tegenpartij.</li>
          <li> Veroordeel elk gebruik van geweld en onsportief gedrag.</li>
          <li> Respecteer de beslissing van de wedstrijdleiding.</li>
          <li> Goed voorbeeld doet goed volgen.</li>
          <li> Wees steeds positief.</li>
        </List>
      </TextBlock>
      <SubHeader>
        {' '}
        Verwachtingen ten opzichte van de ouders van de jeugdspelers
      </SubHeader>
      <TextBlock>
        <List>
          <li> Laat het spelplezier primeren op de prestaties.</li>
          <li>
            {' '}
            Forceer nooit een kind dat geen interesse toont om deel te nemen aan
            het voetbalspel.
          </li>
          <li> Leer kinderen om volgens de spelregels te spelen.</li>
          <li>
            {' '}
            Leer het kind het resultaat van elke wedstrijd te accepteren.
          </li>
          <li>
            {' '}
            Moedig het kind steeds aan, ook al heeft het een kans gemist of de
            wedstrijd verloren.
          </li>
          <li>
            {' '}
            Bedenk dat kinderen het beste leren door na te doen. Applaudisseer
            voor goed spel van beide teams.
          </li>
          <li> Keur verbaal en fysiek geweld steeds af.</li>
          <li>
            {' '}
            Erken de waarde en het belang van de trainers. Zij geven hun tijd en
            kennis om het voetballen mogelijk te maken.
          </li>
        </List>
      </TextBlock>
      <SubHeader> Sancties</SubHeader>
      <TextBlock>
        Bij gedragsvormen die niet overeenkomen met de hierboven gestelde
        waarden van de club dient er ingegrepen te worden.
      </TextBlock>
      <TextBlock>
        <List>
          <li>
            {' '}
            De trainer en/ of afgevaardigde kan een speler voor maximaal 1
            wedstrijd schorsen. Dit dient gemeld te worden met de reden aan het
            jeugd- of seniorenbestuur.
          </li>
          <li>
            {' '}
            Bij herhaalde overtredingen of bij ernstige feiten, dient de
            betrokken speler zich bij het jeugd- of seniorenbestuur aan te
            bieden voor een gesprek. Spelers onder de 18 jaar worden steeds
            vergezeld door een wettelijke vertegenwoordiger. Het bestuur zal na
            grondig overleg een mogelijke sanctie uitspreken.
          </li>
          <li>
            {' '}
            Bij een zeer ernstig vergrijp, zoals bijvoorbeeld diefstal of zwaar
            fysiek geweld, kan een lid uitgesloten worden van de club. Dit kan
            enkel na beschikking door de voorzitter en de secretaris.
          </li>
        </List>
      </TextBlock>
      <SubHeader> Afspraken bij trainingen</SubHeader>
      <TextBlock>
        <List>
          <li>
            {' '}
            Elke speler is steeds 5 minuten voor de start van de training
            aanwezig op het trainingsveld zodat elke training stipt kan starten.
            Indien men te laat zal komen, dient er vooraf verwittigd te worden.
          </li>
          <li>
            {' '}
            Indien een speler niet aanwezig kan zijn op de training, dient hij
            de trainer ten minste 1 uur voor de training te verwittigen via
            telefoon of SMS.
          </li>
          <li>
            {' '}
            Bij koud weer, ongeveer vanaf half oktober tot half maart, is het
            dragen van een lange trainingsbroek verplicht. Voorzie dan ook
            steeds een regenjas en handschoenen wanneer nodig!
          </li>
          <li>
            {' '}
            De club voorziet drinkwater tijdens de trainingen. Eigen drank wordt
            niet toegelaten. Na de training is men natuurlijk vrij om zelf een
            drankje te nuttigen.
          </li>
          <li> Douchen op de club na training is verplicht.</li>
          <li>
            {' '}
            Bij jeugdspelers tot en met de miniemen is het verplicht
            teenslippers te dragen in de douches.
          </li>
          <li>
            {' '}
            Op de training wordt steeds een grote inzet verwacht van de spelers.
            Wie zich goed wil voelen op het veld in het weekend, dient goed te
            trainen in de week.
          </li>
          <li> Pesten wordt niet geduld en onmiddellijk bestraft!</li>
          <li>
            {' '}
            Laat nooit waardevolle voorwerpen of geld achter in de kleedkamer.
            Geef dit steeds aan je ouders, afgevaardigde of trainers. Zij zullen
            het voor u bewaren en nadien teruggeven. Noorse is niet
            verantwoordelijk voor diefstal.
          </li>
          <li>
            {' '}
            De kleedkamer is enkel toegankelijk voor spelers, trainers en
            afgevaardigde. Verboden terrein voor ouders e.d.
          </li>
        </List>
      </TextBlock>
      <SubHeader> Afspraken bij wedstrijden</SubHeader>
      <TextBlock>
        <List>
          <li>
            {' '}
            Wie veel komt trainen, zal ook veel mogen deelnemen aan wedstrijden.
          </li>
          <li>
            {' '}
            Wie opgeroepen wordt om een wedstrijd, wordt ook verwacht bij de
            wedstrijd en kan zich enkel wegens onvoorziene omstandigheden
            afmelden.
          </li>
          <li>
            {' '}
            Afmelden bij onvoorziene omstandigheden, zoals ziekte, is verplicht
            (per telefoon of SMS). Graag zo snel mogelijk zodat we nog een
            andere speler in jouw plaats kunnen oproepen.
          </li>
          <li>
            {' '}
            De spelers komen steeds op het vooraf afgesproken uur samen.
            Telaatkomers riskeren niet te mogen starten aan de wedstrijd.
          </li>
          <li> Na wedstrijden of tornooien is douchen verplicht.</li>
          <li>
            {' '}
            Bij jeugdspelers tot en met de miniemen is het verplicht
            teenslippers te dragen in de douches.
          </li>
          <li>
            {' '}
            Bij koud weer zijn handschoenen steeds aangewezen. Een lange broek,
            type calson, is toegelaten. Ook is een trui of trainingsvest
            belangrijk om aan te doen bij opwarming of als bankzitter.
          </li>
          <li>
            {' '}
            Bij het verzamelen voor elke wedstrijd geven de spelers een hand aan
            trainers en afgevaardigde. Bij het naar huis gaan doen ze dit
            eveneens. Dit uit beleefdheid en uit praktische overwegingen. Zo
            weten we wie er allemaal aanwezig is en wie er veilig naar huis is.
            Kwestie van zeker niemand te vergeten.
          </li>
          <li>
            {' '}
            Vanaf cadetten dient elk lid zijn identiteitskaart mee te nemen naar
            de wedstrijd en deze aan de afgevaardigde te geven. Eén keer
            vergeten wordt geduld. Vanaf de 2de keer wordt een boete van 1 euro
            per keer aangerekend.
          </li>
        </List>
      </TextBlock>
      <SubHeader> Kleedkamers en materiaal</SubHeader>
      <TextBlock>
        <List>
          <li> Maak voetbalschoenen buiten proper, niet in de kleedkamer.</li>
          <li>
            {' '}
            Neem een douche na training en wedstrijd, houdt de tijd beperkt
            zodat ook andere kunnen douchen.
          </li>
          <li>
            {' '}
            Heb respect voor de mensen die instaan voor het onderhoud van de
            kleedkamers.
          </li>
          <li> Houd de kleedkamers netjes.</li>
          <li> Draag zorg voor je spelersuitrusting.</li>
          <li>
            {' '}
            Draag zorg voor de kleedkamers, kantine, sportmateriaal, toiletten,
            …
          </li>
          <li> Rook niet in kantine en kleedkamers.</li>
        </List>
      </TextBlock>
      <SubHeader> Taalgebruik</SubHeader>
      <TextBlock>
        <List>
          <li>
            {' '}
            We zijn steeds beleefd tegen trainers, afgevaardigden,
            scheidsrechters, mede- en tegenspelers en supporters.
          </li>
          <li>
            {' '}
            Elke spelers dient zich, indien mogelijk, uit te drukken in de
            Nederlandse taal.
          </li>
        </List>
      </TextBlock>
      <SubHeader> Communicatie</SubHeader>
      <TextBlock>
        <List>
          <li>
            {' '}
            Dit reglement wordt ter ondertekening aangeboden aan elk lid van de
            club.
          </li>
          <li>
            {' '}
            Dit reglement wordt uitgehangen in de kantine en wordt gepubliceerd
            op de Noorse-website.
          </li>
        </List>
      </TextBlock>
      <SubHeader> Help mijn kind sport!</SubHeader>
      <TextBlock>
        Als ouder speel je een fundamentele rol in de sportervaring van je kind.
        Misschien sta je er niet bij stil, maar jij hebt echt een belangrijke
        impact op het sportplezier van je zoon/dochter. Hieronder vind je alvast
        enkele tips om jouw sporter optimaal te ondersteunen.
      </TextBlock>
      <TextBlock>
        <List>
          <li>
            Focus op plezier Jij wil dat je kind presteert in de sport? Geen
            probleem. Maar onthoud dat het veel belangrijker is dat je kind
            plezier maakt. Wat je kind graag doet, blijft het doen. Pas als
            kinderen met plezier blijven sporten kunnen ze hun potentieel
            ontdekken!
          </li>
          <li>
            {' '}
            Steun de dromen van je kind Droomt je zoon/dochter ervan een
            topvoetballer te worden? Geef je kind dan de steun om te gaan voor
            die droom, maar zorg ervoor dat je nooit je eigen dromen opdringt:
            help je kind om zijn eigen weg te maken!
          </li>
          <li>
            {' '}
            Blijf ouder Je kind zal wel eens van coach veranderen, maar jij
            blijft altijd zijn of haar ouder. Dat is jouw unieke rol. Ga dus
            niet in concurrentie met de coaches en laat hen je kind coachen –
            dat is hun rol.
          </li>
          <li>
            {' '}
            Kijk verder dan sport Je kind is meer dan alleen maar een sporter.
            Toon dus evenveel interesse in de school, andere hobby’s, vrienden…
            Zo geef je je kind een brede basis en blijft hij overeind, ook als
            het eens wat minder gaat in de sport.
          </li>
          <li>
            {' '}
            Geef het goede voorbeeld Als je zelf sport, geef dan het juiste
            voorbeeld: blijf rustig en sportief, ook als het minder goed gaat.
            Je kind leert meer van wat jij doet dan van wat jij zegt! Hebben
            jullie het allebei moeilijk om je te beheersen? Dan werk je er toch
            gewoon samen aan…
          </li>
          <li>
            {' '}
            Zoek mee naar oplossingen Je kind klaagt over stress? Dan is het
            niet genoeg als je zegt ‘Je moet gewoon rustig blijven’. Dat weet je
            kind zelf ook. Wat hij niet weet, is hoe hij dat moet aanpakken.
            Zoek daarom samen naar praktische tips waarmee hij aan de slag kan.
          </li>
          <li>
            {' '}
            Leer je kind denken Geef je kind de rust en de tijd om na een
            wedstrijd zelf een evaluatie te maken. Als jij direct jouw feedback
            geeft, krijgt hij nooit de kans om zelf te leren denken. Mooi
            meegenomen: als je eerst luistert, leer je je kind beter kennen!
          </li>
        </List>
      </TextBlock>
    </Container>
  </Layout>
)

export default FairPlayPage
