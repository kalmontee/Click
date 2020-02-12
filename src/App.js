import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import CharactersCard from './components/Container/CharactersCard';
import Footer from './components/Footer/Footer';
import characters from './characters.json';
import './App.css';


class App extends Component {
  state = {
    characters,
    score: 0,
    topScore: 12,
    message: "Click an image to begin!",
    charactersClicked: []
  }


  imgClickHandler = id => {

    let charactersClicked = this.state.charactersClicked;

    if (charactersClicked.includes(id)) {
      this.setState({
        charactersClicked: [],
        score: 0,
        message: "You lost! Click again to play!"
      });
      return;

    } else {

      charactersClicked.push(id);

      if (charactersClicked.length === 12) {
        this.setState({
          score: 12,
          message: "Winner! Click to play again!",
          charactersClicked: []
        });
        return;
      }

      this.setState({
        score: charactersClicked.length,
        message: "You guessed correct!",
      });

      for (let i = characters.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [characters[i], characters[j]] = [characters[j], characters[i]];
      }
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore} />

        <Header />
        <main className="container">
          {this.state.characters.map(character => (
            <CharactersCard
              imgClickHandler={this.imgClickHandler}
              id={character.id}
              key={character.id}
              image={character.image}
            />
          ))}

        </main>
        <Footer />
      </div>
    )
  }
}

export default App
