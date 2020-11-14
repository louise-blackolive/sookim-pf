import React from "react";
import Cabin from "../images/cabin.png";
import Cake from "../images/cake.png";
import Circus from "../images/circus.png";
import Game from "../images/game.png";
import Safe from "../images/safe.png";
import Submarine from "../images/submarine.png";

const Portfolio = () => {
  return (
    <div class="portfolio" id="portfolio">
      <div class="portfolio-name">
        <a class="job">PORTFOLIO</a>
      </div>
      <div>
        <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
        <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
        <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
        <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
        <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
        <i class="fas fa-star fa-2x portfolio-line"></i>
        <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
        <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
        <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
        <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
        <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
      </div>
      <div class="portfolio-container">
        <div class="portfolio-item">
          <div class="portfolio-item-caption ">
            <div class="portfolio-item-caption-content">
              <i class="fas fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="portfolio-item-img" src={Cabin} alt />
        </div>
        <div class="portfolio-item">
          <div class="portfolio-item-caption ">
            <div class="portfolio-item-caption-content">
              <i class="fas fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="portfolio-item-img" src={Cake} alt />
        </div>
        <div class="portfolio-item">
          <div class="portfolio-item-caption ">
            <div class="portfolio-item-caption-content">
              <i class="fas fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="portfolio-item-img" src={Circus} alt />
        </div>
        <div class="portfolio-item">
          <div class="portfolio-item-caption ">
            <div class="portfolio-item-caption-content">
              <i class="fas fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="portfolio-item-img" src={Game} alt />
        </div>
        <div class="portfolio-item">
          <div class="portfolio-item-caption ">
            <div class="portfolio-item-caption-content">
              <i class="fas fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="portfolio-item-img" src={Safe} alt />
        </div>
        <div class="portfolio-item">
          <div class="portfolio-item-caption ">
            <div class="portfolio-item-caption-content">
              <i class="fas fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="portfolio-item-img" src={Submarine} alt />
        </div>
      </div>
      <div class="portfolio-modal hidden">
        <div class="modal-dialog" role="document"></div>
        <div class="modal-content">
          <div class="modal-title">
            <a class="modal-title-text">This is cabin</a>
          </div>
          <div>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
            <i class="fas fa-star fa-2x portfolio-line"></i>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
          </div>
          <div class="modal-content-text">
            <p class="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              neque assumenda ipsam nihil, molestias magnam, recusandae quos
              quis inventore quisquam velit asperiores, vitae? Reprehenderit
              soluta, eos quod consequuntur itaque. Nam.
            </p>
            <button class="btn-modal btn-primary" href="#">
              <i class="fas fa-times fa-fw"></i>
              Close Window
            </button>
          </div>
        </div>
      </div>
      <div class="portfolio-modal hidden">
        <div class="modal-dialog" role="document"></div>
        <div class="modal-content">
          <div class="modal-title">
            <a class="modal-title-text">This is cake</a>
          </div>
          <div>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
            <i class="fas fa-star fa-2x portfolio-line"></i>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
          </div>
          <div class="modal-content-text">
            <p class="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              neque assumenda ipsam nihil, molestias magnam, recusandae quos
              quis inventore quisquam velit asperiores, vitae? Reprehenderit
              soluta, eos quod consequuntur itaque. Nam.
            </p>
            <button class="btn-modal btn-primary" href="#">
              <i class="fas fa-times fa-fw"></i>
              Close Window
            </button>
          </div>
        </div>
      </div>
      <div class="portfolio-modal hidden">
        <div class="modal-dialog" role="document"></div>
        <div class="modal-content">
          <div class="modal-title">
            <a class="modal-title-text">This is circus</a>
          </div>
          <div>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
            <i class="fas fa-star fa-2x portfolio-line"></i>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
          </div>
          <div class="modal-content-text">
            <p class="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              neque assumenda ipsam nihil, molestias magnam, recusandae quos
              quis inventore quisquam velit asperiores, vitae? Reprehenderit
              soluta, eos quod consequuntur itaque. Nam.
            </p>
            <button class="btn-modal btn-primary" href="#">
              <i class="fas fa-times fa-fw"></i>
              Close Window
            </button>
          </div>
        </div>
      </div>
      <div class="portfolio-modal hidden">
        <div class="modal-dialog" role="document"></div>
        <div class="modal-content">
          <div class="modal-title">
            <a class="modal-title-text">This is game</a>
          </div>
          <div>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
            <i class="fas fa-star fa-2x portfolio-line"></i>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
          </div>
          <div class="modal-content-text">
            <p class="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              neque assumenda ipsam nihil, molestias magnam, recusandae quos
              quis inventore quisquam velit asperiores, vitae? Reprehenderit
              soluta, eos quod consequuntur itaque. Nam.
            </p>
            <button class="btn-modal btn-primary" href="#">
              <i class="fas fa-times fa-fw"></i>
              Close Window
            </button>
          </div>
        </div>
      </div>
      <div class="portfolio-modal hidden">
        <div class="modal-dialog" role="document"></div>
        <div class="modal-content">
          <div class="modal-title">
            <a class="modal-title-text">This is safe</a>
          </div>
          <div>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
            <i class="fas fa-star fa-2x portfolio-line"></i>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
          </div>
          <div class="modal-content-text">
            <p class="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              neque assumenda ipsam nihil, molestias magnam, recusandae quos
              quis inventore quisquam velit asperiores, vitae? Reprehenderit
              soluta, eos quod consequuntur itaque. Nam.
            </p>
            <button class="btn-modal btn-primary" href="#">
              <i class="fas fa-times fa-fw"></i>
              Close Window
            </button>
          </div>
        </div>
      </div>
      <div class="portfolio-modal hidden">
        <div class="modal-dialog" role="document"></div>
        <div class="modal-content">
          <div class="modal-title">
            <a class="modal-title-text">This is submarine</a>
          </div>
          <div>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
            <i class="fas fa-star fa-2x portfolio-line"></i>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
            <i class="fas fa-grip-lines fa-2x portfolio-line"></i>
          </div>
          <div class="modal-content-text">
            <p class="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              neque assumenda ipsam nihil, molestias magnam, recusandae quos
              quis inventore quisquam velit asperiores, vitae? Reprehenderit
              soluta, eos quod consequuntur itaque. Nam.
            </p>
            <button class="btn-modal btn-primary" href="#">
              <i class="fas fa-times fa-fw"></i>
              Close Window
            </button>
          </div>
        </div>
      </div>
      <div class="mail-modal hidden">
        <div class="modal-dialog" role="document"></div>
        <div class="mail-modal-content">
          <div class="mail-modal-text">메일이 성공적으로 전송되었습니다.</div>
          <button class="mail-close-btn btn-primary" href="#">
            <i class="fas fa-times fa-fw"></i>
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
