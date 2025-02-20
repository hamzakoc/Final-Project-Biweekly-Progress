import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Card, Button, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody, CardDeck
} from 'reactstrap';

import './css/sections.css';

import Exchange from './Exchange'

import logo from './component/images/logo.jpeg'
import ramadan from './component/images/ramadan.jpeg'
import thanksgiving from './component/images/thanksgiving.jpg'
import neyapiyoruz from './component/images/neyapiyoruz.png'
import education from './component/images/education.jpg'
import entegrasyon from './component/images/entegrasyon.jpg'


const items = [
  {
    src: logo,
    altText: '',
    caption: ''
  },
  {
    src: ramadan,
    altText: '',
    caption: ''
  },
  {
    src: thanksgiving,
    altText: '',
    caption: ''
  }
];

const Section1 = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >

        <CardImg className="carousel" src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.altText} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (

    <div >
      <div className="section1-background">
        <div className="row">
          <div className="leftcolumn">

                                <div class="head-text">
                                    <span class="head-text1">CANADA WELCOME CENTER </span>
                                    
                              </div>
                    <div class="">
                    <div class="row media">
                        <div class="col-md-5 carosuel">
                        <Carousel className="carousel-img"
                              activeIndex={activeIndex}
                              next={next}
                              previous={previous}
                            >
                              <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                              {slides}
                              <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                              <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                            </Carousel>
                        </div>
                        <div class="col-md-7 carousel-text ">
                            <h4>Kanada Karsilama Merkezi</h4>
                                        <h4 class="subheading">Biz kimiz ?</h4>
                        <p class="text-muted">Northern Lights Relief Foundation  gönüllü grubu, Kanada'ya yeni gelenlerin
                        bu yeni ülkede ilk sorunlarını çözmeleri için yeni bir fırsat yaratmak üzere bir araya geldi. Northern Lights Relief Foundation, 
                        insani yardım ve mülteci çabalarında işbirliği yapmak için gönüllü ekiplerini bir araya getiren kar amacı gütmeyen bir organizasyondur.
                         Bu ekipler ailelerin ihtiyaçlarına maddi, duygusal ve fiziksel olarak yardım etmeyi ve yeni gelenlere hem entegrasyon hem de yerleşim 
                         anlamında yerleşmelerine yardımcı olmak için bir dizi destek sunar.
                        </p>
                        </div>
                    </div>
                    <br></br><br></br><br></br>
                    <div class="row">
                        <div class="col-md-6 ">
                            <h4>Ne yapiyoruz ?</h4>
                                       
                                        <p class="text-muted">Karsilama Merkezi, çalışanlarına ve gönüllülerine yardım etmek, toplumun her bir üyesinin 
                                        topluluklarına, herhangi bir şekilde veya hiçbir şekilde yargılama veya 
                                            ayrımcılık kabul etmeyen, hoş ve saygılı bir ortamda geri dönebileceğine inanmaktadır.</p>
                        </div>
                        <div class="col-md-6 ">
                            <img src={neyapiyoruz} class="main-image" alt=""/>
                        </div>
                    </div>

                    <br></br><br></br><br></br>
                    <div class="row">
                        <div class="col-md-5 ">
                             <img class="main-image" src={education}  class="rounded-circle img-fluid" alt=""/>
                        </div>
                        
                        <div class="col-md-7 ">
                            <h4>İnsanlığı şefkatli bir yürekle kucaklamanın önemini anlarken, katkılarımızı ve gönüllülüğümüzü Kanada'nın ötesine taşıyoruz..</h4>
                                       
                                        <p class="text-muted">İnsanların yardımında yerel ve uluslararası alanda işbirliği yapmak için gönüllü ekiplerimiz ile buradayiz.</p>
                        </div>
                    </div>

                    <br></br><br></br><br></br>
                    <div class="row ">
                        <div class="col-md-5">
                            <h4>Entegrasyon</h4>
                                        
                                        <p class="text-muted">Hem entegrasyon hem de yerleşim açısından yeni yerleşenlere yardım ediyoruz.
                                        Ailelerin ihtiyaçlarına maddi, duygusal ve fiziksel olarak yardım etmeyi teklif eden bir dizi destek sağlamak icin burdayiz.</p>
                        </div>
                        <div class="col-md-7">
                            <img class="main-image" src={entegrasyon}  alt=""/>
                        </div>
                    </div>
                </div>

                

          </div>


          <div className="rightcolumn">

                        <div className="card rigtcol boxshadow">
                          <h2 className="rigtcol-h">Siginmacilar</h2>
                          
                          <p>Dünya, tarihteki en kötü mülteci krizine tanık oluyor… Dünya genelinde 65 milyondan fazla insan zorla yerlerinden ediliyor. Yani, 
                            dünyadaki 113 kişiden 1'i bu kategorilerden birine giriyor.
                             Savaşlar, çatışmalar, dini / politik zulüm ve insan hakları ihlalleri insanları evlerinden ve topluluklarından kaçmaya ve başka bir yerde yeni 
                             bir hayata başlamaya zorlar. Hayatlarına sıfırdan başlamak zorunda kalan bu mülteciler çoğu zaman temel insan gereksinimlerini bile almakta zorlanıyor.
                              Yardim icin</p>
                             <a href="/yardim"><Button>Tıklayınız</Button></a>
                        </div>


                        <div className="rigtcol boxshadow">
                          <Exchange />
                        </div>

                        <div className="card  rigtcol boxshadow">
                          <h3 className="rigtcol-h">Egitim</h3>
                          <p>Bugün dünya çapında 103 milyon genç hala temel okuryazarlık becerisine sahip değil ve bunların% 60'ından fazlası kız. Birleşmiş Milletler'in 
                            sürdürülebilir kalkınma hedeflerinden biri, 2030 yılına kadar tüm kız ve erkek çocuklarının ücretsiz, eşit ve kaliteli 
                            ilk ve orta öğretimi tamamlamasını sağlamaktır.Daha fazla bilgi icin</p>
                            <a href="/cocuklaricinokullar"><Button>Tıklayınız</Button></a>
                        </div>

                        <div className=" card rigtcol boxshadow">
                          <h3 className="rigtcol-h">Projelerimiz</h3>
                          <p> Projemizin amaci, devam eden projelerimize toplumun katılımını ve ilgisini teşvik etmektir. 
                          Northern Lights Relief Foundation  ile bir proje kurarak, ihtiyacı olanlara yardım etmek için dünya çapında bir çabaya katkıda bulunuyoruz. Daha fazla bilgi icin</p>
                          <a href="/hakkimizda"><Button>Tıklayınız</Button></a>
                        </div>


          </div>

        </div>

      </div>
      
      <div  class="interests">  
              <h4>Yeni gelenlere yardım etmek için buradayız…</h4>
              
              {/* <ul>
                <li>Photoshop</li>
                <li>Web Development</li>
                <li>Digital Marketing</li>
                <li>Fishing and Camping</li>
                <li>Swimming</li>


  </ul> */}

</div>
    </div>

    
    

  );
}

export default Section1;