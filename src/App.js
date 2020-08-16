import React from 'react';
import QuoteBox from './components/quote-box/quote-box.component';
import colors from './components/colors/colors';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: {
        text: "",
        author: ""
      },
      colors: {
        primaryColor: "",
        secondaryColor: ""
      }
    }
  }

  getRandomQuoteHanlder = async () =>{
    try{
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();
      const newQuote = data[Math.floor(data.length*Math.random())];
      this.setState({
        data: newQuote
      });
    }catch(error){
      console.log(error);
    }

    this.getRandomColorHanlder();
  }

  getRandomColorHanlder = () => {
    const randomColors = colors[Math.floor(colors.length*Math.random())];
    this.setState({
      colors: randomColors
    });
  }

  componentDidMount(){
    this.getRandomQuoteHanlder();
    this.getRandomColorHanlder();
  }

  render(){
    const { text, author } = this.state.data;
    const { primaryColor } = this.state.colors;
    const styles = {
      backgroundColor: primaryColor
    };
    return (
      <div className="App" style={styles}>
        <QuoteBox colors={this.state.colors} text={text} author={author} newQuote={this.getRandomQuoteHanlder}/>
        <footer>
          <p>Fernando Vieira</p>
        </footer>
      </div>
    );
  }
}

export default App;
