import "./Home.css";
import Header from "../../components/Header/Header.jsx";
import FeaturedNews from "../../components/FeaturedNews/FeaturedNews.jsx";



export default function Home(){
    return (
     <div className="home" >
      <Header idx={0} img_name="earth_img" />
        <FeaturedNews display="news" h1Txt="Featured News" btnTxt="Recently Published"/>
        <Header idx={1} img_name="jupiter_img"/>
        <FeaturedNews display="planetExp" h1Txt="Solar System Exploration" btnTxt="Discover More"/>
         <Header idx={2} img_name="cosmos_img"/>
       
     </div>
    )
  
}