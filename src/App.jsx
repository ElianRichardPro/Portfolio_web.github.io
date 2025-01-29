import { useState } from 'react'
import profilePhoto from '../www/Photo_CV_Linkedin.jpg' // ✅ Corrige le chemin de l'image
import './App.css'
import { BackgroundBeams  } from "./components/ui/background-beams";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./components/ui/text-generate-effect";




function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      {/* ✅ Correct className */}
      <nav className="icon-nav relative z-20">
        <span className="logo-reseau">
          <a href="https://www.linkedin.com/in/elian-richard-18a463298">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </span>
        <div className="vert_bar_white"></div>
        <span className="logo-reseau">
          <a href="https://github.com/ElianRichardPro">
            <i className="fa-brands fa-github"></i>
          </a>
        </span>
        <div className="vert_bar_white"></div>
        <span className="logo-reseau">
          <a href="mailto:elianrichard.pro@gmail.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </span>
      </nav>

      <header className='relative z-20'>
      <h1 className="h_title1">Elian Richard</h1>
        <h2 className="h_title2">
          <TextGenerateEffect words={'Spécialiste analyse de données et reporting'} />
        </h2>
      </header>

      <main className='relative z-20'>
        <div className="grey_bar"></div>
        <div className="myself_part">
          {/* ✅ Corrige le chemin de l’image */}
          <img src={profilePhoto}className="photo-profil" alt="Profil" />
          
          <div className="myself_part_item">
            <h1 className="h_title2">Qui suis-je ?</h1>
            <p className="bio">Je suis un analyste de données ainsi qu'un spécialiste en reporting. J'ai dévelloper mes compétences en data lors
                    de mon cursus scolaire à l'IUT de Vannes, qui m'a permis de maîtriser de nombreux outils techniques, mais aussi
                    a dévelloper une rigueur et un soin du travail qui me tiens à coeur.
                    
                    <br />
                    <br />
                    Passionné par mon métiers, j'apprécie dévelloper des tableau de bord de qualité avec un visuel atrayant.
                    Je dévellope en effet certains tableau de bords en autonomie pour affiner mes compétences dans la maîtrise
                    du logiciel power BI. Vous pouvez évidemment retrouver les visuels dans mes projets profesionnel.
                    <br />
                    <br />
                    Dans la vie, j'ai comme loisir les jeux de société et de figurines. Je suis nottament adhérent à la Ligue des
                    Vannetais Ludique, association de jeux de société sur la ville de Vannes. Je fait aussi de l'origami ainsi que
                    de la peinture de figurine.
                    </p>

          </div>
        </div>

        <div className="grey_bar"></div>
        <h1 className="comp_title">Mes projets professionnels</h1>

        <div className="carousel-part">
          <div className="carousel-item a"><div className="img">Création d'enquêtes</div></div>
          <div className="carousel-item b"><div className="img">Base de données MS Access</div></div>
          <div className="carousel-item c"><div className="img">Tableau de bord bancaire</div></div>
          <div className="carousel-item d"><div className="img">Création d'ETL avec Python</div></div>
          <div className="carousel-item e"><div className="img">Base Oracle et ETL Talend</div></div>
          <div className="carousel-item f"><div className="img">Tableau de bord sur les législatives</div></div>
        </div>

        <div className="grey_bar"></div>
        <div className="comp_part">
          <h1 className="comp_title">Mes compétences techniques</h1>
          <nav className="comp_nav">
            <span className="comp_span" >
              <i className="fa-brands fa-js"></i>
              <p className="comp_txt">Javascript<br />HTML et CSS</p>
            </span>
            <span className="comp_span">
              <i className="fa-brands fa-php"></i>
              <p className="comp_txt">PHP</p>
            </span>
            <span className="comp_span">
              <i className="fa-brands fa-python"></i>
              <p className="comp_txt">Python <br /> Librairie data science</p>
            </span>
            <span className="comp_span">
              <i className="fa-solid fa-database"></i>
              <p className="comp_txt">Base de données relationnelles <br /> ETL & SQL</p>
            </span> 
            <span className="comp_span">
              <i className="fa-solid fa-chart-line"></i>
              <p className="comp_txt">Statistiques<br /> Prévisions et modèles</p>
            </span>
            <span className="comp_span">
              <i className="fa-solid fa-gauge"></i>
              <p className="comp_txt">Tableau de bord<br />Power BI & R Shiny</p>
            </span>
          </nav>
        </div>

        <div className="grey_bar"></div>
        <h1 className="comp_title">Me contacter par mail</h1>
        <div className="contact_part">
          <form method="post" action="http://localhost:8000/PHP/mail.php">

            <div className='form-part'>
            <label for="name" className="form-space">Nom:</label>
            <input type="text" name="Subject" id="name" required placeholder="Nom" />
            </div>
            
            <div className='form-part'>
            <label for="name" className="form-space">Objet Du Message:</label>
            <input type="text" name="Sujet" id="subject" required placeholder="Sujet" />
            </div>

            <div className='form-part'>
            <label for="email" className="form-space">Email:</label>
            <input type="email" name="email" id="email" required placeholder="email@exemple.com"/>
            </div>
            <div className='form-part'>
            <label for="message" className="form-space">Message:</label>
            </div>
            <div className='form-part'>
            <textarea name="message" id="message" required className="form-space"></textarea>
            </div>
            <div className='form-part'>
            <input type="submit" value="Envoyer Mon Message" className="form-space"/>
            </div>

          </form>
        </div>
      </main>
      <BackgroundBeams />
    </div>
  )
}

export default App
