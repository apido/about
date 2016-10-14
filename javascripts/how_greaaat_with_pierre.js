'use strict';
(function() {

  var data = {
    "gravatar": "https://fr.gravatar.com/userimage/23609707/8a6ad1c9360309b9af80cfa55ee7de8c.png",
    "name": "Pierre Merlin",
    "title": "Développeur web et formateur agile",
    "city": "Beauvais",
    "externalUrl": "http://apido.org",
    "jumbotron": "Mes clients, -startups, agences web ou grands comptes-, ont des métiers trés variés. Ma force est de comprendre leur environnement pour répondre de manière unique à chacun d’eux.",
    "descriptionHTLM": "<p>J’utilise des outils principalements basés sur le langage Ruby.<br>Ces outils sont les garants d’un travail fiable, durable et efficace. Ils témoignent d’une haute éxigence professionnelle.<br>Je travaille en suivant les préceptes AGILES.</p><p>J’encadre également des formations aux méthodes AGILES lors de sessions de 1 à 3 jours.</p>",
    "socialHTML": '<ul class="list-inline social-list"><li>Retrouvez-moi aussi sur :</li><li><a href="https://twitter.com/apiclub" target="_blank" rel="external" class="twitter"><svg class="icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" enable-background="new 0 0 32 32"><path fill="#947D9E" d="M31 6.7c-1.1.5-2.3.8-3.5 1 1.3-.8 2.2-2 2.7-3.4-1.2.7-2.5 1.2-3.9 1.5-1.1-1.2-2.7-1.9-4.5-1.9-3.4 0-6.2 2.8-6.2 6.2 0 .5.1 1 .2 1.4-5.1-.3-9.7-2.7-12.7-6.4-.5.7-.8 1.8-.8 2.9 0 2.1 1.1 4 2.7 5.1-1 0-2-.3-2.8-.8v.1c0 3 2.1 5.5 4.9 6-.5.1-1.1.2-1.6.2-.4 0-.8 0-1.2-.1.8 2.4 3.1 4.2 5.7 4.3-2.1 1.7-4.8 2.6-7.6 2.6-.5 0-1 0-1.5-.1 2.7 1.7 6 2.8 9.4 2.8 11.3 0 17.5-9.4 17.5-17.5v-.8c1.3-.8 2.4-1.9 3.2-3.1z"></path></svg></a></li><li><a href="https://github.com/pimpin" target="_blank" rel="external" class="github"><svg class="icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" enable-background="new 0 0 32 32"><path fill-rule="evenodd" clip-rule="evenodd" fill="#947D9E" d="M16 1.4c-8.3 0-15 6.7-15 15 0 6.6 4.3 12.2 10.3 14.2.8.1 1-.3 1-.7v-2.6c-4.2.9-5.1-2-5.1-2-.7-1.7-1.7-2.2-1.7-2.2-1.4-.9.1-.9.1-.9 1.5.1 2.3 1.5 2.3 1.5 1.3 2.3 3.5 1.6 4.4 1.2.1-1 .5-1.6 1-2-3.3-.4-6.8-1.7-6.8-7.4 0-1.6.6-3 1.5-4-.2-.4-.7-1.9.1-4 0 0 1.3-.4 4.1 1.5 1.2-.3 2.5-.5 3.8-.5 1.3 0 2.6.2 3.8.5 2.9-1.9 4.1-1.5 4.1-1.5.8 2.1.3 3.6.1 4 1 1 1.5 2.4 1.5 4 0 5.8-3.5 7-6.8 7.4.5.5 1 1.4 1 2.8v4.1c0 .4.3.9 1 .7 6-2 10.2-7.6 10.2-14.2.1-8.2-6.6-14.9-14.9-14.9z"></path></svg></a></li><li><a href="https://fr.linkedin.com/in/pierre-merlin-40021254" target="_blank" rel="external" class="linkedin"><svg class="icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" enable-background="new 0 0 32 32"><path fill="#947D9E" d="M28.8.9h-25.6c-1.2 0-2.2 1-2.2 2.2v25.9c0 1.2 1 2.2 2.2 2.2h25.6c1.2 0 2.2-1 2.2-2.2v-25.9c0-1.2-1-2.2-2.2-2.2zm-18.7 25.3h-4.5v-13.7h4.5v13.7zm-2.3-15.5c-1.6 0-2.5-1-2.5-2.4 0-1.3 1-2.3 2.6-2.3 1.5 0 2.5 1 2.5 2.4 0 1.2-1 2.3-2.6 2.3zm18.6 15.5h-4.5v-7.3c0-1.8-.7-3.1-2.3-3.1-1.3 0-2 .8-2.3 1.7-.1.3-.1.7-.1 1.1v7.6h-4.5s.1-12.4 0-13.6h4.5v1.9c.6-.9 1.7-2.3 4.1-2.3 3 0 5.2 1.9 5.2 6.1v7.9z"></path></svg></a></li></ul>',
    "notice": "Vous allez consulter la page d'un membre effectif.\n Mais pour appercevoir l'avenir vous pourrez enclore cliquer : How-Greaaat-with-Pierre",
  }

  checkCurrentHost();
  tryIndexInsertion();
  tryProfileReplacement();

  function checkCurrentHost() {
    if (location.host != "greaaat.com") {
      window.alert("Oups ! Vous devez etre sur 'greaaat.com' pour lancer le script.\nNous allons vous y rediriger.\nMerci de relancer le script ensuite.")
      window.location = "http://greaaat.com/freelances/";
    }
  }

  function tryIndexInsertion(){
    try {
      var firstFreelance = document.getElementsByClassName('freelance')[0]
      var me = firstFreelance.cloneNode(true)
      me.getElementsByTagName("img")[0].srcset = data.gravatar
      me.getElementsByTagName("h2")[0].innerHTML = data.name
      me.getElementsByTagName("h3")[0].innerHTML = data.title
      me.getElementsByTagName("svg")[0].nextSibling.textContent = data.city
      var anchor = me.getElementsByTagName("a")[0]
      anchor.onclick = function(e){alert(data.notice)}
      anchor.title = data.name
      firstFreelance.parentElement.insertBefore(me,firstFreelance)

    } catch (e) {

    } finally {

    }
  }

  function tryProfileReplacement(){
    try {
      var head = document.getElementsByClassName("single-freelance__head")[0]
      head.getElementsByTagName("img")[0].srcset = data.gravatar
      head.getElementsByTagName("h1")[0].innerHTML = data.name
      head.getElementsByTagName("h2")[0].innerHTML = data.title
      head.getElementsByTagName("svg")[0].nextSibling.textContent = data.city
      head.getElementsByTagName("a")[0].href = data.externalUrl
      // remove old description
      var wrapperContent = head.parentElement.children
      for (var i = 0; i < wrapperContent.length;/*do nothing*/) {
        if (wrapperContent.item(i).tagName != "DIV") {
          wrapperContent.item(i).remove()
        }else{
          // increment index only if ith element was not removed.
          i++
        }
      }

      // add new desc
      var jumbotron = document.createElement('p')
      jumbotron.innerHTML = data.jumbotron
      head.insertAdjacentElement('afterend',jumbotron)
      jumbotron.insertAdjacentHTML('afterend',data.descriptionHTLM + data.socialHTML)

    } catch (e) {

    } finally {

    }
  }
})();
