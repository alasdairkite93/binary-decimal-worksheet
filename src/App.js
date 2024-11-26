import logo from './logo.svg';
import './App.css';
import BinaryDecimal from "./worksheet/binary-decimal";
function App() {
  return (
    <div className="App">
      <div className="main">
    <h1>Binary - Decimal / Decimal - Binary Questions</h1>
        <p>Complete the binary - denary questions and the denary - binary questions</p>
        <p>Only 3 guesses per question and then that question gets locked.</p>
        <table>
          <tr>
            <th>128</th>
            <th>64</th>
            <th>32</th>
            <th>16</th>
            <th>8</th>
            <th>4</th>
            <th>2</th>
            <th>1</th>
          </tr>
          <tr>
            <td>
              <select id="tableinp">
                <option value="1">1</option>
                <option value="1">0</option>
              </select>
            </td>
            <td>
              <select id="tableinp">
                <option value="1">1</option>
                <option value="1">0</option>
              </select>
            </td>
            <td>
              <select id="tableinp">
                <option value="1">1</option>
                <option value="1">0</option>
              </select>
            </td>
            <td>
              <select id="tableinp">
                <option value="1">1</option>
                <option value="1">0</option>
              </select>
            </td>
            <td>
              <select id="tableinp">
                <option value="1">1</option>
                <option value="1">0</option>
              </select>
            </td>
            <td>
              <select id="tableinp">
                <option value="1">1</option>
                <option value="1">0</option>
              </select>
            </td>
            <td>
              <select id="tableinp">
                <option value="1">1</option>
                <option value="1">0</option>
              </select>
            </td>
            <td>
              <select id="tableinp">
                <option value="1">1</option>
                <option value="1">0</option>
              </select>
            </td>
          </tr>
        </table>

            <BinaryDecimal />

      <p>&copy; Mr Kite's teaching resources</p>
      </div>
    </div>
  );
}

export default App;
