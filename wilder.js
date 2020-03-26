window.addEventListener("DOMContentLoaded", (event) => {
    const wilders = [{name:'Victor <br> Auxietre-Fontes', mobility:'<li>International <li> Sportif'}, 
    {name:'Martin Gilbert', mobility:'National <br> Web'}, 
    {name:'Malik Himeur', mobility:'International', domain: 'Banque, Assurance'}, 
    {name:'Brian Lagaude', mobility:'International', domain:'Web'},
    {name:'Cécyl Lang', mobility:'International', domain:'Web'}, 
    {name:'Anthony Lucci', mobility:'International', domain:'Web, Jeux-vidéos'}, 
    {name:'Angélique Mora', mobility:'International, Quebec', domain:'Web, Jeux-vidéos'}, 
    {name:'Julien Nicaise', mobility:'International, Italie', domain:'Web, Jeux-vidéos, Sport'}, 
    {name:'Stephaine Panthiez', mobility:'National', domain:'Web, Jeux-vidéos'}, 
    {name:'Lucas Perrin', mobility: 'National', domain:'Web, Mobile, Jeux-vidéos'},
    {name:'Joël Rodier', mobility:'National', domain:'Web'}, 
    {name:'Fabrice Roger', mobility:'60kms de Soissons', domain:'Web'}, 
    {name:'Brian Thellier', mobility:'60kms de Soissons', domain:'Web'}, 
    {name:'Victor Veyrier', mobility:'International', domain:'Web'}];

    const template = document.querySelector('#card-template');

    wilders.forEach((wilder) => {
        const card = template.content.cloneNode(true);
        card.querySelector('.card-title').innerHTML = wilder.name
        card.querySelector('.card-keywords').innerHTML = wilder.mobility
        document.querySelector('.section-wild-block-photo').appendChild(card)
    })
})
