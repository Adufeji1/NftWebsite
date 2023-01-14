import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Bodypart from './Components/Bodypart/Bodypart';
import Nftstory from './Components/NftStory/Nftstory';
import Topcollection from './Components/Topcollection/Topclollection';
import Liveacution from './Components/Liveacution/Liveacution';
import Ourcreater from './Components/Ourcreater/Ourcreater';
import Choice from './Components/Choice/Choice';
import Nftmarket from './Components/Nftmarket/Nftmarket';
import Marketplace from './Components/Marketplace/Marketplace';




function App() {
  return (
    <>
    <div className="App">
      <Navbar />
      <Bodypart />
      <Nftstory />
      <Topcollection />
      <Liveacution />
      <Ourcreater />
      <Choice />
      <Nftmarket />
      <Marketplace />
    </div>
  </>
  );
}

export default App;
