import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    advice: "",
  };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { advice } = this.state;
    return (
      <div>
        <div className=" h-[100vh] flex items-center justify-center text-center bg-gradient-to-r from-green-400 to-blue-500">
          <div className=" w-full bg-white max-w-[540px] mx-auto my-20 p-10 rounded-2xl shadow-inner shadow-black  ">
            <h1 className="italic text-2xl text-w font-bold">{advice}</h1>
            <button
              onClick={this.fetchAdvice}
              className="bg rounded-full border border-black px-6 py-2 mt-10 font-bold bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  "
            >
              GET ADVICE
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
