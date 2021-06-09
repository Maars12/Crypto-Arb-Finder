import './App.css';

function App() {
  return (
    <div className="App">
      <div class="row">
        <div class="col bg-success text-center btn-lg pt-3 pb-3 italic bold size1">
          The Ultimate Crypto Arb Finder
        </div>
      </div>
      <div class="row">
        <div class="col-sm-3 col"></div>
        <div class="col-sm-6 col">
          <div class="input-group pt-5">
            <input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1" />
            <div class="input-group-append">
              <button class="btn btn-dark bold border-5 border-success text-success" type="button">FIND ME MONEY!!!</button>
            </div>
          </div>
          <ul class="list-group pt-5">
            <li class="list-group-item list-group-item-action list-group-item-success h2 ">Morbi leo risus</li>
            <li class="list-group-item list-group-item-action list-group-item-success h2 ">Porta ac consectetur ac</li>
            <li class="list-group-item list-group-item-action list-group-item-success h2 ">Vestibulum at eros</li>
          </ul>
        </div>
        <div class="col-sm-3 col"></div>
      </div>
    </div>
  );
}

export default App;
