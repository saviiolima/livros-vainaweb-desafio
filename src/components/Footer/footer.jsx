import facebook from "../../assets/img/facebook.png";
import instagram from "../../assets/img/instagram.png";
import linkedin from "../../assets/img/linkedin.png";
import twitter from "../../assets/img/twitter.png";
import youtube from "../../assets/img/youtube.png";
import S from "./footer.module.scss";

export default function footer() {
  return (
    <footer>
      <section className={S.boxMedia}>
        <h3>4002-8922</h3>
        <nav>
          <a href="">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="">
            <img src={youtube} alt="youtube" />
          </a>
          <a href="">
            <img src={linkedin} alt="linkedin" />
          </a>
          <a href="">
            <img src={instagram} alt="instagram" />
          </a>
        </nav>
      </section>
      <section className={S.boxLayout}>
        <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024 </p>
      </section>
    </footer>
  );
}
