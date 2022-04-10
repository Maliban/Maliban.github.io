import React from "react";
import Paragraph from './Paragraph';
import Href from './Href';
import Logo from './Logo';
class Headre extends React.component {
    render(){
        return <header className='App-header'>
         <Logo/>
       <Paragraph 
        text="Ćwiczymy Reacta na zajęciach"
        subTitle="Rozbudowujemy nasz komponent Paragraph"/>
        <Paragraph
        text="Maszkota" />
        <Paragraph
        text="Kotmasz" />
        
        <Href linkText = "Learn React >:3"/>
        
      </header>
   
          
    }
}
export default Header;
