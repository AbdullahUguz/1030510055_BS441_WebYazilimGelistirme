import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center">
      <div className="row">
        <div className="col-sm-12 ">
          <h5>
            Taş kağıt makas oyununa hoş geldiniz. Bu oyunda, iki tane oyun modu
            bulunmaktadır.
          </h5>
        </div>
      </div>
      <hr />
      <div className="row mt-2">
        <div className="col-sm-6">
          <h4 className="mb-4">Oyun Mod 1</h4>
          <p>
            Bilgisayara karşı oynanyan bir oyun , oyuncu şeçimini yaptıktan
            sonra oyna butonuna basarak bilgisayarın seçmesini sağlayabilirsiniz
            ve oyunu başlatabilirsiniz. Skoru ilk 5 yapan oyunu kazanır.
          </p>
        </div>

        <div className="col-sm-6">
          <h4 className="mb-4">Oyun Mod 2</h4>
          <p>
            İki tane oyunucu aynı bilgisayarda oynanabilecek şekildedir. Birinci
            oyuncu şeçimini yaptıktan sonra şeçim yapttığı butonlar görünmez
            oluyor ve ikinci oyunucu da şeçimini yapınca şeçim yaptığı butonlar
            görünmez oluyor. Her iki oyuncuda şeçim yaptıktan sonra şeçimleri
            göster ile oyunu oynamış oluyorsunuz.Oyun puanlandırma ile
            gerçekleşiyor.
          </p>
            <div className="mt-3 mb-3 text-start">
              <ul>
                <h6>Puanlandırma Tablosu</h6>
                <li>Taş Makası Yenerse +5 Puan</li>
                <li>Makas Kağıdı Yenerse +3 Puan</li>
                <li>Kağıt Taşı Yenerse +2 Puan</li>
              </ul>
            </div>
           <p>İlk 10 ve üstü bir puana ulaşan oyunu kazanıyor.</p> 
          
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-sm-6">
          <Link to={"/modeOne"}>
            <button className="btn btn-outline-success">Oyun Modu 1</button>
          </Link>
        </div>
        <div className="col-sm-6">
          <Link to={"/modeTwo"}>
            <button className="btn btn-outline-success">Oyun Modu 2</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
