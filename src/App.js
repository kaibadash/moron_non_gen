import "./App.css";
import _ from "lodash";
import * as levenshtein from "fast-levenshtein";

const ANSWER = "もろんのん";

function generateLikeMoronnon() {
  const start = "も";
  const end = "ん";
  const chars = ["ろ", "ん", "ち", "の"];
  
  const mid = _.times(_.random(2, 3), i => _.sample(chars));
  console.log(mid);
  return `${start}${mid.join("")}${end}`;
}

function App() {
  const result = generateLikeMoronnon();

  return (
    <div className="App">
      <h1>もろんのんっぽい文字列ジェネレータ</h1>
      <div id="result">{result}</div>
      <p>レーベンシュタイン距離(小さいほど正解に近い): {levenshtein.get(ANSWER, result)}</p>
      <footer>
        <a href="https://twitter.com/hashtag/%E8%AA%B0%E3%81%8C%E3%82%82%E3%81%A1%E3%81%AE%E3%82%8D%E3%82%93%E3%82%84?src=hashtag_click">#誰がもちのろんや</a><br />
        <a href="https://github.com/kaibadash/moron_non_gen">ソース</a>
      </footer>
    </div>
  );
}

export default App;
