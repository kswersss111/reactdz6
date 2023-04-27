import React from "react";

const Footer = () => {
  return (
    <div>
      <div class="footer-bs">
        <div class="row">
          <div class="col-md-3 footer-brand animated fadeInLeft">
            <h2>Rabota.Ru</h2>
            <p>Работа для всех звезд если вы бывшая звезда пишите нам.</p>
            <p>© 2022-2023 «Rabota.Ru».</p>
          </div>

          <div class="col-md-4 footer-nav animated fadeInUp">
            <h4>Menu</h4>
            <div class="col-md-6">
              <ul class="pages">
                <li>
                  <a href="#">Все для звезд</a>
                </li>
                <li>
                  <a href="#">Любая работа</a>
                </li>
                <li>
                  <a href="#">Обсолютно любая</a>
                </li>
                <li>
                  <a href="#">Разноя</a>
                </li>
                <li>
                  <a href="#">Не проходи мимо</a>
                </li>
              </ul>
            </div>
            <div class="col-md-6">
              <ul class="list">
                <li>
                  <a href="#">Контакты</a>
                </li>
                <li>
                  <a href="#">Карта сайта</a>
                </li>
                <li>
                  <a href="#">Карта Форума</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-md-2 footer-social animated fadeInDown">
            <h4>Соц.сети</h4>
            <ul>
              <li id="d">ВКонтакте</li>
              <li id="d">Facebook</li>
              <li id="d">Instagram</li>
              <li id="d">Twitter</li>
              <li id="d">+996777777777</li>
            </ul>
          </div>

          <div class="col-md-3 footer-ns animated fadeInRight">
            <p>
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Введите email..."
                ></input>
                <span class="input-group-btn">
                  <button class="btn btn-default" type="button">
                    <span class="glyphicon glyphicon-envelope"></span>
                  </button>
                </span>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
