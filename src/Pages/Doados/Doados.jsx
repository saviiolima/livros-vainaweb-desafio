import S from "./doados.module.scss";
import booksdoados from "../../assets/img/booksdoados.png";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Doados() {
  const [livros, setLivros] = useState([]);

  const getLivros = async () => {
    const response = await axios.get(
      "https://api-livros-c1pr.onrender.com/livros"
    );
    setLivros(response.data);
  };

  useEffect(() => {
    getLivros();
  }, []);

  return (
    <main>
      <section className={S.boxDoados}>
        <h2>Livros Doados</h2>
        <section className={S.boxLivros}>
          <article>
            <img src={booksdoados} alt="livro o protagonista" />
            <h3>O protagonista</h3>
            <p>Susanne Andrade</p>
            <p>Ficção</p>
          </article>
          {livros.map((item) => (
            <article key={item.id}>
              <img src={item.imagem_url} alt="" />
              <h3>{item.titulo}</h3>
              <p>{item.categoria}</p>
              <p>{item.autor}</p>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}
