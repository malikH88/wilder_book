window.addEventListener("DOMContentLoaded", (event) => {
    const wilders = [{name:'Victor <br> Auxietre-Fontes <a href="https://www.linkedin.com/in/victor-auxietre-fontes-6a8439184/"><i class="fab fa-linkedin"></i></a>',image :'image/victor2.png', mobility:'<li>Mobilité : Internationale <li>Serieux, ordonné', details:'Je suis à la recherche d\'une experience professionelle. J’ai l’ambition de travailler, entre autre, dans le domaine du sport.'}, 
    {name:'Martin <br> Gilbert <a href="https://www.linkedin.com/in/martin-gilbert-23452b1a3/"><i class="fab fa-linkedin"></i></a>',image :'image/martin.png', mobility:'<li>Mobilité : Nationale <li> Logique et autonome'}, 
    {name:'Malik <br> Himeur <a href="https://www.linkedin.com/in/malik-himeur-27452b1a3/"><i class="fab fa-linkedin"></i></a>',image : 'image/malik.png', mobility:'<li>Mobilité : Internationale <li>Passionné, serieux'}, 
    {name:'Brian <br> Lagaude <a href="https://www.linkedin.com/in/brian-lagaude-4110b31a4/"><i class="fab fa-linkedin"></i></a>',image : 'image/bryan1.png', mobility:'<li>Mobilité : Internationale <li>Communicatif et gestion pro'},
    {name:'Cécyl <br> Lang <a href="https://www.linkedin.com/in/c%C3%A9cyl-lang-b21948194/"><i class="fab fa-linkedin"></i></a>',image : 'image/cecyl.png', mobility:'<li>Mobilité : Internationale <li>Passionné et serieux'}, 
    {name:'Anthony <br> Lucci <a href="https://www.linkedin.com/in/anthony-lucci-62b8a911a/"><i class="fab fa-linkedin"></i></a>',image : 'image/anthony.png', mobility:'<li>Mobilité : Internationale <li>A l\'écoute, motivé'}, 
    {name:'Angélique <br> Mora <a href="https://www.linkedin.com/in/angeliquemora/"><i class="fab fa-linkedin"></i></a>',image : 'image/angelique.png', mobility:'<li>Mobilité : Internationale <li>Sérieuse et passionnée'}, 
    {name:'Julien <br> Nicaise  <a href="https://www.linkedin.com/in/julien-nicaise-64b0641a4/"><i class="fab fa-linkedin"></i></a>',image : 'image/julien.png', mobility:'<li>Mobilité : Internationale, Italie <li>Ordonné, motivé'}, 
    {name:'Stephaine <br> Panthiez <a href="https://www.linkedin.com/in/stephaine-pantiez-a310b31a4/"><i class="fab fa-linkedin"></i></a>',image : 'image/stephaine.png', mobility:'<li>Mobilité : Nationale <li>Entraide, curieux'}, 
    {name:'Lucas <br> Perrin <a href="https://www.linkedin.com/in/lucas-perrin51000/"><i class="fab fa-linkedin"></i></a>',image : 'image/lucas.png', mobility: '<li>Mobilité : Nationale <li>Ouvert d\'esprit'},
    {name:'Joël <br> Rodier  <a href="https://www.linkedin.com/in/joel-rodier-6280b41a4/"><i class="fab fa-linkedin"></i></a>',image : 'image/joel.png', mobility:'<li>Mobilité : Nationale <li>Motivé, serieux'}, 
    {name:'Fabrice <br> Roger <a href="https://www.linkedin.com/in/rogerfabrice/"><i class="fab fa-linkedin"></i></a>',image : 'image/fabrice.png', mobility:'<li>Mobilité : 60kms de Soissons <li>Logique curieux et federateur'}, 
    {name:'Brian <br> Thellier <a href="https://fr.linkedin.com/in/brian-thellier-058439185"><i class="fab fa-linkedin"></i></a>',image : 'image/brian2.png', mobility:'<li> Mobilité : Internationale <li>Honnête, rigoureux et curieux'}, 
    {name:'Victor <br> Veyrier <a href="https://www.linkedin.com/in/victor-veyrier-ab6948194/"><i class="fab fa-linkedin"></i></a>',image : 'image/victor1.png', mobility:'<li>Mobilité : Internationale <li>Créatif et ambitieux'}];

    const template = document.querySelector('#card-template');

    wilders.forEach((wilder) => {
        const card = template.content.cloneNode(true);
        card.querySelector('.card-title').innerHTML = wilder.name
        card.querySelector('.card-image').src = wilder.image
        card.querySelector('.card-keywords').innerHTML = wilder.mobility
        card.querySelector('.card-details').innerHTML = wilder.details
        document.querySelector('.section-wild-block-photo').appendChild(card)
    })
})
