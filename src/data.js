export const business = {
 name: 'Império Bolos Caseiros',
 address: 'Rua Santa Filomena, 329 — Centro, São Bernardo do Campo — SP',
 postalCode: '09710-060', phone: '(11) 4330-0430', hours: null,
 instagram: 'https://www.instagram.com/imperioboloscaseirossbc/', facebook: null,
 whatsapp: 'https://wa.me/5511997019490?text=' + encodeURIComponent('Olá! Conheci o Império Bolos Caseiros pelo site e gostaria de saber mais sobre os bolos disponíveis.'),
 maps: 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent('Império Bolos Caseiros, Rua Santa Filomena 329, São Bernardo do Campo SP 09710-060'),
 reviewsUrl: null // Inserir o link direto da ficha Google após confirmação.
};
export const products = [
 {id:'milho',name:'Bolo de milho',category:'Bolos caseiros',description:'Uma inspiração para acompanhar aquele café passado na hora.',price:25,image:null},
 {id:'cenoura',name:'Bolo de cenoura',category:'Bolos caseiros',description:'O encontro de uma massa fofinha com o sabor do chocolate.',price:28,image:null},
 {id:'chocolate',name:'Bolo de chocolate',category:'Bolos recheados',description:'Uma ideia de doçura para os momentos de celebração.',price:45,image:null},
 {id:'limao',name:'Torta de limão',category:'Tortas e sobremesas',description:'Uma combinação delicada de doce e um toque cítrico.',price:38,image:null},
 {id:'laranja',name:'Bolo de laranja',category:'Bolos caseiros',description:'Sabor que inspira uma boa conversa à mesa.',price:25,image:null},
 {id:'doces',name:'Doces para compartilhar',category:'Doces',description:'Pequenos carinhos para dividir com quem você gosta.',price:20,image:null}
];
