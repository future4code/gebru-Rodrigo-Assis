import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';

import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.fssa7-1.fna.fbcdn.net/v/t1.6435-9/38940418_2032177573761545_963282034015338496_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFcq4J2_H2xjsv99oZx_2WgR2CngTn_2dRHYKeBOf_Z1I6v076cqjPphhg5HaUM1Ex5m0e6IpMeU4eVYHXv8cVd&_nc_ohc=eDZWc1AXeY8AX909W4V&tn=QtSnBWyfgHmdTO-b&_nc_ht=scontent.fssa7-1.fna&oh=00_AT8SIRxpPsM0N-WXQDgbB1UGWkuErpd7_trJtDjqifYtgA&oe=6219B249" 
          nome="Rodrigo" 
          descricao="Oi, eu sou o Rodrigo. Tenho 25 anos, sou tecnico em edficações e trabalho em uma empresa de engenharia civil desenvolvento projetos."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
       
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://www.facebook.com/photo.php?fbid=580500808701346&set=pb.100002242953394.-2207520000..&type=3" 
          nome="GEPRO ENGENHARIA" 
          descricao="Trabalhei alguns anos desenvolvendo projetos hidrossanitários de casas e prédios de luxo" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="Arch Fire" 
          descricao="Minha primeira experiencia na area da engenharia" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
