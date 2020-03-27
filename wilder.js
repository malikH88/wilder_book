window.addEventListener("DOMContentLoaded", (event) => {
    const wilders = [{name:'Victor <br> Auxietre-Fontes', mobility:'<li>Mobilité : Internationale <li>Domaine : Sport'}, 
    {name:'Martin Gilbert', mobility:'<li>Mobilité : Nationale <li>Domaine :  Web'}, 
    {name:'Malik Himeur', mobility:'<li>Mobilité : Internationale <li>Domaine : Banque, Assurance'}, 
    {name:'Brian Lagaude', mobility:'<li>Mobilité : Internationale <li>Domaine : Web'},
    {name:'Cécyl Lang', mobility:'<li>Mobilité : Internationale <li>Domaine : Web'}, 
    {name:'Anthony Lucci', mobility:'<li>Mobilité : Internationale <li>Domaine : Web, Jeux-vidéos'}, 
    {name:'Angélique Mora', mobility:'<li>Mobilité : Internationale, <br>Quebec <li>Domaine : Web, Jeux-vidéos'}, 
    {name:'Julien Nicaise', mobility:'<li>Mobilité : Internationale, Italie <li>Domaine : Web, Jeux-vidéos,<br> Sport'}, 
    {name:'Stephaine Panthiez', mobility:'<li>Mobilité : Nationale <li>Domaine : Web, Jeux-vidéos'}, 
    {name:'Lucas Perrin', mobility: '<li>Mobilité : Nationale <li>Domaine : Web, Mobile,<br> Jeux-vidéos'},
    {name:'Joël Rodier', mobility:'<li>Mobilité : Nationale <li>Domaine : Web'}, 
    {name:'Fabrice Roger', mobility:'<li>Mobilité : 60kms de Soissons <li>Domaine : Web'}, 
    {name:'Brian Thellier', mobility:'<li>Mobilité : 60kms de Soissons <li>Domaine : Web'}, 
    {name:'Victor Veyrier', mobility:'<li>Mobilité : Internationale <li>Domaine : Web'}];

    const template = document.querySelector('#card-template');

    wilders.forEach((wilder) => {
        const card = template.content.cloneNode(true);
        card.querySelector('.card-title').innerHTML = wilder.name
        card.querySelector('.card-keywords').innerHTML = wilder.mobility
        document.querySelector('.section-wild-block-photo').appendChild(card)
    })
})
